"use client";

import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = savedTheme || (systemPrefersLight ? "light" : "dark");
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button 
      className="block mr-6 [font-family:Arial] text-[1.1875rem] leading-5.5 text-center cursor-pointer" 
      aria-label="Toggle Light/Dark Theme" 
      id="theme-toggle"
      onClick={toggleTheme}
    >
      <i 
        className={`inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-[1.1875rem] ${
          theme === "light" ? "before:content-['']" : "before:content-['']"
        } before:text-foreground before:text-[1.1875rem] before:font-black before:leading-[1.1875rem] before:text-center`} 
        id="theme-icon" 
      />
    </button>
  );
}
