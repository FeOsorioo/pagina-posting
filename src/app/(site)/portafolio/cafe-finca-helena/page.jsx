/**
 * @fileoverview Página del portafolio: “Café Finca Helena”.
 *
 * Este componente presenta el caso de éxito de la marca “Café Finca Helena”,
 * destacando el proceso de conceptualización de marca, diseño de identidad,
 * estrategia digital y experiencia visual.
 *
 * La estructura incluye:
 * - Banner principal con imagen y botón de acción.
 * - Sección descriptiva con imágenes de galería.
 * - Bloques de texto narrativo (`TextBanner`) y secciones visuales (`ImageSlider`, `Gallery`).
 * - Llamado a la acción con enlace al sitio web del cliente.
 * - Sección de proyectos relacionados al final.
 *
 * Cada bloque está encapsulado con componentes de UI reutilizables
 * para mantener coherencia visual y modularidad.
 *
 * @module CafeFincaHelena
 */

"use client";

import { useRef } from "react";

import BannerWithImage from "@sections/BannerWithImage";
import TextBanner from "@ui/TextBanner";
import DynamicParagraph from "@ui/DynamicParagraph";
import ImageSlider from "@ui/ImageSlider";
import GalleryAnimated from "@ui/GalleryAnimated";
import ProjectsSection from "@sections/ProjectsSection";
import { projectList } from "@data/projects";
import PictureFrame from "@ui/PictureFrame";

/* ====== ASSETS ====== */
// Banner y fondos
import banner from "@/assets/cafe_finca_helena/banner.webp";
import banner_responsive from "@/assets/cafe_finca_helena/banner_responsive.webp"
import bannerWeb from "@/assets/cafe_finca_helena/banner_web.webp";

// Carrusel 1
import c1_1 from "@/assets/cafe_finca_helena/carrusel_1/1.webp";
import c1_2 from "@/assets/cafe_finca_helena/carrusel_1/2.webp";
import c1_3 from "@/assets/cafe_finca_helena/carrusel_1/3.webp";
import c1_4 from "@/assets/cafe_finca_helena/carrusel_1/4.webp";
import c1_5 from "@/assets/cafe_finca_helena/carrusel_1/5.webp";
import c1_6 from "@/assets/cafe_finca_helena/carrusel_1/6.webp";
import c1_7 from "@/assets/cafe_finca_helena/carrusel_1/7.webp";
import c1_8 from "@/assets/cafe_finca_helena/carrusel_1/8.webp";
import c1_9 from "@/assets/cafe_finca_helena/carrusel_1/9.webp";
import c1_10 from "@/assets/cafe_finca_helena/carrusel_1/10.webp";
import c1_11 from "@/assets/cafe_finca_helena/carrusel_1/11.webp";
import c1_12 from "@/assets/cafe_finca_helena/carrusel_1/12.webp";
import c1_13 from "@/assets/cafe_finca_helena/carrusel_1/13.webp";
import c1_14 from "@/assets/cafe_finca_helena/carrusel_1/14.webp";

// Galería
import g2 from "@/assets/cafe_finca_helena/galeria/2.webp";
import g3 from "@/assets/cafe_finca_helena/galeria/3.webp";
import g4 from "@/assets/cafe_finca_helena/galeria/4.webp";
import g5 from "@/assets/cafe_finca_helena/galeria/5.webp";
import g6 from "@/assets/cafe_finca_helena/galeria/6.webp";
import g7 from "@/assets/cafe_finca_helena/galeria/7.webp";
import g10 from "@/assets/cafe_finca_helena/galeria/10.webp";
import g12 from "@/assets/cafe_finca_helena/galeria/12.webp";

// Carrusel 2
import s1 from "@/assets/cafe_finca_helena/carrusel_2/1.webp";
import s2 from "@/assets/cafe_finca_helena/carrusel_2/2.webp";
import s3 from "@/assets/cafe_finca_helena/carrusel_2/3.webp";

/**
 * Componente principal `CafeFincaHelena`.
 *
 * Renderiza el caso de estudio completo de la marca “Café Finca Helena”.
 * Incluye contenido narrativo, visual y multimedia que ilustra la historia
 * de la marca y su proceso de desarrollo con Posting.
 *
 * @component
 * @example
 * return (<CafeFincaHelena />)
 *
 * @returns {JSX.Element} Página de portafolio renderizada con la información del cliente.
 */
