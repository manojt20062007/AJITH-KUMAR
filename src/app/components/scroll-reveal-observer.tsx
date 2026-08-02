"use client";
import { useEffect } from "react";

export function ScrollRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Select all elements with the reveal-on-scroll class
    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return null;
}
