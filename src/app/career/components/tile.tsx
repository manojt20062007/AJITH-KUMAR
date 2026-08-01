import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <span data-cid={cids[0]} className="flex items-center gap-[0.4rem]">
      <i data-cid={cids[1]} className={cn("block text-primary [font-family:'Font_Awesome_6_Free'] font-black leading-[0.875rem] before:text-primary before:text-sm before:font-black before:leading-[0.875rem]", styles.className)} />
      {d.text}
    </span>
  );
}
