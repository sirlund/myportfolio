export const mindstudio = {
  en: {
    title: "Mindstudio: No-Code AI Orchestration",
    subtitle: "Transforming a developer-centric IDE into an intuitive visual canvas, enabling non-technical users to build complex LLM agents without code.",
    seoDescription: "Design System case study: Building a scalable foundation for Mindstudio's no-code AI platform. A 10-month collaborative effort to turn technical complexity into clarity.",
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
        "Powerful Tech, Operational Wild West MindStudio is a premier platform for building AI agents, allowing users to orchestrate LLMs, variables, and external APIs. When I joined, the product was technically robust but operationally fragile. The engineering team had shipped an incredible amount of features, but without design governance. There were no components, no tokens, and no shared language.\n\n" +
        "We faced a critical bottleneck: Innovation velocity was outpacing our ability to maintain quality. Every new feature—from the visual editor to the dashboard—was being built from scratch, creating a fragmented Frankenstein UI that confused users and slowed down development."
    },
    sections: {
      challenge: {
        label: "01. The Problem",
        title: "Velocity vs. Governance",
        intro: "The product looked coherent on the surface, but the underlying architecture was a \"Wild West\" scenario preventing us from scaling.",
        cards: [
          {
            title: "Visual Entropy",
            description: "With no \"source of truth,\" the interface was drifting. 40% of the frontend code was dedicated to overriding conflicting styles."
          },
          {
            title: "Cognitive Overload",
            description: "The lack of standardized patterns meant users had to relearn the UI for every new feature (Editor vs. Settings vs. Dashboard)."
          },
          {
            title: "The \"Bus Factor\"",
            description: "Design knowledge was tribal. Onboarding a new designer took weeks because the system existed only in people's heads, not in Figma."
          }
        ]
      },
      objectives: {
        label: "02. Objectives",
        title: "Stabilize to Evolve",
        intro: "My mandate wasn't just to \"clean up Figma,\" but to build the infrastructure needed to ship the next generation of product features.",
        cards: [
          {
            title: "Stop the Bleeding",
            description: "Audit and consolidate existing patterns into a unified Design System (DS)."
          },
          {
            title: "Unlock Complexity",
            description: "Use the new system to redesign critical, high-density interfaces like the <strong>Node Canvas</strong> and <strong>Variable Manager</strong>."
          },
          {
            title: "Validate Scalability",
            description: "Prove the system's robustness by deploying a platform-wide <strong>Dark Mode</strong> with zero code refactoring."
          }
        ]
      },
      process: {
        label: "03. Process",
        title: "From Audit to Architecture",
        intro: "We moved from reactive design to a strategic 3-phase roadmap:",
        overview: {
          phases: [
            {
              title: "Phase 1: Triage",
              items: ["Audit", "Token Architecture", "Semantics"]
            },
            {
              title: "Phase 2: System Engine",
              items: ["Component Library", "Data Density", "Interactions"]
            },
            {
              title: "Phase 3: Product Pivot",
              items: ["Visual Canvas", "Logic/Data", "Dark Mode"]
            }
          ],
          bottomLabel: "Continuous delivery throughout all phases"
        },
        steps: [
          {
            title: "<strong>Phase 1:</strong> The Triage (Audit & Logic)",
            description: "I audited the production environment to separate \"essential patterns\" from \"noise.\" We established a strict token architecture (Primitives → Semantics) immediately, prioritizing the foundation needed for Dark Mode."
          },
          {
            title: "<strong>Phase 2:</strong> The System Engine",
            description: "We built a component library optimized for data density. Unlike standard marketing sites, MindStudio needed complex inputs, code blocks, and variable selectors that could handle heavy user interactions without breaking."
          },
          {
            title: "<strong>Phase 3:</strong> The Product Pivot (The \"Sexy\" Part)",
            description: "With the system in place, I joined the Core Team to tackle the complex features that were previously blocked by design debt:",
          }
        ],
        phase3: {
          cards: [
            {
              title: "Visual Orchestration",
              description: "Redesigned the node-based editor to support complex branching logic, infinite canvas panning, and team collaboration comments."
            },
            {
              title: "Logic & Data Handling",
              description: "Abstracted raw JSON data passing into a visual \"Variable & API\" selector, drastically reducing errors in multi-step agent workflows."
            },
            {
              title: "Systematized Dark Mode",
              description: "Leveraged our new semantic tokens to ship a flawless dark theme across the entire platform, validated by Engineering as a \"plug-and-play\" update."
            }
          ]
        }
      },
      results: {
        label: "04. Results",
        title: "Measurable Impact",
        intro: "The system wasn't just a library; it became the operational OS for the product team.",
        metrics: [
          { text: "<strong>40% Faster Handoff:</strong> Developers stopped guessing hex codes and started using semantic variables, reducing implementation time significantly." },
          { text: "<strong>80% Reduction in Figma Bloat:</strong> We deleted hundreds of detached frames, replacing them with a single, versioned library." },
          { text: "<strong>Quality at Scale:</strong> Visual QA tickets dropped by 25% across three sprints as the system enforced consistency automatically." },
          { text: "<strong>Unlocked Dark Mode:</strong> Shipped a highly requested enterprise feature in record time thanks to the token foundation." }
        ],
        quote: "The system allowed us to stop debating pixel placement and start focusing on complex AI orchestration logic. — Head of Product"
      },
      reflection: {
        label: "05. Reflection",
        title: "Pragmatism over Perfection",
        content:
          "In a fast-paced AI startup, you can't wait for a \"perfect\" system. We built the plane while flying it—consolidating chaos into order while simultaneously shipping critical features. This project proved that a strong Design System isn't a constraint; it's the ultimate accelerator for product innovation."
      }
    }
  },
  es: {
    title: "Mindstudio Design System",
    subtitle: "De caos a claridad en una plataforma no-code de IA",
    seoDescription: "Caso de estudio Design System: Construyendo una base escalable para la plataforma no-code de IA de Mindstudio. Un esfuerzo colaborativo de 10 meses para convertir complejidad técnica en claridad.",
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
        cards: [
          {
            title: "Entropía Visual",
            description: "Sin una \"fuente de la verdad\", la interfaz iba a la deriva. El 40% del código frontend se dedicaba a sobrescribir estilos conflictivos."
          },
          {
            title: "Sobrecarga Cognitiva",
            description: "La falta de patrones estandarizados significaba que los usuarios tenían que reaprender la UI para cada nueva funcionalidad (Editor vs. Configuración vs. Dashboard)."
          },
          {
            title: "El \"Factor Bus\"",
            description: "El conocimiento de diseño era tribal. El onboarding de un nuevo diseñador tomaba semanas porque el sistema existía solo en las cabezas de las personas, no en Figma."
          }
        ]
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
        title: "De Auditoría a Arquitectura",
        intro: "Pasamos de un diseño reactivo a una hoja de ruta estratégica de 3 fases:",
        overview: {
          phases: [
            {
              title: "Fase 1: Triaje",
              items: ["Auditoria", "Arquitectura de Tokens", "Semántica"]
            },
            {
              title: "Fase 2: Motor del Sistema",
              items: ["Librería de Componentes", "Densidad de Datos", "Interacciones"]
            },
            {
              title: "Fase 3: Pivote de Producto",
              items: ["Canvas Visual", "Lógica/Datos", "Dark Mode"]
            }
          ],
          bottomLabel: "Entrega continua durante todas las fases"
        },
        steps: [
          {
            title: "<strong>Fase 1:</strong> El Triaje (Auditoría y Lógica)",
            description: "Audité el entorno de producción para separar \"patrones esenciales\" del \"ruido\". Establecimos una arquitectura de tokens estricta (Primitivos → Semánticos) inmediatamente, priorizando los cimientos necesarios para el Dark Mode."
          },
          {
            title: "<strong>Fase 2:</strong> El Motor del Sistema",
            description: "Construimos una librería de componentes optimizada para alta densidad de datos. A diferencia de sitios de marketing estándar, MindStudio necesitaba inputs complejos, bloques de código y selectores de variables que pudieran manejar interacciones pesadas sin romperse."
          }
        ],
        phase3: {
          title: "<strong>Fase 3:</strong> El Pivote de Producto (La parte \"Sexy\")",
          description: "Con el sistema en su lugar, me uní al Equipo Core para abordar las funcionalidades complejas que antes estaban bloqueadas por deuda de diseño:",
          cards: [
            {
              title: "Orquestación Visual",
              description: "Rediseñé el editor de nodos para soportar lógica ramificada compleja, paneo infinito del canvas y comentarios de colaboración en equipo."
            },
            {
              title: "Manejo de Lógica y Datos",
              description: "Abstraje el paso de datos JSON crudos en un selector visual de \"Variables y API\", reduciendo drásticamente errores en flujos de agentes de múltiples pasos."
            },
            {
              title: "Dark Mode Sistematizado",
              description: "Aproveché nuestros nuevos tokens semánticos para lanzar un tema oscuro impecable en toda la plataforma, validado por Ingeniería como una actualización \"plug-and-play\"."
            }
          ]
        }
      },
      results: {
        label: "04. Resultados",
        title: "Impacto medible desde el primer mes",
        intro: "El sistema no fue solo una librería; se convirtió en el sistema operativo del equipo de producto.",
        metrics: [
          { text: "<strong>40% Handoff más rápido:</strong> Los desarrolladores dejaron de adivinar códigos hex y comenzaron a usar variables semánticas, reduciendo significativamente el tiempo de implementación." },
          { text: "<strong>80% Reducción en peso de Figma:</strong> Eliminamos cientos de frames detachados, reemplazándolos con una librería única y versionada." },
          { text: "<strong>Calidad a escala:</strong> Los tickets de QA visual cayeron un 25% en tres sprints ya que el sistema forzaba la consistencia automáticamente." },
          { text: "<strong>Dark Mode desbloqueado:</strong> Lanzamos una funcionalidad enterprise muy solicitada en tiempo récord gracias a la base de tokens." }
        ],
        quote: "Ahora no estamos adivinando — estamos construyendo sobre terreno firme."
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
