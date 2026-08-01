export type MediaCardData = {
  alt: string;
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  text: string;
  text2: string;
  text3: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids }: { d: MediaCardData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="border border-solid border-surface block relative rounded-sm shrink-0 overflow-hidden bg-color-002 shadow-[var(--clr-2)_0px_10px_30px_0px,var(--border)_0px_0px_15px_0px] cursor-pointer group">
      <div data-cid={cids[1]} className="block relative overflow-hidden aspect-[2/3]">
        <img data-cid={cids[2]} className="w-95.5 h-[35.8125rem] block relative z-1 max-w-full overflow-clip object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:transform-[matrix(1.15,0,0,1.15,0,0)] origin-[191px_286.5px] max-md:w-[20.3125rem] max-md:h-122 max-md:origin-[162.5px_243.75px] md:max-lg:w-85.5 md:max-lg:h-[32.0625rem] md:max-lg:origin-[171px_256.5px]" data-component="image" alt={d.alt} id={d.id} src={d.imgSrc} />
        {"  "}
        <div data-cid={cids[3]} className="w-95.5 h-[35.8125rem] flex absolute top-0 left-0 z-2 opacity-100 lg:opacity-0 p-6 flex-col justify-end transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(to top, var(--clr-14) 0%, var(--clr-15) 40%, var(--clr-4) 100%)" }}>
          <span data-cid={cids[4]} className="block mb-1 text-primary [font-family:Outfit,_sans-serif] text-xs font-extrabold leading-[0.9375rem] tracking-[1.8px] uppercase">
            Posters
          </span>
          {" "}
          <h3 data-cid={cids[5]} className="block mb-2 [font-family:Outfit,_sans-serif] text-xl font-extrabold leading-6 tracking-[-0.4px] uppercase" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <p data-cid={cids[6]} className="block opacity-100 lg:opacity-0 mb-4 text-color-014 text-[0.8125rem] leading-[1.125rem] transform-[matrix(1,0,0,1,0,0)] lg:transform-[matrix(1,0,0,1,0,15)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:transform-[matrix(1,0,0,1,0,0)]">
            {d.description}
          </p>
          {" "}
          <div data-cid={cids[7]} className="h-[1.3375rem] flex opacity-100 lg:opacity-0 flex-wrap gap-[0.4rem] transform-[matrix(1,0,0,1,0,0)] lg:transform-[matrix(1,0,0,1,0,15)] transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:transform-[matrix(1,0,0,1,0,0)]">
            <span data-cid={cids[8]} className="border border-solid border-accent block py-[0.2rem] px-2 rounded-xs text-[0.625rem] leading-[0.8125rem] bg-color-003">
              {d.text}
            </span>
            <span data-cid={cids[9]} className="border border-solid border-accent block py-[0.2rem] px-2 rounded-xs text-[0.625rem] leading-[0.8125rem] bg-color-003">
              {d.text2}
            </span>
            <span data-cid={cids[10]} className="border border-solid border-accent block py-[0.2rem] px-2 rounded-xs text-[0.625rem] leading-[0.8125rem] bg-color-003">
              {d.text3}
            </span>
            {" "}
          </div>
          {" "}
          <div data-cid={cids[11]} className="h-4 flex opacity-100 lg:opacity-0 mt-4 items-center gap-2 text-primary [font-family:Outfit,_sans-serif] text-[0.8125rem] font-semibold leading-4 tracking-[1.28px] uppercase transform-[matrix(1,0,0,1,0,0)] lg:transform-[matrix(1,0,0,1,0,10)] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:transform-[matrix(1,0,0,1,0,0)]">
            <span data-cid={cids[12]} className="block">
              View Project
            </span>
            {" "}
            <i data-cid={cids[13]} className="block [font-family:'Font_Awesome_6_Free'] font-black leading-[0.8125rem] before:content-[''] before:text-primary before:text-[0.8125rem] before:font-black before:leading-[0.8125rem] before:tracking-[1.28px]" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
