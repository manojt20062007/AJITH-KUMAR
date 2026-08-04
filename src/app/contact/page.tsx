import "./ditto.css";
import Tile from "./components/tile";
import Tile2 from "./components/tile2";
import ListRow from "./components/list-row";
import ListRow2 from "./components/list-row2";
import Script from "next/script";

const Tile_data = [
  { htmlFor: "contact-name", text: "Full Name", id: "contact-name", name: "name", type: "text", required: true },
  { htmlFor: "contact-email", text: "Email Address", id: "contact-email", name: "email", type: "email", required: true },
  { htmlFor: "contact-phone", text: "Mobile Number", id: "contact-phone", name: "phone", type: "tel" },
  { htmlFor: "contact-company", text: "Company Name", id: "contact-company", name: "company", type: "text" },
  { htmlFor: "contact-subject", text: "Subject", id: "contact-subject", name: "subject", type: "text", required: true }
];
const Tile2_data = [
  { kind: "image", imgSrc: "/assets/cloned/images/4c13226486c3.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/bd195c6e5a45.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/5289e4f3098e.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/44445236dbb2.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/ca187cc7bef7.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/bebce67a76d9.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/99d703258a43.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/3403745c397b.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/11e7f5db8143.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/854e82a7f005.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/0265ae921e1f.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/dd1038b2306a.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/e8054e600b8d.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/a86862840545.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/a5792099f69c.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/63b7ddabf5d0.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/52c4f92a0313.png" },
  { kind: "image", imgSrc: "/assets/cloned/images/fc42a8d75893.png" },
  { imgSrc: "/assets/cloned/images/57898b7c8b37.png" },
  { imgSrc: "/assets/cloned/images/1a136616ff13.png" },
  { imgSrc: "/assets/cloned/images/023f28940ed4.png" },
  { imgSrc: "/assets/cloned/images/b1387857cebb.png" },
  { imgSrc: "/assets/cloned/images/9e3d5dbf7ab7.png" },
  { imgSrc: "/assets/cloned/images/71559f1b7b8b.png" }
];
const ListRow_data = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/works", label: "MY WORKS" },
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
const Tile_cids: string[][] = [
  ["n71", "n72", "n73"],
  ["n74", "n75", "n76"],
  ["n77", "n78", "n79"],
  ["n80", "n81", "n82"],
  ["n83", "n84", "n85"]
];
const Tile2_cids: string[][] = [
  ["n98"],
  ["n99"],
  ["n100"],
  ["n101"],
  ["n102"],
  ["n103"],
  ["n104"],
  ["n105"],
  ["n106"],
  ["n107"],
  ["n108"],
  ["n109"],
  ["n110"],
  ["n111"],
  ["n112"],
  ["n113"],
  ["n114"],
  ["n115"],
  ["n116"],
  ["n117"],
  ["n118"],
  ["n119"],
  ["n120"],
  ["n121"]
];
const ListRow_cids: string[][] = [
  ["n165", "n166"],
  ["n167", "n168"],
  ["n169", "n170"],
  ["n171", "n172"],
  ["n173", "n174"]
];
const ListRow2_cids: string[][] = [
  ["n178", "n179"],
  ["n180", "n181"],
  ["n182", "n183"],
  ["n184", "n185"],
  ["n186", "n187"],
  ["n188", "n189"],
  ["n190", "n191"],
  ["n192", "n193"],
  ["n194", "n195"],
  ["n196", "n197"],
  ["n198", "n199"]
];
const Tile_styles = [
  { className: "text-primary" },
  { className: "text-primary" },
  { className: "text-primary" },
  { className: "after:content-['_(optional)'] after:text-color-001 after:text-[0.6875rem] after:leading-3.5 after:tracking-[0.56px] after:text-left" },
  { className: "text-primary" }
];
const Tile2_styles = [
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,430,20)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,686,20)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,430,-236)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,686,-236)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,430,276)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,686,276)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,174,20)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,942,20)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,174,-236)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,942,-236)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,174,276)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,942,276)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,-82,20)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,1198,20)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,-82,-236)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,1198,-236)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,-82,276)] pointer-events-none" },
  { className: "w-64 h-64 block absolute [mix-blend-mode:plus-lighter] overflow-clip transform-[matrix(1,0,0,1,1198,276)] pointer-events-none" },
  { className: "hidden 2xl:w-64 2xl:h-64 2xl:block 2xl:absolute 2xl:[mix-blend-mode:plus-lighter] 2xl:overflow-clip 2xl:transform-[matrix(1,0,0,1,-338,20)] 2xl:pointer-events-none" },
  { className: "hidden 2xl:w-64 2xl:h-64 2xl:block 2xl:absolute 2xl:[mix-blend-mode:plus-lighter] 2xl:overflow-clip 2xl:transform-[matrix(1,0,0,1,1454,20)] 2xl:pointer-events-none" },
  { className: "hidden 2xl:w-64 2xl:h-64 2xl:block 2xl:absolute 2xl:[mix-blend-mode:plus-lighter] 2xl:overflow-clip 2xl:transform-[matrix(1,0,0,1,-338,-236)] 2xl:pointer-events-none" },
  { className: "hidden 2xl:w-64 2xl:h-64 2xl:block 2xl:absolute 2xl:[mix-blend-mode:plus-lighter] 2xl:overflow-clip 2xl:transform-[matrix(1,0,0,1,1454,-236)] 2xl:pointer-events-none" },
  { className: "hidden 2xl:w-64 2xl:h-64 2xl:block 2xl:absolute 2xl:[mix-blend-mode:plus-lighter] 2xl:overflow-clip 2xl:transform-[matrix(1,0,0,1,-338,276)] 2xl:pointer-events-none" },
  { className: "hidden 2xl:w-64 2xl:h-64 2xl:block 2xl:absolute 2xl:[mix-blend-mode:plus-lighter] 2xl:overflow-clip 2xl:transform-[matrix(1,0,0,1,1454,276)] 2xl:pointer-events-none" }
];

