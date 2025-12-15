/**
 * @fileoverview Tarjeta visual para proyectos individuales.
 * Se usa en grids o listas de portafolio.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

/**
 * Tarjeta de proyecto con imagen, descripción y CTA.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {StaticImageData} props.image
 * @param {string} [props.ctaText]
 * @param {string} [props.ctaLink]
 * @param {string} [props.className]
 */
export default function ProjectCard({
  title,
  description,
  image,
  ctaText = "Ver más",
  ctaLink = "#",
  className = "",
}) {
  return (
    <article
      className={`group flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {/* Imagen */}
      <Link
        href={ctaLink}
        aria-label={`Ver proyecto: ${title}`}
        className="relative block w-full aspect-[16/9] overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          quality={90}
          placeholder="blur"
          loading="lazy" 
        />
      </Link>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4 text-black">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {title}
        </h3>

        <p className="text-sm md:text-base text-neutral-700 line-clamp-3 my-2">
          {description}
        </p>

        <Link
          href={ctaLink}
          className="mt-auto underline decoration-pink-500 decoration-2 underline-offset-4 font-medium hover:opacity-80 transition-opacity"
        >
          {ctaText}
        </Link>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  className: PropTypes.string,
};
