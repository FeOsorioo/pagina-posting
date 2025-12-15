"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HamburgerHeader from "@layout/Header/HamburgerHeader";

gsap.registerPlugin(useGSAP);

export default function Header({ onOpenMenu }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(null);

  // Detecta si es móvil
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();

    const handleResize = () => {
      // Evita ejecutar cambios si el valor no varía
      const mobile = window.innerWidth < 1024;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mientras detecta el screen size → evita parpadeo
  if (isMobile === null) return null;

  const mustShowHamburger =
    isMobile || pathname === "/contacto" || pathname.includes("gracias");

  return mustShowHamburger ? (
    <HamburgerHeader onOpenMenu={onOpenMenu} />
  ) : (
    <FloatingHeader onOpenMenu={onOpenMenu} />
  );
}

/* ===========================================================
 * FloatingHeader — Header flotante para pantallas grandes
 * =========================================================== */
function FloatingHeader({ onOpenMenu }) {
  const [hidden, setHidden] = useState(true);
  const headerRef = useRef(null);
  const forceVisible = useRef(false);

  /* -------------------------------
   * Control del scroll
   * ------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.1;
      const isNearTop = window.scrollY <= triggerPoint;

      if (!forceVisible.current) {
        setHidden(!isNearTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------
   * Animación con GSAP
   * ------------------------------- */
  useEffect(() => {
    if (!headerRef.current) return;

    gsap.to(headerRef.current, {
      x: hidden ? "100%" : "0%",
      duration: 0.6,
      ease: "power2.out",
    });
  }, [hidden]);

  /* -------------------------------
   * Zona de activación lateral
   * ------------------------------- */
  useEffect(() => {
    const zone = document.createElement("div");
    zone.style.position = "fixed";
    zone.style.top = 0;
    zone.style.right = 0;
    zone.style.width = "6px";
    zone.style.height = "100vh";
    zone.style.zIndex = "9999";
    zone.style.pointerEvents = "auto";
    document.body.appendChild(zone);

    const showOnHover = () => {
      forceVisible.current = true;
      setHidden(false);
    };

    const hideOnLeave = () => {
      forceVisible.current = false;
      const shouldHide = window.scrollY > 50;
      setHidden(shouldHide);
    };

    zone.addEventListener("mouseenter", showOnHover);
    headerRef.current?.addEventListener("mouseleave", hideOnLeave);

    return () => {
      zone.removeEventListener("mouseenter", showOnHover);
      headerRef.current?.removeEventListener("mouseleave", hideOnLeave);
      document.body.removeChild(zone);
    };
  }, []);

  /* -------------------------------
   * Render
   * ------------------------------- */
  return (
    <header
      ref={headerRef}
      className="fixed top-0 right-0 w-64 h-screen flex flex-col items-center justify-center z-40 overflow-hidden"
    >
      {/* Ola SVG */}
      <svg
        viewBox="0 0 100 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute right-0 top-0 h-full w-[90px] z-0 rotate-180"
      >
        <path d="M0,0 Q200,200 0,400 Z" fill="#000000" />
      </svg>

      {/* Botón hamburguesa */}
      <div className="relative z-10">
        <button
          onClick={onOpenMenu}
          className="mb-6 p-3 ml-40 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="w-8 h-1 bg-white mb-1" />
          <div className="w-8 h-1 bg-white mb-1" />
          <div className="w-8 h-1 bg-white" />
        </button>
      </div>
    </header>
  );
}
