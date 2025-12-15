/**
 * @fileoverview Página del portafolio: “Unisanitas”.
 *
 * Este componente presenta el caso de estudio de la institución educativa
 * “Unisanitas”, enfocándose en su comunicación digital, producción audiovisual
 * y estrategias de posicionamiento de marca en el sector educativo.
 *
 * La estructura incluye:
 * - Banner principal de presentación del proyecto.
 * - Sección narrativa introductoria con imagen principal.
 * - Carruseles de fotografía institucional y diseño gráfico.
 * - Galería animada para mostrar recursos audiovisuales.
 * - Módulos temáticos sobre campañas, ideas y experiencias visuales.
 * - Cierre con un bloque de proyectos relacionados.
 *
 * @module Unisanitas
 */

"use client";

import { useRef } from "react";

import BannerWithImage from "@sections/BannerWithImage";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import DynamicParagraph from "@ui/DynamicParagraph";
import DynamicTitle from "@ui/DynamicTitle";
import TextBanner from "@ui/TextBanner";
import Image from "next/image";
import ImageSlider from "@ui/ImageSlider";
import ProjectsSection from "@sections/ProjectsSection";
import { projectList } from "@data/projects";
import GalleryAnimated from "@ui/GalleryAnimated";
import Slider from "@ui/Slider";

/* ==== Fondos decorativos ==== */
import bg2 from "@/assets/background/bg7.webp";
import bg3 from "@/assets/background/bg3.webp";
import bg6 from "@/assets/background/bg6.webp";
import bg5 from "@/assets/background/bg5.webp";

/* ==== Banner principal ==== */
import banner from "@/assets/unisanitas/banner.webp";
import banner_responsive from "@/assets/unisanitas/banner_responsive.webp"

import fotoInicial from "@/assets/unisanitas/fotoInicial.webp";

/* ==== Carruseles ==== */

import c1_3 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_3.webp";
import c1_4 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_4.webp";
import c1_5 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_5.webp";
import c1_6 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_6.webp";
import c1_7 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_7.webp";
import c1_8 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_8.webp";
import c1_9 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_9.webp";
import c1_10 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_10.webp";
import c1_11 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_11.webp";
import c1_12 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_12.webp";
import c1_13 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_13.webp";
import c1_14 from "@/assets/unisanitas/carrousel_1/unisanitas_slider_14.webp";

/* ==== Carrusel 2 ==== */
import c2_1 from "@/assets/unisanitas/carrousel_2/unisanitas_galeria_1.webp";
import c2_2 from "@/assets/unisanitas/carrousel_2/unisanitas_galeria_2.webp";
import c2_3 from "@/assets/unisanitas/carrousel_2/unisanitas_galeria_3.webp";
import c2_4 from "@/assets/unisanitas/carrousel_2/unisanitas_galeria_4.webp";
import c2_5 from "@/assets/unisanitas/carrousel_2/unisanitas_galeria_5.webp";

/* ==== Carrusel 3 ==== */
import c3_1 from "@/assets/unisanitas/carrousel_3/mokcup_unisanitas_1.webp";
import c3_2 from "@/assets/unisanitas/carrousel_3/mokcup_unisanitas_2.webp";
import c3_3 from "@/assets/unisanitas/carrousel_3/mokcup_unisanitas_3.webp";
import c3_4 from "@/assets/unisanitas/carrousel_3/mokcup_unisanitas_4.webp";
import c3_5 from "@/assets/unisanitas/carrousel_3/mokcup_unisanitas_5.webp";

/* ==== Galería animada ==== */
import gA1 from "@/assets/unisanitas/galeria/unisanitas1.webp";
import gA2 from "@/assets/unisanitas/galeria/unisanitas2.webp";
import gA3 from "@/assets/unisanitas/galeria/unisanitas3.webp";
import gB1 from "@/assets/unisanitas/galeria/unisanitas4.webp";
import gB2 from "@/assets/unisanitas/galeria/unisanitas5.webp";
import gB3 from "@/assets/unisanitas/galeria/unisanitas6.webp";

/* ============================================================= */

/**
 * Imágenes del primer carrusel (registro institucional y fotografía de eventos).
 * @type {Array<StaticImageData>}
 */
const carrousel_1 = [
  c1_3, c1_4, c1_5, c1_6, c1_7,
  c1_8, c1_9, c1_10, c1_11, c1_12, c1_13, c1_14,
];

/**
 * Carrusel con piezas gráficas institucionales.
 * @type {Array<string>}
 */
const carrousel_2 = [c2_1.src, c2_2.src, c2_3.src, c2_4.src, c2_5.src];

/**
 * Carrusel final con maquetas y aplicaciones visuales.
 * @type {Array<string>}
 */
