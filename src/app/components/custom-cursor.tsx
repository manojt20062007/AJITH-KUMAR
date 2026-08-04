"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const spiderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const logoPos = useRef({ x: 0, y: 0 });
  const spiderPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Initial positioning to prevent jump
      if (logoPos.current.x === 0 && logoPos.current.y === 0) {
        logoPos.current = { x: e.clientX, y: e.clientY };
        spiderPos.current = { x: e.clientX, y: e.clientY + 150 };
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

    let animationFrameId: number;
    let time = 0;
    const render = () => {
      time += 0.01;

      // 1. Smoothly move the Spider Logo (Cursor) towards the real mouse position
      logoPos.current.x += (mousePos.current.x - logoPos.current.x) * 0.25;
      logoPos.current.y += (mousePos.current.y - logoPos.current.y) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${logoPos.current.x}px, ${logoPos.current.y}px, 0)`;
      }

      // 2. Target position for Spider-Man is always 150px below the Spider Logo (not the raw mouse)
      const targetX = logoPos.current.x;
      const targetY = logoPos.current.y + 150;

      // 3. Lerp physics for Spider-Man to smoothly float to his target (slower than the logo so it looks heavy)
      spiderPos.current.x += (targetX - spiderPos.current.x) * 0.08;
      spiderPos.current.y += (targetY - spiderPos.current.y) * 0.08;

      // 4. Calculate dynamic rotation so Spider-Man tilts towards the direction he is swinging
      // We calculate the angle between the spider logo and Spider-Man
      const dx = spiderPos.current.x - logoPos.current.x;
      const dy = spiderPos.current.y - logoPos.current.y;
      // Using atan2 to find the angle of the string relative to straight down
      const angle = Math.atan2(-dx, dy) * (180 / Math.PI);

      if (spiderRef.current) {
        // Apply position and rotation!
        spiderRef.current.style.transform = `translate3d(${spiderPos.current.x}px, ${spiderPos.current.y}px, 0) rotate(${angle}deg)`;
      }

      // Draw the dynamic, curved web line connecting the Logo and Spider-Man
      if (pathRef.current) {
        const startX = logoPos.current.x;
        const startY = logoPos.current.y;
        const endX = spiderPos.current.x;
        const endY = spiderPos.current.y;

        // Control point for the Bezier curve (midpoint)
        let midX = (startX + endX) / 2;
        let midY = (startY + endY) / 2;

        // Calculate physics bend: when moving fast, the line bows outwards due to "air resistance"
        const diffX = targetX - spiderPos.current.x;

        // Apply a dynamic sag offset that curves the line based on momentum + subtle sine wave wobble
        midX -= diffX * 0.4; // bow out in opposite direction of movement
        midY += 25 + Math.sin(time) * 5; // gravity sag + subtle wind wobble

        // Update SVG path data dynamically (M = Move To, Q = Quadratic Curve To)
        pathRef.current.setAttribute("d", `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`);
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform">
        <div
          className={`absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out flex items-center justify-center ${isHovering ? "scale-[1.5] drop-shadow-[0_0_8px_var(--primary)]" : "scale-100 drop-shadow-md"}`}
        >
          <img src="/1.png" alt="Cursor" className="w-full h-full object-contain pointer-events-none" />
        </div>
      </div>

      {/* Dynamic Web Line SVG Layer */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999997]" style={{ willChange: 'contents' }}>
        <path ref={pathRef} stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

      <div ref={spiderRef} className="fixed top-0 left-0 pointer-events-none z-[999998] will-change-transform" style={{ transformOrigin: 'top center' }}>
        <style>{`
          @keyframes spidermanBob {
            0%, 100% { transform: translate(-50%, -10px) rotate(0deg); }
            50% { transform: translate(-50%, -10px) rotate(5deg); }
          }
          .spider-graphic {
            animation: spidermanBob 4s ease-in-out infinite;
            transform-origin: top center;
          }
        `}</style>

        {/* Spider-Man Hanging Graphic */}
        <div className="spider-graphic z-50 absolute top-0 left-0 flex flex-col items-center w-24">
          <img src="/spiderman.png" alt="Spider-Man" className="w-full h-auto drop-shadow-2xl object-contain pointer-events-none" />
        </div>
      </div>
    </>
  );
}
