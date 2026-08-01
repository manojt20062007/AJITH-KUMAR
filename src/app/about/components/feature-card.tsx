import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("border border-solid border-border block relative py-10 px-8 rounded-md overflow-hidden bg-color-002 before:content-[''] before:block before:absolute before:top-0 before:inset-x-0 before:h-0.5 before:bg-primary before:transform-[matrix(0,0,0,1,0,0)] before:origin-[0px_1px]", styles.className)}>
      <div data-cid={cids[1]} className="inline-block mb-5 text-primary text-[2rem] leading-[2.4375rem] [text-shadow:var(--clr-24)_0px_0px_15px]">
        <i data-cid={cids[2]} className={cn("inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-8 before:text-primary before:text-[2rem] before:font-black before:leading-8", styles.className2)} />
      </div>
      {" "}
      <h3 data-cid={cids[3]} className="block mb-[0.6rem] [font-family:Outfit,_sans-serif] text-lg font-extrabold leading-[1.4375rem] tracking-[-0.37px] uppercase" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p data-cid={cids[4]} className="block text-color-001 text-sm leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
