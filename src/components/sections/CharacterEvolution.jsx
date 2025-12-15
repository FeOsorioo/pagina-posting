/**
 * @fileoverview Animación de evolución por pasos: Concepto → Propuesta → Aprobado.
 *
 * Usa GSAP para animaciones de entrada y transiciones por clic.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

// Etapas
import concepto from "@/assets/ccg/callie/concepto.webp";
import propuesta from "@/assets/ccg/callie/propuesta.webp";
import aprobado from "@/assets/ccg/callie/aprobado.webp";
import flechas from "@/assets/ccg/callie/flechas.webp";

/**
 * `CharacterEvolution`
 *
 * Muestra tres etapas ilustradas con animación secuencial.
 * Cada clic en la flecha avanza al siguiente estado.
 *
 * @example
 * <CharacterEvolution />
 */
export default function CharacterEvolution() {
  const group2Ref = useRef(null);
  const group3Ref = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

  const [step, setStep] = useState(1);

  /** Animación simple de entrada */
  const animateIn = (el) => {
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  };

  /** Animación de flechas */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.killTweensOf([arrow1Ref.current, arrow2Ref.current]);

    const active =
      step === 1 ? arrow1Ref.current : step === 2 ? arrow2Ref.current : null;

    // Animación desactivada por ahora:
    // gsap.to(active, { yPercent: -20, repeat: -1, yoyo: true });

    return () => gsap.killTweensOf([arrow1Ref.current, arrow2Ref.current]);
  }, [step]);

  /** Avanza al siguiente paso */
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);

      requestAnimationFrame(() => {
        if (step === 1) animateIn(group2Ref.current);
        if (step === 2) animateIn(group3Ref.current);
      });
    }
  };

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-8">

        {/* Etapa 1: Concepto */}
        <div className="flex flex-col items-center text-center min-h-[300px] justify-end">
          <div className="h-[250px] flex items-end">
            <Image src={concepto} alt="Concepto" width={200} height={200} loading="lazy"  />
          </div>
          <span className="mt-2 font-semibold">CONCEPTO</span>
        </div>

        {/* Flecha 1 */}
        {step >= 1 && (
          <div
            ref={arrow1Ref}
            onClick={handleNext}
            className="flex items-center justify-center h-[60px] md:h-[300px]
                       rotate-90 md:rotate-0 cursor-pointer hover:scale-110"
          >
            <Image src={flechas} alt="Siguiente" width={40} height={40} loading="lazy" />
          </div>
        )}

        {/* Etapa 2: Propuesta */}
        {step >= 2 && (
          <>
            <div
              ref={group2Ref}
              className="flex flex-col items-center text-center min-h-[300px] justify-end"
            >
              <div className="h-[250px] flex items-end">
                <Image src={propuesta} alt="Propuesta" width={200} height={200} loading="lazy" />
              </div>
              <span className="mt-2 font-semibold">PROPUESTA</span>
            </div>

            {/* Flecha 2 */}
            {step <= 3 && (
              <div
                ref={arrow2Ref}
                onClick={handleNext}
                className="flex items-center justify-center h-[60px] md:h-[300px]
                           rotate-90 md:rotate-0 cursor-pointer hover:scale-110"
              >
                <Image src={flechas} alt="Siguiente" width={40} height={40} loading="lazy" />
              </div>
            )}
          </>
        )}

        {/* Etapa 3: Aprobado */}
        {step >= 3 && (
          <div
            ref={group3Ref}
            className="flex flex-col items-center text-center min-h-[300px] justify-end"
          >
            <div className="h-[250px] flex items-end">
              <Image src={aprobado} alt="Aprobado" width={200} height={200} loading="lazy"  />
            </div>
            <span className="mt-2 font-semibold">APROBADO</span>
          </div>
        )}
      </div>
    </div>
  );
}
