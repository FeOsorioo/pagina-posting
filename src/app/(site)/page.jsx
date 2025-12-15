/**
 * @fileoverview Página principal del sitio (Home).
 * 
 * Este componente define la estructura completa de la página principal,
 * incluyendo las secciones de héroe, servicios, testimonios de clientes y
 * banners de texto. Utiliza diversos componentes de UI para construir
 * una experiencia visual coherente y animada.
 * 
 * @module Home
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



import slide1 from "@/assets/home/carrusel/1_responsive.webp";
import slide2 from "@/assets/home/carrusel/2_responsive.webp";
import slide3 from "@/assets/home/carrusel/3_responsive.webp";
// Fondos / decorativos
import bg5 from "@/assets/background/bg5.webp";
import bg1 from "@/assets/background/bg1.webp";
import bg4 from "@/assets/background/bg4.webp";


// Clientes
import imgUnisanitas from "@/assets/home/clientes/unisanitas.webp";
import videoUnisanitas from "@/assets/home/clientes/video_unisanitas.mp4";

import imgUniversal from "@/assets/home/clientes/universal.webp";
import videoUniversal from "@/assets/home/clientes/video_universal.mp4";

import imgCafe from "@/assets/home/clientes/cafe.webp";
import videoCafe from "@/assets/home/clientes/video_cafe.mp4";

import imgCcg from "@/assets/home/clientes/ccg.webp";
import videoCcg from "@/assets/home/clientes/video_ccg.mp4";

import imgDelirio from "@/assets/home/clientes/delirio.webp";
import videoDelirio from "@/assets/home/clientes/video_delirio.mp4";

import video from "@assets/home/principal.mp4";

/**
 * Componente principal `Home`.
 * 
 * Este componente define la página principal del sitio “Posting”.
 * Integra múltiples secciones como:
 * - Carrusel de bienvenida (`HeroSectionSlider`)
 * - Sección de descripción y servicios (`DynamicParagraph`, `Services`)
 * - Banner de texto con íconos y elementos decorativos (`TextBanner`)
 * - Mosaico de clientes destacados (`ClienteCard`)
 * - Selector interactivo final (`InteractiveSelector`)
 * 
 * El diseño incluye fondos ilustrativos y videos de clientes para reforzar
 * la narrativa visual de la marca.
 *
 * @component
 * @example
 * return (<Home />)
 * 
 * @returns {JSX.Element} Página principal del sitio web renderizada.
 */


function Home() {


  /**
   * Referencia utilizada para controlar el desplazamiento o animación
   * del fondo principal en la sección de introducción.
   * @type {import('react').RefObject<HTMLElement>}
   */
  const scrollRef = useRef(null);

  return (
    <>

      <div className="hidden md:block">
        <BackgroundVideo
          mp4Src={video}
          hideOnMobile
          pauseWhenOffscreen
          className="h-[100vh]"
        />
      </div>

      <div className="block md:hidden">
        <HeroSectionSlider slides={[slide1, slide2, slide3]} />
      </div>


      {/* Bloque de introducción con texto dinámico y fondo decorativo */}
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
            fontWeight="font-normal"
            align="text-left"
            delay={0}
          >
            Posting es una agencia creativa y de estrategia digital. Creamos
            marcas, contenidos y experiencias digitales para todos aquellos que
            creen en sus sueños.

          </DynamicParagraph>
          <DynamicParagraph
            fontSize="text-lg"
            textcolor="text-black"
            fontWeight="font-normal"
            align="text-left"
            delay={0}
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
            delay={0}
            margin="mt-6 md:mt-6"
          >
            ¿Qué
            <br />
            <strong className="font-semibold">Creamos?</strong>
          </DynamicTitle>

          <Services />
        </section>
      </BackgroundWrapper>

      {/* Banner de texto con ícono y mensaje institucional */}
      <TextBanner
        paragraph="En Posting transformamos ideas y ofrecemos soluciones integrales que combinan creatividad, narrativa y estrategia. Creamos identidad, damos vida a tus ideas, y construimos experiencias memorables."
        position="start "
        rounded="right"
        textAlign="center"
   
      >
        <h1 className=" text-3xl md:text-5xl font-bold">Los que han creído</h1>
      </TextBanner>

      {/* Sección de clientes destacados */}
      <BackgroundWrapper
        imageUrl={bg1.src}
        classBG="bg-no-repeat bg-contain bg-left"
        backgroundSize="60% auto"
      >
        <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
            <div className="md:col-span-3 h-full">
              <ClienteCard
                imageSrc={imgUnisanitas}
                videoSrc={videoUnisanitas}
                alt="Unisanitas"
                link="/portafolio/unisanitas"
                title="UNISANITAS"
                description={
                  <>
                    Exploramos el{" "}
                    <span className="font-bold">sector educativo</span>
                  </>
                }
              />
            </div>

            <div className="md:col-span-2 h-full">
              <ClienteCard
                imageSrc={imgUniversal}
                videoSrc={videoUniversal}
                alt="Universal de Mudanzas"
                link="/portafolio/universal-de-mudanzas"
                title="UNIVERSAL DE MUDANZAS"
                description={
                  <>
                    <span>Transformamos</span> tradición en
                    <span className="font-bold"> presencia digital</span>
                  </>
                }
              />
            </div>
          </div>

          {/* Segunda fila de clientes */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
            <div className="h-full">
              <ClienteCard
                imageSrc={imgCafe}
                videoSrc={videoCafe}
                alt="Café Finca Helena"
                link="/portafolio/cafe-finca-helena"
                title="CAFÉ FINCA HELENA"
                description={
                  <>
                    Sabores que <span className="font-bold">transmiten</span>
                  </>
                }
              />
            </div>

            <div className="h-full">
              <ClienteCard
                imageSrc={imgCcg}
                videoSrc={videoCcg}
                alt="Contact Center Grupo"
                link="/portafolio/contact-center-grupo"
                title="CONTACT CENTER GRUPO"
                description={
                  <>
                    El reto del <span className="font-bold">B2B</span>
                  </>
                }
              />
            </div>

            <div className="h-full">
              <ClienteCard
                imageSrc={imgDelirio}
                videoSrc={videoDelirio}
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
          </div>
        </section>
      </BackgroundWrapper>

      {/* Sección final con banner y selector interactivo */}
      <BackgroundWrapper
        imageUrl={bg4.src}

        classBG="bg-no-repeat bg-contain bg-right  py-12"
        backgroundSize="75% auto"
      >
        <TextBanner
          paragraph="Cada proyecto es una oportunidad para contar historias auténticas y acompañar a nuestros clientes en la realización de sus sueños. Conoce estas historias:"
          position="start"
          rounded="right"
          textAlign="center"
      
        >
          <h2 className=" text-3xl md:text-5xl font-bold">Trabajamos en el negocio de los sueños</h2>
        </TextBanner>

        <InteractiveSelector />
      </BackgroundWrapper>
    </>
  );
}

export default Home;
