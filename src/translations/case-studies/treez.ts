export const treez = {
  en: {
  title: "Root Design System",
  subtitle: "A scalable, accessible, and cross-platform design system that unified visual language, increased team efficiency, and improved product quality at scale.",
  details: [
    { label: "Role", value: "Design System Lead" },
    { label: "Duration", value: "12 months" },
    { label: "Year", value: "2024" },
    { label: "Team", value: "4 Designers, 8 Engineers, 3 PMs" }
  ],
  home: {
    title: "At Treez, I strengthened the design system that supports high-volume retail workflows",
    subtitle: "Working on the design system, I refined foundational patterns and unified the visual language that powers day-to-day retail operations across the platform.",
  },
  overview: {
    title: "Overview",
    content: "Treez is a fast-growing B2B SaaS platform for cannabis retailers. As the product scaled across mobile and web, inconsistencies in UI, accessibility, and brand application created friction for designers, engineers, and users alike.\n\nI led the creation of a scalable, accessible, and cross-platform design system that unified visual language, increased team efficiency, and improved product quality at scale."
  },
  sections: {
    context: {
      title: "Context",
      content: "Treez is an enterprise SaaS platform supporting cannabis dispensary operations — from inventory and compliance to point-of-sale and e-commerce.\n\nBy late 2023, the company had grown rapidly, and its web platform had accumulated years of visual debt and inconsistent design practices. The mobile POS app was in early design planning for 2024, but the web experience was already used daily by hundreds of dispensary employees and admins.\n\nAt that time:\n• Teams were working in silos\n• Figma files were bloated with duplicates\n• Design-to-dev handoffs were inconsistent\n• Accessibility was mostly unaccounted for\n• There was no shared design language\n\nEvery new feature required designers and developers to re-solve the same problems from scratch."
    },
    problem: {
      title: "The Problem",
      intro: "Treez needed a scalable and accessible foundation to support rapid product delivery and future platform expansion.",
      quote: "Without a system, we were rebuilding the same UI — with different quality — every sprint.",
      challenges: [
        { icon: "🚫", text: "Inconsistent UI components across the platform" },
        { icon: "📁", text: "Redundant and poorly organized Figma assets" },
        { icon: "🔗", text: "Inefficient communication between design and engineering" },
        { icon: "♿", text: "No accessibility standards or visual contrast testing" },
        { icon: "🧪", text: "QA cycles bloated by misaligned styling and interactions" },
        { icon: "⌛", text: "Onboarding delays for new designers and engineers" }
      ],
      conclusion: "The design team knew we needed a solution that was more than just a component library — we needed a system."
    },
    whyRoot: {
      title: "Why Root DS?",
      content: "We named the system Root because it represents the foundation beneath everything we build — a connected structure of tokens, components, and design decisions that supports the entire product experience.\n\nLike a root network, it's invisible to users, but essential to what they see, feel, and use."
    },
    objectives: {
      title: "Objectives",
      content: "Our goals were clear and intentionally limited to the web platform, with the understanding that mobile support (POS) would come next:\n\n• Establish visual and interaction consistency across all web surfaces\n• Improve accessibility by default through compliant, tested components\n• Reduce redundancy in Figma and production code\n• Enable faster onboarding and lower the cost of delivery\n• Create a system flexible enough to support future POS and mobile products"
    },
    discovery: {
      title: "Discovery",
      intro: "Our process began with a comprehensive discovery and audit phase:",
      items: [
        { title: "UI Audit", description: "Mapped inconsistencies across the Treez platform" },
        { title: "Component Inventory", description: "Collected and documented 100+ repeated patterns" },
        { title: "Stakeholder Interviews", description: "Engaged with engineers, designers, QA, and PMs" },
        { title: "WCAG Accessibility Review", description: "Assessed current failures in color contrast, focus states, and structure" },
        { title: "Workflow Mapping", description: "Identified points of friction in handoff, review, and implementation" }
      ],
      conclusion: "We didn't assume what teams needed — we investigated and listened."
    },
    principles: {
      title: "Design Principles",
      intro: "We defined 5 guiding principles to shape every component, token, and interaction:",
      items: [
        "Consistency over customization",
        "Accessibility by default",
        "Platform-aware, not platform-bound",
        "Tokens over styles",
        "Documentation is part of the product"
      ],
      conclusion: "These principles ensured Root wasn't just scalable — it was sustainable."
    },
    architecture: {
      title: "System Architecture",
      intro: "Root was built on an atomic foundation, structured to grow with product demands.",
      foundations: {
        title: "Foundations",
        items: [
          "Color palette and contrast-compliant tokens",
          "Typographic scale and modular spacing system",
          "Iconography, grid, and motion primitives"
        ]
      },
      components: {
        title: "Components",
        items: [
          "Buttons, form elements, tables, cards, navigation",
          "Responsive structure for admin-heavy dashboard layouts",
          "Component states: hover, focus, disabled, error"
        ]
      },
      patterns: {
        title: "Patterns",
        items: [
          "Form groups, input validation, error handling",
          "Empty states, alerts, filtering, modals"
        ]
      },
      documentation: {
        title: "Documentation",
        items: [
          "Figma library with tokens and auto-layout",
          "Zeroheight for usage guidelines, do/don't examples",
          "Connected to Storybook for developer parity"
        ]
      }
    },
    collaboration: {
      title: "Collaboration & Rollout",
      intro: "Root was designed <em>with</em> engineering — not <em>for</em> them.",
      items: [
        "Weekly syncs with frontend leads ensured token architecture aligned with CSS vars",
        "Established naming conventions across design and code",
        "Created a contribution model for designers and devs to evolve the system",
        "Hosted internal onboarding sessions to walk through system usage, rationale, and workflow"
      ],
      conclusion: "This wasn't a handoff. It was a shared ownership model."
    },
    outcomes: {
      title: "Outcomes",
      intro: "Root created clarity and scale across the Treez design and development ecosystem.",
      metrics: [
        { value: "82%", label: "Reduced Figma component duplication" },
        { value: "30%", label: "Decreased UI QA tickets across three sprints" },
        { value: "3w → 1w", label: "Designer onboarding time dropped" },
        { value: "94%", label: "Resolved accessibility contrast issues in core components" },
        { value: "20%", label: "Product delivery velocity improved" }
      ],
      quote: {
        text: "It's the first time we've had a true source of truth",
        author: "Sam, Engineering Lead"
      }
    },
    whatsNext: {
      title: "What's Next",
      content: "Root was intentionally scoped to the web platform, but its architecture was designed to extend into mobile and POS — a roadmap priority for 2024.\n\nIn progress:\n• Extending tokens for mobile breakpoints and interaction patterns\n• POS app alignment with web design language\n• Brand theme flexibility for white-label features\n\nFuture goals:\n• Integrate automated accessibility linting\n• Versioned documentation with automated changelogs\n• Design ops dashboard for system health and adoption metrics"
    },
    reflection: {
      title: "Reflection",
      content: "Root wasn't just a project — it was a shift in how Treez teams build, collaborate, and scale.\n\nWe moved from individual craftsmanship to shared ownership. From design chaos to clarity. From reactivity to intentionality.\n\nAnd we did it by listening, aligning, and scaling with purpose."
    }
  }
},
  es: {
  title: "Introduciendo: Root Design System",
  subtitle: "Un sistema de diseño escalable, accesible y multiplataforma que unificó el lenguaje visual, aumentó la eficiencia del equipo y mejoró la calidad del producto a escala.",
  home: {
    title: "En Treez, fortalecí el design system que soporta flujos de retail de alto volumen",
    subtitle: "Trabajando en el design system, refiné patrones fundamentales y unifiqué el lenguaje visual que impulsa las operaciones diarias de retail en toda la plataforma."
  },
  details: [
    { label: "Rol", value: "Design System Lead" },
    { label: "Duración", value: "12 meses" },
    { label: "Año", value: "2023-2024" },
    { label: "Equipo", value: "4 Diseñadores, 8 Ingenieros, 3 PMs" }
  ],
  overview: {
    title: "Descripción General",
    content: "Treez es una plataforma SaaS B2B de rápido crecimiento para minoristas de cannabis. A medida que el producto escalaba en móvil y web, las inconsistencias en UI, accesibilidad y aplicación de marca creaban fricción para diseñadores, ingenieros y usuarios por igual.\n\nLideré la creación de un sistema de diseño escalable, accesible y multiplataforma que unificó el lenguaje visual, aumentó la eficiencia del equipo y mejoró la calidad del producto a escala."
  },
  sections: {
    context: {
      title: "Contexto",
      content: "Treez es una plataforma SaaS empresarial que respalda las operaciones de dispensarios de cannabis — desde inventario y cumplimiento hasta punto de venta y comercio electrónico.\n\nA finales de 2023, la compañía había crecido rápidamente, y su plataforma web había acumulado años de deuda visual y prácticas de diseño inconsistentes. La aplicación móvil POS estaba en planificación de diseño temprana para 2024, pero la experiencia web ya era utilizada diariamente por cientos de empleados y administradores de dispensarios.\n\nEn ese momento:\n• Los equipos trabajaban en silos\n• Los archivos de Figma estaban saturados de duplicados\n• Los traspasos de diseño a desarrollo eran inconsistentes\n• La accesibilidad estaba mayormente desatendida\n• No había un lenguaje de diseño compartido\n\nCada nueva funcionalidad requería que diseñadores y desarrolladores resolvieran los mismos problemas desde cero."
    },
    problem: {
      title: "El Problema",
      intro: "Treez necesitaba una base escalable y accesible para respaldar la entrega rápida de productos y la expansión futura de la plataforma.",
      quote: "Sin un sistema, estábamos reconstruyendo la misma UI — con diferente calidad — cada sprint.",
      challenges: [
        { icon: "🚫", text: "Componentes UI inconsistentes en toda la plataforma" },
        { icon: "📁", text: "Activos de Figma redundantes y mal organizados" },
        { icon: "🔗", text: "Comunicación ineficiente entre diseño e ingeniería" },
        { icon: "♿", text: "Sin estándares de accesibilidad o pruebas de contraste visual" },
        { icon: "🧪", text: "Ciclos de QA saturados por estilos e interacciones desalineados" },
        { icon: "⌛", text: "Retrasos en la incorporación de nuevos diseñadores e ingenieros" }
      ],
      conclusion: "El equipo de diseño sabía que necesitábamos una solución que fuera más que solo una biblioteca de componentes — necesitábamos un sistema."
    },
    whyRoot: {
      title: "¿Por qué Root DS?",
      content: "Nombramos al sistema Root porque representa la fundación debajo de todo lo que construimos — una estructura conectada de tokens, componentes y decisiones de diseño que respalda toda la experiencia del producto.\n\nComo una red de raíces, es invisible para los usuarios, pero esencial para lo que ven, sienten y usan."
    },
    objectives: {
      title: "Objetivos",
      content: "Nuestros objetivos eran claros e intencionalmente limitados a la plataforma web, con el entendimiento de que el soporte móvil (POS) vendría después:\n\n• Establecer consistencia visual y de interacción en todas las superficies web\n• Mejorar la accesibilidad por defecto mediante componentes compatibles y probados\n• Reducir la redundancia en Figma y código de producción\n• Permitir una incorporación más rápida y reducir el costo de entrega\n• Crear un sistema lo suficientemente flexible para respaldar futuros productos POS y móviles"
    },
    discovery: {
      title: "Descubrimiento",
      intro: "Nuestro proceso comenzó con una fase exhaustiva de descubrimiento y auditoría:",
      items: [
        { title: "Auditoría de UI", description: "Mapeamos inconsistencias en toda la plataforma Treez" },
        { title: "Inventario de Componentes", description: "Recopilamos y documentamos más de 100 patrones repetidos" },
        { title: "Entrevistas con Stakeholders", description: "Nos involucramos con ingenieros, diseñadores, QA y PMs" },
        { title: "Revisión de Accesibilidad WCAG", description: "Evaluamos fallas actuales en contraste de color, estados de foco y estructura" },
        { title: "Mapeo de Flujos de Trabajo", description: "Identificamos puntos de fricción en traspaso, revisión e implementación" }
      ],
      conclusion: "No asumimos lo que los equipos necesitaban — investigamos y escuchamos."
    },
    principles: {
      title: "Principios de Diseño",
      intro: "Definimos 5 principios rectores para dar forma a cada componente, token e interacción:",
      items: [
        "Consistencia sobre personalización",
        "Accesibilidad por defecto",
        "Consciente de la plataforma, no limitado por ella",
        "Tokens sobre estilos",
        "La documentación es parte del producto"
      ],
      conclusion: "Estos principios aseguraron que Root no solo fuera escalable — sino sostenible."
    },
    architecture: {
      title: "Arquitectura del Sistema",
      intro: "Root fue construido sobre una base atómica, estructurado para crecer con las demandas del producto.",
      foundations: {
        title: "Fundamentos",
        items: [
          "Paleta de colores y tokens compatibles con contraste",
          "Escala tipográfica y sistema de espaciado modular",
          "Iconografía, cuadrícula y primitivos de movimiento"
        ]
      },
      components: {
        title: "Componentes",
        items: [
          "Botones, elementos de formulario, tablas, tarjetas, navegación",
          "Estructura responsiva para layouts de panel con muchas funcionalidades administrativas",
          "Estados de componentes: hover, focus, disabled, error"
        ]
      },
      patterns: {
        title: "Patrones",
        items: [
          "Grupos de formularios, validación de entrada, manejo de errores",
          "Estados vacíos, alertas, filtrado, modales"
        ]
      },
      documentation: {
        title: "Documentación",
        items: [
          "Biblioteca de Figma con tokens y auto-layout",
          "Zeroheight para guías de uso, ejemplos de qué hacer/no hacer",
          "Conectado a Storybook para paridad con desarrolladores"
        ]
      }
    },
    collaboration: {
      title: "Colaboración e Implementación",
      intro: "Root fue diseñado <em>con</em> ingeniería — no <em>para</em> ellos.",
      items: [
        "Sincronizaciones semanales con líderes de frontend aseguraron que la arquitectura de tokens se alineara con variables CSS",
        "Establecimos convenciones de nombres entre diseño y código",
        "Creamos un modelo de contribución para que diseñadores y desarrolladores evolucionaran el sistema",
        "Realizamos sesiones de incorporación internas para recorrer el uso del sistema, la lógica y el flujo de trabajo"
      ],
      conclusion: "Esto no fue un traspaso. Fue un modelo de propiedad compartida."
    },
    outcomes: {
      title: "Resultados",
      intro: "Root creó claridad y escala en todo el ecosistema de diseño y desarrollo de Treez.",
      metrics: [
        { value: "82%", label: "Reducción en duplicación de componentes de Figma" },
        { value: "30%", label: "Disminución de tickets de QA de UI en tres sprints" },
        { value: "3s → 1s", label: "Tiempo de incorporación de diseñadores reducido" },
        { value: "94%", label: "Problemas de contraste de accesibilidad resueltos en componentes principales" },
        { value: "20%", label: "Velocidad de entrega de producto mejorada" }
      ],
      quote: {
        text: "Es la primera vez que tenemos una verdadera fuente de verdad",
        author: "Sam, Líder de Ingeniería"
      }
    },
    whatsNext: {
      title: "Próximos Pasos",
      content: "Root fue intencionalmente limitado a la plataforma web, pero su arquitectura fue diseñada para extenderse a móvil y POS — una prioridad del roadmap para 2024.\n\nEn progreso:\n• Extensión de tokens para puntos de quiebre móviles y patrones de interacción\n• Alineación de la aplicación POS con el lenguaje de diseño web\n• Flexibilidad de temas de marca para funcionalidades de marca blanca\n\nObjetivos futuros:\n• Integrar linting de accesibilidad automatizado\n• Documentación versionada con changelogs automatizados\n• Dashboard de operaciones de diseño para salud del sistema y métricas de adopción"
    },
    reflection: {
      title: "Reflexión",
      content: "Root no fue solo un proyecto — fue un cambio en cómo los equipos de Treez construyen, colaboran y escalan.\n\nPasamos de la artesanía individual a la propiedad compartida. Del caos de diseño a la claridad. De la reactividad a la intencionalidad.\n\nY lo hicimos escuchando, alineándonos y escalando con propósito."
    }
  }
}
};
