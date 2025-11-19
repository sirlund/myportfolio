/**
 * Guía de Formato de Contenido para Escritores:
 *
 * 1. Párrafos multilínea: Usa \n\n para crear saltos de párrafo
 *    Ejemplo: "Primer párrafo.\n\nSegundo párrafo."
 *
 * 2. Formato HTML: Usa <strong> para negrita, <em> para cursiva
 *    Ejemplo: "Esto es texto en <strong>negrita</strong> y <em>cursiva</em>."
 *
 * 3. Combina ambos: Puedes usar etiquetas HTML Y saltos de párrafo juntos
 *    Ejemplo: "Primer párrafo con <strong>negrita</strong>.\n\nSegundo párrafo con <em>cursiva</em>."
 *
 * Nota: Esto funciona para todos los campos de contenido de texto (overview.content, section.content, etc.)
 */

export const mindstudio = {
  title: "Mindstudio Design System",
  subtitle: "De caos a claridad en una plataforma no-code de IA",
  home: {
    title: "En Mindstudio, el diseño pasó del caos a la claridad",
    subtitle: "Como líder detrás de MindSet DS, construí el design system desde cero — creando la alineación, estructura y lógica visual que ahora impulsa cómo se diseñan, tematizan y despliegan las herramientas de IA"
  },
  impactStats: [
    { metric: "80%", label: "Menos duplicación en Figma" },
    { metric: "40%", label: "Handoff más rápido" },
    { metric: "25%", label: "Menos tickets de QA visual" },
    { metric: "10", label: "Meses de proyecto" },
    { metric: "100%", label: "Dark mode sistematizado" }
  ],
  details: [
    { label: "Rol", value: "Consultor externo → Equipo Core" },
    { label: "Duración", value: "10 meses" },
    { label: "Año", value: "2024-2025" },
    { label: "Equipo", value: "2 Diseñadores, 4 Ingenieros, 1 Head of Product" }
  ],

  overview: {
    title: "Contexto",
    content:
      "Mindstudio es una plataforma no-code que permite crear y publicar agentes y aplicaciones de IA usando los modelos y funcionalidades más avanzadas del mercado. Está diseñada para usuarios sin experiencia técnica, pero también ofrece herramientas potentes como funciones personalizadas e integraciones vía API.\n\n" +
      "Cuando llegué, el producto ya era sorprendentemente robusto: los usuarios podían crear drafts, versionarlos, publicarlos y compartirlos. Pero detrás de esa potencia había un problema: <strong>entender la plataforma requería tutoriales y workshops en YouTube</strong>. La curva de aprendizaje era demasiado alta.\n\n" +
      "En diseño no existía una base sólida. Ninguna pantalla en Figma era realmente confiable:\n\n" +
      "<ul>\n" +
      "<li>No existía una fuente de la verdad</li>\n" +
      "<li>Los componentes eran frames detachados distribuidos por todos lados</li>\n" +
      "<li>Era imposible saber qué estaba en producción, qué era exploración o qué estaba deprecado</li>\n" +
      "<li>No había design tokens: solo valores sueltos</li>\n" +
      "</ul>\n\n" +
      "El equipo de producto (2 diseñadores + Head of Product) me contactó para ordenar el caos y crear un diseño sistematizado basado en lo que estaba realmente en producción."
  },

  sections: {
    challenge: {
      label: "01. El problema",
      title: "Un producto que funciona pero difícil de mantener",
      intro: "Aunque la UX estaba relativamente bien gracias a ingeniería, el diseño interno contaba otra historia:",
      twoColumn: {
        columns: [
          {
            title: "El desafío",
            content:
              "<strong>No había una verdad única</strong><br/>Figma estaba lleno de versiones, duplicados y componentes sueltos.<br/><br/>" +
              "<strong>Deuda técnica silenciosa</strong><br/>Ingeniería lanzaba features a una velocidad altísima, fragmentando la UI con el tiempo."
          },
          {
            title: "El impacto",
            content:
              "<strong>Curva de aprendizaje muy alta</strong><br/>El producto dependía demasiado de tutoriales y videos de YouTube.<br/><br/>" +
              "<strong>Falta de organización</strong><br/>Nadie sabía dónde mirar ni cuál archivo era confiable."
          }
        ]
      }
    },
    objectives: {
      label: "02. Objetivos",
      title: "Construir una base sólida, escalable y coherente",
      intro: "Construir una base sólida, escalable y coherente que redujera fricción y mejorara la colaboración entre diseño e ingeniería.",
      cards: [
        {
          title: "Coherencia Visual",
          description: "Establecer una única fuente de la verdad que unificara el lenguaje visual en toda la plataforma."
        },
        {
          title: "Dark Mode Sistemático",
          description: "Implementar tokens semánticos para soportar modo oscuro de forma consistente y escalable."
        },
        {
          title: "Sistema Mantenible",
          description: "Crear una estructura que el equipo pudiera mantener y evolucionar sin caos acumulativo."
        },
        {
          title: "Flujo Optimizado",
          description: "Reducir fricción en el handoff diseño → desarrollo para acelerar la entrega de features."
        }
      ]
    },
    process: {
      label: "03. El Proceso",
      title: "De auditoría a implementación en 7 pasos",
      overview: {
        phases: [
          {
            title: "Auditoría",
            items: ["Revisión de producción", "Patrones existentes", "Decisiones técnicas"]
          },
          {
            title: "Estrategia",
            items: ["Definición de tokens", "Estructura base", "Roadmap"]
          },
          {
            title: "Componentes",
            items: ["Diseño en Figma", "Documentación", "Variantes"]
          },
          {
            title: "Implementación",
            items: ["Código", "Testing", "QA visual"]
          },
          {
            title: "Handoff",
            items: ["Alineación con dev", "Entrega", "Feedback"]
          }
        ],
        bottomLabel: "Colaboración continua con stakeholders"
      },
      steps: [
        {
          title: "<strong>1.</strong> Auditoría",
          description: "Revisé producción, exploraciones, patrones sueltos y decisiones acumuladas. Priorizamos qué mantener y qué descartar."
        },
        {
          title: "<strong>2.</strong> Estrategia pragmática",
          description: "Consolidar lo que ya funcionaba en producción y convertirlo en la nueva base del sistema. Nada de reinventar por reinventar."
        },
        {
          title: "<strong>3.</strong> Tokens",
          description: "Como no existían, definí una estructura clara: <em>Primitivos</em> (valores fuente), <em>Semánticos</em> (intención → UI), y <em>Tokens de componentes</em> (plan a futuro). Esto permitió lograr paridad entre Figma y código."
        },
        {
          title: "<strong>4.</strong> Componentes base",
          description: "Diseñé y construí: botones, inputs, chips, alerts, navegación, layouts, etc. Todo orientado a estabilidad, claridad y escalabilidad."
        },
        {
          title: "<strong>5.</strong> Mejoras al editor",
          description: "Revisamos arquitectura, jerarquías y flujos, bajando la complejidad visual."
        },
        {
          title: "<strong>6.</strong> Documentación",
          description: "Una librería limpia, estructurada y mantenible."
        },
        {
          title: "<strong>7.</strong> Handoff diseño ↔ dev",
          description: "Aunque ingeniería participó, el liderazgo fue desde diseño. El equipo recibió los cambios con alivio: el caos también les afectaba."
        }
      ]
    },
    results: {
      label: "04. Resultados",
      title: "Impacto medible desde el primer mes",
      content:
        "Los beneficios se sintieron desde el primer mes.\n\n" +
        "<strong>Impacto cuantitativo:</strong>\n" +
        "<ul>\n" +
        "<li>🔁 <strong>80% menos duplicación en Figma</strong></li>\n" +
        "<li>⏱ <strong>40% más rápido el handoff</strong></li>\n" +
        "<li>🧩 <strong>Dark mode sistematizado con paridad Figma-código</strong></li>\n" +
        "<li>🐞 <strong>25% menos tickets de QA visual (3 sprints)</strong></li>\n" +
        "<li>🎓 <strong>Onboarding más rápido para nuevos diseñadores y PMs</strong></li>\n" +
        "<li>🤝 <strong>Colaboración más fluida entre diseño, producto e ingeniería</strong></li>\n" +
        "</ul>\n\n" +
        "<em>\"Ahora no estamos adivinando — estamos construyendo sobre terreno firme.\"</em>"
    },
    reflection: {
      label: "05. Reflexión",
      title: "Pragmatismo sobre perfeccionismo",
      content:
        "Construir un sistema en un entorno que se mueve tan rápido requiere pragmatismo: consolidar primero, estabilizar después, y recién ahí pensar en el futuro.\n\n" +
        "Este proyecto devolvió claridad al equipo y creó una base sólida para escalar la plataforma."
    },
    role: {
      label: "06. Mi rol",
      title: "De consultor externo a equipo core",
      content: "Comencé como <strong>consultor externo</strong> para crear la primera versión del Design System. Luego pasé a ser parte del <strong>equipo core</strong> durante 5 meses para implementar features y evolucionar el sistema.\n\n" +
        "<ul>\n" +
        "<li>Lideré la creación completa del DS</li>\n" +
        "<li>Definí tokens, estructura y componentes</li>\n" +
        "<li>Ayudé a decidir qué se mantenía y qué se descartaba</li>\n" +
        "<li>Mi perspectiva externa ayudó al equipo a reenfocarse</li>\n" +
        "<li>Documenté y facilité el trabajo con ingeniería</li>\n" +
        "<li>Ajusté partes del producto directamente</li>\n" +
        "</ul>"
    }
  }
};
