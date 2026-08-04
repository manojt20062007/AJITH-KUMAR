import "./ditto.css";
import MediaCard from "./components/media-card";
import ListRow from "./components/list-row";
import ListRow2 from "./components/list-row2";

const MediaCard_data = [
  { alt: "Alita: Battle Angel", id: "card-img-alita-battle-angel-0", imgSrc: "https://m.media-amazon.com/images/M/MV5BYmZhZGQzM2MtMWEyZC00YTU1LTk4YTQtMTg3ZjEzM2U1NTkxXkEyXkFqcGc@._V1_SX250.jpg", title: "Alita: Battle Angel", description: "Visual effects and post-production work for Alita: Battle Angel.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Rampage", id: "card-img-rampage-1", imgSrc: "https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@._V1_SX250.jpg", title: "Rampage", description: "Visual effects and post-production work for Rampage.", text: "Matchmove", text2: "ROTO", text3: "Visual Effects" },
  { alt: "Fantastic Beasts: The Crimes of Grindelwald", id: "card-img-fantastic-beasts-the-crimes-of-grindelwald-2", imgSrc: "https://m.media-amazon.com/images/M/MV5BZGIyZjk5ODctNDg3MC00YTgyLThmYTAtNjZkNzk4Y2JhMDRhXkEyXkFqcGc@._V1_SX250.jpg", title: "Fantastic Beasts: The Crimes of Grindelwald", description: "Visual effects and post-production work for Fantastic Beasts: The Crimes of Grindelwald.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "The Dark Crystal: Age of Resistance", id: "card-img-the-dark-crystal-age-of-resistance-3", imgSrc: "https://m.media-amazon.com/images/M/MV5BMmNhMTllMDYtMWQ1Mi00MWJlLThlMDEtYzE5M2MzMTk3NTVlXkEyXkFqcGc@._V1_SX250.jpg", title: "The Dark Crystal: Age of Resistance", description: "Visual effects and post-production work for The Dark Crystal: Age of Resistance.", text: "ROTO", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Avengers: Endgame", id: "card-img-avengers-endgame-4", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX250.jpg", title: "Avengers: Endgame", description: "Visual effects and post-production work for Avengers: Endgame.", text: "Matchmove", text2: "ROTO", text3: "Visual Effects" },
  { alt: "The Kid Who Would Be King", id: "card-img-the-kid-who-would-be-king-5", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTU3OTA1OTU1Ml5BMl5BanBnXkFtZTgwNzgzNTM5NjM@._V1_SX250.jpg", title: "The Kid Who Would Be King", description: "Visual effects and post-production work for The Kid Who Would Be King.", text: "ROTO", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Men in Black: International", id: "card-img-men-in-black-international-6", imgSrc: "https://m.media-amazon.com/images/M/MV5BNTI0ZjJlODYtNTAyOS00ZDk4LTk0M2ItNDljMzY5NmZkYTRkXkEyXkFqcGc@._V1_SX250.jpg", title: "Men in Black: International", description: "Visual effects and post-production work for Men in Black: International.", text: "Compositing", text2: "Matchmove", text3: "Visual Effects" },
  { alt: "Tenet", id: "card-img-tenet-7", imgSrc: "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_SX250.jpg", title: "Tenet", description: "Visual effects and post-production work for Tenet.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Dune", id: "card-img-dune-8", imgSrc: "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_SX250.jpg", title: "Dune", description: "Visual effects and post-production work for Dune.", text: "Matchmove", text2: "ROTO", text3: "Visual Effects" },
  { alt: "Triple Frontier", id: "card-img-triple-frontier-9", imgSrc: "https://m.media-amazon.com/images/M/MV5BODU4MzM2MDAxMl5BMl5BanBnXkFtZTgwNDEzNjM0NzM@._V1_SX250.jpg", title: "Triple Frontier", description: "Visual effects and post-production work for Triple Frontier.", text: "Compositing", text2: "Matchmove", text3: "Visual Effects" },
  { alt: "Togo", id: "card-img-togo-10", imgSrc: "https://m.media-amazon.com/images/M/MV5BZDU2YmExNjctNWViMy00MDc3LTliMjYtYjQ4ZTU4Mzg4YWQ3XkEyXkFqcGc@._V1_SX250.jpg", title: "Togo", description: "Visual effects and post-production work for Togo.", text: "ROTO", text2: "Compositing", text3: "Visual Effects" },
  { alt: "Jupiter's Legacy", id: "card-img-jupiter-s-legacy-11", imgSrc: "https://images.metahub.space/poster/small/tt5842890/img", title: "Jupiter's Legacy", description: "Visual effects and post-production work for Jupiter's Legacy.", text: "Compositing", text2: "ROTO", text3: "Visual Effects" },
  { alt: "Infinite", id: "card-img-infinite-12", imgSrc: "https://m.media-amazon.com/images/M/MV5BNTZhMWU0NzEtNzViMC00NzljLWJlNzYtYTA4MGE1YWFmOTU3XkEyXkFqcGc@._V1_SX250.jpg", title: "Infinite", description: "Visual effects and post-production work for Infinite.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Jungle Cruise", id: "card-img-jungle-cruise-13", imgSrc: "https://m.media-amazon.com/images/M/MV5BMWU5ZTBkMjQtMzg2Yi00ZmJlLTk4YWEtYTc0ZjU1YzE1NGNkXkEyXkFqcGc@._V1_SX250.jpg", title: "Jungle Cruise", description: "Visual effects and post-production work for Jungle Cruise.", text: "Digital Cleanup", text2: "ROTO", text3: "Visual Effects" },
  { alt: "Last Night in Soho", id: "card-img-last-night-in-soho-14", imgSrc: "https://m.media-amazon.com/images/M/MV5BODdhZjBmZTEtZmQyMy00NWY5LWJiMWQtODhjODFkZWZlMjMyXkEyXkFqcGc@._V1_SX250.jpg", title: "Last Night in Soho", description: "Visual effects and post-production work for Last Night in Soho.", text: "ROTO", text2: "Compositing", text3: "Visual Effects" },
  { alt: "Fast & Furious 9", id: "card-img-fast-furious-9-15", imgSrc: "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_SX250.jpg", title: "Fast & Furious 9", description: "Visual effects and post-production work for Fast & Furious 9.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Ghostbusters: Afterlife", id: "card-img-ghostbusters-afterlife-16", imgSrc: "https://m.media-amazon.com/images/M/MV5BMDJmZmM2NmQtMzhlYi00MGNkLTlhMWUtYjM1MmFlMTA1YTliXkEyXkFqcGc@._V1_SX250.jpg", title: "Ghostbusters: Afterlife", description: "Visual effects and post-production work for Ghostbusters: Afterlife.", text: "Digital Cleanup", text2: "ROTO", text3: "Visual Effects" },
  { alt: "Brahmāstra: Part One – Shiva", id: "card-img-brahm-stra-part-one-shiva-17", imgSrc: "https://m.media-amazon.com/images/M/MV5BZjZiOTE2Y2ItMTY4My00ZjE0LTlkZTAtYWY4M2I4OTVkMjQ5XkEyXkFqcGc@._V1_SX250.jpg", title: "Brahmāstra: Part One – Shiva", description: "Visual effects and post-production work for Brahmāstra: Part One – Shiva.", text: "Compositing", text2: "Matchmove", text3: "Visual Effects" },
  { alt: "Moonfall", id: "card-img-moonfall-18", imgSrc: "https://m.media-amazon.com/images/M/MV5BOWY0YzViYzgtMzM5YS00YzI1LTk5MTQtZjdiZjUyZjQ5ZGMwXkEyXkFqcGc@._V1_SX250.jpg", title: "Moonfall", description: "Visual effects and post-production work for Moonfall.", text: "ROTO", text2: "Compositing", text3: "Visual Effects" },
  { alt: "Devotion", id: "card-img-devotion-19", imgSrc: "https://m.media-amazon.com/images/M/MV5BMzQwNDQ1Y2UtODJkOS00NTQ0LWFjNTMtZjc2ZTZiOTcwOGI0XkEyXkFqcGc@._V1_SX250.jpg", title: "Devotion", description: "Visual effects and post-production work for Devotion.", text: "ROTO", text2: "Compositing", text3: "Visual Effects" },
  { alt: "Slumberland", id: "card-img-slumberland-20", imgSrc: "https://m.media-amazon.com/images/M/MV5BOGFiMmNhZGItNjZjOS00ZTk1LTg1MDMtYzBhZjBmYjdlNGQyXkEyXkFqcGc@._V1_SX250.jpg", title: "Slumberland", description: "Visual effects and post-production work for Slumberland.", text: "Matchmove", text2: "ROTO", text3: "Visual Effects" },
  { alt: "Uncharted", id: "card-img-uncharted-21", imgSrc: "https://m.media-amazon.com/images/M/MV5BYjQxYWNiNzgtOTc2Yi00OGEwLTk5MjAtODdiZTk0ZDJlZGY4XkEyXkFqcGc@._V1_SX250.jpg", title: "Uncharted", description: "Visual effects and post-production work for Uncharted.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" },
  { alt: "Fast X", id: "card-img-fast-x-22", imgSrc: "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_SX250.jpg", title: "Fast X", description: "Visual effects and post-production work for Fast X.", text: "Matchmove", text2: "Digital Cleanup", text3: "Visual Effects" }
];
const ListRow_data = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/works", label: "MY  Works" },
  { href: "/contact", label: "Contact Us" }
];
const ListRow2_data = [
  { label: "PREP" },
  { label: "Story Board" },
  { label: "Story Telling" },
  { label: "CGI Production" },
  { label: "Motion Graphics" },
  { label: "3D Animation" },
  { label: "Compositing" },
  { label: "ROTO" },
  { label: "MATCHMOVE" },
  { label: "Colour Grading" },
  { label: "Digital Cleanup" }
];
const MediaCard_cids: string[][] = [
  ["n84", "n85", "n86", "n87", "n88", "n89", "n90", "n91", "n92", "n93", "n94", "n95", "n96", "n97"],
  ["n98", "n99", "n100", "n101", "n102", "n103", "n104", "n105", "n106", "n107", "n108", "n109", "n110", "n111"],
  ["n112", "n113", "n114", "n115", "n116", "n117", "n118", "n119", "n120", "n121", "n122", "n123", "n124", "n125"],
  ["n126", "n127", "n128", "n129", "n130", "n131", "n132", "n133", "n134", "n135", "n136", "n137", "n138", "n139"],
  ["n140", "n141", "n142", "n143", "n144", "n145", "n146", "n147", "n148", "n149", "n150", "n151", "n152", "n153"],
  ["n154", "n155", "n156", "n157", "n158", "n159", "n160", "n161", "n162", "n163", "n164", "n165", "n166", "n167"],
  ["n168", "n169", "n170", "n171", "n172", "n173", "n174", "n175", "n176", "n177", "n178", "n179", "n180", "n181"],
  ["n182", "n183", "n184", "n185", "n186", "n187", "n188", "n189", "n190", "n191", "n192", "n193", "n194", "n195"],
  ["n196", "n197", "n198", "n199", "n200", "n201", "n202", "n203", "n204", "n205", "n206", "n207", "n208", "n209"],
  ["n210", "n211", "n212", "n213", "n214", "n215", "n216", "n217", "n218", "n219", "n220", "n221", "n222", "n223"],
  ["n224", "n225", "n226", "n227", "n228", "n229", "n230", "n231", "n232", "n233", "n234", "n235", "n236", "n237"],
  ["n238", "n239", "n240", "n241", "n242", "n243", "n244", "n245", "n246", "n247", "n248", "n249", "n250", "n251"],
  ["n252", "n253", "n254", "n255", "n256", "n257", "n258", "n259", "n260", "n261", "n262", "n263", "n264", "n265"],
  ["n266", "n267", "n268", "n269", "n270", "n271", "n272", "n273", "n274", "n275", "n276", "n277", "n278", "n279"],
  ["n280", "n281", "n282", "n283", "n284", "n285", "n286", "n287", "n288", "n289", "n290", "n291", "n292", "n293"]
];
const ListRow_cids: string[][] = [
  ["n325", "n326"],
  ["n327", "n328"],
  ["n329", "n330"],
  ["n331", "n332"],
  ["n333", "n334"]
];
const ListRow2_cids: string[][] = [
  ["n338", "n339"],
  ["n340", "n341"],
  ["n342", "n343"],
  ["n344", "n345"],
  ["n346", "n347"],
  ["n348", "n349"],
  ["n350", "n351"],
  ["n352", "n353"],
  ["n354", "n355"],
  ["n356", "n357"],
  ["n358", "n359"]
];

