"use client";

import Link from "next/link";

/**
 * Botón flotante CTA (Call To Action)
 */
export default function ButtonCallToAction({
  text,
  color = "blue",
  link = "#",
  target = "",
  hidden = false, 
}) {
  /**Paleta de colores */
  const colors = {
    pink: "bg-pink-600 hover:bg-pink-500 focus:ring-pink-400",
    green: "bg-green-600 hover:bg-green-500 focus:ring-green-400",
    coffe: "bg-amber-800 hover:bg-amber-900 focus:ring-amber-700",
    blue: "bg-blue-600 hover:bg-blue-500 focus:ring-blue-400",
    blueSky: "bg-sky-600 hover:bg-sky-500 focus:ring-sky-400",
  };

  const selectedColor = colors[color] || colors.blue;

  /** ⭐ Si hidden está activo → no renderiza nada */
  if (hidden) return null;

  return (
    <div
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-50"
      role="complementary"
    >
      <Link
        href={link}
        target={target}
        aria-label={text}
        className={`
          ${selectedColor}
          text-white font-semibold px-2 py-2 rounded-xl shadow-lg
          flex items-center gap-2 text-sm
          transition-all duration-300 ease-in-out
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75
        `}
      >
        {text}
      </Link>
    </div>
  );
}
