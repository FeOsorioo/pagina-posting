/**
 * @fileoverview Componente `DynamicParagraph`
 *
 * Texto animado en bloques, con entrada suave usando GSAP.
 * Ideal para secciones narrativas, storytelling o contenido explicativo.
 *
 * @module DynamicParagraph
 */

"use client";

import React, { useRef, useEffect, Children } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

/**
 * `DynamicParagraph`
 *
 * Renderiza uno o varios párrafos con animación tipo fade + slide.
 *
 * @example
 * ```jsx
 * <DynamicParagraph
 *   textcolor="text-black"
 *   fontSize="text-lg md:text-xl"
 *   align="text-left"
 * >
 *   {[
 *     "Creamos estrategias que conectan con las personas.",
 *     "Cada historia tiene su propio ritmo."
 *   ]}
 * </DynamicParagraph>
 * ```
 *
 * @param {Object} props
 * @param {React.ReactNode|React.ReactNode[]} props.children - Texto o bloques a mostrar.
 * @param {string} [props.as="p"]          - Etiqueta para cada párrafo.
 * @param {string} [props.containerAs="div"] - Contenedor principal.
 * @param {string} [props.textcolor="text-gray-800"] - Color del texto (Tailwind).
 * @param {string} [props.fontSize="text-lg md:text-xl"] - Tamaño del texto.
 * @param {string} [props.fontWeight="font-normal"] - Peso tipográfico.
 * @param {string} [props.align="text-left"] - Alineación.
 * @param {string} [props.margin=""] - Márgenes adicionales.
 * @param {number} [props.delay=0] - Retraso inicial de animación.
 * @param {boolean} [props.animate=true] - Activar/desactivar animación.
 * @param {string} [props.maxWidth="max-w-3xl"] - Ancho máximo del bloque.
 * @param {string} [props.lineHeight="leading-relaxed"] - Espaciado entre líneas.
 * @param {string} [props.className=""] - Clases extra del contenedor.
 *
 * @returns {JSX.Element}
 */
export default function DynamicParagraph({
  children,
  as = "p",
  containerAs = "div",
  textcolor = "text-gray-800",
  fontSize = "text-lg md:text-xl",
  fontWeight = "font-normal",
  align = "text-left",
  margin = "",
  delay = 0,
  animate = true,
  maxWidth = "max-w-3xl",
  lineHeight = "leading-relaxed",
  className = "",
}) {
  const itemRefs = useRef([]);
  const Container = containerAs;
  const Tag = as;

  // Animación GSAP: Fade + slide
  useEffect(() => {
    if (!animate) return;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: delay + index * 0.15,
          ease: "power2.out",
        }
      );
    });
  }, [animate, delay]);

  const itemsArray = Children.toArray(children);

  return (
    <Container
      className={`${maxWidth} ${margin} ${className} space-y-4`}
      aria-label="Texto animado"
    >
      {itemsArray.map((child, index) => (
        <Tag
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className={`${textcolor} ${fontSize} ${fontWeight} ${align} ${lineHeight}`}
        >
          {child}
        </Tag>
      ))}
    </Container>
  );
}

DynamicParagraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  as: PropTypes.string,
  containerAs: PropTypes.string,
  textcolor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  align: PropTypes.string,
  delay: PropTypes.number,
  animate: PropTypes.bool,
  maxWidth: PropTypes.string,
  lineHeight: PropTypes.string,
  className: PropTypes.string,
  margin: PropTypes.string,
};
