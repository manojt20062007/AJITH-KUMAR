import type { Tile2Styles } from "../_styles";
export type Tile2Data = {
  kind?: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <img data-cid={cids[0]} className={styles.className} data-component={d.kind} alt="" src={d.imgSrc} />
  );
}
