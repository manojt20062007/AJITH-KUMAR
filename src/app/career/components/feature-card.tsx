import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("border border-solid border-border block relative py-10 px-8 rounded-sm overflow-hidden text-center bg-color-002 before:content-[''] before:block before:absolute before:top-0 before:inset-x-0 before:h-0.5 before:bg-primary before:transform-[matrix(0,0,0,1,0,0)] before:origin-[0px_1px] max-lg:before:bottom-[257.1px]", styles.className)}>
      <div data-cid={cids[1]} className="inline-block mb-6 text-primary text-[2.5rem] leading-[3.0625rem] [text-shadow:var(--clr-1)_0px_0px_15px]">
        <i data-cid={cids[2]} className={cn("inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-10 before:text-primary before:text-[2.5rem] before:font-black before:leading-10 before:text-center", styles.className2)} />
      </div>
      {" "}
      <h3 data-cid={cids[3]} className="block mb-3 [font-family:Outfit,_sans-serif] text-xl font-extrabold leading-[1.5625rem] tracking-[-0.4px] uppercase" data-component="heading">
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
