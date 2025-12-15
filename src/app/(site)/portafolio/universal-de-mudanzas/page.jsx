/**
 * @fileoverview Página del portafolio: “Universal de Mudanzas”.
 *
 * Este componente representa el caso de estudio de la empresa “Universal de Mudanzas”,
 * enfocándose en la transformación digital de su marca, rediseño de identidad,
 * implementación de estrategias de pauta y desarrollo de su sitio web.
 *
 * La estructura abarca:
 * - Banner principal con mensaje estratégico y presentación visual.
 * - Introducción narrativa y contextualización del cliente.
 * - Rediseño de identidad visual y comparación antes/después.
 * - Sección sobre campañas digitales y estrategia de comunicación.
 * - Presentación del sitio web y sus principios de diseño funcional.
 * - Slider de mockups y cierre con proyectos relacionados.
 *
 * @module UniversalMudanzas
 */

"use client";

import { useRef } from "react";
import Image from "next/image";

// ==== Componentes reutilizables ====
import BannerWithImage from "@sections/BannerWithImage"
import TextBanner from "@ui/TextBanner";
import CardSet from "@ui/CardSet";
import DynamicParagraph from "@ui/DynamicParagraph";
import DynamicTitle from "@ui/DynamicTitle";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import ImageSlider from "@ui/ImageSlider";
import ProjectsSection from "@sections/ProjectsSection";
import GalleryAnimated from "@ui/GalleryAnimated";

// ==== Datos ====
import { projectList } from "@data/projects";

// ==== Recursos gráficos ====
import bg5 from "@/assets/background/bg5.webp";
import banner from "@/assets/universal/banner.webp";
import banner_responsive from "@/assets/universal/banner_responsive.webp"

import cel from "@/assets/universal/web/cel.webp";
import escritorio from "@/assets/universal/web/escritorio.webp";
import portatil from "@/assets/universal/web/portatil.webp";
import antes from "@/assets/universal/antes.webp";
import despues from "@/assets/universal/despues.webp";


// ==== Galería de campañas ====
import g1 from "@/assets/universal/Galeria/1.webp";
import g3 from "@/assets/universal/Galeria/3.webp";
import g4 from "@/assets/universal/Galeria/4.webp";
import g5 from "@/assets/universal/Galeria/5.webp";
import g6 from "@/assets/universal/Galeria/6.webp";
import g7 from "@/assets/universal/Galeria/7.webp";
import g8 from "@/assets/universal/Galeria/8.webp";
import g9 from "@/assets/universal/Galeria/9.webp";

// ==== Mockups del sitio web ====
import m1 from "@/assets/universal/mockups/1.webp";
import m2 from "@/assets/universal/mockups/2.webp";
import m3 from "@/assets/universal/mockups/3.webp";
import m4 from "@/assets/universal/mockups/4.webp";

// ==== Elementos decorativos ====
import estrellasBlancas from "@/assets/elementos/estrellasBlancas.webp";

/**
 * Componente principal `UniversalMudanzas`.
 *
 * Renderiza la página del proyecto “Universal de Mudanzas”, integrando
 * la estrategia de rebranding, pauta digital y desarrollo web bajo una
 * narrativa visual coherente con la identidad renovada del cliente.
 *
 * @component
 * @example
 * return (<UniversalMudanzas />)
 *
 * @returns {JSX.Element} Página renderizada del portafolio de Universal de Mudanzas.
 */
