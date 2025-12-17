
// ======================================================
// ICONOS
// ======================================================
import iconDiseno from "@/assets/home/diseno_grafico.webp";
import iconDesarrollo from "@/assets/home/desarrollo_web.webp";
import iconProduccion from "@/assets/home/produccion.webp";
import iconEstrategia from "@/assets/home/estrategia_digital.webp";
import iconRedes from "@/assets/home/redes_sociales.webp";

// ======================================================
// VIDEOS PRINCIPALES
// ======================================================
const disenografico = '/servicios/diseno_grafico/diseno_grafico.webm';
const redesociales = '/servicios/redes_sociales/redes_sociales.webm';
const desarrolloWeb = '/servicios/desarrollo_web/desarrollo_web.webm';
const marketingDigital = '/servicios/marketing_digital/marketing_digital.webm';
const produccionAudiovisual = '/servicios/produccion_audiovisual/produccion_audiovisual.webm';

// ======================================================
// VIDEOS DISEÑO GRÁFICO
// ======================================================
const servicio_diseno_1 = '/servicios/diseno_grafico/servicio_diseno_1.webm';
const servicio_diseno_2 = '/servicios/diseno_grafico/servicio_diseno_2.webm';
const servicio_diseno_3 = '/servicios/diseno_grafico/servicio_diseno_3.webm';
const servicio_diseno_4 = '/servicios/diseno_grafico/servicio_diseno_4.webm';
const servicio_diseno_5 = '/servicios/diseno_grafico/servicio_diseno_5.webm';

// ======================================================
// VIDEOS PRODUCCIÓN AUDIOVISUAL
// ======================================================
const servicio_produccion_1 = '/servicios/produccion_audiovisual/servicio_produccion_1.webm';
const servicio_produccion_2 = '/servicios/produccion_audiovisual/servicio_produccion_2.webm';
const servicio_produccion_3 = '/servicios/produccion_audiovisual/servicio_produccion_3.webm';
const servicio_produccion_4 = '/servicios/produccion_audiovisual/servicio_produccion_4.webm';

// ======================================================
// VIDEOS REDES SOCIALES
// ======================================================
const servicio_redes_1 = '/servicios/redes_sociales/servicio_redes_1.webm';
const servicio_redes_2 = '/servicios/redes_sociales/servicio_redes_2.webm';
const servicio_redes_3 = '/servicios/redes_sociales/servicio_redes_3.webm';
const servicio_redes_4 = '/servicios/redes_sociales/servicio_redes_4.webm';
const servicio_redes_5 = '/servicios/redes_sociales/servicio_redes_5.webm';

// ======================================================
// VIDEOS DESARROLLO WEB
// ======================================================
const servicio_web_1 = '/servicios/desarrollo_web/servicio_web_1.webm';
const servicio_web_2 = '/servicios/desarrollo_web/servicio_web_2.webm';
const servicio_web_3 = '/servicios/desarrollo_web/servicio_web_3.webm';
const servicio_web_4 = '/servicios/desarrollo_web/servicio_web_4.webm';
const servicio_web_5 = '/servicios/desarrollo_web/servicio_web_5.webm';

// ======================================================
// VIDEOS MARKETING DIGITAL
// ======================================================
const servicio_marketing_1 = '/servicios/marketing_digital/servicio_marketing_1.webm';
const servicio_marketing_2 = '/servicios/marketing_digital/servicio_marketing_2.webm';
const servicio_marketing_3 = '/servicios/marketing_digital/servicio_marketing_3.webm';
const servicio_marketing_4 = '/servicios/marketing_digital/servicio_marketing_4.webm';
const servicio_marketing_5 = '/servicios/marketing_digital/servicio_marketing_5.webm';

