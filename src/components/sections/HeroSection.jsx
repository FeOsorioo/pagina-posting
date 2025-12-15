"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSectionSlider({ slides, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTimeout = useRef(null);

  // Touch / Mouse
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  /* AUTO-SLIDE */
  useEffect(() => {
    slideTimeout.current = setTimeout(goToNext, interval);
    return () => clearTimeout(slideTimeout.current);
  }, [currentIndex, interval]);

  /* SWIPE HANDLING (Touch + Mouse) */
  const handleStart = (clientX) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  const handleEnd = (clientX) => {
    if (!isDragging.current) return;

    const deltaX = clientX - startX.current;

    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? goToPrev() : goToNext();
    }

    isDragging.current = false;
  };

  const currentImage = slides[currentIndex];

  return (
    <section
      className="
        relative w-full h-[80vh] sm:h-[90vh] lg:h-screen 
        overflow-hidden select-none
      "
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => (isDragging.current = false)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      {/* IMAGEN ACTUAL */}
      <Image
        key={currentImage.src}
        src={currentImage}
        alt="Slide"
        fill
        priority
        className="
          object-cover 
          transition-opacity duration-[1200ms] ease-out 
          will-change-transform
        "
      />

      {/* INDICADORES (dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`
              transition-all h-2 rounded-full
              ${currentIndex === index
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"}
            `}
          />
        ))}
      </div>

      {/* CONTROLES (flechas) Responsive */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <button
          onClick={goToPrev}
          className="
            pointer-events-auto hidden sm:flex items-center justify-center
            bg-white/20 hover:bg-white/40 backdrop-blur-md
            w-10 h-10 rounded-full text-white
            transition-all
          "
          aria-label="Anterior"
        >
          ‹
        </button>

        <button
          onClick={goToNext}
          className="
            pointer-events-auto hidden sm:flex items-center justify-center
            bg-white/20 hover:bg-white/40 backdrop-blur-md
            w-10 h-10 rounded-full text-white
            transition-all
          "
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </section>
  );
}
