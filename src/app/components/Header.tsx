"use client";

import { useState } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { cn } from "../../lib/utils";

const NavLink_data = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/works", label: "MY WORKS" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="h-[8.9375rem] block fixed inset-x-0 top-0 z-[1000] py-6 max-md:h-22 md:max-lg:h-24.5 bg-background/80 backdrop-blur-md">
        <div className="h-full flex w-full max-w-320 mx-auto px-4 md:px-8 justify-between items-center">

          {/* Logo */}
          <a className="block cursor-pointer z-50" href="/">
            <img
              className="w-46.5 h-20 block max-w-full overflow-clip [filter:drop-shadow(var(--clr-0)_0px_0px_5px)] max-md:w-[5.8125rem] max-md:h-10 md:max-lg:w-29 md:max-lg:h-12.5"
              alt="Ajith KumarStudio"
              src="/assets/cloned/images/f068e3c48022.png"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="flex gap-10 max-lg:hidden">
            {NavLink_data.map((d, i) => (
              <a
                key={i}
                className="block relative py-2 [font-family:Outfit,_sans-serif] text-sm font-bold leading-4.5 tracking-[0.72px] uppercase cursor-pointer hover:text-primary transition-colors"
                href={d.href}
              >
                {d.label}
              </a>
            ))}
          </nav>

          {/* Actions & Hamburger */}
          <div className="flex items-center gap-4 md:gap-6 z-50">
            <ThemeToggleButton />

            <a className="h-[2.0625rem] border border-solid border-surface-3 flex relative z-1 py-2 px-5 rounded-[50px] justify-center items-center overflow-hidden text-xs font-semibold leading-[0.9375rem] tracking-[1.2px] uppercase cursor-pointer max-lg:hidden hover:bg-primary hover:text-white transition-colors" href="/contact">
              LET'S START
            </a>

            <button
              className="w-6 h-5 min-w-0 flex flex-col justify-between items-center cursor-pointer max-lg:flex hidden z-50"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-full h-[2px] bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`w-full h-[2px] bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[2px] bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-[900] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center gap-8">
          {NavLink_data.map((d, i) => (
            <a
              key={i}
              className="text-2xl font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              href={d.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {d.label}
            </a>
          ))}
          <a className="mt-4 px-8 py-3 border-2 border-primary text-primary rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-colors" href="/contact" onClick={() => setIsMenuOpen(false)}>
            LET'S START
          </a>
        </nav>
      </div>
    </>
  );
}
