/**
 * @fileoverview Componente `DynamicTitle`
 *
 * Renderiza un título animado (H1–H6 u otro elemento) con entrada suave usando **GSAP**.
 * Ideal para encabezados principales o secciones que necesitan impacto visual.
 *
 * @module DynamicTitle
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * `DynamicTitle`
 *
 * Título animado con configuración flexible (color, tamaño, alineación, tipo de etiqueta).
 *
 * @component
 * @example
 * ```jsx
 * <DynamicTitle
 *   textcolor="text-black"
 *   fontSize="text-6xl"
 *   align="text-center"
 *   delay={0.3}
 * >
 *   Diseño que comunica
 * </DynamicTitle>
 * ```
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children       - Contenido del título.
 * @param {string} [props.textcolor="text-gray-900"] - Color del texto (Tailwind).
 * @param {string} [props.fontSize="text-4xl"]       - Tamaño del texto (Tailwind).
 * @param {string} [props.fontWeight="font-bold"]    - Peso tipográfico.
 * @param {string} [props.align="text-left"]         - Alineación del texto.
 * @param {number} [props.delay=0]                   - Retraso de la animación.
 * @param {boolean} [props.animate=true]             - Activa/desactiva animación.
 * @param {string} [props.margin=""]                 - Márgenes adicionales.
 * @param {string} [props.as="h1"]                   - Etiqueta HTML del título.
 * @param {string} [props.width="w-full max-w-3xl break-words"] - Control del ancho.
 *
 * @returns {JSX.Element}
 */
export default function DynamicTitle({
  children,
  textcolor = "text-gray-900",
  fontSize = "text-4xl",
  fontWeight = "font-bold",
  align = "text-left",
  delay = 0,
  animate = true,
  margin = "",
  as = "h1",
  width = "w-full max-w-3xl break-words",
}) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!animate || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
      }
    );
  }, [animate, delay]);

  const TitleTag = as;

  return (
    <TitleTag
      ref={titleRef}
      className={`${textcolor} ${fontSize} ${fontWeight} ${align} ${margin} ${width}`}
    >
      {children}
    </TitleTag>
  );
}
