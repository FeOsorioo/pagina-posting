/**
 * @fileoverview Página “Nosotras”.
 *
 * Este componente representa la página institucional de “Posting”, enfocada en
 * la filosofía, el manifiesto y el equipo humano detrás de la marca.
 *
 * Incluye secciones dinámicas como:
 * - Banner animado inicial (`BannerHover`)
 * - Manifiesto con imágenes deslizantes (`ImageSlider`)
 * - Código de comportamiento (`Box`)
 * - Galería de equipo (`ImageWithHover`)
 * - Cierre con vínculo corporativo a Contact Center Grupo (`TextBanner`)
 *
 * Cada bloque está estructurado mediante `BackgroundWrapper` para definir
 * fondos decorativos y capas visuales coherentes con la identidad visual.
 *
 * @module Nosotras
 */

"use client";

import BackgroundWrapper from "@ui/BackgroundWrapper";
import DynamicParagraph from "@ui/DynamicParagraph";
import DynamicTitle from "@ui/DynamicTitle";
import TextBanner from "@ui/TextBanner";
import BannerHover from "@sections/BannerHover";
import Image from "next/image";
import ImageWithHover from "@ui/ImageWithHover";
import Box from "@ui/Box";
import Button from "@ui/Button";
import ImageSlider from "@ui/ImageSlider";

// ===== IMÁGENES =====



// Fondos decorativos
import bg6 from "@/assets/background/bg6.webp";
import bg1 from "@/assets/background/bg1.webp";
import bg4 from "@/assets/background/bg4.webp";

// Slider (galería principal)
const foto1 = "/nosotros/slider/foto1.webp";
const foto2 = "/nosotros/slider/foto2.webp";
const foto3 = "/nosotros/slider/foto3.webp";

// Foto grupal del equipo
const teamGroup = "/nosotros/team.webp";

// Miembros del equipo (normal y hover)
const leidy = "/nosotros/team/leidy.webp";
const leidyBb = "/nosotros/team/leidy-bb.webp";
const daniel = "/nosotros/team/daniel.webp";
const danielBb = "/nosotros/team/daniel-bb.webp";
const lorena = "/nosotros/team/lorena.webp";
const lorenaBb = "/nosotros/team/lorena-bb.webp";
const valeria = "/nosotros/team/valeria.webp";
const valeriaBb = "/nosotros/team/valeria-bb.webp";
const andrea = "/nosotros/team/andrea.webp";
const andreaBb = "/nosotros/team/andrea-bb.webp";
const valentina = "/nosotros/team/valentina.webp";
const valentinaBb = "/nosotros/team/valentina-bb.webp";
const fe = "/nosotros/team/fe.webp";
const feBb = "/nosotros/team/fe-bb.webp";
const laura = "/nosotros/team/laura.webp";
const lauraBb = "/nosotros/team/laura-bb.webp";
const daniela = "/nosotros/team/daniela.webp";
const danielaBb = "/nosotros/team/daniela-bb.webp";
const fabian = "/nosotros/team/fabian.webp";
const fabianBb = "/nosotros/team/fabian-bb.webp";

/**
 * Componente principal `Nosotras`.
 *
 * Renderiza el manifiesto institucional de la marca, el código de comportamiento
 * del equipo y la galería con fotografías del personal. Se basa en secciones
 * envueltas por `BackgroundWrapper` para definir fondos e ilustraciones
 * que acompañan visualmente el contenido textual.
 *
 * @component
 * @example
 * return (<Nosotras />)
 *
 * @returns {JSX.Element} Página institucional de “Nosotras” renderizada.
 */
