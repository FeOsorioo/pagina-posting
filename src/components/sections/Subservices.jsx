"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * @component Subservices
 * @description
 * Sección animada que muestra un subservicio con:
 * - Texto + descripción
 * - Imagen o video
 * - Alternancia automática izquierda/derecha según el índice
 *
 * Ideal para páginas de servicios con bloques alternados.
 *
 * @example
 * <Subservices subservice={item} index={i} />
 *
 * @param {Object} props
 * @param {{ label:string, description?:string, image?:any, video?:string, link?:string }} props.subservice
 * @param {number} props.index - Índice para alternar el layout
 */
export default function Subservices({ subservice, index }) {
  const isEven = index % 2 === 0;

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const renderMedia = () => {
    if (subservice.video) {
      return (
        <video
          src={subservice.video}
          autoPlay
          loading="lazy"
          loop
          muted
          playsInline
          className="w-[400px] max-w-full h-auto object-contain mx-auto"
        />
      );
    }

    return (
      <Image
        src={subservice.image}
        alt={subservice.label}
        width={350}
        height={350}
        loading="lazy"
        className="w-auto max-h-full object-contain rounded-tr-[4rem] mx-auto"
      />
    );
  };
  const words = subservice.label.split(" ");

  const TextBlock = (

    <div className="mx-auto px-6">
      <h3 className="flex flex-wrap gap-2 text-4xl md:text-5xl font-bold mb-2 ">
        {words.map((word, i) => (
          <span
            key={i}
            className={`px-4 py-2 rounded-lg inline-block  leading-none
        ${i === 0 ? "bg-black text-white" : "bg-white text-black"}
      `}
          >
            {word}
          </span>
        ))}
      </h3>
      {subservice.description && (
        <p className="text-black/80 text-lg leading-relaxed max-w-xl whitespace-pre-line mx-auto">
          {subservice.description}
        </p>
      )}
    </div>
  );

  return (
    <motion.section
      id={subservice.link}
      className={`
        mx-auto max-w-[1200px]
        grid grid-cols-1 md:grid-cols-2 
        items-center py-8 gap-6
      `}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.25 }}
    >
      {isEven ? (
        <>
          {TextBlock}
          <div className="flex items-center justify-center">{renderMedia()}</div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center order-2 lg:order-1">
            {renderMedia()}
          </div>
          <div className="order-1 lg:order-2">{TextBlock}</div>
        </>
      )}
    </motion.section>
  );
}
