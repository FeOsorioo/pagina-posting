/**
 * @fileoverview Banner interactivo con cambio de imagen en hover o tap.
 *
 * En desktop → cambia la imagen al pasar el cursor.
 * En mobile → cambia la imagen al tocar.
 *
 * Soporta imágenes distintas para móvil y escritorio.
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import banner1m from "@/assets/nosotros/banner_responsive.webp";
import banner2m from "@/assets/nosotros/banner_responsive.webp";
import banner1 from "@/assets/nosotros/banner1.webp";
import banner2 from "@/assets/nosotros/banner2.webp";

/**
 * `BannerHover`
 *
 * Banner responsivo que alterna entre 2 imágenes
 * dependiendo del hover (desktop) o tap (móvil).
 *
 * @example
 * <BannerHover />
 */
function BannerHover() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta mobile según el ancho
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentImage = isMobile
    ? hovered ? banner2m : banner1m
    : hovered ? banner2 : banner1;

  return (
    <section
      className="relative w-full min-h-[40vh] md:min-h-[90vh] overflow-hidden"
      aria-label="Banner responsivo"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          key={currentImage.src}
          src={currentImage}
          alt="Banner interactivo"
          fill
        
          sizes="100vw"
          className="object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Área interactiva */}
      <button
        type="button"
        aria-label={hovered ? "Mostrar primer banner" : "Mostrar segundo banner"}
        className="absolute inset-0 z-10 cursor-pointer touch-none"
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        onTouchStart={() => setHovered((v) => !v)}
      />
    </section>
  );
}

export default BannerHover;
