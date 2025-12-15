"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

export default function PageLoader({ isVisible }) {
  const loaderRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [portal, setPortal] = useState(null);

  // Solo correr después de montar en cliente
  useEffect(() => {
    setMounted(true);
    setPortal(document.body);
  }, []);

  // Animaciones GSAP
  useEffect(() => {
    if (!loaderRef.current || !mounted) return;

    if (isVisible) {
      gsap.fromTo(
        loaderRef.current,
        { opacity: 0, scale: 0.95, filter: "blur(6px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(loaderRef.current, {
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
        duration: 0.6,
        pointerEvents: "none",
        ease: "power2.inOut",
      });
    }
  }, [isVisible, mounted]);

  // ⛔ En SSR no renderiza nada
  if (!mounted || !portal) return null;

  // ✔ Client-side: crear portal
  return createPortal(
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white opacity-0 pointer-events-none"
    >
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-pink-600 border-t-transparent"></div>
    </div>,
    portal
  );
}
