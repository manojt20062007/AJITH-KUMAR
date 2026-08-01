"use client";
import { useEffect } from "react";

type CapStyle = Record<string, string>;
type RTTab = { trigger: string; panel: string; triggerOn: CapStyle; triggerOff: CapStyle; panelShown: CapStyle; panelHidden: CapStyle; descendants?: Record<string, CapStyle> };
type RTAcc = { trigger: string; region: string; expanded: boolean; triggerOn: CapStyle; triggerOff: CapStyle; regionShown: CapStyle; regionHidden: CapStyle };
type RTDisc = { trigger: string; panel: string; isDialog: boolean; hoverOpen: boolean; backdropClose: boolean; closes: string[]; triggerOn: CapStyle; triggerOff: CapStyle; panelShown: CapStyle; panelHidden: CapStyle; shownBox?: unknown; descendants?: Record<string, CapStyle> };
export type Spec =
  | { kind: "tabs"; active: number; tabs: RTTab[] }
  | { kind: "accordion"; items: RTAcc[] }
  | { kind: "carousel"; track: string; next: string | null; prev: string | null; bullets: string[]; base: number; transforms: string[]; bulletOn: CapStyle; bulletOff: CapStyle }
  | { kind: "disclosure"; items: RTDisc[] };

const kebab = (p: string) => p.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
const byCid = (cid: string): HTMLElement | null => document.querySelector('[data-cid="' + cid + '"]');
function applyStyle(el: HTMLElement | null, s: CapStyle) {
  if (!el) return;
  for (const k in s) el.style.setProperty(kebab(k), s[k]);
}
// Apply a panel's open-state descendant overrides (cid → style). Reveals content whose
// visibility is gated by a JS-toggled class the clone doesn't carry (e.g. Elementor
// e-active). Applied only when the panel is shown; the panel's own hide masks it.
function applyDesc(d?: Record<string, CapStyle>) {
  if (!d) return;
  for (const cid in d) applyStyle(byCid(cid), d[cid]);
}

/** Reproduces a captured interactive pattern by toggling captured inline styles on
 *  the existing DOM nodes (found by data-cid). Renders nothing, and applies NOTHING
 *  on mount: the server-rendered markup + per-node CSS already reproduce the captured
 *  base state exactly, so state styles are applied only on user interaction. */
