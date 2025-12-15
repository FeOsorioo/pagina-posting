/**
 * @fileoverview Página del portafolio: “Delirio Eterno”.
 *
 * Este componente representa el caso de estudio de la marca de calzado
 * “Delirio Eterno”, abordando su estrategia de diseño visual, dirección
 * de arte, fotografía de producto y narrativa de marca.
 *
 * Estructura principal:
 * - Banner inicial con imagen destacada y mensaje de marca.
 * - Sección de introducción visual y conceptual.
 * - Carruseles de diseño gráfico, publicidad y producto.
 * - Galería animada con composición visual doble.
 * - Conclusión con proyecto fotográfico y proyectos relacionados.
 *
 * @module DelirioEterno
 */

"use client";

import { useRef } from "react";
import Image from "next/image";

// Componentes y hooks reutilizables
import BannerWithImage from "@sections/BannerWithImage";
import ImageSlider from "@ui/ImageSlider";
import DynamicParagraph from "@ui/DynamicParagraph";
import DynamicTitle from "@ui/DynamicTitle";
import BackgroundWrapper from "@ui/BackgroundWrapper";
import ProjectsSection from "@sections/ProjectsSection";
import { projectList } from "@data/projects";
import Slider from "@ui/Slider";



// ==== Banner y principal ====
import bannerDelirio from "@/assets/delirio/banner.webp";

import botas from "@/assets/delirio/botas.webp";

// ==== Carrusel principal ====
import d1 from "@/assets/delirio/carrusel/1.webp";
import d2 from "@/assets/delirio/carrusel/2.webp";
import d3 from "@/assets/delirio/carrusel/3.webp";
import d4 from "@/assets/delirio/carrusel/4.webp";
import d5 from "@/assets/delirio/carrusel/5.webp";
import d6 from "@/assets/delirio/carrusel/6.webp";

// ==== Carrusel 2 ====
import c2_1 from "@/assets/delirio/carrusel-4/1.webp";
import c2_2 from "@/assets/delirio/carrusel-4/2.webp";
import c2_3 from "@/assets/delirio/carrusel-4/3.webp";
import c2_4 from "@/assets/delirio/carrusel-4/4.webp";
import c2_5 from "@/assets/delirio/carrusel-4/5.webp";
import c2_6 from "@/assets/delirio/carrusel-4/6.webp";

// ==== Galería animada ====
import gA2 from "@/assets/delirio/carrusel-2/2.webp";
import gA3 from "@/assets/delirio/carrusel-2/3.webp";
import gB4 from "@/assets/delirio/carrusel-2/4.webp";
import gB5 from "@/assets/delirio/carrusel-2/5.webp";

// ==== Carrusel 3 ====
import p1 from "@/assets/delirio/carrusel-3/1.webp";
import p2 from "@/assets/delirio/carrusel-3/2.webp";
import p3 from "@/assets/delirio/carrusel-3/3.webp";
import p4 from "@/assets/delirio/carrusel-3/4.webp";
import p5 from "@/assets/delirio/carrusel-3/5.webp";
import p6 from "@/assets/delirio/carrusel-3/6.webp";
import p7 from "@/assets/delirio/carrusel-3/7.webp";
import p8 from "@/assets/delirio/carrusel-3/8.webp";
import p9 from "@/assets/delirio/carrusel-3/9.webp";
import p10 from "@/assets/delirio/carrusel-3/10.webp";

/**
 * Componente principal `DelirioEterno`.
 *
 * Renderiza la página de presentación del proyecto “Delirio Eterno”,
 * integrando elementos narrativos, visuales y gráficos para mostrar
 * el proceso creativo y estratégico del desarrollo de marca.
 *
 * @component
 * @example
 * return (<DelirioEterno />)
 *
 * @returns {JSX.Element} Página renderizada del portafolio “Delirio Eterno”.
 */
