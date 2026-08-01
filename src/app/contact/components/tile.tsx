import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  htmlFor: string;
  text: string;
  id: string;
  placeholder: string;
  type: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className="flex flex-col gap-[0.8rem]">
      <label data-cid={cids[1]} className={cn("block [font-family:Outfit,_sans-serif] text-[0.8125rem] font-extrabold leading-4 tracking-[1.92px] text-left uppercase cursor-default", styles.className)} htmlFor={d.htmlFor}>
        {d.text}
      </label>
      {" "}
      <input data-cid={cids[2]} className="w-full h-15.5 border border-solid border-border block py-5 px-6 rounded-sm overflow-clip bg-color-008 shadow-[var(--clr-13)_0px_2px_4px_0px_inset] [backdrop-filter:blur(10px)] cursor-text" data-component="input" id={d.id} placeholder={d.placeholder} type={d.type} />
      {" "}
    </div>
  );
}
