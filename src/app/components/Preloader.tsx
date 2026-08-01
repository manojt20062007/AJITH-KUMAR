"use client";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => setVisible(false), 500); // Wait for CSS transition to finish
    };

    // If document is already fully loaded, just play a short 800ms animation so they see it
    if (document.readyState === "complete") {
      setTimeout(handleLoad, 800);
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback in case load takes excessively long (e.g., slow image)
      const timeout = setTimeout(handleLoad, 2500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100000] bg-black flex items-center justify-center transition-opacity duration-500 ease-in-out ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="relative flex items-center justify-center w-72 h-72">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-transparent border-t-primary border-b-primary animate-[spin_1.2s_linear_infinite] opacity-90 shadow-[0_0_20px_rgba(255,0,0,0.4)]"></div>
        
        {/* Inner spinning ring */}
        <div className="absolute inset-6 rounded-full border-l-4 border-r-4 border-transparent border-l-primary border-r-primary animate-[spin_1.8s_linear_infinite_reverse] opacity-70 shadow-[0_0_10px_rgba(255,0,0,0.3)]"></div>
        
        {/* Logo Icon */}
        <img 
          src="/assets/cloned/images/b0adffef7d54.png" 
          alt="Focus VFX Studio" 
          className="w-32 h-32 object-contain animate-pulse z-10 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
        />
      </div>
    </div>
  );
}
