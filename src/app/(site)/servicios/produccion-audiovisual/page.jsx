/**
 * @fileoverview Página de servicio: “Producción Audiovisual”.
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

function ProduccionAudiovisual() {
  const service = serviceList.find(
    (service) => service.slug === "produccion-audiovisual"
  );

  return (
    <>
      {/* ===== VIDEO PRINCIPAL ===== */}
      <BackgroundVideo
        mp4Src="/servicios/produccion_audiovisual/produccion_audiovisual_banner.mp4"
        mp4SrcMobile="/servicios/produccion_audiovisual/produccion_audiovisual_banner_responsive.mp4"
        hideOnMobile
        pauseWhenOffscreen
        className="h-[50vh] md:h-[60vh] [&_video]:opacity-100 [&_video]:brightness-100"
      />

      {/* ===== INTRODUCCIÓN ===== */}
      <BackgroundWrapper
        backgroundSize="100% auto"
        className="bg-no-repeat bg-right py-24"
      >
        <section className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <p className="text-lg text-center">
            La persona promedio pasa alrededor de 6 horas y 40 minutos al día
            frente a las pantallas.
            <br />
            <span className="font-bold">
              Hagamos que ese tiempo valga la pena.
            </span>
            <br />
            Creamos contenido audiovisual pensado para conectar con tu público y
            darle a tus sueños una presencia poderosa en cada pantalla.
          </p>

          {/* ===== SUBSERVICIOS ===== */}
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
      {service.subServices.map((subservice, index) => (
        <Subservices
          key={index}
          subservice={subservice}
          index={index}
        />
      ))}

      {/* ===== FAQ ===== */}
      <FAQ faqList={faqListProduccionAudiovisual} />

      {/* ===== CIERRE ===== */}
      <section className="mx-6 md:mx-auto max-w-4xl mt-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          <span className="font-bold">
            Conoce <br className="hidden sm:block" />
          </span>
          <span className="font-light">más sobre</span>
        </h3>

        <Services />

        <div className="flex justify-center mb-12">
          <Button href="/contacto" size="md" fullWidth={false} width="w-auto">
            Empieza a creer
          </Button>
        </div>
      </section>
    </>
  );
}

export default ProduccionAudiovisual;
