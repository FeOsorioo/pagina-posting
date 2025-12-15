/**
 * @fileoverview Página de servicio: “Diseño Gráfico”.
 *
 * Este componente representa la sección dedicada al servicio de
 * **Diseño Gráfico**, parte del sitio web principal. Su propósito es
 * presentar la oferta creativa relacionada con el diseño visual, la identidad
 * de marca y la comunicación estética, utilizando componentes modulares y datos
 * dinámicos provenientes del archivo de configuración de servicios.
 *
 * La estructura general incluye:
 * - Video de fondo principal (hero section).
 * - Descripción conceptual del servicio.
 * - Navegación interna a subservicios mediante botones.
 * - Renderizado dinámico de cada subservicio.
 * - Sección de preguntas frecuentes (FAQ).
 * - Bloque final de invitación a explorar otros servicios y contactar.
 *
 * @module DisenoGrafico
 */

"use client";


/* ====== Componentes reutilizables ====== */
import BackgroundVideo from "@ui/BackgroundVideo";
import FAQ from "@sections/FAQ";
import Subservices from "@sections/Subservices";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import Services from "@sections/Services";
import Button from "@components/ui/Button";

/* ====== Datos ====== */
import { serviceList } from "@data/services";
import { faqListDisenoGrafico } from "@data/FAQ";

/* ====== Recursos multimedia ====== */
import video from "@/assets/servicios/diseno_grafico/diseno_grafico_banner.mp4";
import video_responsive from "@/assets/servicios/diseno_grafico/diseno_grafico_banner_responsive.mp4";

/**
 * Componente principal `disenoGrafico`.
 *
 * Renderiza la página del servicio **Diseño Gráfico**, incluyendo contenido
 * textual, multimedia y secciones dinámicas de subservicios. Cada parte está
 * pensada para comunicar el valor del diseño visual como parte fundamental
 * de la estrategia de comunicación de una marca.
 *
 * @component
 * @example
 * return (<disenoGrafico />)
 *
 * @returns {JSX.Element} Página renderizada del servicio de Diseño Gráfico.
 */
function disenoGrafico() {
  /**
   * Obtiene el objeto de datos correspondiente al servicio actual desde el listado global.
   * Contiene información general y los subservicios asociados.
   *
   * @type {Object}
   */
  const service = serviceList.find(
    (service) => service.slug === "diseno-grafico"
  );

  return (
    <>

      {/* ===== VIDEO PRINCIPAL ===== */}
      <BackgroundVideo
        mp4Src={video}
        mp4SrcMobile={video_responsive}
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
            Hacemos real eso que el soñador visualiza.
          </h2>

          <p className="text-lg text-center">
            Creamos experiencias gráficas y visuales que comunican y representan
            todo eso que tu sueñas para tu marca o proyecto.
          </p>

          {/* ===== SUBSERVICIOS COMO BOTONES ===== */}
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

      {/* ===== RENDER DINÁMICO DE SUBSERVICIOS ===== */}
      {service.subServices.map((service, index) => (
        <Subservices key={index} subservice={service} index={index} />
      ))}

      {/* ===== SECCIÓN DE PREGUNTAS FRECUENTES ===== */}
      <FAQ faqList={faqListDisenoGrafico} />

      {/* ===== BLOQUE FINAL DE CIERRE ===== */}
      <section className="mx-6 md:mx-auto max-w-4xl mt-4">

        <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          <span className="font-bold">
            {" "}
            Conoce <br className="hidden sm:block" />
          </span>
          <span className="font-light">más sobre</span>
        </h3>

        {/* ===== SECCIÓN DE SERVICIOS RELACIONADOS ===== */}
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

export default disenoGrafico;
