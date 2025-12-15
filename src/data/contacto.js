/**
 * @fileoverview contactList
 * 
 * Configuración estructurada de servicios con preguntas dinámicas
 * para formularios de contacto, cotización o diagnóstico.
 */

export const contactList = [

  {

    title: "Diseño Gráfico",
    questions: [
      {
        text: "¿Qué tipo de diseño necesitas?",
        type: "select",
        options: ["Branding", "Publicidad", "Editorial"],
      },
      {
        text: "¿Tienes una guía de estilo definida?",
        type: "radio",
        options: ["Sí", "No", "En proceso"],
      },
    ],
  },
  {
    title: "Producción Audiovisual",
    questions: [
      {
        text: "¿Qué tipo de contenido buscas?",
        type: "checkbox",
        options: ["Video corporativo", "Animación", "Publicidad"],
      },
      {
        text: "¿Tienes referencias visuales?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },
  {
    title: "Marketing Digital",
    questions: [
      {
        text: "¿En qué plataformas quieres enfocarte?",
        type: "checkbox",
        options: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
      },
      {
        text: "¿Quieres gestión de contenido o solo estrategia?",
        type: "radio",
        options: ["Gestión completa", "Solo estrategia"],
      },
    ],
  },
  {
    title: "Desarrollo Web",
    questions: [
      {
        text: "¿Qué tipo de sitio necesitas?",
        type: "select",
        options: [
          "Landing page",
          "Sitio corporativo",
          "Tienda en línea",
          "Plataforma personalizada",
        ],
      },
      {
        text: "¿Tienes hosting y dominio?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },
  {
    title: "Redes sociales",
    questions: [
      {
        text: "¿Qué tipo de sitio necesitas?",
        type: "select",
        options: [
          "Landing page",
          "Sitio corporativo",
          "Tienda en línea",
          "Plataforma personalizada",
        ],
      },
      {
        text: "¿Tienes hosting y dominio?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },
];

export const flow = [
  {
    step: "1",
    options: ["Construir mi página web", "Producción audiovisual", "Gestionar campañas de pauta", "Diseño gráfico", "Necesito una estrategia digital completa", "Otro"]


  },
  {
    step: "2",
    question: "Queremos crear para ti, pero necesitamos contexto. ¿En qué etapa está tu proyecto?",
    options: ["Una organización/empresa sólida que busca nuevos proveedores", "Un proyecto que ya existe, pero necesita apoyo  estratégico y creativo.", "Una idea o iniciativa que está dando sus primeros pasos.", "Solo estoy explorando por ahora"]
  },
  {
    step: "3",
    question: "Tenemos contacto directo con tus sueños. Pero, ¿Cómo te contactamos a ti?",
    options: ["WhatsApp", "Teléfono", "Email", "Señales de humo"]
  },
  {
    step: "4",
    question: "No necesitas tenerlo todo resuelto. Solo cuéntanos qué sueñas construir y lo pensamos juntos.",
    options: "forms"
  },

  {
    step: "5",
    question: "Oye, antes de irte. Nos cuentas en dónde nos encontraste, porfa. ",
    options: ["Redes sociales", "Recomendación de un amigo", "En una búsqueda de Google", "No sé cómo llegué aquí, la verdad.","Ya nos conociamos de otro proyecto"]
  },
]