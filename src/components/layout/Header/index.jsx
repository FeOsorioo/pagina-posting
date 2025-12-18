"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import HamburgerHeader from "@layout/Header/HamburgerHeader";

/* ===========================================================
 * Header principal
 * =========================================================== */
export default function Header({ onOpenMenu, isMenuOpen = false }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(null);

  /* -------------------------------
   * Detectar tamaño de pantalla
   * ------------------------------- */
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkScreenSize();

    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Evita parpadeo inicial */
  if (isMobile === null) return null;

  const mustShowHamburger =
    isMobile || pathname === "/contacto" || pathname.includes("gracias");

  return mustShowHamburger ? (
    <HamburgerHeader onOpenMenu={onOpenMenu} />
  ) : (
    <FloatingHeader onOpenMenu={onOpenMenu} isMenuOpen={isMenuOpen} />
  );
}

/* ===========================================================
 * FloatingHeader — Desktop
 * =========================================================== */
function FloatingHeader({ onOpenMenu, isMenuOpen }) {
  const [hidden, setHidden] = useState(true);
  const headerRef = useRef(null);
  const forceVisible = useRef(false);
  const prevHidden = useRef(hidden);

  /* -------------------------------
   * Scroll (optimizado con rAF)
   * ------------------------------- */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const triggerPoint = window.innerHeight * 0.1;
          const isNearTop = window.scrollY <= triggerPoint;

          if (!forceVisible.current) {
            setHidden(!isNearTop);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------
   * Animación GSAP (accesible)
   * ------------------------------- */
  useEffect(() => {
    if (!headerRef.current) return;
    if (prevHidden.current === hidden) return;

    prevHidden.current = hidden;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.to(headerRef.current, {
      x: hidden ? "100%" : "0%",
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "power2.out",
    });
  }, [hidden]);

  /* -------------------------------
   * Zona lateral accesible
   * ------------------------------- */
  useEffect(() => {
    const zone = document.createElement("div");

    zone.style.position = "fixed";
    zone.style.top = "0";
    zone.style.right = "0";
    zone.style.width = "150px";
    zone.style.height = "100vh";
    zone.style.zIndex = "9999";
    zone.style.pointerEvents = "auto";
    zone.style.cursor="pointer";
    zone.style.background = "transparent";

    /* Accesibilidad */
    zone.setAttribute("tabindex", "0");
    zone.setAttribute("aria-hidden", "true");

    document.body.appendChild(zone);

    const show = () => {
      forceVisible.current = true;
      setHidden(false);
    };

    const hide = () => {
      forceVisible.current = false;
      setHidden(window.scrollY > 50);
    };

    zone.addEventListener("mouseenter", show);
    zone.addEventListener("focus", show);
    headerRef.current?.addEventListener("mouseleave", hide);
    zone.addEventListener("blur", hide);

    return () => {
      zone.removeEventListener("mouseenter", show);
      zone.removeEventListener("focus", show);
      zone.removeEventListener("blur", hide);
      headerRef.current?.removeEventListener("mouseleave", hide);
      document.body.removeChild(zone);
    };
  }, []);

  /* -------------------------------
   * Render
   * ------------------------------- */
  return (
    <header
      ref={headerRef}
      role="navigation"
      aria-label="Menú principal"
      style={{ willChange: "transform" }}
      className="fixed top-0 right-0 w-64 h-screen flex flex-col items-center justify-center z-40 overflow-hidden"
    >
      {/* SVG decorativo */}
      <svg
        aria-hidden="true"
        focusable="false"
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
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-haspopup="menu"
          aria-expanded={isMenuOpen}
          className="mb-6 p-3 ml-40 focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-1 bg-white mb-1" />
          <div className="w-8 h-1 bg-white mb-1" />
          <div className="w-8 h-1 bg-white" />
        </button>
      </div>
    </header>
  );
}
