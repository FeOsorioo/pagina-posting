/**
 * @fileoverview Página de servicio: “Marketing Digital”.
 *
 * Este componente representa la sección del sitio web dedicada al servicio de
 * **Marketing Digital**, diseñada para comunicar la importancia de la estrategia
 * digital y la creación de contenido orientado a la conexión con comunidades en línea.
 *
 * La estructura de esta página incluye:
 * - Video introductorio de fondo.
 * - Descripción conceptual del servicio y su propósito.
 * - Botones de navegación a subservicios específicos.
 * - Render dinámico de los subservicios con sus respectivas secciones.
 * - Preguntas frecuentes (FAQ).
 * - Sección final con otros servicios y llamada a la acción.
 *
 * @module MarketingDigital
 */

"use client";


import BackgroundVideo from "@ui/BackgroundVideo";
import FAQ from "@sections/FAQ";
import Subservices from "@sections/Subservices";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import Services from "@sections/Services";
import Button from "@ui/Button";

/* ====== Datos ====== */
import { serviceList } from "@data/services";
import { faqListMarketingDigital } from "@data/FAQ";

/* ====== Recursos multimedia ====== */
import video from "@/assets/servicios/marketing_digital/marketing_digital_banner.mp4";
import video_responsive from "@/assets/servicios/marketing_digital/marketing_digital_banner_responsive.mp4";

/**
 * Componente principal `marketingDigital`.
 *
 * Renderiza la página del servicio **Marketing Digital**, incluyendo su descripción,
 * subservicios, preguntas frecuentes y un bloque final de exploración de otros servicios.
 * Este componente está enfocado en mostrar cómo la marca transforma estrategias digitales
 * en conexiones reales con las audiencias.
 *
 * @component
 * @example
 * return (<marketingDigital />)
 *
 * @returns {JSX.Element} Página renderizada del servicio de Marketing Digital.
 */
function marketingDigital() {
  /**
   * Obtiene el objeto del servicio correspondiente al slug “marketing-digital”
   * desde la lista general de servicios (`serviceList`).
   * Contiene los subservicios y la información base para renderizar la página.
   *
   * @type {Object}
   */
  const service = serviceList.find(
    (service) => service.slug === "marketing-digital"
  );

  return (
    <>

      {/* ===== HERO: VIDEO DE PRESENTACIÓN ===== */}
      <BackgroundVideo
        mp4Src={video}
        mp4SrcMobile={video_responsive}
        hideOnMobile
        pauseWhenOffscreen
  className="h-[50vh] md:h-[60vh] [&_video]:opacity-100 [&_video]:brightness-100"
      />

      {/* ===== SECCIÓN PRINCIPAL DE INTRODUCCIÓN ===== */}
      <BackgroundWrapper
        backgroundSize="100% auto"
        className="bg-no-repeat bg-right py-24"
      >
        <section className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">

          <p className="text-lg text-center">
            Creamos marcas que nacen de una creencia, diseñamos experiencias que trascienden la pantalla y gestionamos cada interacción con inteligencia y propósito.
          </p>

          {/* ===== BOTONES DE SUBSERVICIOS ===== */}
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            {service.subServices.map((tag) => (
              <Button
                key={tag.link}
                href={`#${tag.link}`}
                size="sm"
                fullWidth={false}
                width="w-auto"
                variant="dark"
              >
                {tag.label}
              </Button>
            ))}
          </div>
        </section>
      </BackgroundWrapper>

      {/* ===== SUBSERVICIOS ===== */}
      {service.subServices.map((service, index) => (
        <Subservices key={index} subservice={service} index={index} />
      ))}

      {/* ===== SECCIÓN DE PREGUNTAS FRECUENTES ===== */}
      <FAQ faqList={faqListMarketingDigital} />

      {/* ===== SECCIÓN FINAL: OTROS SERVICIOS Y CTA ===== */}
      <section className="mx-6 md:mx-auto  max-w-4xl mt-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          <span className="font-bold">
            {" "}
            Conoce <br className="hidden sm:block" />
          </span>
          <span className="font-light">más sobre</span>
        </h3>

        {/* Listado de servicios relacionados */}
        <Services />

        {/* Llamada a la acción final */}
        <div className="flex justify-center mb-12">
          <Button href="/contacto" size="md" fullWidth={false} width="w-auto">
            Empieza a creer
          </Button>
        </div>
      </section>
    </>
  );
}

export default marketingDigital;
