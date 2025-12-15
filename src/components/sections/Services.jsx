/**
 * @fileoverview Componente `Services`
 *
 * Muestra una cuadrícula animada de servicios usando GSAP.
 * Incluye animación al hacer scroll y efecto zoom al pasar el cursor.
 *
 * Si `allServices` es false, oculta el servicio correspondiente al slug actual.
 */

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceList } from "@/data/services";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

/**
 * `Services`
 *
 * Renderiza una cuadrícula de servicios con animaciones de entrada
 * y un zoom suave al hacer hover.
 *
 * @param {boolean} [allServices=false]  
 *    - true: muestra todos los servicios  
 *    - false: oculta el servicio correspondiente a la URL actual
 *
 * @example
 * <Services allServices={false} />
 */
export default function Services({ allServices }) {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const hoverTimelines = useRef([]);
  const mainTimeline = useRef(null);

  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  const servicesToRender = allServices
    ? serviceList
    : serviceList.filter((item) => item.slug !== currentSlug);

  /** Animación principal al hacer scroll */
  useGSAP(
    () => {
      if (typeof window !== "undefined" && window.innerWidth < 1024) return;

      const boxes = gsap.utils.toArray(".box");
      if (boxes.length !== 5) return;

      mainTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      mainTimeline.current
        .fromTo(boxes[0], { x: -100, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(boxes[1], { x: -120, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.3")
        .fromTo(boxes[2], { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.3")
        .fromTo(boxes[3], { x: 120, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.3")
        .fromTo(
          boxes[4],
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, ease: "back.out(1.7)" },
          "-=0.2"
        );

      return () => {
        mainTimeline.current?.kill();
        hoverTimelines.current.forEach((tl) => tl?.kill());
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  /** Animación del hover (zoom) */
  const handleHover = useCallback((index, direction) => {
    const element = imageRefs.current[index];
    if (!element) return;

    hoverTimelines.current[index]?.kill();

    hoverTimelines.current[index] = gsap.to(element, {
      scale: direction === "in" ? 1.2 : 1,
      duration: 0.2,
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full px-4 py-16 text-center">
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-6 xl:gap-4">
        {servicesToRender.map((item, index) => (
          <div
            key={index}
            className="box flex flex-col items-center w-fit focus-visible:ring-2 focus-visible:ring-pink-500 outline-none"
            tabIndex={0}
            role="button"
            aria-label={item.title}
            onMouseEnter={() => handleHover(index, "in")}
            onMouseLeave={() => handleHover(index, "out")}
            onFocus={() => handleHover(index, "in")}
            onBlur={() => handleHover(index, "out")}
          >
            {/* Ícono */}
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="relative mb-3 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-36 lg:w-36 cursor-pointer transition-transform"
            >
              <Link href={item.ctaLink} className="block">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 144px, 96px"
                  className="object-contain"
                  quality={100}
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Texto */}
            <Link href={item.ctaLink}>
              <div className="text-center leading-tight min-h-[3.5rem] flex flex-col justify-start">
                <span className="text-lg sm:text-lg md:text-xl">
                  {item.title.split(" ")[0]}
                </span>
                <span className="text-lg font-bold sm:text-lg md:text-xl">
                  {item.title.split(" ")[1]}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