export default function Page() {
  return (
    <>
      <section className="h-170 min-h-170 flex relative pt-20 items-center overflow-hidden bg-background max-md:h-[30.45rem] max-md:min-h-[30.45rem] max-lg:pt-16 md:max-lg:h-[38.4rem] md:max-lg:min-h-[38.4rem] 2xl:h-229.5 2xl:min-h-229.5" data-cid="n22">
        <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0" data-cid="n23">
          <div className="w-320 h-170 block absolute top-0 left-0 bg-cover [background-position:50%_0%] [filter:grayscale(0.8)_brightness(0.3)_contrast(1.2)] [animation-name:bgSlowZoom] [animation-duration:12s] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite] [animation-direction:alternate] max-md:w-[23.4375rem] max-md:h-[30.45rem] max-lg:[background-position:50%_50%] md:max-lg:w-192 md:max-lg:h-[38.4rem] 2xl:w-480 2xl:h-229.5" style={{ backgroundImage: "url(\"/assets/cloned/images/46fe0eb562c1.jpg\")" }} data-cid="n24" />
          {" "}
          <div className="h-full block absolute top-0 inset-x-0 z-1" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-6) 0%, var(--clr-12) 60%, var(--clr-2) 100%)" }} data-cid="n25" />
          {" "}
          <div className="w-125 h-125 block absolute -top-17 -left-32 z-2 opacity-[0.509976] [mix-blend-mode:screen] [filter:blur(60px)] [animation-name:volumetricPulse] [animation-duration:6s] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite] pointer-events-none max-md:top-[-48.7px] max-md:left-[-37.5px] md:max-lg:-top-[3.8375rem] md:max-lg:-left-[4.8rem] 2xl:-top-[5.7375rem] 2xl:-left-48" style={{ backgroundImage: "radial-gradient(at 70% 40%, var(--clr-26) 0%, var(--clr-4) 55%)" }} data-cid="n26" />
          {" "}
          <img className="w-320 h-170 block absolute z-3 overflow-clip aspect-[auto_1280/680] pointer-events-none max-md:w-[23.4375rem] max-md:h-[30.4375rem] max-md:aspect-[auto_375/487] md:max-lg:w-192 md:max-lg:h-153.5 md:max-lg:aspect-[auto_768/614] 2xl:w-480 2xl:h-229.5 2xl:aspect-[auto_1920/918]" data-cid="n27" height="680" id="hero-particles" src="/assets/cloned/images/56ea4cef4caa.png" width="1280" alt="" />
          {" "}
        </div>
        {" "}
        <div className="block relative z-10 max-w-320 mx-auto py-16 px-8 text-left max-lg:max-w-full max-md:mx-0" data-cid="n28">
          <span className="border border-solid border-color-006 inline-block mb-6 py-[0.4rem] px-4 rounded-[50px] text-primary [font-family:Outfit,_sans-serif] text-xs font-bold leading-[0.9375rem] tracking-[3.46px] uppercase" data-cid="n29">
            Ajith kumar  — PORTFOLIO
          </span>
          {" "}
          <h1 className="block mb-6 text-[5.625rem] font-black leading-[5.3125rem] tracking-[-1.79px] uppercase max-lg:text-5xl max-lg:leading-[2.875rem] max-lg:tracking-[-0.96px] 2xl:text-[6.5rem] 2xl:leading-[6.1875rem] 2xl:tracking-[-2.08px]" data-cid="n30" data-component="heading">
            {"MY  "}
            <span className="inline text-primary [text-shadow:var(--clr-9)_0px_0px_50px]" data-cid="n31">
              WORKS
            </span>
          </h1>
          {" "}
          <p className="border-l-[3px] border-solid border-l-primary block max-w-162.5 mb-10 pl-5 text-color-014 text-[1.1875rem] leading-[2.0625rem] max-lg:leading-[1.6875rem] max-lg:[font-size:inherit]" data-cid="n32">
            Browse through my premium cinematic projects delivered for global cinema.
          </p>
          {" "}
        </div>
        {" "}
        <div className="w-[55.5px] h-[4.6875rem] flex absolute bottom-10 left-16 z-5 min-w-0 flex-col items-center gap-3 text-color-005 [font-family:Outfit,_sans-serif] text-[0.625rem] font-bold leading-[0.8125rem] tracking-[2.6px] max-lg:hidden" data-cid="n33">
          <span className="block" data-cid="n34">
            SCROLL
          </span>
          {" "}
          <div className="w-px h-12.5 block opacity-[0.467047] [animation-name:scrollPulse] [animation-duration:2s] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite]" style={{ backgroundImage: "linear-gradient(var(--color-005), var(--clr-4))" }} data-cid="n35" />
          {" "}
        </div>
        {" "}
      </section>
      <section className="block relative pt-8 pb-32 bg-background max-lg:pb-16" data-cid="n36">
        <div className="block max-w-320 px-8 max-lg:max-w-full max-lg:px-6 2xl:mx-80" data-cid="n37">
          <div className="flex mb-8 flex-wrap justify-center gap-[0.9375rem]" data-cid="n38">
            <button className="border border-solid border-primary block py-2.5 px-6 [font-family:Outfit,_sans-serif] text-lg font-bold leading-[1.4375rem] tracking-[1.76px] text-center capitalize bg-clr-27 shadow-[var(--accent)_0px_0px_15px_0px] cursor-pointer" data-cid="n39" data-component="button">
              Posters
            </button>

          </div>
          {" "}
          <div className="min-h-100 grid items-start gap-8 grid-cols-[repeat(auto-fit,_minmax(326px,_1fr))]" data-cid="n41" id="works-grid">
            {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i] || Array(14).fill("")} />)}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      <section className="border-t border-solid border-t-border border-b border-b-border block relative py-32 bg-color-002 max-lg:py-16" data-cid="n294" id="cta">
        <div className="border border-solid border-border block relative max-w-225 my-12 mx-auto py-20 px-12 rounded-[20px] overflow-hidden text-center shadow-[var(--clr-15)_0px_30px_60px_0px] max-lg:px-6 max-lg:py-0" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-36), var(--clr-37))" }} data-cid="n295">
          <div className="w-100 h-100 block absolute top-[clamp(127.6px,_50%,_calc(100%_-_127.6px))] left-[clamp(186.5px,_50%,_calc(100%_-_186.5px))] transform-[matrix(1,0,0,1,-200,-200)] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, var(--clr-38) 0%, var(--clr-39) 70%)" }} data-cid="n296" />
          {" "}
          <h2 className="block mb-6 [font-family:Outfit,_sans-serif] text-[2.5rem] font-black leading-12.5 tracking-[1px] uppercase" data-cid="n297" data-component="heading">
            You Want To Do a Project?
          </h2>
          {" "}
          <p className="block max-w-162.5 mb-10 mx-auto px-4 text-color-001 text-lg leading-[2.0625rem]" data-cid="n298">
            Whether you need seamless feature film shots, realistic commercial set extensions, or dynamic brand motion design—let’s collaborate to build stunning visuals.

            Let’s START Projects
            Start a Project          </p>
          {" "}
          <div className="flex flex-wrap justify-center gap-6 max-lg:flex-col" data-cid="n299">
            <a className="h-[2.5625rem] border border-solid border-clr-4 flex relative z-1 py-3 px-8 rounded-[50px] justify-center items-center overflow-hidden text-background text-[0.8125rem] font-bold leading-[0.9375rem] tracking-[1.28px] uppercase bg-primary shadow-[var(--clr-10)_0px_0px_20px_0px] cursor-pointer" data-cid="n300" data-component="button" href="/contact">
              Discuss Project
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>

    </>
  );
}