export default function Page() {
  return (
    <>
      <section className="h-170 min-h-170 flex relative pt-20 items-center overflow-hidden bg-background max-md:h-[43.1375rem] max-md:min-h-[43.1375rem] md:max-lg:h-[54.4rem] md:max-lg:min-h-[54.4rem] 2xl:h-229.5 2xl:min-h-229.5" data-cid="n22">
        <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0" data-cid="n23">
          <div className="w-320 h-170 block absolute top-0 left-0 bg-cover [background-position:50%_0%] [filter:grayscale(0.8)_brightness(0.3)_contrast(1.2)] [animation-name:bgSlowZoom] [animation-duration:12s] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite] [animation-direction:alternate] max-md:w-[23.4375rem] max-md:h-[43.1375rem] md:max-lg:w-192 md:max-lg:h-[54.4rem] 2xl:w-480 2xl:h-229.5" style={{ backgroundImage: "url(\"/assets/cloned/images/5ba565cae533.png\")" }} data-cid="n24" />
          {" "}
          <div className="h-full block absolute top-0 inset-x-0 z-1" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-6) 0%, var(--clr-12) 60%, var(--clr-2) 100%)" }} data-cid="n25" />
          {" "}
          <div className="w-125 h-125 block absolute -top-17 -left-32 z-2 opacity-[0.531923] [mix-blend-mode:screen] [filter:blur(60px)] [animation-name:volumetricPulse] [animation-duration:6s] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite] pointer-events-none max-md:-top-[4.3125rem] max-md:left-[-37.5px] md:max-lg:-top-[5.4375rem] md:max-lg:-left-[4.8rem] 2xl:-top-[5.7375rem] 2xl:-left-48" style={{ backgroundImage: "radial-gradient(at 70% 40%, var(--clr-26) 0%, var(--clr-4) 55%)" }} data-cid="n26" />
          {" "}
          <img className="w-320 h-170 block absolute z-3 overflow-clip aspect-[auto_1280/680] pointer-events-none max-md:w-[23.4375rem] max-md:h-172.5 max-md:aspect-[auto_375/690] md:max-lg:w-192 md:max-lg:h-217.5 md:max-lg:aspect-[auto_768/870] 2xl:w-480 2xl:h-229.5 2xl:aspect-[auto_1920/918]" data-cid="n27" height="680" id="hero-particles" src="/assets/cloned/images/56ea4cef4caa.png" width="1280" alt="" />
          {" "}
        </div>
        {" "}
        <div className="block relative z-10 max-w-320 mx-auto py-16 px-8 text-left max-lg:max-w-full max-md:mx-0" data-cid="n28">
          <span className="border border-solid border-color-006 inline-block mb-6 py-[0.4rem] px-4 rounded-[50px] text-primary [font-family:Outfit,_sans-serif] text-xs font-bold leading-[0.9375rem] tracking-[3.46px] uppercase" data-cid="n29">
            AJITH KUMAR— CONTACT US
          </span>
          {" "}
          <h1 className="block mb-6 text-[5.625rem] font-black leading-[5.3125rem] tracking-[-1.79px] uppercase max-md:text-5xl max-md:leading-[2.875rem] max-md:tracking-[-0.96px] md:max-lg:text-[3.375rem] md:max-lg:leading-[3.1875rem] md:max-lg:tracking-[-1.08px] 2xl:text-[6.5rem] 2xl:leading-[6.1875rem] 2xl:tracking-[-2.08px]" data-cid="n30" data-component="heading">
            {"CONNECT WITH "}
            <span className="inline text-primary [text-shadow:var(--clr-9)_0px_0px_50px]" data-cid="n31">
              US
            </span>
          </h1>
          {" "}
          <p className="w-full max-w-162.5 border-l-[3px] border-solid border-l-primary block mb-10 pl-5 text-color-014 text-[1.1875rem] leading-[2.0625rem] max-lg:leading-[1.6875rem] max-lg:[font-size:inherit]" data-cid="n32">
            Have a project in mind? Let's collaborate to create stunning visual effects for your next production.
          </p>
          {" "}
        </div>
        {" "}
        <div className="w-[55.5px] h-[4.6875rem] flex absolute bottom-10 left-16 z-5 min-w-0 flex-col items-center gap-3 text-color-005 [font-family:Outfit,_sans-serif] text-[0.625rem] font-bold leading-[0.8125rem] tracking-[2.6px]" data-cid="n33">
          <span className="block" data-cid="n34">
            SCROLL
          </span>
          {" "}
          <div className="w-px h-12.5 block opacity-[0.567182] [animation-name:scrollPulse] [animation-duration:2s] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite]" style={{ backgroundImage: "linear-gradient(var(--color-005), var(--clr-4))" }} data-cid="n35" />
          {" "}
        </div>
        {" "}
      </section>
      <section className="block relative pt-32 pb-8 bg-background max-lg:pt-16" data-cid="n36">
        <div className="block max-w-320 px-8 max-lg:max-w-full max-lg:px-6 2xl:mx-80" data-cid="n37">
          <div className="grid mb-8 gap-10 grid-cols-3 max-lg:gap-8 max-lg:grid-cols-1" data-cid="n38">
            <div className="border border-solid border-border block relative py-12 px-8 rounded-sm overflow-hidden text-center bg-color-002 shadow-[var(--clr-12)_0px_10px_25px_0px] before:content-[''] before:block before:absolute before:top-0 before:bottom-[278.5px] before:inset-x-0 before:h-0.5 before:bg-primary before:transform-[matrix(0,0,0,1,0,0)] before:origin-[0px_1px]" data-cid="n39">
              <div className="inline-block mb-6 text-primary text-[2.1875rem] leading-10.5 [text-shadow:var(--accent)_0px_0px_10px]" data-cid="n40">
                <i className="inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-[2.1875rem] before:content-[''] before:text-primary before:text-[2.1875rem] before:font-black before:leading-[2.1875rem] before:text-center" data-cid="n41" />
              </div>
              {" "}
              <h3 className="block mb-4 [font-family:Outfit,_sans-serif] text-xl font-extrabold leading-[1.5625rem] tracking-[-0.4px] uppercase" data-cid="n42" data-component="heading">
                Studio Address
              </h3>
              {" "}
              <p className="block text-color-001 text-[0.9375rem] leading-[1.625rem]" data-cid="n43">
                No.9,Kambar Street
                <br className="inline" data-cid="n44" />
                Subramaniya Nagar,
                <br className="inline" data-cid="n45" />
                Tiruttani-631209
              </p>
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border block relative py-12 px-8 rounded-sm overflow-hidden text-center bg-color-002 shadow-[var(--clr-12)_0px_10px_25px_0px] before:content-[''] before:block before:absolute before:top-0 before:bottom-[278.5px] before:inset-x-0 before:h-0.5 before:bg-primary before:transform-[matrix(0,0,0,1,0,0)] before:origin-[0px_1px]" data-cid="n46">
              <div className="inline-block mb-6 text-primary text-[2.1875rem] leading-10.5 [text-shadow:var(--accent)_0px_0px_10px]" data-cid="n47">
                <i className="inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-[2.1875rem] before:content-[''] before:text-primary before:text-[2.1875rem] before:font-black before:leading-[2.1875rem] before:text-center" data-cid="n48" />
              </div>
              {" "}
              <h3 className="block mb-4 [font-family:Outfit,_sans-serif] text-xl font-extrabold leading-[1.5625rem] tracking-[-0.4px] uppercase" data-cid="n49" data-component="heading">
                Direct Connect
              </h3>
              {" "}
              <p className="block text-color-001 text-[0.9375rem] leading-[1.625rem]" data-cid="n50">
                {" Phone: "}
                <a className="inline cursor-pointer" data-cid="n51" data-component="link" href="tel:+918925902036">
                  +91 8667586750
                </a>
                <br className="inline" data-cid="n52" />
                {" General: "}
                <a className="inline cursor-pointer" data-cid="n53" data-component="link" href="mailto:info@Ajith Kumarvfx.in">
                  creativeheadsak@gmail.com
                </a>


                {" "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border block relative py-12 px-8 rounded-sm overflow-hidden text-center bg-color-002 shadow-[var(--clr-12)_0px_10px_25px_0px] before:content-[''] before:block before:absolute before:top-0 before:bottom-[278.5px] before:inset-x-0 before:h-0.5 before:bg-primary before:transform-[matrix(0,0,0,1,0,0)] before:origin-[0px_1px]" data-cid="n56">
              <div className="inline-block mb-6 text-primary text-[2.1875rem] leading-10.5 [text-shadow:var(--accent)_0px_0px_10px]" data-cid="n57">
                <i className="inline-block [font-family:'Font_Awesome_6_Free'] leading-[2.1875rem] before:content-[''] before:text-primary before:text-[2.1875rem] before:leading-[2.1875rem] before:text-center" data-cid="n58" />
              </div>
              {" "}
              <h3 className="block mb-4 [font-family:Outfit,_sans-serif] text-xl font-extrabold leading-[1.5625rem] tracking-[-0.4px] uppercase" data-cid="n59" data-component="heading">
                Studio Hours
              </h3>
              {" "}
              <p className="block text-color-001 text-[0.9375rem] leading-[1.625rem]" data-cid="n60">
                Monday to Sunday
                <br className="inline" data-cid="n61" />
                09:00 AM to 10:00 PM

              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      <section className="border-t border-solid border-t-border border-b border-b-border block relative py-32 bg-color-002 max-lg:py-16" data-cid="n63">
        <div className="block max-w-200 mx-auto px-8 max-lg:px-6" data-cid="n64">
          <div className="block relative mb-16 text-center max-lg:mb-10" data-cid="n65">
            <span className="block mb-3 text-primary [font-family:Outfit,_sans-serif] text-sm font-extrabold leading-4.5 tracking-[3.6px]" data-cid="n66">
              GET IN TOUCH
            </span>
            {" "}
            <h2 className="inline-block relative [font-family:Outfit,_sans-serif] text-[2.5rem] font-black leading-12.5 tracking-[2px] uppercase max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[1.28px] md:max-lg:text-[1.8125rem] md:max-lg:leading-9 md:max-lg:tracking-[1.44px] after:content-[''] after:block after:absolute after:top-[3.5625rem] after:right-[96.3px] after:-bottom-2.5 after:left-[156.3px] after:w-15 after:h-[0.1875rem] after:bg-primary after:shadow-[var(--primary)_0px_0px_10px_0px] after:transform-[matrix(1,0,0,1,-30,0)] after:origin-[0px_1.5px] max-md:after:top-10 max-md:after:right-10 max-md:after:left-[6.25rem] md:max-lg:after:top-[2.6875rem] md:max-lg:after:right-[3.2875rem] md:max-lg:after:left-[112.5px]" data-cid="n67" data-component="heading">
              SEND INQUIRY
            </h2>
            {" "}
          </div>
          {" "}
          <div className="block max-w-200" data-cid="n68">
            <div className="border-t-2 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border block relative py-18 px-16 rounded-lg overflow-hidden bg-clr-28 shadow-[var(--clr-2)_0px_30px_60px_0px,var(--clr-29)_0px_0px_40px_0px] [backdrop-filter:blur(20px)] max-lg:py-10 max-lg:px-6" data-cid="n69">
              <Script src="https://web3forms.com/client/script.js" async defer />
              <form action="https://api.web3forms.com/submit" method="POST" className="flex relative z-1 flex-col gap-9 max-lg:gap-6" data-cid="n70" id="contact-inquiry-form">
                <input type="hidden" name="access_key" value="35de5cd8-16cc-4e00-9039-fb05aeb4f371" />
                {Tile_data.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                {" "}
                <div className="flex flex-col gap-[0.8rem]" data-cid="n86">
                  <label className="block text-primary [font-family:Outfit,_sans-serif] text-[0.8125rem] font-extrabold leading-4 tracking-[1.92px] text-left uppercase cursor-default" data-cid="n87" htmlFor="contact-message">
                    Message
                  </label>
                  {" "}
                  <textarea className="w-full h-45.5 min-h-45 border border-solid border-border block py-5 px-6 rounded-sm overflow-auto whitespace-pre-wrap [overflow-wrap:break-word] bg-color-008 shadow-[var(--clr-13)_0px_2px_4px_0px_inset] [backdrop-filter:blur(10px)] cursor-text" data-cid="n88" data-component="textarea" id="contact-message" name="message" required placeholder="Outline your project timeline, shot count, and specific requirements..." />
                  {" "}
                </div>
                {" "}
                <div className="flex mt-6 flex-col gap-[0.8rem]" data-cid="n89">
                  <div className="h-captcha" data-captcha="true"></div>
                  <button className="h-15.5 border border-solid border-primary flex relative z-1 p-5 rounded-[50px] justify-center items-center overflow-hidden font-black tracking-[3.2px] text-center uppercase bg-primary shadow-[var(--accent)_0px_0px_25px_0px] cursor-pointer" data-cid="n90" data-component="button" type="submit">
                    Send Inquiry
                  </button>
                  {" "}
                </div>
                {" "}
                <div className="block" data-cid="n91" id="contact-form-status" />
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>


    </>
  );
}
