"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

/* Breakpoints estilo Tailwind */
const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };

export default function ImageSlider({
  images = [],
  imagesPerSlide = 1,
  autoplay = true,
  delay = 3000,
  margin = "",
  max_w_h = "max-h-[50vh]",
  gap = "gap-0"
}) {
  /** ==========================================
   * 🎯 Manejo de slides por breakpoint
   * ========================================== */
  const resolveSlidesPerView = useCallback(() => {
    if (typeof imagesPerSlide === "number") return imagesPerSlide;

    // ⛔ window sólo se usa en el cliente
    const w = window.innerWidth;

    return (
      (w >= breakpoints.xl && imagesPerSlide.xl) ||
      (w >= breakpoints.lg && imagesPerSlide.lg) ||
      (w >= breakpoints.md && imagesPerSlide.md) ||
      (w >= breakpoints.sm && imagesPerSlide.sm) ||
      imagesPerSlide.base ||
      1
    );
  }, [imagesPerSlide]);

  /** ==========================================
   * 🧊 Estado inicial seguro (SSR FRIENDLY)
   * ========================================== */
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    // Se ejecuta solo en el navegador → aquí sí existe window
    setSlidesPerView(resolveSlidesPerView());

    const onResize = () => setSlidesPerView(resolveSlidesPerView());
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [resolveSlidesPerView]);

  /** ==========================================
   * 🎞 Inicializar Embla
   * ========================================== */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  /** ==========================================
   * 🔁 Autoplay inteligente
   * ========================================== */
  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const interval = setInterval(() => emblaApi.scrollNext(), delay);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, delay]);

  /** ==========================================
   * 🧮 Tamaños dinámicos
   * ========================================== */
  const slideWidth = `${100 / slidesPerView}%`;
  const sizes = `${Math.ceil(100 / slidesPerView)}vw`;

  return (
    <section
      className={`w-full overflow-hidden p-0 mt-6 ${margin}`}
      aria-label="Carrusel de imágenes"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className={`flex min-w-0 ${gap}`}>
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ flex: `0 0 ${slideWidth}`, maxWidth: slideWidth }}
            >
              <Image
                src={img}
                width={1000}
                height={1000}
                alt={`Slide ${index + 1}`}
                className={`${max_w_h} w-full object-contain`}
                sizes={sizes}
              
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
