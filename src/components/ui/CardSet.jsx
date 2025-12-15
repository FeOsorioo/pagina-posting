/**
 * @fileoverview `CardSet`
 *
 * Renderiza un conjunto de tarjetas con imagen y etiqueta,
 * ideal para aliados, tecnologías, certificaciones o clientes.
 *
 * @module CardSet
 */

"use client";

import Image from "next/image";

/**
 * `CardSet`
 *
 * Muestra una cuadrícula responsiva de tarjetas.
 *
 * @example
 * ```jsx
 * <CardSet
 *   cards={[
 *     { label: "React", imageUrl: "/react.svg" },
 *     { label: "Next.js", imageUrl: "/next.svg" }
 *   ]}
 * />
 * ```
 *
 * @param {Object} props
 * @param {Array<{ label: string, imageUrl: string }>} props.cards - Elementos a mostrar.
 */
export default function CardSet({ cards = [] }) {
  if (!cards.length) return null;

  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group flex w-full max-w-[240px] flex-col overflow-hidden 
                     rounded-xl border border-gray-300 bg-white 
                     shadow-sm transition-all duration-300 
                     hover:shadow-xl hover:-translate-y-1 sm:w-[45%] md:w-[30%]"
        >
          {/* Imagen */}
          <div className="flex h-[160px] items-center justify-center bg-white p-4">
            <Image
              src={card.imageUrl}
              alt={card.label}
              width={200}
              height={160}
              className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Texto */}
          <div className="bg-black py-3 text-center">
            <span className="text-xl font-semibold text-white tracking-wide">
              {card.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
