"use client";

import { useEffect } from "react";

export function ParallaxTracker() {
  useEffect(() => {
    // Only run on devices with a mouse
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize between -1 and 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      // Lerp for smooth inertia
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      document.body.style.setProperty('--px', currentX.toString());
      document.body.style.setProperty('--py', currentY.toString());

      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
