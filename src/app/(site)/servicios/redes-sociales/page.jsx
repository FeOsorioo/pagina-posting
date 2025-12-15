/**
 * @fileoverview Página de servicio: “Redes Sociales”.
 *
 * Este componente representa la sección dedicada al servicio de
 * **Redes Sociales** dentro del sitio web principal. Está diseñada para
 * comunicar la propuesta estratégica y creativa de la marca en torno al
 * manejo, creación y planificación de contenido en plataformas sociales.
 *
 * La página incluye:
 * - Video introductorio de fondo (hero).
 * - Descripción conceptual del servicio.
 * - Botones dinámicos que enlazan a los subservicios disponibles.
 * - Renderizado automático de los subservicios.
 * - Sección de preguntas frecuentes (FAQ).
 * - Bloque final de exploración de otros servicios y llamada a la acción.
 *
 * @module RedesSociales
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
import { faqListRedesSociales } from "@data/FAQ";

/* ====== Recursos multimedia ====== */
import video from "@/assets/servicios/redes_sociales/redes_sociales_banner.mp4";
import video_responsive from "@/assets/servicios/redes_sociales/redes_sociales_banner_responsive.mp4";

/**
 * Componente principal `redesSociales`.
 *
 * Renderiza la página del servicio **Redes Sociales**, destacando la
 * importancia de construir comunidades digitales y de generar contenido
 * con propósito. Cada elemento de la interfaz está orientado a presentar
 * los subservicios asociados y a guiar al usuario hacia el contacto directo
 * con la agencia.
 *
 * @component
 * @example
 * return (<redesSociales />)
 *
 * @returns {JSX.Element} Página renderizada del servicio de Redes Sociales.
 */
function redesSociales() {
  /**
   * Obtiene el objeto de configuración correspondiente al servicio “redes-sociales”
   * desde la lista global de servicios (`serviceList`).
   * Contiene la información descriptiva y los subservicios asociados.
   *
   * @type {Object}
   */
  const service = serviceList.find(
    (service) => service.slug === "redes-sociales"
  );

  return (
    <>

      {/* ===== HERO: VIDEO PRINCIPAL ===== */}
      <BackgroundVideo
        mp4SrcMobile={video_responsive}
        mp4Src={video}
        hideOnMobile
        pauseWhenOffscreen
        className="h-[50vh] md:h-[60vh] [&_video]:opacity-100 [&_video]:brightness-100"
      />

      {/* ===== SECCIÓN DE INTRODUCCIÓN ===== */}
      <BackgroundWrapper
        backgroundSize="100% auto"
        className="bg-no-repeat bg-right py-24"
      >
        <section className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <h2 className="font-bold text-lg text-center">
            No necesitas solo seguidores, necesitas creyentes.
          </h2>

          <p className="text-lg text-center">
            En redes no basta con publicar: hay que contar historias que
            inspiren, que hagan sentir y que transformen seguidores en una
            comunidad viva. Creamos estrategias y contenidos.
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

      {/* ===== PREGUNTAS FRECUENTES ===== */}
      <FAQ faqList={faqListRedesSociales} />

      {/* ===== SECCIÓN FINAL ===== */}
      <section className="mx-6 md:mx-auto  max-w-4xl mt-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          <span className="font-bold">
            {" "}
            Conoce <br className="hidden sm:block" />
          </span>
          <span className="font-light">más sobre</span>
        </h3>

        {/* ===== OTROS SERVICIOS ===== */}
        <Services />

        {/* ===== CTA FINAL ===== */}
        <div className="flex justify-center mb-12">
          <Button href="/contacto" size="md" fullWidth={false} width="w-auto">
            Empieza a creer
          </Button>
        </div>
      </section>
    </>
  );
}

export default redesSociales;
