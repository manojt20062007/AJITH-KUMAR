import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { Preloader } from "./components/Preloader";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "FOCUS VFX STUDIO | Premium ROTO & Post Production",
  "description": "Focus VFX Studio delivers premium Hollywood-grade ROTO, CGI, Motion Graphics, and Post Production solutions for films and advertisements.",
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/b0adffef7d54.png",
        "type": "image/png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";

type NavLinkData = {
  href: string;
  label: string;
};

type NavLinkStyles = {
  className?: string;
};

function NavLink({ d, cids, styles }: { d: NavLinkData; cids: string[]; styles: NavLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("block relative py-2 [font-family:Outfit,_sans-serif] text-sm font-bold leading-4.5 tracking-[0.72px] uppercase cursor-pointer after:content-[''] after:block after:absolute after:top-8 after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-primary after:shadow-[var(--primary)_0px_0px_8px_0px] max-lg:after:w-full max-lg:after:top-auto max-lg:after:right-auto max-lg:after:transform-[none] max-lg:after:origin-[initial]", styles.className)} href={d.href}>
      {d.label}
    </a>
  );
}

const NavLink_data = [
  { href: "/", label: "Home" },
  { href: "/about.html", label: "About Us" },
  { href: "/works.html", label: "Our Works" },
  { href: "/career.html", label: "Careers" },
  { href: "/contact.html", label: "Contact Us" }
];

const NavLink_cids: string[][] = [
  ["Ln7"],
  ["Ln8"],
  ["Ln9"],
  ["Ln10"],
  ["Ln11"]
];

const NavLink_styles = [
  { className: "[text-shadow:var(--clr-1)_0px_0px_10px] after:w-[2.8875rem] after: after:origin-[0px_1px]" },
  { className: "after:w-[77.1px] after:transform-[matrix(0,0,0,1,0,0)] after:origin-[77.125px_1px]" },
  { className: "after:w-[93.1px] after:transform-[matrix(0,0,0,1,0,0)] after:origin-[93.125px_1px]" },
  { className: "after:w-[69.3px] after:transform-[matrix(0,0,0,1,0,0)] after:origin-[69.3281px_1px]" },
  { className: "after:w-[6.0375rem] after:transform-[matrix(0,0,0,1,0,0)] after:origin-[96.6094px_1px]" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="cn0" data-cid="n0">
        <Preloader />
        <div className="block" data-cid="Ln1" id="header-placeholder">
          <header className="h-[8.9375rem] block fixed inset-x-0 z-1000 py-6 max-md:h-22 md:max-lg:h-24.5" data-cid="Ln2" id="site-header">
            <div className="h-full flex max-w-320 px-8 justify-between items-center max-lg:max-w-full 2xl:mx-80" data-cid="Ln3">
              <a className="block cursor-pointer" data-cid="Ln4" href="/index.html">
                {" "}
                <img className="w-46.5 h-20 block max-w-full overflow-clip [filter:drop-shadow(var(--clr-0)_0px_0px_5px)] max-md:w-[5.8125rem] max-md:h-10 md:max-lg:w-29 md:max-lg:h-12.5" data-cid="Ln5" alt="Focus VFX Studio" src="/assets/cloned/images/f068e3c48022.png" />
                {" "}
              </a>
              {" "}
              <nav className="flex gap-10 max-lg:hidden" data-cid="Ln6">
                {NavLink_data.map((d, i) => <NavLink key={i} d={d} cids={NavLink_cids[i]} styles={NavLink_styles[i]} />)}
                {" "}
              </nav>
              {" "}
              <div className="flex items-center gap-6" data-cid="Ln12">
                {" "}
                <ThemeToggleButton />
                {" "}
                <a className="h-[2.0625rem] border border-solid border-surface-3 flex relative z-1 py-2 px-5 rounded-[50px] justify-center items-center overflow-hidden text-xs font-semibold leading-[0.9375rem] tracking-[1.2px] uppercase cursor-pointer max-lg:hidden" data-cid="Ln16" href="/contact.html">
                  Let's Talk
                </a>
                {" "}
                <button className="w-[1.5625rem] h-4.5 hidden min-w-0 flex-col justify-between text-background [font-family:Arial] text-[0.8125rem] leading-[0.9375rem] text-center cursor-pointer max-lg:flex" data-cid="Ln17" aria-label="Toggle Menu" id="mobile-menu-trigger">
                  <span className="inline bg-foreground max-lg:h-0.5 max-lg:block" data-cid="Ln18" />
                  {" "}
                  <span className="inline bg-foreground max-lg:h-[0.1rem] max-lg:block" data-cid="Ln19" />
                  {" "}
                  <span className="inline bg-foreground max-lg:h-px max-lg:block" data-cid="Ln20" />
                  {" "}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </header>
          {" "}
        </div>
        <div className="block" data-cid="Ln21" id="mobile-menu-placeholder">
          {" "}
        </div>
        {children}
      </body>
    </html>
  );
}