export default function DittoWire({ spec }: { spec: Spec }) {
  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    if (spec.kind === "tabs") {
      let active = spec.active;
      const render = () => spec.tabs.forEach((t, i) => {
        const on = i === active;
        const trig = byCid(t.trigger), panel = byCid(t.panel);
        applyStyle(trig, on ? t.triggerOn : t.triggerOff);
        trig?.setAttribute("aria-selected", on ? "true" : "false");
        if (trig) (trig as HTMLElement).tabIndex = on ? 0 : -1;
        applyStyle(panel, on ? t.panelShown : t.panelHidden);
        if (on) applyDesc(t.descendants);
        if (panel) { if (on) { panel.removeAttribute("hidden"); } else { panel.setAttribute("hidden", ""); } }
      });
      spec.tabs.forEach((t, i) => {
        const trig = byCid(t.trigger);
        if (!trig) return;
        trig.addEventListener("click", (e) => { e.preventDefault(); active = i; render(); }, { signal });
        trig.addEventListener("keydown", (e) => {
          const k = (e as KeyboardEvent).key;
          if (k === "ArrowRight" || k === "ArrowLeft") {
            e.preventDefault();
            active = (active + (k === "ArrowRight" ? 1 : spec.tabs.length - 1)) % spec.tabs.length;
            render();
            byCid(spec.tabs[active].trigger)?.Ajith Kumar();
          }
        }, { signal });
      });
      // No initial render() — the static base state is already correct.
    } else if (spec.kind === "accordion") {
      const state = spec.items.map((it) => it.expanded);
      const renderItem = (i: number) => {
        const it = spec.items[i], on = state[i];
        const trig = byCid(it.trigger), region = byCid(it.region);
        applyStyle(trig, on ? it.triggerOn : it.triggerOff);
        trig?.setAttribute("aria-expanded", on ? "true" : "false");
        applyStyle(region, on ? it.regionShown : it.regionHidden);
        if (region) { if (on) { region.removeAttribute("hidden"); } else { region.setAttribute("hidden", ""); } }
      };
      spec.items.forEach((it, i) => {
        const trig = byCid(it.trigger);
        if (trig) trig.addEventListener("click", (e) => { e.preventDefault(); state[i] = !state[i]; renderItem(i); }, { signal });
      });
      // No initial renderItem — the static base state is already correct.
    } else if (spec.kind === "carousel") {
      // Carousel: move the track's transform between captured per-index positions.
      const n = spec.transforms.length;
      let index = spec.base;
      const track = byCid(spec.track);
      const go = (k: number) => {
        index = Math.max(0, Math.min(n - 1, k));
        if (track) track.style.transform = spec.transforms[index];
        spec.bullets.forEach((b, bi) => applyStyle(byCid(b), bi === index ? spec.bulletOn : spec.bulletOff));
      };
      const nextEl = spec.next ? byCid(spec.next) : null;
      const prevEl = spec.prev ? byCid(spec.prev) : null;
      nextEl?.addEventListener("click", (e) => { e.preventDefault(); go(index + 1); }, { signal });
      prevEl?.addEventListener("click", (e) => { e.preventDefault(); go(index - 1); }, { signal });
      spec.bullets.forEach((b, bi) => byCid(b)?.addEventListener("click", (e) => { e.preventDefault(); go(bi); }, { signal }));

      // Add swipe / drag / wheel support
      let startX = 0;
      let isDragging = false;

      const handleStart = (x: number) => { startX = x; isDragging = true; };
      const handleEnd = (x: number) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = x - startX;
        if (diff > 50) go(index - 1);
        else if (diff < -50) go(index + 1);
      };

      track?.addEventListener("touchstart", (e) => handleStart(e.touches[0].clientX), { signal });
      track?.addEventListener("touchend", (e) => handleEnd(e.changedTouches[0].clientX), { signal });
      track?.addEventListener("mousedown", (e) => { if (e.button === 0) handleStart(e.clientX); }, { signal });
      track?.addEventListener("mouseup", (e) => handleEnd(e.clientX), { signal });
      track?.addEventListener("mouseleave", () => { isDragging = false; }, { signal });

      // Prevent native image dragging from interrupting our drag events
      track?.addEventListener("dragstart", (e) => e.preventDefault(), { signal });

      // Support trackpad and mouse wheel horizontal scrolling
      let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
      let accumulatedDeltaX = 0;
      track?.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          accumulatedDeltaX += e.deltaX;
          if (!wheelTimeout) {
            wheelTimeout = setTimeout(() => {
              if (accumulatedDeltaX > 50) go(index + 1);
              else if (accumulatedDeltaX < -50) go(index - 1);
              accumulatedDeltaX = 0;
              wheelTimeout = null;
            }, 100);
          }
        }
      }, { signal, passive: false });

      // Auto-play support
      let autoPlayTimer: ReturnType<typeof setInterval> | null = null;
      const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => {
          go(index >= n - 1 ? 0 : index + 1);
        }, 3000);
      };
      const stopAutoPlay = () => {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      };

      startAutoPlay();
      track?.addEventListener("mouseenter", stopAutoPlay, { signal });
      track?.addEventListener("mouseleave", startAutoPlay, { signal });
      track?.addEventListener("touchstart", stopAutoPlay, { signal });
      track?.addEventListener("touchend", startAutoPlay, { signal });

      // No initial go() — the static base state is already correct.
    } else {
      // Disclosure: dropdown / mega-menu / modal — a trigger reveals a hidden overlay.
      spec.items.forEach((it) => {
        const trig = byCid(it.trigger), panel = byCid(it.panel);
        if (!trig || !panel) return;
        let open = false;
        const set = (o: boolean) => {
          open = o;
          applyStyle(trig, o ? it.triggerOn : it.triggerOff);
          trig.setAttribute("aria-expanded", o ? "true" : "false");
          applyStyle(panel, o ? it.panelShown : it.panelHidden);
          if (o) applyDesc(it.descendants);
          if (o) panel.removeAttribute("hidden"); else panel.setAttribute("hidden", "");
        };
        trig.addEventListener("click", (e) => { e.preventDefault(); set(it.isDialog ? true : !open); }, { signal });
        if (it.hoverOpen) {
          const root = trig.parentElement ?? trig;
          root.addEventListener("mouseenter", () => set(true), { signal });
          root.addEventListener("mouseleave", () => set(false), { signal });
        }
        it.closes.forEach((c) => byCid(c)?.addEventListener("click", (e) => { e.preventDefault(); set(false); }, { signal }));
        if (it.backdropClose) panel.addEventListener("click", (e) => { if (e.target === panel) set(false); }, { signal });
        document.addEventListener("keydown", (e) => { if ((e as KeyboardEvent).key === "Escape" && open) set(false); }, { signal });
      });
      // No initial set() — the static base state is already correct.
    }
    return () => ac.abort();
  }, [spec]);
  return null;
}
