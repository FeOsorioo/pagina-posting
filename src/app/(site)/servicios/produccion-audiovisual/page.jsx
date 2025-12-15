/**
 * @fileoverview Página de servicio: “Producción Audiovisual”.
 *
 * Este componente representa la sección dedicada al servicio de
 * **Producción Audiovisual** dentro del sitio principal. Expone la
 * propuesta creativa centrada en la creación de contenido en video,
 * fotografía y piezas multimedia diseñadas para generar conexión
 * emocional con las audiencias digitales.
 *
 * La estructura de esta página incluye:
 * - Video de fondo principal (hero section).
 * - Descripción conceptual del servicio.
 * - Navegación a subservicios mediante botones dinámicos.
 * - Renderizado automático de los subservicios definidos en los datos.
 * - Sección de preguntas frecuentes (FAQ).
 * - Llamado a la acción final con enlace a la página de contacto.
 *
 * @module ProduccionAudiovisual
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
import { faqListProduccionAudiovisual } from "@data/FAQ";

/* ====== Recursos multimedia ====== */
import video from "@/assets/servicios/produccion_audiovisual/produccion_audiovisual_banner.mp4";
import video_responsive from "@/assets/servicios/produccion_audiovisual/produccion_audiovisual_banner_responsive.mp4";

/**
 * Componente principal `produccionAudiovisual`.
 *
 * Renderiza la página del servicio **Producción Audiovisual**, combinando
 * video, descripción narrativa, subservicios y contenido de soporte. Está
 * diseñada para resaltar la importancia del contenido visual como herramienta
 * estratégica para marcas y proyectos contemporáneos.
 *
 * @component
 * @example
 * return (<produccionAudiovisual />)
 *
 * @returns {JSX.Element} Página renderizada del servicio Producción Audiovisual.
 */
function produccionAudiovisual() {
  /**
   * Obtiene el objeto correspondiente al servicio actual (“produccion-audiovisual”)
   * desde la lista global `serviceList`.
   * Este objeto contiene la información general y los subservicios relacionados.
   *
   * @type {Object}
   */
  const service = serviceList.find(
    (service) => service.slug === "produccion-audiovisual"
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
          <p className="text-lg text-center">
            La persona promedio pasa alrededor de 6 horas y 40 minutos al día
            frente a las pantallas.{" "} <br />
            <span className="font-bold">
              Hagamos que ese tiempo valga la pena.
            </span>{" "}
            <br />
            Creamos contenido audiovisual pensado para conectar con tu público y
            darle a tus sueños una presencia poderosa en cada pantalla.
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

      {/* ===== RENDERIZADO DE SUBSERVICIOS ===== */}
      {service.subServices.map((service, index) => (
        <Subservices key={index} subservice={service} index={index} />
      ))}

      {/* ===== SECCIÓN DE PREGUNTAS FRECUENTES ===== */}
      <FAQ faqList={faqListProduccionAudiovisual} />

      {/* ===== BLOQUE FINAL DE SERVICIOS RELACIONADOS ===== */}
      <section className="mx-6 md:mx-auto  max-w-4xl mt-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          <span className="font-bold">
            {" "}
            Conoce <br className="hidden sm:block" />
          </span>
          <span className="font-light">más sobre</span>
        </h3>

        {/* ===== COMPONENTE DE SERVICIOS ===== */}
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

export default produccionAudiovisual;