function Nosotras() {
  /**
   * Arreglo de imágenes utilizadas en el slider principal de la sección inicial.
   * @type {Array<import('next/image').StaticImageData>}
   */
  const gallery = [foto1, foto2, foto3];

  /**
   * Listado de integrantes del equipo.
   * Cada objeto contiene la foto normal, la foto alternativa (hover) y la descripción.
   * @type {Array<{src1: StaticImageData, src2: StaticImageData, alt: string}>}
   */
  const TEAM = [
    { src1: leidy, src2: leidyBb, alt: "Leidy - Ejecutiva de cuenta" },
    { src1: daniel, src2: danielBb, alt: "Daniel - Profesional multimedia" },
    { src1: lorena, src2: lorenaBb, alt: "Lorena - Diseñadora gráfica" },
    { src1: valeria, src2: valeriaBb, alt: "Valeria - Diseñadora gráfica" },
    { src1: andrea, src2: andreaBb, alt: "Andrea - Líder estratégica" },
    { src1: valentina, src2: valentinaBb, alt: "Valentina - Líder creativa" },
    { src1: fe, src2: feBb, alt: "Fe - Desarrolladora web" },
    { src1: laura, src2: lauraBb, alt: "Laura - Desarrolladora web" },
    { src1: fabian, src2: fabianBb, alt: "Fabián - Trafficker" },
    { src1: daniela, src2: danielaBb, alt: "Daniela - Ejecutiva Comercial" },
  ];

  return (
    <>

      {/* Banner animado inicial */}
      <BannerHover />

      {/* PRESENTACIÓN NOSOTRAS */}

      <DynamicParagraph
        fontSize="text-lg"
        textcolor="text-black"
        fontWeight="font-normal"
        align="text-left"
        maxWidth="max-w-3xl"
        margin="mx-auto mt-12 px-10"
        lineHeight="leading-relaxed"
        delay={0.2}
      >
        {[
          <>
            Posting es una agencia creativa y de estrategia digital ubicada en Bogotá, Colombia.
            Acompañamos, transformamos y construimos valor para quienes apuestan por sus sueños. Nos dedicamos a diseñar, producir y desarrollar ideas que se transforman en experiencias capaces de habitar campañas, contenidos, plataformas y conversaciones.
            <br />   <strong> Creamos para los que creen.</strong>
          </>]}
      </DynamicParagraph>



      {/* Manifiesto y slider */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div
          className="
              grid grid-cols-1
              md:grid-cols-[minmax(260px,420px)_minmax(0,1fr)]
              items-stretch
              mt-8
            "
        >
          {/* Carrusel de imágenes */}
          <div className="order-2 md:order-1 flex items-center justify-center h-full">
            <div className="w-full">
              <ImageSlider
                images={gallery}
                imagesPerSlide={{ base: 3, sm: 3, md: 4, lg: 1 }}
                autoplay
                delay={4000}
                max_w_h="max-h-[20vh] lg:max-h-[60vh]"
              />

            </div>
          </div>

          {/* Manifiesto textual */}
          <div className="order-1 md:order-2 flex flex-col justify-center h-full mx-4">
            <div>
              <DynamicTitle
                fontSize="text-2xl leading-tight"
                textcolor="text-black"
                align="text-left"
                width="w-full"
                as="h2"
                fontWeight="font-bold"
                delay={0}
              >
                ¿Por qué creamos para los que creen?
              </DynamicTitle>

              <DynamicTitle
                fontSize="text-xl leading-tight"
                textcolor="text-black"
                align="text-left"
                width="w-full"
                as="h3"
                margin="mt-3"
                fontWeight="font-light"
                delay={0}
              >
                Nuestro <span className="font-bold">manifiesto</span>
              </DynamicTitle>

              <DynamicParagraph
                as="div"
                fontSize="text-md"
                textcolor="text-black"
                fontWeight="font-normal"
                align="text-left"
                maxWidth="max-w-none"
                margin="mt-4"
                lineHeight="leading-relaxed"
                delay={0.2}
              >
                <>
                  <section className="space-y-0">
                    <p>Porque el mundo fue hecho por soñadores.</p>
                    <p>Aquellos que imaginaron futuros posibles.</p>
                    <p>
                      Aquellos que apostaron por una idea cuando nadie más la veía.
                    </p>
                    <p>Aquellos que creyeron primero.</p>
                  </section>

                  <section className="space-y-0 mt-4">
                    <p>
                      Creemos pero no como acto de fe, sino como acto creativo,
                      visceral, lleno de intuición.
                    </p>
                    <p>
                      Creemos en el más allá, y no estamos hablando de fantasmas.
                    </p>
                    <p>
                      Creemos que siempre hay más: más sentido, más profundidad,
                      más verdad. Creemos en ti, en tu idea.
                    </p>
                    <p>
                      Estamos hechos para los que tienen algo entre manos, una
                      corazonada, un buen presentimiento. Para los que creen en
                      lo que hacen, y en lo que eso puede despertar en los demás.
                    </p>
                    <p className="font-semibold">
                      En Posting, creamos para los que creen.
                    </p>
                  </section>
                </>
              </DynamicParagraph>

              <Button href="/contacto" className="mb-2 md:mb-0 mt-6">
                Creemos juntos
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* FOTO DEL EQUIPO */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12 mt-6">
        <Image
          src={teamGroup}
          alt="Foto grupal del equipo"
          width={1600}
          height={1600}
          quality={100}
          loading="lazy"
          className="w-full h-full object-cover hidden md:block"

        />
      </div>

      {/* CÓDIGO DE COMPORTAMIENTO */}
      <BackgroundWrapper
        imageUrl={bg6.src}
        hideOnMobile={false}
        className="bg-black pt-12 bg-no-repeat bg-right bg-contain"
        backgroundSize="70% auto"
      >
        <div className="mx-auto max-w-6xl px-8 sm:px-6 md:px-8 lg:px-12">
          <DynamicTitle
            fontSize="text-2xl sm:text-3xl md:text-4xl"
            textcolor="text-white"
            align="text-left"
            width="w-[50%]"
            as="h2"
            margin="mb-4"

            delay={0}
          >
            Código de comportamiento
          </DynamicTitle>
          <p className="text-lg leading-relaxed text-white">
            Este código es nuestra brújula: lo que nos recuerda por qué hacemos
            lo que hacemos y cómo queremos hacerlo. No son reglas rígidas, son
            convicciones que nos mantienen auténticos, valientes y conectados
            con las historias que contamos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12 items-stretch auto-rows-fr pb-12">
            <Box
              title="1. Creemos antes de crear."
              paragraph="Si no hay fe en la idea, no hay historia posible."
            />
            <Box
              title="2. Escuchamos profundo."
              paragraph="Para perseguir los sueños, hay que saber escucharlos. Los nuestros y los tuyos."
            />
            <Box
              title="3. Soñamos despiertos."
              paragraph="Que el mundo real sea fuente de inspiración."
            />
            <Box
              title="4. Las risas no faltan."
              paragraph="La vida con humor es más ligera."
            />
            <Box
              title="5. Nos ponemos en los zapatos del otro."
              paragraph="La empatía lo resuelve todo."
            />
            <Box
              title="6. Fallar es parte del proceso."
              paragraph="Los sueños no tienen manual de instrucciones."
            />
          </div>
        </div>
      </BackgroundWrapper>

      {/* EQUIPO */}
      <BackgroundWrapper
        imageUrl={bg1.src}
        className="bg-left bg-no-repeat"
        backgroundSize="90% auto"
        hideOnMobile
      >
        <section aria-labelledby="nuestro-equipo" className="mx-8 md:mx-auto  max-w-sm md:max-w-5xl ">
          <div className="mx-auto">
            <DynamicTitle
              as="h2"
              id="nuestro-equipo"
              fontSize="text-2xl sm:text-3xl md:text-4xl leading-tight"
              textcolor="text-black"
              fontWeight="font-light"
              align="text-left"
              width="w-full"
              margin="mt-12 mb-4"
              delay={0}
            >
              Nuestro <span className="font-bold">Equipo</span>
            </DynamicTitle>

            <DynamicParagraph
              fontSize="text-lg sm:text-lg md:text-xl"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              maxWidth="w-full"
              lineHeight="leading-tight"
              delay={0.2}
            >
              Detrás de cada idea hay personas que creen.
            </DynamicParagraph>
            <DynamicParagraph
              fontSize="text-lg sm:text-lg md:text-xl"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              maxWidth="w-full"
              margin="my-2"
              lineHeight="leading-tight"
              delay={0.2}
            >
              Este es nuestro equipo:
              quienes piensan, crean y construyen cada proyecto con convicción,
              imaginación y propósito.
            </DynamicParagraph>
          </div>

          {/* Galería del equipo */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-x-1 gap-y-2">
            {TEAM.map((p, i) => (
              <ImageWithHover
                key={`${p.alt}-${i}`}
                image1={p.src1}
                image2={p.src2}
                height="h-[260px] md:h-[320px]"
                className="max-w-[220px] mx-auto"
                alt={p.alt}
              />
            ))}
          </div>
        </section>
      </BackgroundWrapper>

      {/* CIERRE CON CCG */}
      <BackgroundWrapper
        imageUrl={bg4.src}
        className="bg-no-repeat bg-right bg-contain my-6"
        hideOnMobile
      >
        <TextBanner
          paragraph={
            <>
              <span className="block">
                Posting hace parte del ecosistema de servicios de Contact Center
                Grupo, una compañía especializada en soluciones BPO. Juntos,
                ayudamos a otros a crecer desde lo que mejor sabemos hacer:
                ellos desde la tecnología, nosotros desde la creatividad.
              </span>
              <Button
                href="https://www.ccgrupo.com.co/"
                target="_blank"
                className="mt-4 "
                variant="blue"

              >
                Conócenos
              </Button>
            </>
          }
          position="start"
          rounded="right"
          textAlign="center"
          padding="px-8 md:px-0"
        >
          <strong className="font-bold">  Hacemos parte de CCG</strong>
        </TextBanner>
      </BackgroundWrapper>
    </>
  );
}

export default Nosotras;
