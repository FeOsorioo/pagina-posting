/**
 * @fileoverview Página principal de servicios.
 */

"use client";

import { motion } from "framer-motion";

/* ====== Componentes UI ====== */
import BackgroundVideo from "@ui/BackgroundVideo";
import FAQ from "@sections/FAQ";
import CardService from "@ui/CardService";
import Button from "@ui/Button";

/* ====== Datos ====== */
import { serviceList } from "@data/services";
import { faqListPrincipal } from "@data/FAQ";

/**
 * Componente principal `Services`.
 *
 * @returns {JSX.Element}
 */
function Services() {
  return (
    <>
      {/* ===== VIDEO DE FONDO ===== */}
      <BackgroundVideo
        mp4Src="/servicios/servicios_principal.webm"
        mp4SrcMobile="/servicios/servicios_principal_responsive.mp4"
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

        {/* ===== TARJETAS DE SERVICIO ===== */}
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

      {/* ===== FAQ ===== */}
      <FAQ faqList={faqListPrincipal} />
    </>
  );
}

export default Services;
