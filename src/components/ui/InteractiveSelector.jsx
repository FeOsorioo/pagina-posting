/**
 * @fileoverview Componente `InteractiveSelector` (compact & responsive)
 *
 * Tarjetas más pequeñas y elegantes.
 * En desktop: vista horizontal con animaciones suaves.
 * En móvil: tarjetas apiladas con espaciado reducido.
 */

"use client";

import React, { useState, useEffect } from "react";
import { FaCampground, FaFire } from "react-icons/fa";
import Popup from "@ui/Popup";
import { stories } from "@data/stories";

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  /** Detectar si es móvil */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /** Asignar íconos y botones */
  const options = stories.map((story, index) => ({
    ...story,
    icon:
      index === 0 ? (
        <FaCampground size={22} className="text-white" />
      ) : (
        <FaFire size={22} className="text-white" />
      ),
    button: "Ver más",
  }));

  /** Cambiar opción activa */
  const handleOptionClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  /** Popup */
  const openPopup = (option) => {
    setSelectedOption(option);
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
    setSelectedOption(null);
  };

  /** Animación inicial */
  useEffect(() => {
    const timers = [];
    options.forEach((_, i) => {
      const t = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center my-10 text-white">
      {/* CONTENEDOR PRINCIPAL */}
      <div
        className={`options flex ${isMobile
            ? "flex-col w-full max-w-full px-4 gap-5"
            : "flex-row w-full max-w-[900px] h-[350px]"
          } items-stretch overflow-hidden relative transition-all`}
      >
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isVisible = animatedOptions.includes(index);

          return (
            <div
              key={index}
              className={`option relative flex flex-col justify-end transition-all duration-700 ease-in-out cursor-pointer rounded-xl overflow-hidden ${isActive ? "active" : ""
                }`}
              onClick={() => handleOptionClick(index)}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-60px)",
                border: "1px solid #333",
                boxShadow: isActive
                  ? "0 8px 24px rgba(0,0,0,0.6)"
                  : "0 4px 12px rgba(0,0,0,0.4)",
                flex: isMobile ? "unset" : isActive ? "2.5 1 0%" : "1 1 0%",
                minHeight: isMobile ? "320px" : "auto",
                minWidth: isMobile ? "100%" : "180px",
                transition: "all 0.6s ease-in-out",
              }}
            >
              {/* DEGRADADO INFERIOR */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                style={{
                  opacity: isActive ? 1 : 0.8,
                  transition: "opacity 0.5s ease-in-out",
                }}
              />

              {/* CONTENIDO */}
              <div className="relative z-10 p-4 md:p-5 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] border border-[#444] shadow-sm">
                    {option.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold">
                    {option.titulo}
                  </h4>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openPopup(option);
                  }}
                  className="text-xs md:text-sm underline  hover:text-pink-400  transition cursor-pointer"
                >
                Leer
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* POPUP */}
      <Popup isOpen={popupOpen} onClose={closePopup} content={selectedOption} />

      {/* RESPONSIVE FIX */}
      <style jsx>{`
        @media (max-width: 768px) {
          .options {
            flex-direction: column;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
