export const mindstudio = {
  en: {
    title: "Mindstudio Design System",
    subtitle: "From chaos to clarity in a no-code AI platform",
    // impactStats: [
    //   { metric: "80%", label: "Less Figma duplication" },
    //   { metric: "40%", label: "Faster handoff" },
    //   { metric: "25%", label: "Fewer visual QA tickets" },
    //   { metric: "10", label: "Month project" },
    //   { metric: "100%", label: "Systematized dark mode" }
    // ],
    home: {
      title: "Mindstudio — Bringing clarity to an AI platform growing at full speed.",
      subtitle: "A collaborative effort to turn technical complexity into a scalable foundation that supported the product's rapid evolution.",
    },
    details: [
      { label: "Role", value: "External Consultant → Core Team" },
      { label: "Duration", value: "10 months" },
      { label: "Year", value: "2025" },
      { label: "Team", value: "2 Designers, 4 Engineers, 1 Head of Product" }
    ],
    overview: {
      title: "Context",
      content:
        "Mindstudio is a no-code platform that enables creating and publishing AI agents and applications using the most advanced models and capabilities in the market. It's designed for users without technical experience, but also offers powerful tools like custom functions and API integrations.\n\n" +
        "When I joined, the product was remarkably robust: users could create drafts, version them, publish, and share. But behind that power lay a problem: <strong>understanding the platform required tutorials and YouTube workshops</strong>. The learning curve was too steep.\n\n" +
        "On the design side, there was no solid foundation. No screen in Figma was truly reliable:\n\n" +
        "<ul>\n" +
        "<li>There was no single source of truth</li>\n" +
        "<li>Components were detached frames scattered everywhere</li>\n" +
        "<li>It was impossible to know what was in production, what was exploration, or what was deprecated</li>\n" +
        "<li>There were no design tokens—just loose values</li>\n" +
        "</ul>\n\n" +
        "The product team (2 designers + Head of Product) contacted me to organize the chaos and create a systematized design based on what was actually in production."
    },
    sections: {
      challenge: {
        label: "01. The Problem",
        title: "A product that works but hard to maintain",
        intro: "Although the UX was relatively good thanks to engineering, the internal design told a different story:",
        twoColumn: {
          columns: [
            {
              title: "The challenge",
              content:
                "<strong>No single source of truth</strong><br/>Figma was filled with versions, duplicates, and loose components.<br/><br/>" +
                "<strong>Silent technical debt</strong><br/>Engineering shipped features at breakneck speed, fragmenting the UI over time."
            },
            {
              title: "The impact",
              content:
                "<strong>Very steep learning curve</strong><br/>The product relied too heavily on tutorials and YouTube videos.<br/><br/>" +
                "<strong>Lack of organization</strong><br/>No one knew where to look or which file was reliable."
            }
          ]
        }
      },
      objectives: {
        label: "02. Objectives",
        title: "Build a solid, scalable, and coherent foundation",
        intro: "Build a solid, scalable, and coherent foundation that would reduce friction and improve collaboration between design and engineering.",
        cards: [
          {
            title: "Visual Coherence",
            description: "Establish a single source of truth that unified the visual language across the platform."
          },
          {
            title: "Systematic Dark Mode",
            description: "Implement semantic tokens to support dark mode consistently and scalably."
          },
          {
            title: "Maintainable System",
            description: "Create a structure the team could maintain and evolve without accumulating chaos."
          },
          {
            title: "Optimized Flow",
            description: "Reduce friction in design → development handoff to accelerate feature delivery."
          }
        ]
      },
      process: {
        label: "03. Process",
        title: "From audit to implementation in 7 steps",
        overview: {
          phases: [
            {
              title: "Audit",
              items: ["Production review", "Existing patterns", "Technical decisions"]
            },
            {
              title: "Strategy",
              items: ["Token definition", "Base structure", "Roadmap"]
            },
            {
              title: "Components",
              items: ["Figma design", "Documentation", "Variants"]
            },
            {
              title: "Implementation",
              items: ["Code", "Testing", "Visual QA"]
            },
            {
              title: "Handoff",
              items: ["Dev alignment", "Delivery", "Feedback"]
            }
          ],
          bottomLabel: "Continuous stakeholder collaboration"
        },
        steps: [
          {
            title: "<strong>1.</strong> Audit",
            description: "I reviewed production, explorations, loose patterns, and accumulated decisions. We prioritized what to keep and what to discard."
          },
          {
            title: "<strong>2.</strong> Pragmatic strategy",
            description: "Consolidate what already worked in production and turn it into the new system foundation. No reinventing for the sake of it."
          },
          {
            title: "<strong>3.</strong> Tokens",
            description: "Since they didn't exist, I defined a clear structure: <em>Primitives</em> (source values), <em>Semantics</em> (intent → UI), and <em>Component tokens</em> (future plan). This enabled Figma-code parity."
          },
          {
            title: "<strong>4.</strong> Base components",
            description: "I designed and built: buttons, inputs, chips, alerts, navigation, layouts, etc. Everything oriented toward stability, clarity, and scalability."
          },
          {
            title: "<strong>5.</strong> Editor improvements",
            description: "We reviewed architecture, hierarchies, and flows, reducing visual complexity."
          },
          {
            title: "<strong>6.</strong> Documentation",
            description: "A clean, structured, and maintainable library."
          },
          {
            title: "<strong>7.</strong> Design ↔ dev handoff",
            description: "Though engineering participated, leadership came from design. The team received the changes with relief: the chaos affected them too."
          }
        ]
      },
      results: {
        label: "04. Results",
        title: "Measurable impact from the first month",
        content:
          "The benefits were felt from the first month.\n\n" +
          "<strong>Quantitative impact:</strong>\n" +
          "<ul>\n" +
          "<li>🔁 <strong>80% less Figma duplication</strong></li>\n" +
          "<li>⏱ <strong>40% faster handoff</strong></li>\n" +
          "<li>🧩 <strong>Systematized dark mode with Figma-code parity</strong></li>\n" +
          "<li>🐞 <strong>25% fewer visual QA tickets (3 sprints)</strong></li>\n" +
          "<li>🎓 <strong>Faster onboarding for new designers and PMs</strong></li>\n" +
          "<li>🤝 <strong>Smoother collaboration between design, product, and engineering</strong></li>\n" +
          "</ul>\n\n" +
          "<em>\"Now we're not guessing—we're building on solid ground.\"</em>"
      },
      reflection: {
        label: "05. Reflection",
        title: "Pragmatism over perfectionism",
        content:
          "Building a system in an environment that moves this fast requires pragmatism: consolidate first, stabilize second, and only then think about the future.\n\n" +
          "This project restored clarity to the team and created a solid foundation to scale the platform."
      },
      role: {
        label: "06. My role",
        title: "From external consultant to core team",
        content: "I started as an <strong>external consultant</strong> to create the first version of the Design System. Then I became part of the <strong>core team</strong> for 5 months to implement features and evolve the system.\n\n" +
          "<ul>\n" +
          "<li>Led the complete creation of the DS</li>\n" +
          "<li>Defined tokens, structure, and components</li>\n" +
          "<li>Helped decide what to keep and what to discard</li>\n" +
          "<li>My external perspective helped the team refocus</li>\n" +
          "<li>Documented and facilitated work with engineering</li>\n" +
          "<li>Directly adjusted parts of the product</li>\n" +
          "</ul>"
      }
    }
  },
  es: {
    title: "Mindstudio Design System",
    subtitle: "De caos a claridad en una plataforma no-code de IA",
    home: {
      title: "Mindstudio — Diseñando claridad en una plataforma de IA que crecía sin detenerse.",
      subtitle: "Cómo un equipo transformó complejidad técnica en una base escalable que acompañó la evolución del producto."
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
  }
};
