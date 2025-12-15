"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

function toSrc(maybeImport) {
  return typeof maybeImport === "string" ? maybeImport : maybeImport?.src || "";
}

export default function BackgroundVideo({
  mp4Src,
  mp4SrcMobile,
  fallbackImage,
  className = "h-[80vh]",
  hideOnMobile = false,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  objectFit = "cover",
  objectPosition = "center",
}) {
  const videoRef = useRef(null);

  const videoSrc = toSrc(mp4Src);
  const videoSrcMobile = toSrc(mp4SrcMobile);
  const fallbackSrc = toSrc(fallbackImage);

  useEffect(() => {
    videoRef.current?.play?.().catch(() => {});
  }, []);

  return (
    <div
      className={`relative w-full bg-transparent border-0 overflow-hidden ${className}`}
    >
      {/* Si se oculta en móvil → mostrar imagen */}
      {hideOnMobile && fallbackSrc ? (
        <>
          {/* Imagen en móviles */}
          <div className="sm:hidden relative w-full h-[100svh]">
            <Image
              src={fallbackSrc}
              alt="Fondo alternativo"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
              quality={70}
            />
          </div>

          {/* Video en desktop */}
          <div className="hidden sm:block absolute inset-0">
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover block m-0 p-0"
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              playsInline={playsInline}
              preload="metadata"
              decoding="async"
              style={{ pointerEvents: "none", objectPosition }}
            />
          </div>
        </>
      ) : (
        <>
          {mp4SrcMobile ? (
            <>
              {/* Video móvil */}
              <video
                src={videoSrcMobile}
                className="sm:hidden absolute inset-0 w-full h-full object-cover block m-0 p-0"
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                preload="metadata"
                decoding="async"
                style={{ pointerEvents: "none", objectPosition }}
              />

              {/* Video desktop */}
              <video
                src={videoSrc}
                className="hidden sm:block absolute inset-0 w-full h-full object-cover block m-0 p-0"
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                preload="metadata"
                decoding="async"
                style={{ pointerEvents: "none", objectPosition }}
              />
            </>
          ) : (
            // Un solo video para todas las resoluciones
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover block m-0 p-0"
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              playsInline={playsInline}
              preload="metadata"
              decoding="async"
              style={{ pointerEvents: "none", objectPosition }}
            />
          )}
        </>
      )}
    </div>
  );
}

BackgroundVideo.propTypes = {
  mp4Src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  mp4SrcMobile: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fallbackImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  hideOnMobile: PropTypes.bool,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  playsInline: PropTypes.bool,
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  objectPosition: PropTypes.string,
};
