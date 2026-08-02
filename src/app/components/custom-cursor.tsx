"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over something interactive or the hero text
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-component='button']") ||
        target.closest(".group") ||
        target.closest("h1") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform">
      <div 
        className={`absolute top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out ${isHovering ? "scale-[0.5]" : "scale-100"}`}
        style={{ mixBlendMode: 'difference' }}
      />
      <div 
        className={`absolute top-0 left-0 w-8 h-8 border-[1.5px] border-primary rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isHovering ? "scale-[1.6] bg-primary/10 border-primary/30" : "scale-100"}`}
      />
    </div>
  );
}
