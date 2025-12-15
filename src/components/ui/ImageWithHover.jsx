/**
 * Componente: ImageWithHover
 * 
 * Muestra una imagen que cambia por otra cuando el usuario pasa el mouse (hover).
 * Útil para portafolios, antes/después o efectos visuales simples.
 */

"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export default function ImageWithHover({
  image1,
  image2,
  height = "h-[350px]",
  alt = "Imagen con hover",

}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative w-full ${height} cursor-pointer select-none`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={hover ? image2 : image1}
        alt={alt}
        fill
        quality={95}
        sizes="(min-width: 1024px) 800px, 100vw"
        
        className="object-contain transition-opacity duration-500"
        loading="lazy" 
      />
    </div>
  );
}

ImageWithHover.propTypes = {
  image1: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  image2: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  height: PropTypes.string,
  alt: PropTypes.string,

};
