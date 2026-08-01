import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  id: string;
  title: string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
  description: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  text11: string;
  text12: string;
};
/** A feature card. */
export default function FeatureCard2({ d, cids, styles }: { d: FeatureCard2Data; cids: string[]; styles: FeatureCard2Styles }) {
  return (
    <div data-cid={cids[0]} className="border border-solid border-border block rounded-sm overflow-hidden bg-color-002" id={d.id}>
      <div data-cid={cids[1]} className="flex p-8 justify-between items-center cursor-pointer">
        <div data-cid={cids[2]} className="block">
          <h3 data-cid={cids[3]} className="block mb-2 [font-family:Outfit,_sans-serif] text-2xl font-extrabold leading-7.5 tracking-[-0.48px] uppercase" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <div data-cid={cids[4]} className="flex gap-6 text-color-001 text-sm leading-4">
            <span data-cid={cids[5]} className="flex items-center gap-[0.4rem]">
              <i data-cid={cids[6]} className="block text-primary [font-family:'Font_Awesome_6_Free'] font-black leading-[0.875rem] before:content-[''] before:text-primary before:text-sm before:font-black before:leading-[0.875rem]" />
              {d.text}
            </span>
            {" "}
            <span data-cid={cids[7]} className="flex items-center gap-[0.4rem]">
              <i data-cid={cids[8]} className="block text-primary [font-family:'Font_Awesome_6_Free'] font-black leading-[0.875rem] before:content-[''] before:text-primary before:text-sm before:font-black before:leading-[0.875rem]" />
              {d.text2}
            </span>
            {" "}
            <span data-cid={cids[9]} className="flex items-center gap-[0.4rem]">
              <i data-cid={cids[10]} className="block text-primary [font-family:'Font_Awesome_6_Free'] font-black leading-[0.875rem] before:content-[''] before:text-primary before:text-sm before:font-black before:leading-[0.875rem]" />
              {d.text3}
            </span>
            {" "}
            <span data-cid={cids[11]} className="flex items-center gap-[0.4rem]">
              <i data-cid={cids[12]} className="block text-primary [font-family:'Font_Awesome_6_Free'] font-black leading-[0.875rem] before:content-[''] before:text-primary before:text-sm before:font-black before:leading-[0.875rem]" />
              {d.text4}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <button data-cid={cids[13]} className="w-10 h-10 border border-solid border-surface-2 flex rounded-[50%] justify-center items-center [font-family:Arial] text-[0.8125rem] leading-[0.9375rem] text-center cursor-default max-md:w-[15.3px]" data-component="button" aria-label="Toggle Details">
          <i data-cid={cids[14]} className="block [font-family:'Font_Awesome_6_Free'] font-black leading-[0.8125rem] before:content-[''] before:text-foreground before:text-[0.8125rem] before:font-black before:leading-[0.8125rem] before:text-center" />
          {" "}
        </button>
        {" "}
      </div>
      {" "}
      <div data-cid={cids[15]} className="border-t border-solid border-t-clr-4 block max-h-0 overflow-hidden">
        <div data-cid={cids[16]} className="block p-8">
          <p data-cid={cids[17]} className="block mb-6 text-color-001 text-[0.9375rem] leading-[1.625rem]">
            {d.description}
          </p>
          {" "}
          <h4 data-cid={cids[18]} className="block mb-3 text-primary [font-family:Outfit,_sans-serif] text-sm font-extrabold leading-4.5 tracking-[2.04px] uppercase" data-component="heading">
            Key Responsibilities
          </h4>
          {" "}
          <ul data-cid={cids[19]} className="block mb-6 pl-2 [list-style-type:none] list-outside">
            <li data-cid={cids[20]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className)}>
              {d.text5}
            </li>
            <li data-cid={cids[21]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className2)}>
              {d.text6}
            </li>
            <li data-cid={cids[22]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className3)}>
              {d.text7}
            </li>
            <li data-cid={cids[23]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className4)}>
              {d.text8}
            </li>
          </ul>
          {" "}
          <h4 data-cid={cids[24]} className="block mb-3 text-primary [font-family:Outfit,_sans-serif] text-sm font-extrabold leading-4.5 tracking-[2.04px] uppercase" data-component="heading">
            {"Qualifications & Requirements"}
          </h4>
          {" "}
          <ul data-cid={cids[25]} className="block mb-6 pl-2 [list-style-type:none] list-outside">
            <li data-cid={cids[26]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className5)}>
              {d.text9}
            </li>
            <li data-cid={cids[27]} className="list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] max-md:before:bottom-[1.4375rem] md:max-lg:before:right-[39.475rem]">
              {d.text10}
            </li>
            <li data-cid={cids[28]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className6)}>
              {d.text11}
            </li>
            <li data-cid={cids[29]} className={cn("list-item relative mb-2 pl-6 text-color-001 text-sm leading-[1.4375rem] before:content-['→'] before:block before:absolute before:inset-y-0 before:right-[70.475rem] before:left-0 before:w-[0.9rem] before:h-[1.4375rem] before:text-primary before:text-sm before:leading-[1.4375rem] max-md:before:right-[14.9125rem] md:max-lg:before:right-[39.475rem]", styles.className7)}>
              {d.text12}
            </li>
          </ul>
          {" "}
          <div data-cid={cids[30]} className="block mt-8">
            <button data-cid={cids[31]} className="border border-solid border-clr-4 inline-flex relative z-1 py-3 px-8 rounded-[50px] justify-center items-center overflow-hidden text-background text-[0.8125rem] font-bold leading-[0.9375rem] tracking-[1.28px] text-center uppercase bg-primary shadow-[var(--clr-10)_0px_0px_20px_0px] cursor-pointer" data-component="button">
              {"\n              Apply For This Position\n            "}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
