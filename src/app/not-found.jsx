"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import callie from "@/assets/404/not-found.webp";
import Logo from "@ui/Logo";
import Footer from "@layout/Footer";
import Header from "@layout/Header";
import bg1 from "@/assets/background/bg1.webp";

export default function NotFound() {
  return (
    <>
      <Logo color="rosado" />
      <Header />

      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6 bg-white">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src={bg1}
            alt="Fondo decorativo"
            fill
        
            className="object-cover"
            loading="lazy" 
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-extrabold text-black"
          >
            404, upss..
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-black text-lg md:text-xl max-w-md"
          >
            Creo que no encontramos lo que buscas
          </motion.p>

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
              <Image
                src={callie}
                alt="Personaje Callie abducida por un ovni"
                className="w-full h-auto object-contain"
              loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6"
          >
            <Link
              href="/"
              className="rounded-full bg-pink-600 hover:bg-pink-500 transition-all px-8 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg"
            >
              Volver al inicio
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
