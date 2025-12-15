// ===== ICONOS (esto SÍ se importa) =====
import iconDiseno from "@/assets/home/diseno_grafico.webp";
import iconDesarrollo from "@/assets/home/desarrollo_web.webp";
import iconProduccion from "@/assets/home/produccion.webp";
import iconEstrategia from "@/assets/home/estrategia_digital.webp";
import iconRedes from "@/assets/home/redes_sociales.webp";

export const serviceList = [
  {
    slug: "diseno-grafico",
    title: "Diseño Gráfico",
    ctaLink: "/servicios/diseno-grafico",
    video: "/servicios/diseno_grafico/diseno_grafico.mp4",
    icon: iconDiseno,
    description:
      "Todo entra por los ojos ¿cierto?\nCreamos diseños que hacen tangible la personalidad de tu marca.",
    subServices: [
      {
        label: "Branding",
        link: "branding",
        videoOrImage: true,
        video: "/servicios/diseno_grafico/servicio_diseno_1.mp4",
        description:
          "Creamos sistemas visuales completos que le dan identidad a los sueños.",
      },
      {
        label: "Diseño digital",
        link: "diseno-digital",
        video: "/servicios/diseno_grafico/servicio_diseno_2.mp4",
        videoOrImage: true,
      },
      {
        label: "Material POP",
        link: "material-pop",
        video: "/servicios/diseno_grafico/servicio_diseno_3.mp4",
        videoOrImage: true,
      },
      {
        label: "Ilustración",
        link: "ilustracion",
        video: "/servicios/diseno_grafico/servicio_diseno_4.mp4",
        videoOrImage: true,
      },
      {
        label: "Diseño editorial",
        link: "diseno-editorial",
        video: "/servicios/diseno_grafico/servicio_diseno_5.mp4",
        videoOrImage: true,
      },
    ],
  },

  {
    slug: "produccion-audiovisual",
    title: "Producción Audiovisual",
    ctaLink: "/servicios/produccion-audiovisual",
    video: "/servicios/produccion_audiovisual/produccion_audiovisual.mp4",
    icon: iconProduccion,
    subServices: [
      {
        label: "Video",
        link: "video",
        video: "/servicios/produccion_audiovisual/servicio_produccion_1.mp4",
        videoOrImage: true,
      },
      {
        label: "Fotografía",
        link: "fotografia",
        video: "/servicios/produccion_audiovisual/servicio_produccion_2.mp4",
        videoOrImage: true,
      },
      {
        label: "Animación",
        link: "animacion",
        video: "/servicios/produccion_audiovisual/servicio_produccion_3.mp4",
        videoOrImage: true,
      },
      {
        label: "Podcast",
        link: "podcast",
        video: "/servicios/produccion_audiovisual/servicio_produccion_4.mp4",
        videoOrImage: true,
      },
    ],
  },

  {
    slug: "redes-sociales",
    title: "Redes Sociales",
    ctaLink: "/servicios/redes-sociales",
    video: "/servicios/redes_sociales/redes_sociales.mp4",
    icon: iconRedes,
    subServices: [
      {
        label: "Estrategia",
        link: "estrategia",
        video: "/servicios/redes_sociales/servicio_redes_1.mp4",
        videoOrImage: true,
      },
      {
        label: "Content Management",
        link: "content-management",
        video: "/servicios/redes_sociales/servicio_redes_2.mp4",
        videoOrImage: true,
      },
      {
        label: "Creación de contenido",
        link: "creacion-de-contenido",
        video: "/servicios/redes_sociales/servicio_redes_3.mp4",
        videoOrImage: true,
      },
      {
        label: "Ads Manager",
        link: "ads-manager",
        video: "/servicios/redes_sociales/servicio_redes_4.mp4",
        videoOrImage: true,
      },
      {
        label: "Copywriting",
        link: "copywriting",
        video: "/servicios/redes_sociales/servicio_redes_5.mp4",
        videoOrImage: true,
      },
    ],
  },

  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    ctaLink: "/servicios/marketing-digital",
    video: "/servicios/marketing_digital/marketing_digital.mp4",
    icon: iconEstrategia,
    subServices: [
      {
        label: "Creación de marca",
        link: "creacion-de-marca",
        video: "/servicios/marketing_digital/servicio_marketing_1.mp4",
        videoOrImage: true,
      },
      {
        label: "Campañas BTL",
        link: "campanas-btl",
        video: "/servicios/marketing_digital/servicio_marketing_2.mp4",
        videoOrImage: true,
      },
      {
        label: "CRM",
        link: "crm",
        video: "/servicios/marketing_digital/servicio_marketing_3.mp4",
        videoOrImage: true,
      },
      {
        label: "CX",
        link: "cx",
        video: "/servicios/marketing_digital/servicio_marketing_4.mp4",
        videoOrImage: true,
      },
      {
        label: "Outbound Marketing",
        link: "outbound-marketing",
        video: "/servicios/marketing_digital/servicio_marketing_5.mp4",
        videoOrImage: true,
      },
    ],
  },

  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    ctaLink: "/servicios/desarrollo-web",
    video: "/servicios/desarrollo_web/desarrollo_web.mp4",
    icon: iconDesarrollo,
    subServices: [
      {
        label: "UX / UI",
        link: "ux-ui",
        video: "/servicios/desarrollo_web/servicio_web_1.mp4",
        videoOrImage: true,
      },
      {
        label: "Full Code",
        link: "full-code",
        video: "/servicios/desarrollo_web/servicio_web_2.mp4",
        videoOrImage: true,
      },
      {
        label: "WordPress",
        link: "wordpress",
        video: "/servicios/desarrollo_web/servicio_web_3.mp4",
        videoOrImage: true,
      },
      {
        label: "E-commerce",
        link: "e-commerce",
        video: "/servicios/desarrollo_web/servicio_web_4.mp4",
        videoOrImage: true,
      },
      {
        label: "SEO",
        link: "seo",
        video: "/servicios/desarrollo_web/servicio_web_5.mp4",
        videoOrImage: true,
      },
    ],
  },
];
