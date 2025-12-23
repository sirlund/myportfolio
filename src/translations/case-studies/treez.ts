export const treez = {
  en: {
    title: "Root Design System",
    subtitle: "A scalable, accessible, and cross-platform design system that unified visual language, increased team efficiency, and improved product quality at scale.",
    seoDescription: "Design System case study: Building Root, a scalable and accessible cross-platform design system that unified visual language and increased team efficiency at Treez cannabis platform.",
    details: [
      { label: "Role", value: "Design System Lead" },
      { label: "Duration", value: "12 months" },
      { label: "Year", value: "2024" },
      { label: "Team", value: "4 Designers, 8 Engineers, 3 PMs" }
    ],
    home: {
      title: "A cohesive design system for high-volume retail operations.",
      subtitle: "At Treez, a clearer structure aligned design and engineering to support the fast pace of the retail ecosystem.",
    },
    overview: {
      title: "Overview",
      content: "Led the architecture and implementation of Root DS for Treez’s fast-growing B2B platform. The initiative addressed critical UI fragmentation across web and mobile, transforming significant technical debt into a unified system that reduced QA cycles by 30% and accelerated delivery."
    },
    sections: {
      context: {
        title: "Context",
        content: "Treez serves as the mission-critical OS for enterprise cannabis retail, handling complex workflows from strict compliance to high-volume transaction processing.\n\nHowever, rapid market expansion exposed the fragility of our legacy frontend. As we prepared to scale from web to a native mobile POS in 2024, the lack of a unified system became a critical blocker. We weren't just dealing with inconsistent buttons; we were facing a fragmented codebase that made every new feature exponentially more expensive to build.\n\nAt that time, the operational reality was brittle:\n\n• **Siloed Workstreams:** Design and Engineering lacked a shared vocabulary, leading to divergent solutions for identical problems.\n• **Decentralized Assets:** No single source of truth existed; Figma libraries were detached from production code.\n• **Compliance Blindspots:** Accessibility was treated as an afterthought, creating significant debt for future enterprise requirements.\n• **High-Friction Delivery:** Without standardized tokens, developers spent valuable cycles manually interpreting design specs.\n\nIn short: We were paying a 're-invention tax' on every single sprint."
      },
      problem: {
        title: "The Problem",
        intro: "Treez faced a scalability crisis. Rapid growth led to isolated workflows, where teams were constantly rebuilding existing UI, resulting in bloated codebases and inconsistent user experiences across the B2B SaaS platform.",
        quote: "Without a system, we were rebuilding the same UI — with different quality — every sprint.",
        challenges: [
          { text: "Fragmentation was eroding user trust and confusing navigation patterns." },
          { text: "Zero 'source of truth' led to massive file duplication and version conflicts." },
          { text: "Design and Engineering spoke different languages, causing implementation errors." },
          { text: "The product was legally exposed and unusable for assistive tech users." },
          { text: "Misaligned styles trapped the team in endless pixel-pushing cycles." },
          { text: "Without documentation, onboarding relied on verbal transfer, costing weeks." }
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
          { title: "Visual Debt Overload", description: "Uncovered years of accumulated drift, including 20+ undocumented grey styles and fragmented navigation patterns." },
          { title: "Redundancy Scale", description: "Cataloged 100+ detached patterns, revealing that ~60% of frontend effort was spent rebuilding existing UI elements." },
          { title: "The Handoff Gap", description: "Identified a lack of 'source of truth' for Engineering, causing constant guesswork and recurring UI regressions." },
          { title: "Compliance Risk", description: "Flagged critical risks: 80% of core interactions failed WCAG 2.1 AA standards, threatening enterprise contract requirements." },
          { title: "Velocity Bottleneck", description: "Pinpointed the drag: Manual translation of design styles to CSS was adding 2-3 days of overhead to every sprint." }
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
        intro: "Root was built on a strict atomic foundation using a multi-tier token structure (global vs. alias vs. component tokens). This ensured theming flexibility for future white-labeling and paved the way for mobile parity.",
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
        intro: "\"Designed **with** engineering — not **for** them.\" We replaced brittle handoffs with a **Shared Ownership Model**, ensuring technical feasibility from day one.",
        sotPortal: "<strong>The 'Source of Truth' Portal:</strong> While architecting the full environment, I deployed this internal reference site. It mapped Figma tokens directly to CSS variables, allowing developers to copy-paste production-ready values, reducing implementation errors to near zero.",
        items: [
          "**The Bridge (Portal):** Co-developed a custom internal reference portal mapping Figma tokens directly to CSS variables, ensuring 1:1 implementation parity.",
          "**The Governance:** Established a bi-directional contribution model, allowing both designers and developers to evolve the system responsibly.",
          "**The Culture:** Led onboarding workshops to shift the team mindset from \"guessing styles\" to utilizing the system as the single source of truth."
        ],
        conclusion: ""
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
        content: "Root was intentionally scoped to the web platform, but its architecture was designed to extend into mobile and POS — a roadmap priority for 2024.\n\n <strong>In progress:</strong>\n• Extending tokens for mobile breakpoints and interaction patterns\n• POS app alignment with web design language\n• Brand theme flexibility for white-label features\n\n <strong>Future goals:</strong>\n• Pilot automated accessibility linting in CI/CD pipeline\n• Versioned documentation with automated changelogs\n• Design ops dashboard for system health and adoption metrics"
      },
      reflection: {
        title: "Reflection",
        content: "Root wasn't just a project — it was a shift in how Treez teams build, collaborate, and scale.\n\nWe moved from individual craftsmanship to shared ownership. From design chaos to clarity. From reactivity to intentionality.\n\nAnd we did it by listening, aligning, and scaling with purpose."
      }
    }
  },
  es: {
    title: "Root Design System",
    subtitle: "Un sistema de diseño escalable, accesible y multiplataforma que unificó el lenguaje visual, aumentó la eficiencia del equipo y mejoró la calidad del producto a escala.",
    home: {
      title: "Un sistema de diseño cohesivo para operaciones retail de alto volumen.",
      subtitle: "En Treez, una estructura clara alineó diseño e ingeniería para soportar el ritmo intenso del ecosistema retail."
    },
    details: [
      { label: "Rol", value: "Design System Lead" },
      { label: "Duración", value: "12 meses" },
      { label: "Año", value: "2023-2024" },
      { label: "Equipo", value: "4 Diseñadores, 8 Ingenieros, 3 PMs" }
    ],
    overview: {
      title: "Descripción General",
      content: "Lideré la arquitectura e implementación de Root DS para la plataforma B2B de rápido crecimiento de Treez. La iniciativa abordó la fragmentación crítica de UI en web y móvil, transformando una deuda técnica significativa en un sistema unificado que redujo los ciclos de QA en un 30% y aceleró la entrega."
    },
    sections: {
      context: {
        title: "Contexto",
        content: "Treez sirve como el sistema operativo de misión crítica para el comercio minorista de cannabis empresarial, manejando flujos de trabajo complejos desde el cumplimiento estricto hasta el procesamiento de transacciones de alto volumen.\n\nSin embargo, la rápida expansión del mercado expuso la fragilidad de nuestro frontend heredado. Mientras nos preparábamos para escalar de la web a un POS móvil nativo en 2024, la falta de un sistema unificado se convirtió en un bloqueador crítico. No solo lidiábamos con botones inconsistentes; enfrentábamos una base de código fragmentada que hacía que cada nueva funcionalidad fuera exponencialmente más costosa de construir.\n\nEn ese momento, la realidad operativa era frágil:\n\n• **Flujos de trabajo aislados:** Diseño e Ingeniería carecían de un vocabulario compartido, lo que llevaba a soluciones divergentes para problemas idénticos.\n• **Activos descentralizados:** No existía una única fuente de verdad; las bibliotecas de Figma estaban desconectadas del código de producción.\n• **Puntos ciegos de cumplimiento:** La accesibilidad se trataba como una ocurrencia tardía, creando una deuda significativa para futuros requisitos empresariales.\n• **Entrega de alta fricción:** Sin tokens estandarizados, los desarrolladores gastaban ciclos valiosos interpretando manualmente especificaciones de diseño.\n\nEn resumen: Estábamos pagando un 'impuesto de reinvención' en cada sprint."
      },
      problem: {
        title: "El Problema",
        intro: "Treez enfrentaba una crisis de escalabilidad. El rápido crecimiento llevó a flujos de trabajo aislados, donde los equipos reconstruían constantemente la UI existente, resultando en bases de código infladas y experiencias de usuario inconsistentes en toda la plataforma B2B SaaS.",
        quote: "Sin un sistema, estábamos reconstruyendo la misma UI — con diferente calidad — cada sprint.",
        challenges: [
          { text: "La fragmentación estaba erosionando la confianza del usuario y confundiendo los patrones de navegación." },
          { text: "Cero 'fuente de verdad' condujo a una duplicación masiva de archivos y conflictos de versiones." },
          { text: "Diseño e Ingeniería hablaban idiomas diferentes, causando errores de implementación." },
          { text: "El producto estaba legalmente expuesto e inutilizable para usuarios de tecnología asistiva." },
          { text: "Estilos desalineados atrapaban al equipo en ciclos interminables de ajustes visuales." },
          { text: "Sin documentación, la incorporación dependía de la transferencia verbal, costando semanas." }
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
          { title: "Sobrecarga de Deuda Visual", description: "Descubrimos años de deriva acumulada, incluyendo más de 20 estilos de gris no documentados y patrones de navegación fragmentados." },
          { title: "Escala de Redundancia", description: "Catalogamos más de 100 patrones desconectados, revelando que ~60% del esfuerzo de frontend se gastaba reconstruyendo elementos de UI existentes." },
          { title: "La Brecha de Traspaso", description: "Identificamos la falta de una 'fuente de verdad' para Ingeniería, causando conjeturas constantes y regresiones de UI recurrentes." },
          { title: "Riesgo de Cumplimiento", description: "Marcamos riesgos críticos: el 80% de las interacciones principales fallaban en los estándares WCAG 2.1 AA, amenazando los requisitos de contratos empresariales." },
          { title: "Cuello de Botella de Velocidad", description: "Identificamos el freno: La traducción manual de estilos de diseño a CSS añadía 2-3 días de sobrecarga a cada sprint." }
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
        intro: "Root fue construido sobre una base atómica estricta utilizando una estructura de tokens de múltiples niveles (global vs. alias vs. tokens de componente). Esto aseguró flexibilidad temática para futuro etiquetado blanco y allanó el camino para la paridad móvil.",
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
        intro: "\"Diseñado **con** ingeniería — no **para** ellos.\" Reemplazamos los traspasos frágiles con un **Modelo de Propiedad Compartida**, asegurando la viabilidad técnica desde el primer día.",
        sotPortal: "<strong>El Portal 'Fuente de Verdad':</strong> Mientras diseñaba la arquitectura completa, desplegué este sitio de referencia interno. Mapeaba los tokens de Figma directamente a variables CSS, permitiendo a los desarrolladores copiar y pegar valores listos para producción, reduciendo los errores de implementación a casi cero.",
        items: [
          "**El Puente (Portal):** Co-desarrollamos un portal de referencia interno personalizado que mapeaba tokens de Figma directamente a variables CSS, asegurando paridad de implementación 1:1.",
          "**La Gobernanza:** Establecimos un modelo de contribución bidireccional, permitiendo que tanto diseñadores como desarrolladores evolucionaran el sistema de manera responsable.",
          "**La Cultura:** Lideramos talleres de incorporación para cambiar la mentalidad del equipo de \"adivinar estilos\" a utilizar el sistema como la única fuente de verdad."
        ],
        conclusion: ""
      },
      outcomes: {
        title: "Resultados",
        intro: "Root creó claridad y escala en todo el ecosistema de diseño y desarrollo de Treez.",
        metrics: [
          { value: "82%", label: "Reducción en duplicación de componentes de Figma" },
          { value: "30%", label: "Disminución de tickets de QA de UI en tres sprints" },
          { value: "3sem → 1sem", label: "Tiempo de incorporación de diseñadores reducido" },
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
        content: "Root fue intencionalmente limitado a la plataforma web, pero su arquitectura fue diseñada para extenderse a móvil y POS — una prioridad del roadmap para 2024.\n\n <strong>En progreso:</strong>\n• Extensión de tokens para puntos de quiebre móviles y patrones de interacción\n• Alineación de la aplicación POS con el lenguaje de diseño web\n• Flexibilidad de temas de marca para funcionalidades de marca blanca\n\n <strong>Objetivos futuros:</strong>\n• Piloto de linting de accesibilidad automatizado en pipeline CI/CD\n• Documentación versionada con changelogs automatizados\n• Dashboard de operaciones de diseño para salud del sistema y métricas de adopción"
      },
      reflection: {
        title: "Reflexión",
        content: "Root no fue solo un proyecto — fue un cambio en cómo los equipos de Treez construyen, colaboran y escalan.\n\nPasamos de la artesanía individual a la propiedad compartida. Del caos de diseño a la claridad. De la reactividad a la intencionalidad.\n\nY lo hicimos escuchando, alineándonos y escalando con propósito."
      }
    }
  }
};