function CafeFincaHelena() {
  /**
   * Slug actual del proyecto, usado para excluirlo de la lista de proyectos relacionados.
   * @type {string}
   */
  const currentSlug = "/portafolio/cafe-finca-helena";

  /**
   * Referencia usada para controlar el desplazamiento hacia el contenido principal.
   * @type {import('react').RefObject<HTMLDivElement>}
   */
  const scrollRef = useRef(null);

  /**
   * Lista de otros proyectos filtrada desde el dataset global `projectList`.
   * @type {Array<Object>}
   */
  const otherProjects = projectList
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 4);


  /**
   * Imágenes del primer carrusel (muestra de productos y empaques).
   * @type {Array<StaticImageData>}
   */
  const carousel1 = [
    c1_1, c1_2, c1_3, c1_4, c1_5, c1_6, c1_7,
    c1_8, c1_9, c1_10, c1_11, c1_12, c1_13, c1_14,
  ];

  /**
   * Imágenes utilizadas en la galería central de la página.
   * @type {Array<string>}
   */
  const galleryImages = [
    g2, g3, g4, g5, g6, g7, g10, g12,
  ];

  /**
   * Imágenes del slider final, con escenas del producto en contexto.
   * @type {Array<StaticImageData>}
   */
  const sliderImages = [s1, s2, s3];

  return (
    <>

      {/* ===== BANNER PRINCIPAL ===== */}
      <BannerWithImage
        backgroundImageUrl={banner.src}
        backgroundImageUrlResponsive={banner_responsive.src}
        textColor="text-white"
        align="left"
        description={
          <>
            <span className="font-light">Sabores que </span>transmiten
          </>
        }
        title="Café Finca Helena"
        buttonText=" &#8595;"
        buttonUrl="#inicio"
        height="h-[100vh]"
        scrollTargetRef={scrollRef}
      />



      {/* ===== DESCRIPCIÓN DEL PROYECTO ===== */}
      <div ref={scrollRef} className="w-full px-4 mt-10">

        {/* ==== CONTENEDOR LATERAL (TEXTO + GALERÍA) ==== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-10">

          {/* ==== TEXTO ==== */}
          <div className="flex-1 max-w-3xl">
            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              margin="mt-0"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              Café Finca Helena es una marca de café colombiano del Norte de Santander.
              Cuando llegó a nuestras manos, a pesar de tener un gran producto, no tenían
              una conceptualización de marca. Nuestro trabajo consistió en darle voz y presencia
              digital, al mismo tiempo que creamos una estrategia de posicionamiento.
            </DynamicParagraph>
            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              margin="mt-2"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              Creamos una línea de contenidos diversa que mostraba el producto desde distintos
              ángulos: el grano, la taza y la historia; reconociendo el trabajo de los campesinos
              en Colombia y cómo el café ha sido una herramienta en la lucha contra el conflicto en la zona.
            </DynamicParagraph>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-10">

          <GalleryAnimated
            gallery_a={galleryImages}
            max_w_a="max-w-[180px] min-w-[150px]"
          />

        </div>
      </div>


      {/* ===== SECCIÓN WEB ===== */}

      <TextBanner
        paragraph="Café Finca Helena necesitaba 
        un espacio propio para mostrar su producto, vender sin 
        intermediarios y fortalecer su identidad de marca. Creamos 
        una página web donde todo está pensado y construimos una 
        experiencia de usuario clara para un e-commerce. 
        Ahora, cualquier persona puede enamorarse de su café y
         hacer su pedido sin salir de casa."
        position="start"
        rounded="right"
        textAlign="center"
      >
        <span className="font-bold text-3xl md:text-5xl">
          Su lugar en el mundo digital
        </span>
      </TextBanner>

      <PictureFrame
        src={bannerWeb.src}
        alt="Vista aérea del proyecto"
        width={800}
        height={500}
        rounded="rounded-3xl"
        shadow="shadow-xl"
        objectFit="cover"
        border
        animated
        hoverEffect
        className="max-w-3xl mx-auto mt-10"
      />


      {/* ===== SECCIÓN EXPERIENCIA VISUAL ===== */}
      <TextBanner
        paragraph="¿Cómo hacer que tu experiencia no se pierda a través de lo digital? 
        Desde Posting, cada diseño buscaba que, más allá de un contenido visual, se 
        transmitiera una experiencia. Desde la planeación en las sesiones de fotos hasta 
        la producción de videos, quisimos que cada consumidor sintiera la calidez de una taza en cada pieza."
        position="end"
        rounded="left"
        textAlign="center"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Diseñar para sentir</h1>
      </TextBanner>
      <div className="mx-12 mb-1">
        <ImageSlider
          images={carousel1}
          imagesPerSlide={{ base: 1, sm: 2, md: 3, lg: 4 }}
          autoplay
          delay={3000}
          margin="mt-2"
          max_w_h="max-h-[50vh]"
        />
      </div>

      <TextBanner
        paragraph="En Posting asumimos el reto de presentar su producto en escenarios reales sin que perdieran su esencia. Diseñamos empaques que hacían justicia al contenido, piezas gráficas para ferias y eventos y material POP que contara su propósito. También produjimos sesiones de fotos y videos que sirvieron como insumo para redes sociales y la página web."
        position="start"
        rounded="right"
        textAlign="center"
      >
        <span className="font-bold text-3xl md:text-5xl">
          Una experiencia visual al nivel del sabor
        </span>
      </TextBanner>

      <ImageSlider
        images={sliderImages}
        imagesPerSlide={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
        autoplay={true}
        delay={3000}
        margin="mt-6"
        max_w_h="max-h-[50vh]"
      />

      {/* ===== PROYECTOS RELACIONADOS ===== */}
      <ProjectsSection
        title="Conoce nuestros proyectos"
        projects={otherProjects}
      />
    </>
  );
}

export default CafeFincaHelena;