function UniversalMudanzas() {
  /**
   * Slug del proyecto actual. Usado para excluir este elemento del listado de proyectos relacionados.
   * @type {string}
   */
  const currentSlug = "/portafolio/universal-de-mudanzas";

  /**
   * Referencia de desplazamiento que permite hacer scroll hacia la sección principal desde el banner.
   * @type {import('react').RefObject<HTMLDivElement>}
   */
  const scrollRef = useRef(null);

  /**
   * Conjunto de otros proyectos relacionados (excluyendo el actual).
   * @type {Array<Object>}
   */
  const otherProjects = projectList
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 4);

  /**
   * Galerías animadas con imágenes publicitarias del proyecto.
   * @type {Array<StaticImageData>}
   */
  const gallery_a = [g1, g3, g4, g5];
  const gallery_b = [g6, g7, g8, g9];

  /**
   * Imágenes del slider con mockups del sitio web desarrollado.
   * @type {Array<StaticImageData>}
   */
  const sliderImages = [m1, m2, m3, m4];

  return (
    <>

      {/* ===== BANNER PRINCIPAL ===== */}
      <BannerWithImage
        title="Universal de Mudanzas"

        buttonText=" &#8595;"
        buttonUrl="#inicio"
        description={
          <>
            Transformamos <span className="font-light">tradición</span> en{" "}
            presencia <strong className="font-bold">digital</strong>
          </>
        }
        backgroundImageUrl={banner.src}
        backgroundImageUrlResponsive={banner_responsive.src}
        responsiveJustify={true}
        textColor="text-white"
        align="left"
        justify="end"
        height="h-[100vh]"
      />


      {/* ===== INTRODUCCIÓN ===== */}
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
        Universal de Mudanzas es una empresa que se encarga de trasladar
        espacios completos, desde hogares hasta oficinas, con la logística y el
        cuidado que se requiere. Desde Posting asumimos el reto de rediseñar su
        branding, introducirlos en el mundo de la pauta digital y crear su
        página web.
      </DynamicParagraph>

      {/* ===== IDENTIDAD VISUAL ===== */}
      <TextBanner
        paragraph="Universal de Mudanzas necesitaba verse como lo que es: una empresa que
        se toma en serio cada trayecto. Rediseñamos su logo capturando esa
        esencia, y construimos un manual de marca práctico y coherente para
        comunicar siempre con orden y sentido."
        position="start"
        rounded="right"
        textAlign="center"

      >
        <h1 className="text-3xl md:text-5xl font-bold">Identidad con un destino claro</h1>
      </TextBanner>

      {/* ===== ANTES Y DESPUÉS DEL REBRANDING ===== */}
      <BackgroundWrapper
        imageUrl={bg5}
        hideOnMobile
        classBG="bg-no-repeat bg-contain bg-left"
        backgroundSize="75% auto"
      >
        <div className="mt-12">
          <CardSet
            cards={[
              { imageUrl: antes, label: "Antes" },
              { imageUrl: despues, label: "Después" },
            ]}
          />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <DynamicTitle
            fontSize="text-3xl md:text-5xl leading-tight mt-10"
            textcolor="text-black"
            align="text-left"
            as="h2"
            delay={0}
          >
            El momento exacto
          </DynamicTitle>

          <DynamicParagraph
            fontSize="text-lg"
            textcolor="text-black"
            fontWeight="font-normal"
            align="text-left"
            lineHeight="leading-relaxed"
            maxWidth="w-full mt-2 mb-10"
            delay={0}
          >
            Pensamos en estar presentes justo cuando alguien necesita una
            solución práctica, rápida y segura. Desde la estrategia hasta la
            ejecución, diseñamos campañas de Google Ads y Meta orientadas a la
            conversión y visibilidad orgánica.
            Creamos piezas pensadas para destacar en escenarios de búsqueda, definimos públicos, ajustamos formatos y afinamos el mensaje. Todo para que Universal de Mudanzas apareciera en el radar de quienes los necesitan.

          </DynamicParagraph>

          {/* ===== GALERÍA DE CAMPAÑAS ===== */}
          <GalleryAnimated
            gallery_a={gallery_a}
            max_w_a="max-w-[40%] lg:max-w-[100%]"
            gallery_b={gallery_b}
            max_w_b="max-w-[40%] lg:max-w-[100%]"
          />
        </div>
      </BackgroundWrapper>

      {/* ===== SITIO WEB ===== */}
      <TextBanner
        paragraph="El sitio web que creamos para Universal de Mudanzas fue diseñado para ser tan claro y eficiente como su servicio: con información directa, navegación sencilla y un enfoque práctico que guía al usuario sin rodeos. Una vitrina digital que no solo informa, sino que transmite confianza desde el primer momento."
        position="end"
        rounded="left"
        textAlign="center"
      >
        <span className="font-bold text-3xl md:text-5xl"> Sin contratiempos</span>
      </TextBanner>

      {/* ===== TRES DISPOSITIVOS CLAROS Y SIN SUPERPOSICIÓN ===== */}
      <section className="w-full py-24 flex justify-center items-center bg-white select-none">
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">

          {/* Escritorio */}
          <div className="w-[85%] lg:w-[55%] max-w-4xl">
            <Image
              src={escritorio}
              alt="Vista escritorio"
              className="rounded-xl shadow-xl w-full h-auto"

              loading="lazy"
            />
          </div>

          {/* Contenedor portátil + celular en columna (sin superposición) */}
          <div className="flex flex-col gap-10 items-center justify-center">

            {/* Portátil */}
            <div className="w-[80%] lg:w-[340px]">
              <Image
                src={portatil}
                alt="Vista portátil"
                className="rounded-xl  w-full h-auto"

                loading="lazy"
              />
            </div>

            {/* Celular */}
            <div className="w-[50%] lg:w-[180px]">
              <Image
                src={cel}
                alt="Vista móvil"
                className="rounded-xl  w-full h-auto"

                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>



      <ImageSlider
        images={sliderImages}
        autoplay
        delay={3000}
        showArrows
        imagesPerSlide={{ base: 1, sm: 2, md: 3, lg: 3 }}
        showDots
        sliderWidth="w-full"
      />


      {/* ===== PROYECTOS RELACIONADOS ===== */}
      <ProjectsSection
        title="Conoce nuestros proyectos"
        projects={otherProjects}
      />
    </>
  );
}

export default UniversalMudanzas;
