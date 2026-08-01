export type ListRow2Data = {
  label: string;
};
/** A list row. */
export default function ListRow2({ d, cids }: { d: ListRow2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline text-color-001 text-sm leading-[1.0625rem] cursor-pointer" data-component="link" href="/index.html">
        {d.label}
      </a>
    </li>
  );
}