const carrousel_3 = [c3_1.src, c3_2.src, c3_3.src, c3_4.src, c3_5.src];

/**
 * Galerías animadas (izquierda y derecha) usadas para mostrar producción visual.
 * @type {Array<string>}
 */
const gallery_a = [gA1.src, gA2.src, gA3.src];
const gallery_b = [gB1.src, gB2.src, gB3.src];

/**
 * Componente principal `Unisanitas`.
 *
 * Muestra el trabajo creativo, audiovisual y estratégico realizado para la institución Unisanitas.
 * Se enfoca en la construcción de narrativa visual, gestión de contenido y branding educativo.
 *
 * @component
 * @example
 * return (<Unisanitas />)
 *
 * @returns {JSX.Element} Página del portafolio renderizada.
 */
function Unisanitas() {
  /**
   * Slug actual del proyecto, usado para excluirlo del listado de proyectos relacionados.
   * @type {string}
   */
  const currentSlug = "/portafolio/unisanitas";

  /**
   * Referencia utilizada para controlar el desplazamiento desde el banner hacia el contenido.
   * @type {import('react').RefObject<HTMLDivElement>}
   */
  const scrollRef = useRef(null);

  /**
   * Lista de otros proyectos a mostrar al final del componente.
   * @type {Array<Object>}
   */
  const otherProjects = projectList
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 4);

  return (
    <>

      {/* ===== BANNER PRINCIPAL ===== */}
      <BannerWithImage
        title="UNISANITAS"
        backgroundImageUrlResponsive={banner_responsive.src}
        buttonText=" &#8595;"
        buttonUrl="#inicio"
        description={
          <span className="text-2xl md:text-4xl w-[500px]">
            <span className="font-light">Exploramos el </span> sector educativo
            <strong className="font-light"> de la mano de </strong>
          </span>
        }
        backgroundImageUrl={banner.src}
        textcolor="text-white"
        align="left"
        height="h-[100vh]"
        scrollTargetRef={scrollRef}
      />

      {/* ===== INTRODUCCIÓN ===== */}
      <BackgroundWrapper
        imageUrl={bg2.src}
        hideOnMobile
        classBG="bg-no-repeat bg-contain bg-left pt-6"
        backgroundSize="100% auto"
      >
        <div className="
    flex flex-col lg:flex-row 
    items-center 
    justify-center 
    gap-10 
    lg:my-12
    max-w-6xl 
    mx-auto
    px-6 lg:px-0
  ">

          {/* Imagen */}
          <Image
            loading="lazy"
            src={fotoInicial}
            alt="Imagen principal"
            sizes="(max-width:1024px) 80vw, 30vw"
            className="
    w-full 
    max-w-xs 
    lg:max-w-sm 
    h-auto 
    rounded-2xl 
    object-cover 
    shadow-lg 
    transition-transform 
    duration-300 
    hover:scale-[1.02]
  "
            placeholder="blur"
          />

          {/* Texto */}
          <div className="
      w-full 
      lg:max-w-xl 
      flex 
      flex-col 
      justify-center
      text-left
      px-0 lg:px-6
    ">
            <DynamicTitle
              fontSize="text-2xl sm:text-3xl md:text-4xl leading-tight"
              textcolor="text-black"
              align="text-left"
              width="w-full"
              as="h2"
              fontWeight="font-light"
              margin="lg:mt-10"
              delay={0}
            >
              <span className="font-bold">
                Marketing educativo
              </span>
            </DynamicTitle>

            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              margin="mt-6"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              Unisanitas es una institución de educación superior en Colombia,
              especializada en programas del área de la salud. Ellos necesitaban
              una identidad visual para afrontar un mundo digital lleno de competencia.
              Trabajamos por el posicionamiento de sus redes sociales y la creación
              de sus contenidos en múltiples plataformas y formatos.
            </DynamicParagraph>
          </div>
        </div>
      </BackgroundWrapper>


      <TextBanner
        paragraph={
          <>
            Creamos contenidos de valor que fortalecen el vínculo con su comunidad
            universitaria. Diseñamos piezas promocionales para destacar sus programas
            de formación y publicaciones informativas que comunican con claridad la
            esencia, los logros y las oportunidades que ofrece Unisanitas.
          </>
        }
        position="start"
        rounded="right"
        textAlign="center"
        classNameTitle="ml-5"
        classNameParagraph="ml-5 "
      >
        <span className="font-bold text-5xl">Redes Sociales</span>
      </TextBanner>


      <BackgroundWrapper
        imageUrl={bg3.src}
        hideOnMobile
        classBG="bg-no-repeat bg-contain bg-left"
        backgroundSize="100% auto"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-11/12 lg:w-8/12">
            <ImageSlider
              images={carrousel_1}
              imagesPerSlide={{ base: 1, sm: 2, md: 3, lg: 4 }}
              autoplay
              delay={3000}
              margin="mt-2"
              max_w_h="max-h-[100vh] md:max-h-[55vh] lg:max-h-[45vh]"
            />
          </div>

          <div >

          </div>
          <TextBanner
            paragraph={
              <>
                Registramos eventos, recorrimos pasillos, nos sumergimos en su comunidad y retratamos a todos aquellos que dan vida a la institución. Cada foto y cada video construyeron un relato visual que hablaba por ellos. Ese archivo se transformó en el motor creativo de muchas otras piezas: contenidos para redes, campañas institucionales, comunicaciones internas. Creamos un banco audiovisual versátil y auténtico, listo para que Unisanitas pudiera comunicar con agilidad y coherencia, sin perder nunca de vista quiénes son y qué representan.


              </>
            }
            position="start"
            rounded="right"
            textAlign="center"
            classNameTitle="ml-5"
            classNameParagraph="ml-5 "
            textColor="text-black"
            bg='bg-white'
          >
            <span className="font-bold text-5xl">Fotografía</span>
          </TextBanner>
        </div>

        <GalleryAnimated
          gallery_a={gallery_a}
          max_w_a="max-w-[70%] md:max-w-[20%] "
          gallery_b={gallery_b}
          max_w_b="max-w-[70%] md:max-w-[20%]"
        />
      </BackgroundWrapper>

      {/* ===== IDEAS QUE CONECTAN ===== */}
      <div className="bg-black mt-10">
        <BackgroundWrapper
          imageUrl={bg6.src}
          className="bg-black"
          classBG="bg-no-repeat bg-contain bg-right"
          backgroundSize="60% auto"
        >

          {/* CONTENEDOR QUE ALINEA TODO */}
          <div className="w-full lg:w-8/12 mx-auto px-6 py-20 text-right">

            <DynamicTitle
              fontSize="text-2xl sm:text-3xl md:text-4xl leading-tight"
              textcolor="text-white"
              align="text-right"
              width="w-full lg:w-10/12"
              as="h2"
              fontWeight="font-light"
              delay={0}
            >
              <span className="font-bold text-5xl">
                Campañas a la medida
              </span>
            </DynamicTitle>

            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-white"
              fontWeight="font-normal"
              align="text-right"
              margin="mt-6"
              lineHeight="leading-relaxed"
              delay={0.2}
              maxWidth="md:w-10/12"
            >
              Cada una de las campañas que creamos para Unisanitas comenzó con una pregunta, una necesidad, una conversación. Escuchamos, investigamos y nos sumergimos en su universo para entender qué querían decir y a quiénes querían llegar.
              Diseñamos estrategias y campañas a la medida, con ideas frescas, visuales atractivas y mensajes claros. Dirigiéndonos a estudiantes, aspirantes o egresados, cada acción estuvo pensada para generar impacto real y orgánico.
            </DynamicParagraph>

          </div>

        </BackgroundWrapper>
      </div>




      {/* ===== PRESENCIA FÍSICA ===== */}
      <BackgroundWrapper
        imageUrl={bg5.src}
        className=""
        classBG="bg-cover bg-right bg-no-repeat"
        backgroundSize="100% auto"
      >

        <div className="flex flex-col items-end lg:items-center px-5 lg:mx-auto lg:w-8/12 mt-6">

          <Slider
            images={carrousel_2}
            slidesPerViewXL={3}
            pagination={false}
            slidesPerViewSm={2}
            spaceBetween={10}
            autoplay
            delay={5000}
            className="rounded-xl"
          />
          <TextBanner
            paragraph={
              <>
                Con Unisanitas también salimos al mundo físico: ferias, pasillos, eventos, entradas, auditorios. Diseñamos pendones, vallas, elementos para muestras estudiantiles y ferias académicas, comunicando visualmente la esencia institucional más allá del entorno digital. Cada pieza fue pensada no solo para informar, sino para representar lo que Unisanitas es.


              </>
            }
            position="start"
            rounded="right"
            textAlign="center"
            classNameTitle="ml-5"
            classNameParagraph="ml-5 "
            textColor="text-black"
            bg='bg-white'
          >
            <span className="font-bold text-5xl">No todo pasa en pantallas</span>
          </TextBanner>


          <Slider
            images={carrousel_3}
            slidesPerViewXL={2}
            slidesPerViewSm={1}
            spaceBetween={10}
            pagination={false}
            autoplay
            delay={3000}
            className="rounded-xl"
          />
        </div>
      </BackgroundWrapper>

      {/* ===== PROYECTOS RELACIONADOS ===== */}
      <ProjectsSection projects={otherProjects} title="Otros proyectos" />
    </>
  );
}

export default Unisanitas;
