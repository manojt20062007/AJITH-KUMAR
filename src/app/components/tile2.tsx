"use client";

import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
import { useEffect, useState, useRef } from "react";

export type Tile2Data = {
  text: string;
  text2: string;
};

/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  const [count, setCount] = useState(0);
  const target = parseInt(d.text.replace(/[^0-9]/g, ""), 10) || 0;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} data-cid={cids[0]} className="block text-center">
      <span data-cid={cids[1]} className="inline-block text-[5.5rem] font-black leading-22 tracking-[-2.64px] max-lg:text-[3.5rem] max-lg:leading-14 max-lg:tracking-[-1.68px]">
        {count}
      </span>
      <span data-cid={cids[2]} className="inline text-primary text-[5.5rem] font-black leading-22 max-lg:text-[3.5rem] max-lg:leading-14">
        +
      </span>
      {" "}
      <span data-cid={cids[3]} className={cn("block mt-3 text-color-005 [font-family:Outfit,_sans-serif] text-xs font-bold leading-[0.9375rem] tracking-[3px]", styles.className)}>
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
