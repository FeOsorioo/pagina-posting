/**
 * @fileoverview Página del portafolio: “Contact Center Grupo”.
 *
 * Este componente muestra el caso de éxito de Contact Center Grupo (CCG),
 * destacando su proceso de posicionamiento de marca, comunicación interna
 * y desarrollo narrativo en el entorno B2B.
 *
 * La estructura incluye:
 * - Un banner principal de presentación (`BannerWithImage`)
 * - Secciones narrativas con títulos y párrafos dinámicos (`DynamicTitle`, `DynamicParagraph`)
 * - Galerías visuales que representan material interno y externo (`Gallery`)
 * - Un bloque centrado en la mascota corporativa (“Callie”) y su evolución
 * - Un módulo de proyectos relacionados (`ProjectsSection`)
 *
 * Todos los elementos se organizan mediante una estructura flexible y modular,
 * optimizada para mantener coherencia visual y una narrativa progresiva.
 *
 * @module ContactCenterGrupo
 */

"use client";

import { useRef } from "react";
import Image from "next/image";

import BannerWithImage from "@sections/BannerWithImage";
import DynamicParagraph from "@ui/DynamicParagraph";
import DynamicTitle from "@ui/DynamicTitle";
import TextBanner from "@ui/TextBanner";
import GalleryAnimated from "@ui/GalleryAnimated";
import CharacterEvolution from "@sections/CharacterEvolution";
import ProjectsSection from "@sections/ProjectsSection";

import { projectList } from "@data/projects";
/* ====== ASSETS (CCG) ====== */
// Banner principal
import bannerCcg from "@/assets/ccg/banner.webp";
import banner_responsive from "@/assets/ccg/banner_responsive.webp"

// Imagen del equipo
import equipo from "@/assets/ccg/equipo.webp";

// Galería externa
import g1 from "@/assets/ccg/carrusel/1.webp";
import g2 from "@/assets/ccg/carrusel/2.webp";
import g3 from "@/assets/ccg/carrusel/3.webp";
import g4 from "@/assets/ccg/carrusel/4.webp";

// Galería interna
import gi1 from "@/assets/ccg/carrusel-interno/1.webp";
import gi2 from "@/assets/ccg/carrusel-interno/2.webp";
import gi3 from "@/assets/ccg/carrusel-interno/3.webp";
import gi4 from "@/assets/ccg/carrusel-interno/4.webp";

/**
 * Componente principal `ContactCenterGrupo`.
 *
 * Renderiza la narrativa visual y estratégica del proyecto realizado
 * para Contact Center Grupo (CCG), empresa BPO enfocada en soluciones
 * tecnológicas y de automatización.
 *
 * @component
 * @example
 * return (<ContactCenterGrupo />)
 *
 * @returns {JSX.Element} Página de portafolio completamente renderizada.
 */
