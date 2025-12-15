/**
 * @fileoverview Componente `BackgroundWrapper`
 *
 * Contenedor flexible que aplica un fondo (imagen o textura) a cualquier sección.
 * Ideal para banners o bloques decorativos.
 *
 * @module BackgroundWrapper
 */

"use client";

import PropTypes from "prop-types";

/**
 * `BackgroundWrapper`
 *
 * Envuelve contenido aplicando un fondo opcional y estilos personalizados.
 * Permite ocultar el fondo en móvil y usar animación de aparición.
 *
 * Ejemplo:
 * ```jsx
 * <BackgroundWrapper
 *   imageUrl={texture.src}
 *   classBG="bg-cover bg-center"
 *   backgroundSize="100% auto"
 * >
 *   <h1>Contenido destacado</h1>
 * </BackgroundWrapper>
 * ```
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido interno.
 * @param {string} [props.imageUrl] - Imagen de fondo.
 * @param {string} [props.className] - Clases para el contenedor.
 * @param {string} [props.classBG] - Clases Tailwind aplicadas al fondo.
 * @param {boolean} [props.animated=false] - Activa animación fade-in.
 * @param {string} [props.alt] - Texto alternativo del fondo.
 * @param {string} [props.backgroundSize] - Valor para `background-size`.
 * @param {boolean} [props.hideOnMobile=true] - Oculta el fondo en pantallas pequeñas.
 */
export default function BackgroundWrapper({
  children,
  imageUrl,
  className = "",
  animated = false,
  alt = "",
  backgroundSize,
  classBG,
  hideOnMobile = true,
}) {
  const wrapperClass = `${classBG ?? ""} relative w-full ${className || "bg-white"} ${
    hideOnMobile ? "hide-bg-mobile" : ""
  }`;

  const style = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
    backgroundSize,
  };

  return (
    <div
      className={wrapperClass}
      style={style}
      role={alt ? undefined : "presentation"}
      aria-hidden={imageUrl && !children ? "true" : undefined}
    >
      <div className={`relative z-10 ${animated ? "animate-fade-in" : ""}`}>
        {children}
      </div>

      {hideOnMobile && (
        <style jsx global>{`
          @media (max-width: 639px) {
            .hide-bg-mobile {
              background: none !important;
            }
          }
        `}</style>
      )}
    </div>
  );
}

BackgroundWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  imageUrl: PropTypes.string,
  className: PropTypes.string,
  classBG: PropTypes.string,
  animated: PropTypes.bool,
  alt: PropTypes.string,
  backgroundSize: PropTypes.string,
  hideOnMobile: PropTypes.bool,
};
