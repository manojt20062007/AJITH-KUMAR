import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
  alt2: string;
  imgSrc2: string;
  alt3: string;
  imgSrc3: string;
  alt4: string;
  imgSrc4: string;
  alt5: string;
  imgSrc5: string;
  alt6: string;
  imgSrc6: string;
  alt7: string;
  imgSrc7: string;
  alt8: string;
  imgSrc8: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("w-99.5 h-300 flex flex-col gap-6 [animation-duration:40s] [animation-timing-function:linear] [animation-iteration-count:infinite] max-md:w-[103.9px] max-md:h-304.5 md:max-lg:w-[14.475rem] md:max-lg:h-384 2xl:w-151.5 2xl:h-405", styles.className)}>
      <img data-cid={cids[1]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt} src={d.imgSrc} />
      {" "}
      <img data-cid={cids[2]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt2} src={d.imgSrc2} />
      {" "}
      <img data-cid={cids[3]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt3} src={d.imgSrc3} />
      {" "}
      <img data-cid={cids[4]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt4} src={d.imgSrc4} />
      {"  "}
      <img data-cid={cids[5]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt5} src={d.imgSrc5} />
      {" "}
      <img data-cid={cids[6]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt6} src={d.imgSrc6} />
      {" "}
      <img data-cid={cids[7]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt7} src={d.imgSrc7} />
      {" "}
      <img data-cid={cids[8]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component="image" alt={d.alt8} src={d.imgSrc8} />
      {" "}
    </div>
  );
}