function DelirioEterno() {
  /**
   * Slug actual del proyecto. Se utiliza para filtrar los proyectos relacionados.
   * @type {string}
   */
  const currentSlug = "/portafolio/delirio-eterno";

  /**
   * Referencia para desplazamiento hacia la sección principal.
   * @type {import('react').RefObject<HTMLDivElement>}
   */
  const scrollRef = useRef(null);

  /**
   * Proyectos relacionados filtrados del dataset global.
   * @type {Array<Object>}
   */
  const otherProjects = projectList
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 4);

  /**
   * Carrusel principal con fotografías de estilo y productos.
   * @type {Array<string>}
   */
  const sliderImages = [d1.src, d2.src, d3.src, d4.src, d5.src, d6.src];



  const gallery1 = [gA3.src,gA2.src, gB4.src, gB5.src, ];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /**
   * Carrusel de fotografía de producto.
   * @type {Array<string>}
   */
  const gallery2 = [
    p1.src, p2.src, p3.src, p4.src, p5.src,
    p6.src, p7.src, p8.src, p9.src, p10.src,
  ];

  /**
   * Carrusel final (fotos de campañas complementarias).
   * @type {Array<string>}
   */
  const sliderImages2 = [c2_1, c2_2, c2_3, c2_4, c2_5, c2_6];

  return (
    <>

      {/* ===== BANNER PRINCIPAL ===== */}
      <BannerWithImage
        backgroundImageUrl={bannerDelirio.src}
        textColor="text-white"
        align="left"
        description={
          <>
            La moda<span className="font-light"> nos encontró y le </span>
            sumamos lo nuestro
          </>
        }
        title="Delirio Eterno"
        buttonText=" &#8595;"
        buttonUrl="#inicio"
        height="h-[100vh]"
        scrollTargetRef={scrollRef}
      />


      {/* ===== INTRODUCCIÓN Y CONCEPTO ===== */}
      <BackgroundWrapper
      >
        <div className="flex items-center justify-center">
          <div
            ref={scrollRef}
            className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 py-4"
          >
            <DynamicParagraph
              fontSize="text-lg"
              textcolor="text-black"
              fontWeight="font-normal"
              align="text-left"
              margin="mt-10"
              lineHeight="leading-relaxed"
              delay={0.2}
            >
              Delirio Eterno es una marca de calzado que combina diseño local,
              materiales de calidad y un enfoque estético entre lo atrevido y lo
              sofisticado. Su apuesta por el cuero colombiano se traduce en
              siluetas que exploran nuevas formas de expresión a través del
              color, la textura y el estilo.
            </DynamicParagraph>

            <Image
              src={botas}
              alt="Imagen principal del proyecto Delirio Eterno"
              className="my-4 w-full md:w-8/12 h-auto object-cover mx-auto rounded-3xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 80vw, 50vw"
              placeholder="blur"
              quality={100}
              loading="lazy"
            />
          </div>
        </div>
      </BackgroundWrapper>


      <div className="bg-black flex flex-col items-center justify-center py-2  px-5">


        <DynamicTitle
          fontSize="text-4xl sm:text-5xl lg:text-6xl leading-none"
          textcolor="text-white"
          align="text-left"
          as="h2"
          margin="mt-12"
          fontWeight="font-bold"
          delay={0}
        >
          <span className="font-bold  text-4xl md:text-5xl">Redes sociales</span>
        </DynamicTitle>
        <DynamicParagraph
          fontSize="text-base lg:text-lg"
          textcolor="text-white"
          fontWeight="font-normal"
          align="text-left"
          margin="mb-12 sm:mb-16"
          lineHeight="leading-relaxed"
          delay={0.2}

        >
          Creamos un universo visual y narrativo donde cada publicación se sentía como parte de un mismo relato: el de una marca que no le tiene miedo al contraste, que abraza lo diferente y lo transforma en estilo. Detrás de eso, cada detalle fue pensado: desde los temas que proponíamos para redes sociales hasta los copys que escribíamos y las piezas que diseñábamos para darles vida. Porque no se trataba de publicar por publicar, sino de construir una comunidad desde cero.
        </DynamicParagraph>


        <div className="w-full px-5 lg:px-12">

          <Slider
            images={sliderImages}
            slidesPerViewXL={3}
            slidesPerViewSm={1}
            spaceBetween={30}
            pagination={false}
            autoplay
            delay={5000}
            className="rounded-xl max-w-6xl mx-auto"
          />
        </div>
        <DynamicTitle
          fontSize="text-4xl sm:text-5xl lg:text-6xl leading-none"
          textcolor="text-white"
          align="text-left"
          as="h2"
          margin="mt-12"
          fontWeight="font-bold"
          delay={0}
        >
          <span className="font-bold  text-4xl md:text-5xl">La marca, en tus manos</span>
        </DynamicTitle>

        <DynamicParagraph
          fontSize="text-base lg:text-lg"
          textcolor="text-white"
          fontWeight="font-normal"
          align="text-left"
          margin="mb-12"
          lineHeight="leading-relaxed"
          delay={0.2}

        >
          Creamos una identidad que se sintió en cada detalle físico: desde las etiquetas y empaques hasta las bolsas que acompañaban cada par. Cada pieza se pensó como una extensión del universo visual de la marca. El diseño también se siente: en las texturas, en los acabados. Detrás de cada material y cada trazo hubo una intención: hacer que la experiencia de marca se viviera completa, desde el primer vistazo hasta el último detalle.
        </DynamicParagraph>


        <div className="mx-12 mb-1">
          
          <ImageSlider
            images={sliderImages2}
            imagesPerSlide={{ base: 1, sm: 2, md: 3, lg: 4 }}
            autoplay
            delay={3000}
            margin="mt-2"
            max_w_h="max-h-[100vh] md:max-h-[55vh] lg:max-h-[45vh]"
          />
        </div>
      </div>

      {/* ===== PUBLICIDAD Y ALCANCE ===== */}
      < div className="max-w-4xl px-5 mx-auto my-6 " >
        <DynamicTitle
          fontSize="text-5xl sm:text-5xl md:text-5xl leading-none"
          textcolor="text-black"
          align="text-left"
          as="h2"
          fontWeight="font-light"
          delay={0}
        >
          <span className="font-bold text-4xl md:text-5xl">Que el estilo no pase desapercibido</span>
        </DynamicTitle>
        <DynamicParagraph
          maxWidth="max-w-5xl"
          fontSize="text-lg "
          textcolor="text-black"
          fontWeight="font-normal"
          align="text-left"
          margin="mt-6"
          lineHeight="leading-relaxed"
          delay={0.2}
        >
          La pauta fue una extensión del trabajo que veníamos construyendo. Diseñamos piezas pensadas específicamente para ese escenario. Comunicamos lo que hace única a la marca y llevamos ese mensaje a nuevas audiencias.

          Se trataba de impactar con el mensaje indicado, en el momento adecuado y frente a las personas correctas. Desde la idea visual hasta la segmentación, cada detalle respondía a un propósito: lograr que más personas descubrieran a Delirio Eterno.
        </DynamicParagraph>


      </div >

      <div className="w-full px-5 ">
        <Slider
          images={gallery1}
          slidesPerViewXL={4}
          slidesPerViewSm={2}
          spaceBetween={30}
          pagination={false}
          autoplay
          delay={5000}
          className="rounded-xl max-w-3xl"
        />
      </div>

      {/* ===== FOTOGRAFÍA DE PRODUCTO ===== */}


      < div className="max-w-4xl px-5 mx-auto my-6" >
        <DynamicTitle
          fontSize=" text-4xl md:text-5xl leading-tight"
          textcolor="text-black"
          align="text-right"
          fontWeight="font-bold"
          as="h2"
          delay={0}
        >
          Fotografía de producto
        </DynamicTitle>

        <DynamicParagraph
          fontSize="text-lg"
          textcolor="text-black"
          fontWeight="font-normal"
          align="text-right"
          margin="mt-6 sm:mt-8 md:mt-10  lg:mr-30"
          lineHeight="leading-relaxed"
          maxWidth="max-w-4xl"
          delay={0.2}
        >
          Registramos cada tipo de calzado con el mismo cuidado con el que fue
          creado: resaltando los detalles, materiales y estilos que hacen única
          cada referencia. Más que un recurso visual, estas fotografías fueron
          la base para construir una identidad gráfica coherente, capaz de
          mostrar la diversidad de la marca sin perder su esencia.
        </DynamicParagraph>
      </div>
      <div className=" px-5">

        <Slider
          images={gallery2}
          slidesPerViewXL={3}
          slidesPerViewSm={1}
          spaceBetween={30}
          pagination={false}
          autoplay
          delay={5000}
          className="rounded-xl max-w-6xl mx-auto"
        />

      </div>
      {/* ===== PROYECTOS RELACIONADOS ===== */}
      <ProjectsSection projects={otherProjects} title="Otros proyectos" />
    </>
  );
}

export default DelirioEterno;
