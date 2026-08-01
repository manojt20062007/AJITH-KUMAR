import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <div data-cid={cids[0]} className="block text-center">
      <span data-cid={cids[1]} className="inline-block text-[5.5rem] font-black leading-22 tracking-[-2.64px] max-lg:text-[3.5rem] max-lg:leading-14 max-lg:tracking-[-1.68px]">
        {d.text}
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
