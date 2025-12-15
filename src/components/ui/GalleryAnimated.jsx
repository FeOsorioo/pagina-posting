/**
 * Componente `GalleryAnimated`
 *
 * Renderiza dos galerías de imágenes con animaciones suaves usando GSAP.
 * Cada galería puede tener su propio tamaño máximo.
 *
 * @param {Object} props
 * @param {Array} props.gallery_a - Primer grupo de imágenes.
 * @param {string} [props.max_w_a="max-w-[20%]"] - Ancho máximo para imágenes del grupo A.
 * @param {Array} props.gallery_b - Segundo grupo de imágenes.
 * @param {string} [props.max_w_b="max-w-[20%]"] - Ancho máximo para imágenes del grupo B.
 *
 * @returns JSX.Element
 */

"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateFadeInFromBottom, applyHoverEffect } from "@animations/gsapAnimations";
import Image from "next/image";

export default function GalleryAnimated({
  gallery_a = [],
  max_w_a = "max-w-[20%]",
  gallery_b = [],
  max_w_b = "max-w-[20%]",
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!gallery_a.length && !gallery_b.length) return;

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".gallery-img");
      const wrappers = gsap.utils.toArray(".gallery");

      animateFadeInFromBottom(images, containerRef.current);
      applyHoverEffect(wrappers);
    }, containerRef);

    return () => ctx.revert();
  }, [gallery_a.length, gallery_b.length]);

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-8">

      {/* Grupo A */}
      {gallery_a.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {gallery_a.map((src, i) => (
            <div key={i} className={`gallery relative overflow-hidden rounded-lg shadow-md flex-[1_1_200px] ${max_w_a} aspect-square`}>
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                fill
                className="gallery-img object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                quality={90}
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      )}

      {/* Grupo B */}
      {gallery_b.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {gallery_b.map((src, i) => (
            <div key={i} className={`gallery relative overflow-hidden rounded-lg shadow-md flex-[1_1_200px] ${max_w_b} aspect-square`}>
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                fill
                className="gallery-img object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                quality={90}
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
