/**
 * @fileoverview Página de servicio: “Desarrollo Web”.
 */

"use client";

/* ====== Componentes reutilizables ====== */
import BackgroundVideo from "@ui/BackgroundVideo";
import FAQ from "@sections/FAQ";
import Subservices from "@sections/Subservices";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import Services from "@sections/Services";
import Button from "@ui/Button";

/* ====== Datos ====== */
import { serviceList } from "@data/services";
import { faqListDesarrolloWeb } from "@data/FAQ";

/**
 * Componente principal `DesarrolloWeb`.
 *
 * @returns {JSX.Element}
 */
function DesarrolloWeb() {
  const service = serviceList.find(
    (service) => service.slug === "desarrollo-web"
  );

  return (
    <>
      {/* ===== VIDEO PRINCIPAL ===== */}
      <BackgroundVideo
        mp4Src="/servicios/desarrollo_web/desarrollo_web_banner.mp4"
        mp4SrcMobile="/servicios/desarrollo_web/desarrollo_web_banner_responsive.mp4"
        hideOnMobile
        pauseWhenOffscreen
        className="h-[50vh] md:h-[60vh] [&_video]:opacity-100 [&_video]:brightness-100"
      />

      {/* ===== SECCIÓN DESCRIPTIVA ===== */}
      <BackgroundWrapper
        backgroundSize="100% auto"
        className="bg-no-repeat bg-right py-6"
      >
        <section className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="font-bold text-lg text-center">
            ¿Ya encontraste tu lugar en el mundo?
          </h2>

          <p className="text-lg text-center">
            Tu página web es mucho más que un link: es tu vitrina, tu carta de
            presentación y, muchas veces, el primer punto de encuentro con tu
            audiencia. Diseñamos y desarrollamos sitios que combinan estética,
            funcionalidad y estrategia para impulsar tus sueños y que encuentren
            su lugar.
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

          {/* ===== VIDEO COMPLEMENTARIO (YouTube) ===== */}
          <div className="mx-auto mt-12 w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/vdrX-Q8TUV0?si=3T20Jx6xptVNGHvG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
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
      <FAQ faqList={faqListDesarrolloWeb} />

      {/* ===== CTA FINAL ===== */}
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

export default DesarrolloWeb;
