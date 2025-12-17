/**
 * @fileoverview Página principal del sitio (Home).
 */

'use client';
import { useRef } from "react";

import BackgroundWrapper from "@ui/BackgroundWrapper";
import DynamicParagraph from "@ui/DynamicParagraph";
import DynamicTitle from "@ui/DynamicTitle";
import Services from "@sections/Services";
import TextBanner from "@ui/TextBanner";
import HeroSectionSlider from "@sections/HeroSection";
import ClienteCard from "@sections/ClienteCard";
import InteractiveSelector from "@ui/InteractiveSelector";
import BackgroundVideo from "@ui/BackgroundVideo";

/* Slides */
import slide1 from "@/assets/home/carrusel/1_responsive.webp";
import slide2 from "@/assets/home/carrusel/2_responsive.webp";
import slide3 from "@/assets/home/carrusel/3_responsive.webp";

/* Fondos */
import bg5 from "@/assets/background/bg5.webp";
import bg1 from "@/assets/background/bg1.webp";
import bg4 from "@/assets/background/bg4.webp";

/* Imágenes clientes (se mantienen como imports) */
import imgUnisanitas from "@/assets/home/clientes/unisanitas.webp";
import imgUniversal from "@/assets/home/clientes/universal.webp";
import imgCafe from "@/assets/home/clientes/cafe.webp";
import imgCcg from "@/assets/home/clientes/ccg.webp";
import imgDelirio from "@/assets/home/clientes/delirio.webp";

function Home() {
  const scrollRef = useRef(null);

  return (
    <>
      {/* HERO DESKTOP: VIDEO */}
      <div className="hidden md:block">
        <BackgroundVideo
          mp4Src="/home/principal.webm"
          hideOnMobile
          pauseWhenOffscreen
          className="h-[100vh]"
        />
      </div>

      {/* HERO MOBILE: SLIDER */}
      <div className="block md:hidden">
        <HeroSectionSlider slides={[slide1, slide2, slide3]} />
      </div>

      {/* INTRODUCCIÓN */}
      <BackgroundWrapper
        ref={scrollRef}
        imageUrl={bg5.src}
        backgroundSize="contain"
        className="bg-no-repeat bg-right my-6"
      >
        <section className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12">
          <DynamicParagraph
            fontSize="text-lg"
            textcolor="text-black"
            align="text-left"
          >
            Posting es una agencia creativa y de estrategia digital. Creamos
            marcas, contenidos y experiencias digitales para todos aquellos que
            creen en sus sueños.
          </DynamicParagraph>

          <DynamicParagraph
            fontSize="text-lg"
            textcolor="text-black"
            align="text-left"
          >
            <strong className="font-semibold">
              Nosotros también creemos en ti.
            </strong>
          </DynamicParagraph>

          <DynamicTitle
            fontSize="text-5xl md:text-7xl"
            textcolor="text-black"
            align="text-left"
            as="h1"
            margin="mt-6"
          >
            ¿Qué
            <br />
            <strong className="font-semibold">Creamos?</strong>
          </DynamicTitle>

          <Services />
        </section>
      </BackgroundWrapper>

      {/* BANNER */}
      <TextBanner
        paragraph="En Posting transformamos ideas y ofrecemos soluciones integrales que combinan creatividad, narrativa y estrategia. Creamos identidad, damos vida a tus ideas, y construimos experiencias memorables."
        position="start"
        rounded="right"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Los que han creído</h1>
      </TextBanner>

      {/* CLIENTES */}
   
        <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
            <div className="md:col-span-3">
              <ClienteCard
                imageSrc={imgUnisanitas}
                videoSrc="/home/clientes/video_unisanitas.webm"
                alt="Unisanitas"
                link="/portafolio/unisanitas"
                title="UNISANITAS"
                description={
                  <>Exploramos el <span className="font-bold">sector educativo</span></>
                }
              />
            </div>

            <div className="md:col-span-2">
              <ClienteCard
                imageSrc={imgUniversal}
                videoSrc="/home/clientes/video_universal.webm"
                alt="Universal de Mudanzas"
                link="/portafolio/universal-de-mudanzas"
                title="UNIVERSAL DE MUDANZAS"
                description={
                  <>Transformamos tradición en <span className="font-bold">presencia digital</span></>
                }
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <ClienteCard
              imageSrc={imgCafe}
              videoSrc="/home/clientes/video_cafe.webm"
              alt="Café Finca Helena"
              link="/portafolio/cafe-finca-helena"
              title="CAFÉ FINCA HELENA"
              description={<>Sabores que <span className="font-bold">transmiten</span></>}
            />

            <ClienteCard
              imageSrc={imgCcg}
              videoSrc="/home/clientes/video_ccg.webm"
              alt="Contact Center Grupo"
              link="/portafolio/contact-center-grupo"
              title="CONTACT CENTER GRUPO"
              description={<>El reto del <span className="font-bold">B2B</span></>}
            />

            <ClienteCard
              imageSrc={imgDelirio}
              videoSrc="/home/clientes/video_delirio.webm"
              alt="Delirio Eterno"
              link="/portafolio/delirio-eterno"
              title="DELIRIO ETERNO"
              description={
                <>
                  <span className="font-bold">La moda</span> nos encontró y le
                  <span className="font-bold"> sumamos lo nuestro.</span>
                </>
              }
            />
          </div>
        </section>
    

      {/* CIERRE */}
      <BackgroundWrapper
        imageUrl={bg4.src}
        classBG="bg-no-repeat bg-contain bg-right py-12"
        backgroundSize="75% auto"
      >
        <TextBanner
          paragraph="Cada proyecto es una oportunidad para contar historias auténticas y acompañar a nuestros clientes en la realización de sus sueños. Conoce estas historias:"
          position="start"
          rounded="right"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Trabajamos en el negocio de los sueños
          </h2>
        </TextBanner>

        <InteractiveSelector />
      </BackgroundWrapper>
    </>
  );
}

export default Home;
