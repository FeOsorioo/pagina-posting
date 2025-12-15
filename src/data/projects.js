// src/app/data/projects.js

import unisanitasImg from "@/assets/portafolio/unisanitas.webp";
import universalImg from "@/assets/portafolio/universal.webp";
import cafeImg from "@/assets/portafolio/cafe.webp";
import ccgImg from "@/assets/portafolio/ccg.webp";
import delirioImg from "@/assets/portafolio/delirio-eterno.webp";

export const projectList = [
  {
    slug: "/portafolio/delirio-eterno",
    title: "Delirio Eterno",
    description: "La moda nos encontró y le sumamos lo nuestro.",
    image: delirioImg,
    ctaLink: "/portafolio/delirio-eterno",
  },
  {
    slug: "/portafolio/unisanitas",
    title: "Unisanitas",
    description: "Exploramos el sector educativo.",
    image: unisanitasImg, 
    ctaLink: "/portafolio/unisanitas",
  },
  {
    slug: "/portafolio/universal-de-mudanzas",
    title: "Universal de Mudanzas",
    description: "Transformamos tradición en presencia digital.",
    image: universalImg,
    ctaLink: "/portafolio/universal-de-mudanzas",
  },
  {
    slug: "/portafolio/cafe-finca-helena",
    title: "Café Finca Helena",
    description: "Sabores que transmiten",
    image: cafeImg,
    ctaLink: "/portafolio/cafe-finca-helena",
  },
  {
    slug: "/portafolio/contact-center-grupo",
    title: "Contact Center Grupo",
    description: "El reto del B2B.",
    image: ccgImg,
    ctaLink: "/portafolio/contact-center-grupo", 
  },
];