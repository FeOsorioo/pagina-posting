"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import logoRosado from "@/assets/logo_rosado.webp";
import logoBlanco from "@/assets/logo_blanco.webp";

/**
 * Componente Logo
 *
 * - Cambia de color según el scroll (si no se fuerza un color fijo).
 * - Opcionalmente puede recibir "rosado" o "blanco".
 *
 * @param {Object} props
 * @param {"rosado" | "blanco"} [props.color] - Color del logo (opcional).
 */
export default function Logo({ color }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const triggerPoint = window.innerHeight * 0.45;

    const handleScroll = () => {
      setScrolled(window.scrollY > triggerPoint);
    };

    // Listener más eficiente
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Selección de logo (memorizada para no recalcular en cada render) */
  const logoSrc = useMemo(() => {
    if (color === "rosado") return logoRosado;
    if (color === "blanco") return logoBlanco;
    return scrolled ? logoRosado : logoBlanco;
  }, [color, scrolled]);

  return (
    <div className="fixed top-3 left-6 z-50 p-6 transition-all duration-500">
      <Link href="/" aria-label="Ir al inicio">
        <Image
          src={logoSrc}
          loading="lazy"
          width={110}
          height={110}
          alt="Posting Logo"
          className={`
            w-10 sm:w-12 md:w-14
            transition-all duration-500 
            drop-shadow-lg
            ${scrolled ? "opacity-100" : "opacity-95"}
          `}
        />
      </Link>
    </div>
  );
}
