/**
 * @fileoverview Sección de Preguntas Frecuentes (FAQ).
 */

"use client";

import { useState } from "react";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import bg from "@/assets/background/bg5.webp";

/**
 * `FAQ`
 *
 * Renderiza una lista de preguntas que se pueden abrir y cerrar.
 * Soporta múltiples respuestas por pregunta (answer1, answer2…).
 *
 * @param {Array} faqList - Preguntas y respuestas.
 *
 * @example
 * <FAQ faqList={[
 *   { question: "¿Ofrecen servicios personalizados?", answer1: "Sí, adaptamos cada propuesta." }
 * ]} />
 */
export default function FAQ({ faqList }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <BackgroundWrapper
      imageUrl={bg.src}
      classBG="bg-no-repeat bg-contain"
      backgroundSize="100% auto"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-4 md:py-6">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Preguntas <br className="hidden sm:block" />
          <span className="font-bold">Frecuentes</span>
        </h2>

        {faqList.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-2xl bg-white text-black shadow-[0px_4px_10px_2px_#E9E6E6]
                         ring-1 ring-white/10 my-3 sm:my-4 md:w-5/6 w-full"
            >
              {/* Pregunta */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 text-left"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <polygon points="12,16 6,8 18,8" fill="#f10067" />
                </svg>

                <h3 className="text-sm sm:text-lg md:text-lg font-medium">
                  {faq.question}
                </h3>
              </button>

              {/* Respuestas */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out mx-20 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {Object.keys(faq)
                    .filter((k) => k.startsWith("answer") && faq[k])
                    .sort()
                    .map((key, i) => (
                      <p
                        key={i}
                        className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm md:text-lg text-slate-700"
                      >
                        {faq[key]}
                      </p>
                    ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </BackgroundWrapper>
  );
}
