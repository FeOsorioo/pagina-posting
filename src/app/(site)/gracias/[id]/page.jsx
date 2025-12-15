"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { use, useState } from "react";

import Button from "@ui/Button";
import callie from "@/assets/gracias/sol.webp";
import Logo from "@ui/Logo";

import { flow } from "@data/contacto";

export default function Gracias({ params }) {
  const data = flow[4];
  const param = use(params);
  const idContact = param.id;

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false); //  NUEVO ESTADO

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
  };

  const optionsVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12 },
    },
  };

  const optionItem = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSelect = async (option) => {
    setLoading(true); //  ACTIVAR LOADING

    try {
      const res = await fetch("/api/hubspot", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactId: idContact,
          properties: {
            donde_nos_encontraron: option,
          },
        }),
      });

      await res.json();

      setLoading(false); // DESACTIVAR LOADING
      setSent(true);

    } catch (error) {
      console.error("Error enviando PATCH:", error);
      setLoading(false); // aseguramos que se apague en caso de error
    }
  };

  return (
    <>
      <Logo color="rosado" />

      <main className="relative min-h-screen flex flex-col items-center 
      justify-center overflow-hidden text-center px-6 bg-white">

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[220px] md:w-[280px] h-auto flex justify-center mb-4"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image src={callie} alt="Callie" className="w-full h-auto" loading="lazy" />
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold text-black"
        >
          ¡Gracias por tu mensaje!
        </motion.h1>

        {/*  LOADING */}
        {loading && (
          <div className="flex flex-col items-center mt-10">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Procesando tu respuesta...</p>
          </div>
        )}

        {/* MENSAJE FINAL */}
        {!loading && sent && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10"
          >
            <h2 className="text-3xl font-semibold text-black">
              Nuestro equipo ya está trabajando para responderte 🙌
            </h2>


          </motion.div>
        )}

        {/*  OPCIONES (solo si no está cargando ni enviado) */}
        {!loading && !sent && (
          <motion.div
            key="question-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="md:text-3xl text-xl my-6 font-semibold">
              {data.question}
            </h2>

            <motion.div
              variants={optionsVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 w-full max-w-3xl mx-auto"
            >
              {data.options.map((opt, i) => (
                <motion.div key={i} variants={optionItem} className="flex">
                  <div
                    onClick={() => handleSelect(opt)}
                    className="
                      px-6 py-3
                      rounded-full
                      border border-black
                      text-white
                      bg-black
                      cursor-pointer
                      text-sm md:text-base
                      font-semibold
                      hover:bg-black/10
                      hover:text-black
                      transition-all duration-300
                      whitespace-normal
                      select-none
                    "
                  >
                    {opt}
                  </div>
                </motion.div>
              ))}
            </motion.div>


          </motion.div>
        )}
        <Button size="sm" variant="primary" className="mt-6" href="/">
          Volver al inicio
        </Button>
      </main>
    </>
  );
}
