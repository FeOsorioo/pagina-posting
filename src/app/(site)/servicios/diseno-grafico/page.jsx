/**
 * @fileoverview Página de servicio: “Diseño Gráfico”.
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

/**
 * Componente principal `DisenoGrafico`.
 *
 * @returns {JSX.Element}
 */
function DisenoGrafico() {
  const service = serviceList.find(
    (service) => service.slug === "diseno-grafico"
  );

  return (
    <>
      {/* ===== VIDEO PRINCIPAL ===== */}
      <BackgroundVideo
        mp4Src="/servicios/diseno_grafico/diseno_grafico_banner.webm"
        mp4SrcMobile="/servicios/diseno_grafico/diseno_grafico_banner_responsive.webm"
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
            todo eso que sueñas para tu marca o proyecto.
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
      <FAQ faqList={faqListDisenoGrafico} />

      {/* ===== CIERRE ===== */}
      <section className="mx-6 md:mx-auto max-w-4xl mt-4">
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

export default DisenoGrafico;
