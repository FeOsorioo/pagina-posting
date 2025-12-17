//Iconos 
import iconDiseno from "@/assets/home/diseno_grafico.webp";
import iconDesarrollo from "@/assets/home/desarrollo_web.webp";
import iconProduccion from "@/assets/home/produccion.webp";
import iconEstrategia from "@/assets/home/estrategia_digital.webp";
import iconRedes from "@/assets/home/redes_sociales.webp";

//Video
const disenografico = "/servicios/diseno_grafico/diseno_grafico.webm";
const redesociales = "/servicios/redes_sociales/redes_sociales.webm";
const desarrolloWeb = "/servicios/desarrollo_web/desarrollo_web.webm";
const marketingDigital = "/servicios/marketing_digital/marketing_digital.webm";
const produccionAudiovisual = "/servicios/produccion_audiovisual/produccion_audiovisual.webm";

// Videos diseño grafico
const servicio_diseno_1 = "/servicios/diseno_grafico/servicio_diseno_1.webm";
const servicio_diseno_2 = "/servicios/diseno_grafico/servicio_diseno_2.webm";
const servicio_diseno_3 = "/servicios/diseno_grafico/servicio_diseno_3.webm";
const servicio_diseno_4 = "/servicios/diseno_grafico/servicio_diseno_4.webm";
const servicio_diseno_5 = "/servicios/diseno_grafico/servicio_diseno_5.webm";

// Videos de produccion audiovisual
const servicio_produccion_1 = "/servicios/produccion_audiovisual/servicio_produccion_1.webm";
const servicio_produccion_2 = "/servicios/produccion_audiovisual/servicio_produccion_2.webm";
const servicio_produccion_3 = "/servicios/produccion_audiovisual/servicio_produccion_3.webm";
const servicio_produccion_4 = "/servicios/produccion_audiovisual/servicio_produccion_4.webm";

// Videos de Redes Sociales
const servicio_redes_1 = "/servicios/redes_sociales/servicio_redes_1.webm";
const servicio_redes_2 = "/servicios/redes_sociales/servicio_redes_2.webm";
const servicio_redes_3 = "/servicios/redes_sociales/servicio_redes_3.webm";
const servicio_redes_4 = "/servicios/redes_sociales/servicio_redes_4.webm";
const servicio_redes_5 = "/servicios/redes_sociales/servicio_redes_5.webm";

// Videos de Desarrollo Web
const servicio_web_1 = "/servicios/desarrollo_web/servicio_web_1.webm";
const servicio_web_2 = "/servicios/desarrollo_web/servicio_web_2.webm";
const servicio_web_3 = "/servicios/desarrollo_web/servicio_web_3.webm";
const servicio_web_4 = "/servicios/desarrollo_web/servicio_web_4.webm";
const servicio_web_5 = "/servicios/desarrollo_web/servicio_web_5.webm";

// Videos de Marketing Digital
const servicio_marketing_1 = "/servicios/marketing_digital/servicio_marketing_1.webm";
const servicio_marketing_2 = "/servicios/marketing_digital/servicio_marketing_2.webm";
const servicio_marketing_3 = "/servicios/marketing_digital/servicio_marketing_3.webm";
const servicio_marketing_4 = "/servicios/marketing_digital/servicio_marketing_4.webm";
const servicio_marketing_5 = "/servicios/marketing_digital/servicio_marketing_5.webm";


