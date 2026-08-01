import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  ariaLabel: string;
  alt: string;
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  text: string;
  text2: string;
  text3: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, cids, styles }: { d: MediaCard2Data; cids: string[]; styles: MediaCard2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("w-full block relative max-w-4xl mx-auto rounded-lg shrink-0 aspect-video bg-cover shadow-2xl", styles.className)} aria-label={d.ariaLabel} role="group">
      <div data-cid={cids[1]} className="group w-full h-full border border-solid border-surface hover:border-primary transition-colors duration-300 block relative rounded-lg overflow-hidden bg-color-002 shadow-xl cursor-pointer">
        <div data-cid={cids[2]} className="w-full h-full block relative rounded-lg overflow-hidden">
          <img data-cid={cids[3]} className="w-full h-full block relative z-1 max-w-full overflow-clip object-cover transition-transform duration-500 group-hover:scale-110" alt={d.alt} id={d.id} src={d.imgSrc} />
          {" "}
          <video data-cid={cids[4]} className="w-full h-full block absolute top-0 left-0 z-1 opacity-0 max-w-full overflow-clip object-cover pointer-events-none" muted playsInline preload="none">
            {" "}
          </video>
          {" "}
          <div data-cid={cids[5]} className="w-full h-full flex absolute top-0 left-0 z-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex-col justify-end" style={{ backgroundImage: "linear-gradient(to top, var(--clr-14) 0%, var(--clr-15) 40%, var(--clr-4) 100%)" }}>
            <span data-cid={cids[6]} className={cn("h-[0.9375rem] block mb-1 text-primary [font-family:Outfit,_sans-serif] text-xs font-extrabold leading-[0.9375rem] tracking-[1.8px] uppercase", styles.className2)}>
              Posters
            </span>
            {" "}
            <h3 data-cid={cids[7]} className={cn("h-6 block mb-2 [font-family:Outfit,_sans-serif] text-xl font-extrabold leading-6 tracking-[-0.4px] uppercase", styles.className3)}>
              {d.title}
            </h3>
            {" "}
            <p data-cid={cids[8]} className={cn("block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-4 text-color-014 text-[0.8125rem] leading-[1.125rem]", styles.className4)}>
              {d.description}
            </p>
            {" "}
            <div data-cid={cids[9]} className="h-[1.3375rem] flex opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 flex-wrap gap-[0.4rem]">
              <span data-cid={cids[10]} className={cn("border border-solid border-accent block py-[0.2rem] px-2 rounded-xs text-[0.625rem] leading-[0.8125rem] bg-color-003", styles.className5)}>
                {d.text}
              </span>
              <span data-cid={cids[11]} className={cn("border border-solid border-accent block py-[0.2rem] px-2 rounded-xs text-[0.625rem] leading-[0.8125rem] bg-color-003", styles.className6)}>
                {d.text2}
              </span>
              <span data-cid={cids[12]} className={cn("border border-solid border-accent block py-[0.2rem] px-2 rounded-xs text-[0.625rem] leading-[0.8125rem] bg-color-003", styles.className7)}>
                {d.text3}
              </span>
              {" "}
            </div>
            {" "}
            <div data-cid={cids[13]} className="h-4 flex opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 mt-4 items-center gap-2 text-primary [font-family:Outfit,_sans-serif] text-[0.8125rem] font-semibold leading-4 tracking-[1.28px] uppercase">
              <span data-cid={cids[14]} className="h-4 block">
                View Project
              </span>
              {" "}
              <i data-cid={cids[15]} className="h-[0.8rem] block [font-family:'Font_Awesome_6_Free'] font-black leading-[0.8125rem] before:content-[''] before:text-primary before:text-[0.8125rem] before:font-black before:leading-[0.8125rem] before:tracking-[1.28px]" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div data-cid={cids[16]} className="w-200 h-112.5 block absolute top-0 left-0 z-10 opacity-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to left, var(--clr-13), var(--clr-4))" }} />
      <div data-cid={cids[17]} className="w-200 h-112.5 block absolute top-0 left-0 z-10 opacity-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, var(--clr-13), var(--clr-4))" }} />
    </div>
  );
}