// ======================================================
// SERVICE LIST
// ======================================================
export const serviceList = [
  {
    slug: "diseno-grafico",
    title: "Diseño Gráfico",
    ctaLink: "/servicios/diseno-grafico",
    video: disenografico,
    icon: iconDiseno,
    description:
      "Todo entra por los ojos ¿cierto?\nCreamos diseños que hacen tangible la personalidad de tu marca y la proyectan con fuerza en cada espacio (Digital o físico).",
    subServices: [
      {
        label: "Branding",
        link: "branding",
        video: servicio_diseno_1,
        videoOrImage: true,
        description:
          "Un logo nunca será suficiente. Creamos un sistema completo que le da identidad a sueños: colores, tipografías, tono visual y símbolos que hacen que el mundo empiece a creer en ellos también.\nBranding que se sostiene en el tiempo y se diferencia en cualquier espacio.",
      },
      {
        label: "Diseño digital",
        link: "diseño-digital",
        video: servicio_diseno_2,
        videoOrImage: true,
        description:
          "Diseñamos piezas pensadas para cada espacio online, con coherencia visual y la fuerza suficiente para destacar en medio del scroll infinito. Te ayudamos con tus redes sociales, páginas web, anuncios y publicidad digital.",
      },
      {
        label: "Material POP",
        link: "material-pop",
        video: servicio_diseno_3,
        videoOrImage: true,
        description:
          "Los sueños merecen conocer la calle, las vitrinas, las paredes. Diseñamos piezas que no pasan desapercibidas y logran que la gente se lleve tu nombre en la memoria… y en las manos.",
      },
      {
        label: "Ilustración",
        link: "ilustracion",
        video: servicio_diseno_4,
        videoOrImage: true,
        description:
          "Creemos en lo que aún no existe. Vemos formas, personajes y mundos posibles donde otros solo ven un espacio en blanco. Creamos personajes, etiquetas y proyectos únicos.",
      },
      {
        label: "Diseño editorial",
        link: "diseño-editoral",
        video: servicio_diseno_5,
        videoOrImage: true,
        description:
          "Un buen editorial no solo organiza páginas: cuenta una historia. Diseñamos catálogos, revistas e informes con diagramación cuidada, textos bien presentados y versiones listas para impresión o digital.",
      },
    ],
  },

  {
    slug: "produccion-audiovisual",
    title: "Producción Audiovisual",
    ctaLink: "/servicios/produccion-audiovisual",
    video: produccionAudiovisual,
    icon: iconProduccion,
    description:
      "Que se hagan realidad. Tus sueños merecen ser vistos y escuchados. Producimos contenido visual y sonoro que conecta, emociona y potencia tu presencia digital.",
    subServices: [
      {
        label: "Video",
        link: "video",
        video: servicio_produccion_1,
        videoOrImage: true,
        description:
          "Creamos videos corporativos, publicitarios y creativos que transmiten y se adaptan a los formatos digitales que necesites.",
      },
      {
        label: "Fotografía",
        link: "fotografia",
        video: servicio_produccion_2,
        videoOrImage: true,
        description:
          "Capturamos imágenes profesionales que destacan productos, servicios, personas o momentos, cuidando siempre la estética y el mensaje.",
      },
      {
        label: "Animación",
        link: "animacion",
        video: servicio_produccion_3,
        videoOrImage: true,
        description:
          "Motion graphics y animación para simplificar conceptos complejos y hacer tus proyectos únicos.",
      },
      {
        label: "Podcast",
        link: "podcast",
        video: servicio_produccion_4,
        videoOrImage: true,
        description:
          "Producción completa de podcasts: concepto, guion, grabación y edición.",
      },
    ],
  },

  {
    slug: "redes-sociales",
    title: "Redes Sociales",
    ctaLink: "/servicios/redes-sociales",
    video: redesociales,
    icon: iconRedes,
    description:
      "Estrategia, contenido y gestión que convierten seguidores en comunidad, fortaleciendo tu presencia digital con resultados medibles.",
    subServices: [
      {
        label: "Estrategia",
        link: "estrategia",
        video: servicio_redes_1,
        videoOrImage: true,
        description:
          "Diseñamos estrategias a la medida para que tus contenidos encuentren su lugar, su público y su propósito digital.",
      },
      {
        label: "Content Management",
        link: "content-management",
        video: servicio_redes_2,
        videoOrImage: true,
        description:
          "Planificación, programación y optimización de contenido con informes claros y medibles.",
      },
      {
        label: "Creación de contenido",
        link: "creacion-de-contenido",
        video: servicio_redes_3,
        videoOrImage: true,
        description:
          "Generamos contenido para Instagram, TikTok, Facebook, LinkedIn y YouTube, pensado para atraer y emocionar.",
      },
      {
        label: "Ads Manager",
        link: "ads-manager",
        video: servicio_redes_4,
        videoOrImage: true,
        description:
          "Gestionamos campañas en Meta, TikTok, Google, YouTube y LinkedIn Ads.",
      },
      {
        label: "Copywriting",
        link: "copywriting",
        video: servicio_redes_5,
        videoOrImage: true,
        description:
          "Creamos mensajes que conectan, emocionan y transforman lectores en creyentes.",
      },
    ],
  },

  {
    slug: "marketing-digital",
    title: "Marketing digital",
    ctaLink: "/servicios/marketing-digital",
    video: marketingDigital,
    icon: iconEstrategia,
    description:
      "Diseñamos campañas digitales que posicionan tu marca y amplifican tu alcance.",
    subServices: [
      {
        label: "Creación de marca",
        link: "creacion-de-marca",
        video: servicio_marketing_1,
        videoOrImage: true,
        description:
          "Transformamos sueños en identidad, voz y narrativa digital.",
      },
      {
        label: "Campañas BTL",
        link: "campañas-btl",
        video: servicio_marketing_2,
        videoOrImage: true,
        description:
          "Experiencias creativas que dejan huella fuera de la pantalla.",
      },
      {
        label: "CRM",
        link: "CRM",
        video: servicio_marketing_3,
        videoOrImage: true,
        description:
          "Gestión de leads organizada, trazable y medible.",
      },
      {
        label: "CX",
        link: "cx",
        video: servicio_marketing_4,
        videoOrImage: true,
        description:
          "Estrategias de Customer Experience con IA y automatización.",
      },
      {
        label: "Outbound Marketing",
        link: "outbound-marketing",
        video: servicio_marketing_5,
        videoOrImage: true,
        description:
          "Abrimos conversaciones con prospectos antes de que te busquen.",
      },
    ],
  },

  {
    slug: "desarrollo-web",
    title: "Desarrollo web",
    ctaLink: "/servicios/desarrollo-web",
    video: desarrolloWeb,
    icon: iconDesarrollo,
    description:
      "Tu web es tu vitrina digital. Diseñamos y desarrollamos sitios que combinan estética, funcionalidad y estrategia.",
    subServices: [
      {
        label: "Web design (UX/UI)",
        link: "web-design",
        video: servicio_web_1,
        videoOrImage: true,
        description:
          "Interfaces intuitivas, atractivas y orientadas a conversión.",
      },
      {
        label: "Full Code",
        link: "full-code",
        video: servicio_web_2,
        videoOrImage: true,
        description:
          "Desarrollo a la medida, seguro y escalable.",
      },
      {
        label: "WordPress",
        link: "wordpress",
        video: servicio_web_3,
        videoOrImage: true,
        description:
          "Webs personalizadas sin plantillas genéricas y con autonomía.",
      },
      {
        label: "E-commerce",
        link: "e-commerce",
        video: servicio_web_4,
        videoOrImage: true,
        description:
          "Tiendas online listas para vender con experiencia fluida.",
      },
      {
        label: "SEO",
        link: "seo",
        video: servicio_web_5,
        videoOrImage: true,
        description:
          "Optimización de contenido para posicionamiento orgánico sostenible.",
      },
    ],
  },
];
