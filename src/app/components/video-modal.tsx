"use client";
import { useState } from "react";

export default function VideoModal({ videoUrl, children }: { videoUrl: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="absolute inset-0 z-50 bg-black animate-in fade-in duration-500">
        <button 
          className="absolute top-8 right-8 text-white text-4xl font-light hover:text-primary transition-colors z-[60] bg-black/40 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer" 
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
        >
          &times;
        </button>
        <iframe 
          src={videoUrl + "?autoplay=1&title=0&byline=0&portrait=0"} 
          className="w-full h-full border-none pointer-events-auto"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    );
  }

  return (
    <div onClick={(e) => { e.preventDefault(); setIsOpen(true); }} className="cursor-pointer z-10 relative flex justify-center">
      {children}
    </div>
  );
}
