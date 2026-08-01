import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <div data-cid={cids[0]} className="border border-solid border-border block relative rounded-md overflow-hidden aspect-[3/4] bg-color-012 cursor-pointer group">
      <div data-cid={cids[1]} className="h-full block absolute top-0 inset-x-0">
        <img data-cid={cids[2]} className={cn("w-[24.1875rem] h-[32.3125rem] block max-w-full overflow-clip object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[filter:grayscale(0.9)_contrast(1.1)_brightness(0.85)] group-hover:transform-[matrix(1.05,0,0,1.05,0,0)] max-md:w-[19.3125rem] max-md:h-[25.8125rem] max-md:origin-[154.5px_206.328px] md:max-lg:w-84.5 md:max-lg:h-[28.1875rem] md:max-lg:origin-[169px_225.664px] 2xl:w-[26.6875rem] 2xl:h-142.5", styles.className)} data-component="image" alt={d.alt} src={d.imgSrc} />
        {" "}
        <div data-cid={cids[3]} className="h-full block absolute top-0 inset-x-0 z-1 opacity-80" style={{ backgroundImage: "linear-gradient(to top, var(--clr-11) 0%, var(--clr-12) 50%, var(--clr-4) 100%)" }} />
        {" "}
      </div>
      {" "}
      <div data-cid={cids[4]} className="h-[9.0625rem] block absolute bottom-0 inset-x-0 z-2 p-8 max-lg:h-[168.1px]">
        <h3 data-cid={cids[5]} className="block mb-2 text-[1.375rem] font-bold leading-[1.6875rem] tracking-[0.45px] uppercase" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p data-cid={cids[6]} className="block opacity-0 max-w-[90%] text-color-014 text-sm leading-[1.4375rem] transform-[matrix(1,0,0,1,0,15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:transform-[matrix(1,0,0,1,0,0)]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
