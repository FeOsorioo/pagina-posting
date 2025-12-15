"use client";

import { useEffect, useRef, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
;

/**
 * Popup con fondo parallax + contenido animado.
 *
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {object} content
 */
export default function Popup({ isOpen, onClose, content }) {

  /** Bloqueo de scroll cuando está abierto */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);



  /** Evitar render cuando no está abierto */
  if (!isOpen || !content) return null;

  /** Cerrar si clic en overlay */
  const closeFromOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 
      bg-black/70 backdrop-blur-md transition-opacity animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={closeFromOverlay}
    >
      <div
        className="relative w-full max-w-3xl max-h-[75vh] rounded-3xl overflow-hidden 
        bg-white/95 backdrop-blur-lg shadow-[0_10px_60px_rgba(0,0,0,0.35)] 
        flex flex-col border border-gray-200 animate-popup-in isolate"
      >




        {/* HEADER */}
        <header
          className="relative bg-gradient-to-r from-[#111] to-[#222] px-6 py-4 
          flex items-center justify-between text-white z-20"
        >
          <h2 id="popup-title" className="text-xl md:text-2xl font-bold tracking-tight">
            {content.titulo || content.title}
          </h2>

          <button
            onClick={onClose}
            aria-label="Cerrar popup"
            className="text-white hover:text-pink-400 transition-all text-xl"
          >
            <FaTimes />
          </button>
        </header>

        {/* CONTENIDO */}
        <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 md:py-10 z-20">
          <div className="max-w-2xl mx-auto space-y-5 text-justify bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-inner leading-relaxed text-gray-800">
            {content.paragraphs?.length > 0 ? (
              content.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg">{p}</p>
              ))
            ) : (
              <p className="text-base md:text-lg">
                {content.content || "No hay contenido disponible."}
              </p>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <footer
          className="relative bg-gradient-to-r from-[#111] to-[#222] px-6 py-4 
          text-center text-white text-lg md:text-xl font-semibold z-20"
        >
          {content.cta || "Creamos para los que creen."}
        </footer>

        {/* IMAGEN FLOTANTE */}
        {content.image_popup && (
          <Image
            src={content.image_popup}
            alt={content.alt || content.titulo || "Decorativo"}
            width={80}
            height={80}
            loading="lazy"
            className="absolute bottom-4 right-6 md:bottom-6 md:right-10 
            drop-shadow-md select-none pointer-events-none z-30"
          />
        )}
      </div>
    </div>
  );
}
