export type TileData = {
  kind?: string;
  alt: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile({ d, cids }: { d: TileData; cids: string[] }) {
  return (
    <img data-cid={cids[0]} className="w-99.5 h-[37.3125rem] block max-w-full rounded-xl overflow-clip object-cover aspect-[2/3] shadow-[var(--clr-2)_0px_8px_30px_0px] [filter:contrast(1.1)_brightness(0.8)] max-md:w-26 max-md:h-39 md:max-lg:w-58 md:max-lg:h-[21.6875rem] 2xl:w-151.5 2xl:h-[56.8125rem]" data-component={d.kind} alt={d.alt} src={d.imgSrc} />
  );
}
