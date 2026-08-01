"use client";

import { ListRow } from "./list-row";
import { ListRow2 } from "./list-row2";

const ListRow_data = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Works", href: "/works" },
  { label: "Contact Us", href: "/contact" }
];

const ListRow2_data = [
  { label: "PREP", href: "/works" },
  { label: "Compositing", href: "/works" },
  { label: "ROTO", href: "/works" },
  { label: "Matchmovie", href: "/works" },
  { label: "Digital Cleanup", href: "/works" }
];

export default function Footer() {
  return (
    <footer className="border-t border-solid border-t-border block relative z-10 pt-20 pb-8 bg-background" id="site-footer">
      <div className="block max-w-320 px-8 mx-auto w-full max-lg:max-w-full">
        <div className="grid mb-16 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-lg:gap-10 max-lg:text-center">
          
          <div className="flex flex-col max-lg:items-center">
            <a className="h-26 block cursor-pointer" href="/">
              <img className="w-46.5 h-20 block max-w-full mb-6 overflow-clip [filter:drop-shadow(var(--clr-0)_0px_0px_5px)]" alt="Focus VFX Studio" src="/assets/cloned/images/f068e3c48022.png" />
            </a>
            <p className="block mb-6 text-color-001 text-sm leading-[1.4375rem]">
              I specialize in delivering professional VFX solutions, including Prep, ROTO, Compositing, Matchmove, and Digital Cleanup. With a focus on quality, accuracy, and timely delivery, I help filmmakers, agencies, and creators bring every frame to life.
            </p>
            <div className="flex gap-[0.8rem] max-lg:justify-center">
              <a className="w-9 h-9 border border-solid border-border flex rounded-[50%] justify-center items-center text-sm leading-4 bg-color-002 cursor-pointer hover:bg-primary hover:text-white transition-colors" aria-label="Instagram" href="https://www.instagram.com/ajithkumarvfx/" target="_blank">
                <i className="block [font-family:'Font_Awesome_6_Brands'] leading-[0.875rem] before:content-[''] before:text-sm before:leading-[0.875rem] max-lg:before:text-center" />
              </a>
              <a className="w-9 h-9 border border-solid border-border flex rounded-[50%] justify-center items-center text-sm leading-4 bg-color-002 cursor-pointer hover:bg-primary hover:text-white transition-colors" aria-label="Facebook" href="https://www.facebook.com/ajithkumar.ajithkumar.50159" target="_blank">
                <i className="block [font-family:'Font_Awesome_6_Brands'] leading-[0.875rem] before:content-[''] before:text-sm before:leading-[0.875rem] max-lg:before:text-center" />
              </a>
              <a className="w-9 h-9 border border-solid border-border flex rounded-[50%] justify-center items-center text-sm leading-4 bg-color-002 cursor-pointer hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn" href="https://www.linkedin.com/in/ajithkumarlava/" target="_blank">
                <i className="block [font-family:'Font_Awesome_6_Brands'] leading-[0.875rem] before:content-[''] before:text-sm before:leading-[0.875rem] max-lg:before:text-center" />
              </a>
            </div>
          </div>

          <div className="flex flex-col max-lg:items-center">
            <h4 className="block relative mb-6 pb-2 [font-family:Outfit,_sans-serif] text-lg font-extrabold leading-[1.4375rem] tracking-[0.88px] uppercase border-b-2 border-primary inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 [list-style-type:none] list-outside">
              {ListRow_data.map((d, i) => (
                <li key={i}><a href={d.href} className="text-color-001 hover:text-primary transition-colors text-sm">{d.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col max-lg:items-center">
            <h4 className="block relative mb-6 pb-2 [font-family:Outfit,_sans-serif] text-lg font-extrabold leading-[1.4375rem] tracking-[0.88px] uppercase border-b-2 border-primary inline-block">
              VFX Services
            </h4>
            <ul className="flex flex-col gap-3 [list-style-type:none] list-outside">
              {ListRow2_data.map((d, i) => (
                <li key={i}><a href={d.href} className="text-color-001 hover:text-primary transition-colors text-sm">{d.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col max-lg:items-center">
            <h4 className="block relative mb-6 pb-2 [font-family:Outfit,_sans-serif] text-lg font-extrabold leading-[1.4375rem] tracking-[0.88px] uppercase border-b-2 border-primary inline-block">
              Studio Info
            </h4>
            <p className="flex mb-4 gap-4 text-color-001 text-sm leading-[1.375rem]">
              <i className="block mt-1 text-primary [font-family:'Font_Awesome_6_Free'] text-[0.9375rem] font-black leading-[0.9375rem] before:content-[''] max-lg:before:text-center" />
              <span className="block text-left max-lg:text-center">
                No.09, Kambar Street,<br />Subramaniya Nagar,<br />Tiruttani - 631209
              </span>
            </p>
            <p className="flex mb-4 gap-4 text-color-001 text-sm leading-[1.375rem]">
              <i className="block mt-1 text-primary [font-family:'Font_Awesome_6_Free'] text-[0.9375rem] font-black leading-[0.9375rem] before:content-[''] max-lg:before:text-center" />
              <a className="block cursor-pointer hover:text-primary transition-colors" href="tel:+9186677586750">
                +91 86677586750
              </a>
            </p>
            <p className="flex mb-4 gap-4 text-color-001 text-sm leading-[1.375rem]">
              <i className="block mt-1 text-primary [font-family:'Font_Awesome_6_Free'] text-[0.9375rem] font-black leading-[0.9375rem] before:content-[''] max-lg:before:text-center" />
              <a className="block cursor-pointer hover:text-primary transition-colors" href="mailto:creativeheadsak@gmail.com">
                creativeheadsak@gmail.com
              </a>
            </p>
            <p className="flex mb-4 gap-4 text-color-001 text-sm leading-[1.375rem]">
              <i className="block mt-1 text-primary [font-family:'Font_Awesome_6_Free'] text-[0.9375rem] font-black leading-[0.9375rem] before:content-[''] max-lg:before:text-center" />
              <span className="block text-left max-lg:text-center">
                Mon - Sun: 09:00 AM - 10:00 PM
              </span>
            </p>
          </div>

        </div>

        <div className="border-t border-solid border-t-border flex pt-8 flex-wrap justify-between items-center gap-4 text-center max-md:justify-center">
          <p className="block text-color-001 text-sm leading-4">
            © <span id="copyright-year">2026</span> AJITH KUMAR. All Rights Reserved.
          </p>
          <p className="block text-primary [font-family:Outfit,_sans-serif] text-sm font-extrabold leading-4.5 tracking-[1.36px] uppercase">
            THIS PAGE IS CREATED BY PMJ PROJECTS
          </p>
        </div>

      </div>
    </footer>
  );
}
