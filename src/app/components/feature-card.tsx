import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className="border-t border-solid border-t-border border-r border-r-border border-b border-b-border border-l-2 border-l-clr-4 block py-10 px-8 rounded-md bg-color-007">
      <div data-cid={cids[1]} className="inline-block mb-4 text-primary text-[1.8125rem] leading-[2.1875rem]">
        <i data-cid={cids[2]} className={cn("inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-[1.8125rem] before:text-primary before:text-[1.8125rem] before:font-black before:leading-[1.8125rem]", styles.className)} />
      </div>
      {" "}
      <h3 data-cid={cids[3]} className="block mb-2 [font-family:Outfit,_sans-serif] text-lg font-extrabold leading-[1.4375rem] tracking-[-0.35px] uppercase" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p data-cid={cids[4]} className="block text-color-001 text-sm leading-[1.3125rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
