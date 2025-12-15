"use client";

import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { gsap } from "gsap";

import {
  animateFadeInFromBottom,
  applyHoverEffect,
} from "@animations/gsapAnimations";

/**
 * Imagen estilizada con animación GSAP.
 *
 * @param {Object} props
 */
export default function PictureFrame({
  src,
  alt = "",
  width = "auto",
  height = "auto",
  objectFit = "cover",
  rounded = "rounded-xl",
  shadow = "shadow-md",
  loading = "lazy",
  className = "",
  sizes = "100vw",
  srcSet = "",
  border = false,
  animated = true,    
  hoverEffect = false, 
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  /** Animación de entrada */
  useLayoutEffect(() => {
    if (!animated || !imgRef.current) return;

    const ctx = gsap.context(() => {
      animateFadeInFromBottom(imgRef.current, containerRef.current);

      if (hoverEffect) {
        applyHoverEffect([imgRef.current]);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [animated, hoverEffect]);

  /** Clases dinámicas */
  const finalClass = clsx(
    "w-full h-auto select-none transition-transform duration-300",
    objectFit === "contain" ? "object-contain" : "object-cover",
    rounded,
    shadow,
    border && "border border-gray-300",
    className
  );

  return (
    <figure
      ref={containerRef}
      className="relative w-full"
      role="figure"
      aria-labelledby={alt ? "image-caption" : undefined}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={finalClass}
        srcSet={srcSet}
        sizes={sizes}
        decoding="async"
        draggable="false"
      />

      {alt && (
        <figcaption id="image-caption" className="sr-only">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

PictureFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  rounded: PropTypes.string,
  shadow: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  className: PropTypes.string,
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  border: PropTypes.bool,
  animated: PropTypes.bool,   
  hoverEffect: PropTypes.bool,   
};
