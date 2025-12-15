/**
 * @fileoverview Página principal de servicios.
 *
 * Este componente muestra la sección “Servicios” del sitio web, presentando
 * la oferta integral de la empresa de manera visual y narrativa. Combina
 * un fondo en video, tarjetas descriptivas animadas y una sección de preguntas
 * frecuentes (FAQ) para guiar al usuario a través de los servicios disponibles.
 *
 * Estructura principal:
 * - Video de fondo introductorio.
 * - Descripción conceptual de los servicios.
 * - Listado de botones de navegación a servicios específicos.
 * - Sección de tarjetas animadas (Cards) con detalles por servicio.
 * - Bloque final de preguntas frecuentes.
 *
 * @module Services
 */

"use client";

import { motion } from "framer-motion";

/* ====== Componentes UI reutilizables ====== */
import BackgroundVideo from "@ui/BackgroundVideo";
import FAQ from "@sections/FAQ";
import CardService from "@ui/CardService";
import Button from "@ui/Button";

/* ====== Datos ====== */
import { serviceList } from "@data/services";
import { faqListPrincipal } from "@data/FAQ";

/* ====== Recursos multimedia ====== */
import video from "@/assets/servicios/sevicios_principal.mp4";
import video_responsive from "@/assets/servicios/servicios_principal_responsive.mp4";

/**
 * Componente principal `Services`.
 *
 * Renderiza la página principal de servicios, mostrando un enfoque integral
 * de las soluciones ofrecidas por la agencia. Combina efectos de animación
 * y elementos interactivos para generar una experiencia fluida y envolvente.
 *
 * @component
 * @example
 * return (<Services />)
 *
 * @returns {JSX.Element} Página renderizada de la sección de servicios.
 */
function Services() {
  return (
    <>
      {/* ===== VIDEO DE FONDO ===== */}
      <BackgroundVideo
        mp4Src={video}
        mp4SrcMobile={video_responsive}
        hideOnMobile
        pauseWhenOffscreen
        className="h-[35vh] md:h-[60vh] [&_video]:opacity-100 [&_video]:brightness-100"
      />

      {/* ===== SECCIÓN DE INTRODUCCIÓN ===== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        <h2 className="font-bold text-lg">Los sueños no se fragmentan</h2>

        <p className="text-lg">
          Para convertir una idea en una experiencia real y memorable, hay que
          pensar en todo. Nuestros servicios no están pensados como pasos
          sueltos, sino como parte de un mismo recorrido: un viaje desde la
          chispa inicial hasta la proyección de tu historia al mundo.
        </p>

        {/* ===== BOTONES DE SERVICIO ===== */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {serviceList.map((service) => (
            <Button
              key={service.ctaLink}
              href={service.ctaLink}
              size="sm"
              fullWidth={false}
              width="w-auto"
              variant="dark"
            >
              {service.title}
            </Button>
          ))}
        </div>

        {/* ===== TARJETAS DE SERVICIO ANIMADAS ===== */}
        <div className="relative mt-12 space-y-0">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.slug}
              className="sticky top-20"
              style={{ zIndex: 10 + index }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CardService service={service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PREGUNTAS FRECUENTES ===== */}
      <FAQ faqList={faqListPrincipal} />
    </>
  );
}

export default Services;