function ContactCenterGrupo() {
  /**
   * Identificador del slug actual del proyecto.
   * Se usa para excluirlo del listado de proyectos relacionados.
   * @type {string}
   */
  const currentSlug = "/portafolio/contact-center-grupo";

  /**
   * Referencia usada para el desplazamiento hacia el contenido principal
   * desde el botón del banner.
   * @type {import('react').RefObject<HTMLDivElement>}
   */
  const scrollRef = useRef(null);

  /**
   * Lista de proyectos distintos a CCG, usada para mostrar “otros proyectos”.
   * @type {Array<Object>}
   */
  const otherProjects = projectList
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 4);

  /**
   * Galería de imágenes externas (material publicitario, campañas, piezas de marca).
   * @type {Array<string>}
   */
  const gallery = [g1, g2, g3, g4];

  /**
   * Galería de imágenes internas (material de comunicación interna y cultura organizacional).
   * @type {Array<string>}
   */
  const gallery2 = [gi1, gi2, gi3, gi4];

  return (
    <>

      {/* ===== BANNER PRINCIPAL ===== */}
      <BannerWithImage
        backgroundImageUrl={bannerCcg.src}
        backgroundImageUrlResponsive={banner_responsive.src}
        textColor="text-white"
        align="left"
        description={
          <>
            <span className="font-light"> El reto del </span>B2B
          </>
        }
        title="Contact Center Grupo"
        buttonText=" &#8595;"
        buttonUrl="#inicio"
        height="h-[100vh]"
        scrollTargetRef={scrollRef}
      />
      {/* ===== INTRODUCCIÓN ===== */}
      <div className="mx-auto max-w-5xl space-y-6 mt-12 mb-3" ref={scrollRef}>

        {/* ===== SECCIÓN EQUIPO ===== */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-2/5 p-4 flex justify-center items-center">
            <div className="relative w-full">
              <Image
                src={equipo}
                alt="Equipo de trabajo de Contact Center Grupo SAS"
                className="w-full h-auto rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                loading="lazy"

                quality={90}
              />

            </div>
          </div>

          <div className="w-full md:w-3/5 p-5 max-w-3xl flex flex-col justify-center">

            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              maxWidth="max-w-4xl"
              margin="mt-6"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              {[
                <>
                  Contact Center Grupo es una empresa enfocada en la tercerización de servicios con soluciones que integran tecnología, automatización y gestión omnicanal. Así como CCG es el aliado estratégico de las empresas,{" "}
                  <strong>nosotros en Posting somos su aliado creativo</strong>{" "}
                  para crear y transmitir su narrativa con sentido.
                </>
              ]}
            </DynamicParagraph>


            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              maxWidth="max-w-4xl"
              margin="mt-2"
              lineHeight="leading-relaxed"
              delay={0.2}
            >

              Comunicar en el mundo B2B no es tarea sencilla. Cuando no se vende un producto, sino soluciones, procesos y servicios, el reto es hacer atractivo lo que no se puede mostrar con una foto.

            </DynamicParagraph>
          </div>

        </div>
      </div>

      {/* ===== ESTRATEGIA DE COMUNICACIÓN ===== */}
      <TextBanner
        paragraph="Trabajamos en un plan estratégico de comunicaciones enfocado en tener una narrativa sólida, acompañada de una consultoría para la construcción de marca y posicionamiento. En medio de este camino incluímos métodos de investigación para entender la cultura organizacional de la empresa y crear una marca coherente hacia sus públicos."
        position="start"
        rounded="right"
        textAlign="center"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Comunicación externa y comunicación interna</h1>
      </TextBanner>

      {/* ===== COMUNICACIÓN EXTERNA ===== */}
      <div className="mx-auto max-w-5xl space-y-6 mt-0">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-3/5 p-4 flex justify-center items-center">
            <DynamicTitle
              fontSize="text-3xl md:text-5xl"
              textcolor="text-black -mb-5"
              align="text-left"
              as="h2"
              delay={0}
            >
              <span className="font-normal">Lo</span> externo:{" "}
              <span className="font-normal">una marca que se</span> posiciona
            </DynamicTitle>
          </div>

          <div className="w-full md:w-5/5 p-4 max-w-5xl">
            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              maxWidth="max-w-4xl"
              margin="mt-6"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              Para los públicos externos nos enfocamos en construir una
              presencia fuerte, profesional y memorable. Convertimos la
              propuesta de valor de CCG en piezas concretas que hablan por sí
              solas: gestión y creación de contenido para redes sociales, diseño y desarrollo de su sitio web, material publicitario para ferias y eventos corporativos, creación y diseño de su portafolio comercial.

            </DynamicParagraph>
          </div>
        </div>
        <GalleryAnimated
          gallery_a={gallery}
          max_w_a="max-w-[100%] md:max-w-[20%]" />


        {/* ===== COMUNICACIÓN INTERNA ===== */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-2/5 p-4 flex justify-center items-center">
            <DynamicTitle
              fontSize="text-3xl md:text-5xl"
              textcolor="text-black"
              align="text-left -mb-5"
              as="h2"
              delay={0}
            >
              <span className="font-normal">Lo</span> interno:{" "}
              <span className="font-normal">una cultura que se</span> fortalece
            </DynamicTitle>
          </div>

          <div className="w-full md:w-3/5 p-4 max-w-3xl">
            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              maxWidth="max-w-4xl"
              margin="mt-6"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              Toda gran marca se construye desde adentro. En Contact Center
              Grupo, nuestra labor no fue solo diseñar piezas internas, sino
              definir el para qué y el cómo se comunica dentro de la
              organización. Ayudamos a dar forma a una cultura comunicativa
              sólida, coherente y viva. Desde Posting lideramos una estrategia
              integral de comunicación interna.
            </DynamicParagraph>
          </div>
        </div>
        <GalleryAnimated
          gallery_a={gallery2}
          max_w_a="max-w-[100%] md:max-w-[20%]" />
      </div>

      {/* ===== PERSONAJE CALLIE ===== */}
      <TextBanner
        paragraph="Crear una mascota no fue solo una decisión estética sino también estratégica. Callie es una herramienta de comunicación que nos permitió transmitir ideas, generar recordación y un vínculo con la comunidad. El resultado fue una figura auténtica, con carácter, un personaje capaz de conectar con todos."
        position="end"
        rounded="left"
        textAlign="center"
      >
        <span className="font-bold text-3xl md:text-5xl">
          ¡Hola soy Callie!
        </span>
      </TextBanner>

      {/* Subtítulo de sección del personaje */}
      <div className="w-full flex justify-center px-4 py-8">
        <DynamicTitle
          fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-3xl"
          textcolor="text-black"
          align="text-center"
          as="h2"
          delay={0}
        >
          Conceptualización y caracterización del personaje
        </DynamicTitle>
      </div>

      <CharacterEvolution />

      {/* ===== PROYECTOS RELACIONADOS ===== */}
      <ProjectsSection title="Conoce nuestros proyectos" projects={otherProjects} />
    </>
  );
}

export default ContactCenterGrupo;
