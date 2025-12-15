/**
 * @fileoverview Componente `Slider`
 *
 * Carrusel de imágenes con soporte para paginación, navegación y autoplay.
 * Basado en Swiper.js e integrado con Next.js Image para optimización automática.
 *
 * @module Slider
 * @requires swiper/react
 * @requires next/image
 */

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

/**
 * `Slider`
 *
 * Renderiza un carrusel de imágenes adaptable, con soporte para:
 * - Autoplay opcional.
 * - Breakpoints configurables.
 * - Paginación y botones de navegación.
 *
 * @example
 * ```jsx
 * import Slider from "@ui/Slider";
 * import img1 from "@/assets/gallery/1.webp";
 * import img2 from "@/assets/gallery/2.webp";
 *
 * export default function HomeGallery() {
 *   return (
 *     <section className="py-10">
 *       <h2 className="text-3xl font-bold text-center mb-8">Nuestra Galería</h2>
 *       <Slider
 *         images={[img1, img2, "/assets/gallery/3.webp"]}
 *         autoplay
 *         delay={4000}
 *         slidesPerViewSm={1}
 *         slidesPerViewXL={4}
 *         spaceBetween={20}
 *       />
 *     </section>
 *   );
 * }
 * ```
 *
 * @param {Object} props
 * @param {(string|{src:string,alt?:string})[]} props.images - Lista de imágenes o rutas.
 * @param {number} [props.spaceBetween=0] - Espacio entre slides en píxeles.
 * @param {boolean} [props.pagination=true] - Muestra los puntos de paginación.
 * @param {boolean} [props.navigation=false] - Habilita flechas de navegación.
 * @param {boolean} [props.autoplay=false] - Activa autoplay del slider.
 * @param {number} [props.delay=3000] - Tiempo entre slides (ms).
 * @param {string} [props.className=""] - Clases Tailwind adicionales.
 * @param {string} [props.imageClass] - Clases Tailwind para las imágenes.
 * @param {number} [props.slidesPerViewXL=5] - Slides visibles en pantallas grandes (≥1280px).
 * @param {number} [props.slidesPerViewSm=1] - Slides visibles en pantallas pequeñas.
 *
 * @returns {JSX.Element} Carrusel de imágenes adaptable.
 */

export default function Slider({
  images = [],
  spaceBetween = 0,
  pagination = true,
  navigation = false,
  autoplay = false,
  delay = 3000,
  className = "",
  imageClass = "rounded-lg w-full h-auto object-cover",
  slidesPerViewXL = 5,
  slidesPerViewSm = 1,
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      loop
      autoplay={
        autoplay
          ? {
              delay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      breakpoints={{
        0: {
          slidesPerView: slidesPerViewSm,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: slidesPerViewXL,
        },
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className={`w-full ${className}`}
      aria-label="Carrusel de imágenes"
    >
      {images.map((img, index) => {
        const src = typeof img === "string" ? img : img?.src;
        const alt =
          typeof img === "string" ? `Imagen ${index + 1}` : img?.alt || `Imagen ${index + 1}`;

        return (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={600}
                className={imageClass}
                loading="lazy"
                quality={90}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                       
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