export const serviceList = [
  {
    slug: "diseno-grafico",
    title: "Diseño Gráfico",
    ctaLink: "/servicios/diseno-grafico",
    video: disenografico,
    icon: iconDiseno,
    description:
      "Todo entra por los ojos ¿cierto? \n Creamos diseños que hacen tangible la personalidad de tu marca y la proyectan con fuerza en cada espacio (Digital o físico).",
    subServices: [
      {
        label: "Branding",
        description:
          "Un logo nunca será suficiente. \n Creamos un sistema completo que le da identidad a sueños: colores, tipografías, tono visual y símbolos que hacen que el mundo empiece a creer en ellos también. \n  Branding que se sostiene en el tiempo y se diferencia en cualquier espacio.",
        videoOrImage: true,
        video: servicio_diseno_1,

        link: "branding",
      },
      {
        label: "Diseño digital",
        description:
          "Diseñamos piezas pensadas para cada espacio online, con coherencia visual y la fuerza suficiente para destacar en medio del scroll infinito.Te ayudamos con tus redes sociales, páginas web, anuncios y publicidad digital.",
        videoOrImage: true,
        video: servicio_diseno_2,

        link: "diseño-digital",
      },
      {
        label: "Material POP",
        description:
          "Los sueños merecen conocer la calle, las vitrinas, las paredes. Diseñamos piezas que no pasan desapercibidas y logran que la gente se lleve tu nombre en la memoria… y en las manos.",
        videoOrImage: true,
        video: servicio_diseno_3,

        link: "material-pop",
      },
      {
        label: "Ilustración",
        description:
          "Creemos en lo que aún no existe. \n Vemos formas, personajes y mundos posibles donde otros solo ven un espacio en blanco.  Creamos personajes, etiquetas y proyectos únicos que no existen en ningún banco de imágenes.",
        videoOrImage: true,
        video: servicio_diseno_4,

        link: "ilustracion",
      },
      {
        label: "Diseño editoral",
        description:
          "Un buen editorial no solo organiza páginas: cuenta una historia. \n Diseñamos catálogos, revistas e informes con diagramación cuidada, textos bien presentados y versiones listas para impresión o digital. Piezas que invitan a detenerse y leer.",
        videoOrImage: true,
        video: servicio_diseno_5,

        link: "diseño-editoral",
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
      "Que se hagan realidad. Tus sueños merecen ser vistos y escuchados. \n Producimos contenido visual y sonoro que conecta, emociona y potencia tu presencia digital.",
    subServices: [
      {
        label: "Video",
        link: "video",
        description:
          "Un video puede ser el principio de todo lo que sueñas.\n En el mundo digital tus sueños deben ocupar las pantallas. Creamos videos corporativos, publicitarios y creativos que transmiten y se adaptan a los formatos digitales que necesites. ",
        videoOrImage: true,
        video: servicio_produccion_1,
      },
      {
        label: "Fotografía",
        link: "fotografia",
        description:
          "La primera impresión no tiene segundas oportunidades. \n Las fotografías son la primera impresión en el mundo digital. En Posting capturamos imágenes profesionales que destacan productos, servicios, personas o momentos, cuidando siempre la estética y el mensaje que quieres proyectar.",
        videoOrImage: true,
        video: servicio_produccion_2,
      },
      {
        label: "Animación",
        link: "animacion",
        description:
          "Cuando las ideas necesitan movimiento, entran la animación y los motion graphics. Diseñamos piezas dinámicas que simplifican conceptos complejos, sorprenden y hacen que tus proyectos se sientan y sean únicos.",
        videoOrImage: true,
        video: servicio_produccion_3,
      },
      {
        label: "Podcast",
        link: "podcast",
        description:
          "¡Gritalo para que se haga realidad! No todo se cuenta con imágenes: también con la voz. Producimos podcasts de principio a fin: concepto, guion, grabación y edición. Creamos contenidos sonoros que posicionan a tu marca como referente y construyen comunidad.",
        videoOrImage: true,
        video: servicio_produccion_4,
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
        description:
          "Cada red social tiene su propio lenguaje y su propia audiencia. Diseñamos estrategias a la medida, para que tus contenidos encuentren su lugar, su público y su propósito digital.",
        videoOrImage: true,
        video: servicio_redes_1,
      },
      {
        label: "Content Management",
        link: "content-management",
        description:
          "Nos encargamos de la planificación, programación y optimización de tu contenido para que sea constante, claro y coherente en cada plataforma. Realizamos informes para que sepas en dónde estás y a dónde vas.",
        videoOrImage: true,
        video: servicio_redes_2,
      },
      {
        label: "Creación de contenido",
        link: "creacion-de-contenido",
        description:
          "Nuestra cosa favorita: Crear. \n Ya sea en Instagram, TikTok, Facebook, LinkedIn o Youtube. Generamos el contenido que necesites, pensando en atraer, emocionar y generar interacción. Desde posts estáticos, reels, historias. Queremos que tu feed sea el lugar donde el mundo conozca tus sueños.",
        videoOrImage: true,
        video: servicio_redes_3,
      },
      {
        label: "Ads Manager",
        link: "ads-manager",
        description:
          "Gestionamos campañas de publicidad digital que convierten inversión en resultados. \n Segmentamos, medimos y optimizamos para garantizar que tu mensaje llegue a la audiencia correcta. Trabajamos con las principales plataformas: Meta Ads (Instagram y Facebook), TikTok Ads, Google Ads, YouTube Ads y LinkedIn Ads.",
        videoOrImage: true,
        video: servicio_redes_4,
      },
      {
        label: "Copywriting",
        link: "copywriting",
        description:
          "Los mensajes son lo que más importa. \n Nosotros los creamos, los descubrimos, los afinamos y ponemos en palabras que conectan, emocionan y transforman lectores en creyentes.",
        videoOrImage: true,
        video: servicio_redes_5,
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
      "Diseñamos campañas digitales que posicionan tu marca, cuidan tu reputación, amplifican tu alcance. Te conectamos con las personas correctas, en el momento correcto y con el mensaje que merece ser escuchado.",
    subServices: [
      {
        label: "Creación de marca",
        link: "creacion-de-marca",
        description:
          "Toda marca nace de una creencia, de un sueño que merece ser contado. En Posting lo transformamos en identidad: una voz, un tono y una historia que vive en cada canal digital, construyendo una presencia auténtica y coherente.",
        videoOrImage: true,
        video: servicio_marketing_1,
      },
      {
        label: "Campañas BTL",
        link: "campañas-btl",
        description:
          "Ideas que sorprenden fuera de la pantalla. \n Creamos experiencias creativas que invitan a interactuar en el mundo real y que dejan huella más allá de un anuncio, impulsando proyectos, marcas e iniciativas que quieren hacerse inolvidables.",
        videoOrImage: true,
        video: servicio_marketing_2,
      },
      {
        label: "CRM",
        link: "CRM",
        description:
          "La base de datos es el corazón de tu proyecto. \n Con un CRM optimizado, transformamos la gestión de leads en un proceso organizado y medible. Desde la trazabilidad de clientes hasta la segmentación inteligente, te ayudamos a convertir contactos en relaciones duraderas.",
        videoOrImage: true,
        video: servicio_marketing_3,
      },
      {
        label: "CX",
        link: "cx",
        description:
          "Usa la tecnología a tu favor. \n Diseñamos estrategias de Customer Experience con agentes autónomos, chatbots, IA conversacional o clasificación de leads con IA. Haz que cada mensaje entrante encuentre una respuesta inmediata y precisa.",
        videoOrImage: true,
        video: servicio_marketing_4,
      },

      {
        label: "Outbound Marketing",
        link: "outbound-marketing",
        description:
          "Llevamos tu mensaje hasta donde está tu audiencia, incluso antes de que te busquen. Creamos acciones personalizadas para abrir conversaciones y atraer prospectos con mayor probabilidad de convertirse en clientes.",
        videoOrImage: true,
        video: servicio_marketing_5,
      },
    ],
  },

  {
    slug: "desarrollo-web",
    title: "Desarrollo web",
    icon: iconDesarrollo,
    ctaLink: "/servicios/desarrollo-web",
    video: desarrolloWeb,
    description:
      "Si no existes en el mundo digital, ¿de verdad existes? \n Tu web es tu vitrina digital. Diseñamos y desarrollamos sitios que combinan estética, funcionalidad y estrategia para impulsar tus sueños.",
    subServices: [
      {
        label: "Web design (UX/UI)",
        link: "web-design",
        description:
          "Diseñamos interfaces que son bonitas y fáciles de usar. Unimos diseño UX/UI para que tu sitio sea intuitivo, atractivo y capaz de guiar al usuario hacia la acción que buscas, mejorando su experiencia y el valor percibido de tu marca.",
        videoOrImage: true,
        video: servicio_web_1,
      },
      {
        label: "Full Code",
        link: "full-code",
        description:
          "Desarrollos tan únicos como tus sueños. \n Desarrollamos a la medida en código, si eso quieres. Programamos desde cero para crear plataformas únicas, seguras y escalables, que se ajustan a tus necesidades específicas",
        videoOrImage: true,
        video: servicio_web_2,
      },
      {
        label: "WordPress",
        link: "wordpress",
        description:
          "Nos adaptamos a ti. \n Desarrollamos y personalizamos tu web para que refleje tu marca de forma auténtica, sin plantillas genéricas, pero sin código. Y si lo prefieres, también te acompañamos con capacitación para que aprendas a gestionar tu propio sitio con confianza y autonomía.",
        videoOrImage: true,
        video: servicio_web_3,
      },
      {
        label: "E-commerce",
        link: "e-commerce",
        description:
          "Si tu sueño es vender, te ayudamos. \n Tu tienda online lista para vender. Creamos experiencias de compra fluidas y seguras que combinan diseño atractivo, navegación simple y procesos de pago confiables.",
        videoOrImage: true,
        video: servicio_web_4,
      },

      {
        label: "SEO ",
        link: "seo",
        description:
          "Redactamos y optimizamos contenidos con criterios de SEO para que Google te encuentre sin necesidad de depender de pauta paga. Y si quieres aprender, te acompañamos para que domines las bases del posicionamiento orgánico y ganes visibilidad de forma sostenible.",
        videoOrImage: true,
        video: servicio_web_5,
      },
    ],
  },
];