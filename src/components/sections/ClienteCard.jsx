/**
 * @fileoverview Tarjeta de cliente/proyecto con imagen + video en hover.
 *
 * La imagen se oculta suavemente y muestra un video al pasar el cursor.
 */

import Link from "next/link";
import Image from "next/image";

/**
 * `ClienteCard`
 *
 * Tarjeta interactiva para portafolio o casos de éxito.
 * Muestra imagen estática y, en hover, un video autoplay.
 *
 * @example
 * <ClienteCard
 *   imageSrc="/img/cliente.webp"
 *   videoSrc="/videos/cliente.mp4"
 *   title="Cliente X"
 *   link="/portafolio/cliente-x"
 * />
 *
 * @param {string} imageSrc   Imagen de portada.
 * @param {string} videoSrc   Video que aparece en hover.
 * @param {string} alt        Texto alternativo.
 * @param {string} title      Nombre del cliente o proyecto.
 * @param {string} link       URL del proyecto.
 * @param {string} [description] Texto breve opcional.
 * @param {string} [mediaHeight="450px"] Altura del contenedor visual.
 */
export default function ClienteCard({
  imageSrc,
  videoSrc,
  alt,
  title,
  link,
  description,
  mediaHeight = "450px",
}) {
  return (
    <article className="w-full group">
      <Link href={link} className="w-full">
        <div
          className="w-full overflow-hidden rounded-md bg-neutral-100"
          style={{ height: mediaHeight }}
        >
          <div className="relative h-full w-full">
            {/* Imagen */}
            <Image
            
              src={imageSrc}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover
                         transition-opacity duration-500 ease-in-out
                         group-hover:opacity-0"
              style={{ willChange: "opacity" }}
            />

            {/* Video */}
            <video
              src={videoSrc}
              muted
              loading="lazy"
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover
                         opacity-0 transition-opacity duration-500 ease-in-out
                         group-hover:opacity-100"
              style={{ willChange: "opacity" }}
            />
          </div>
        </div>

        <h3 className="mt-3 text-lg font-bold text-neutral-900">{title}</h3>

        {description && (
          <p className="text-sm text-neutral-700 leading-relaxed">
            {description}
          </p>
        )}
      </Link>
    </article>
  );
}
