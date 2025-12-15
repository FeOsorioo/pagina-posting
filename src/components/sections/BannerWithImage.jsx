/**
 * @fileoverview Banner con imagen de fondo y texto animado con GSAP.
 *
 * Permite cambiar la imagen según el tamaño de pantalla
 * y ajustar alineación, posición y altura del banner.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * `BannerWithImage`
 *
 * Banner con imagen de fondo + título + descripción.
 * Incluye animación de entrada y soporte para imagen responsive.
 *
 * @example
 * <BannerWithImage
 *   title="Nuestro Blog"
 *   description="Historias que inspiran"
 *   backgroundImageUrl="/header.webp"
 *   backgroundImageUrlResponsive="/header-mobile.webp"
 *   align="left"
 *   justify="end"
 * />
 */
export default function BannerWithImage({
  title,
  description,
  backgroundImageUrl,
  backgroundImageUrlResponsive,
  textColor = "text-white",
  justify = "end",
  align = "center",
  height = "h-[30vh]",
  textSize = "text-4xl md:text-8xl",
  responsiveJustify = false,
}) {
  // Alineaciones horizontales y verticales
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const vertical = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  const justifyClass = responsiveJustify
    ? justify === "end"
      ? "justify-end md:justify-start"
      : justify === "start"
        ? "justify-start md:justify-end"
        : "justify-center"
    : vertical[justify];

  const titleRef = useRef(null);
  const descRef = useRef(null);

  // Cambia la imagen según el dispositivo
  const [currentBg, setCurrentBg] = useState(backgroundImageUrl);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    const updateBg = (e) => {
      setCurrentBg(
        e.matches ? backgroundImageUrlResponsive || backgroundImageUrl : backgroundImageUrl
      );
    };

    updateBg(mq);
    mq.addEventListener("change", updateBg);

    return () => mq.removeEventListener("change", updateBg);
  }, [backgroundImageUrl, backgroundImageUrlResponsive]);

  // Animación GSAP
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      className={`relative bg-cover bg-center ${height} px-6 py-24 pb-10 md:pb-[5rem]`}
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <div
        className={`max-w-4xl flex flex-col ${justifyClass} ${alignment[align]}
        gap-2 h-full ml-0 sm:ml-4 md:ml-8 lg:ml-16`}
      >
        {description && (
          <p ref={descRef} className={`text-2xl font-semibold ${textColor}`}>
            {description}
          </p>
        )}

        <h1
          ref={titleRef}
          className={`uppercase ${textSize} font-bold text-shadow-lg/85 ${textColor}`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
