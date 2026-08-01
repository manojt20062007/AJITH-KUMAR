export type Tile2Data = {
  disabled?: boolean;
  selected?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d, cids }: { d: Tile2Data; cids: string[] }) {
  return (
    <option data-cid={cids[0]} className="min-h-6 block min-w-6 items-center gap-[0.475rem] whitespace-nowrap" disabled={d.disabled} selected={d.selected} value={d.value}>
      {d.text}
    </option>
  );
}
