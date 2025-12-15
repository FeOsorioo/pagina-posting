"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import FullScreenMenu from "@layout/Header/FullScreenMenu";

export default function HamburgerHeader() {
  const [scrolledPastHalf, setScrolledPastHalf] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();
  const pathColor = pathname.includes("portafolio/universal-de-mudanzas");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.45;
      setScrolledPastHalf(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const color = pathColor ? "#ffffff" : "#e60076";
  return (
    <>
      <header className="fixed top-[0.5] right-6 z-50 px-8 pb-8 pt-10">
        <button
          onClick={toggleMenu}
          className="focus:outline-none cursor-pointer text-white transition-transform hover:scale-110"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >

          <FiMenu size={36} color={scrolledPastHalf ? "#e60076" : color} />

        </button>
      </header>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
