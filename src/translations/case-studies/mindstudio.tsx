import { Image } from '../../components/base';

/**
 * Content Formatting Guide for Writers:
 *
 * 1. Multiline paragraphs: Use \n\n to create paragraph breaks
 *    Example: "First paragraph.\n\nSecond paragraph."
 *
 * 2. HTML formatting: Use <strong> for bold, <em> for italic
 *    Example: "This is <strong>bold</strong> and <em>italic</em> text."
 *
 * 3. Combine both: You can use HTML tags AND paragraph breaks together
 *    Example: "First paragraph with <strong>bold</strong>.\n\nSecond paragraph with <em>italic</em>."
 *
 * Note: This works for all string content fields (overview.content, section.content, etc.)
 */

export const mindstudioTranslations = {
  en: {
    title: "MindStudio AI Platform",
    subtitle: "Building a comprehensive design system to scale AI-driven applications from chaos to systematic excellence.",
    details: [
      { label: "Role", value: "Lead Designer" },
      { label: "Duration", value: "8 months" },
      { label: "Year", value: "2024" },
      { label: "Team", value: "2 Designers, 4 Engineers, 1 PM" }
    ],
    overview: {
      title: "Project Overview",
      content: "At Mindstudio, I transformed design complexity into a systematic approach that facilitated the scaling of AI-driven applications. As the lead designer at MindSet DS, I developed a robust design system from inception.\n\nThe challenge was immense: create order from the chaos of rapidly developing AI tools while ensuring scalability, consistency, and exceptional user experience across 20+ different AI-powered applications."
    },
    sections: {
      challenge: {
        title: "The Challenge",
        content: "The complexity of AI-driven applications created inconsistencies across the platform, making it difficult to scale and maintain design quality as new features were rapidly developed. The existing design process was fragmented, leading to duplicated efforts and poor user experiences across different AI tools.\n\nTeams were spending more time reinventing design solutions than focusing on AI innovation. Each product team had their own interpretation of components, creating a disjointed ecosystem that confused users and slowed development cycles."
      },
      architecture: {
        title: "Design System Architecture",
        foundationLayer: {
          title: "Foundation Layer",
          items: [
            "Design tokens for colors, typography, and spacing",
            "Grid systems and layout principles",
            "Accessibility guidelines and standards",
            "Icon library and illustration style"
          ]
        },
        componentLayer: {
          title: "Component Layer",
          items: [
            "Atomic design methodology implementation",
            "50+ reusable UI components",
            "AI-specific components for data visualization",
            "Interactive patterns for machine learning interfaces"
          ]
        },
        imageAlt: "Design tokens and color system",
        imageCaption: "Design tokens and color system implementation for dark and light modes"
      },
      implementation: {
        title: "Implementation Strategy",
        content: "As the lead designer at MindSet DS, I developed a robust design system from inception, ensuring alignment between design and development, implementing dark mode theming, and optimizing the design, deployment, and evolution of AI-powered tools.\n\nThe implementation focused on three core principles: scalability, accessibility, and developer experience. We started with the most critical components and gradually expanded the system based on real usage patterns and team feedback."
      },
      features: {
        title: "Key System Features",
        darkMode: {
          title: "Dark Mode Implementation",
          description: "Implemented a comprehensive dark mode system that automatically adapts all components and maintains accessibility standards. This included creating semantic color tokens that work across both light and dark themes while preserving contrast ratios."
        },
        aiComponents: {
          title: "AI-Specific Components",
          description: "Developed specialized components for AI interfaces including data visualization widgets, model performance indicators, and interactive training data displays. These components standardized how complex AI information is presented across the platform."
        },
        documentation: {
          title: "Documentation & Adoption",
          description: "Created comprehensive documentation including usage guidelines, code examples, and design principles. Established a governance model for design system evolution and trained development teams on implementation best practices."
        },
        imageAlt: "Component library showcase",
        imageCaption: "Component library showcasing atomic design methodology"
      },
      results: {
        title: "Results & Impact",
        content: "The design system transformation delivered measurable results that exceeded expectations. Design-to-development handoff time was reduced by 60%, while establishing consistency across 20+ AI tools enabled faster product iterations and significantly improved user experience.\n\nThe system became the foundation for all new product development, with teams reporting 40% faster feature delivery and 75% reduction in design-related bugs. Most importantly, user satisfaction scores increased by 35% as the consistent experience reduced confusion and cognitive load."
      }
    }
  },
  es: {
    title: "Plataforma de IA MindStudio",
    subtitle: "Construyendo un sistema de diseño integral para escalar aplicaciones impulsadas por IA desde el caos hasta la excelencia sistemática.",
    details: [
      { label: "Rol", value: "Diseñador Principal" },
      { label: "Duración", value: "8 meses" },
      { label: "Año", value: "2024" },
      { label: "Equipo", value: "2 Diseñadores, 4 Ingenieros, 1 PM" }
    ],
    overview: {
      title: "Descripción del Proyecto",
      content: "En Mindstudio, transformé la complejidad del diseño en un enfoque sistemático que facilitó la escalabilidad de aplicaciones impulsadas por IA. Como diseñador principal en MindSet DS, desarrollé un sistema de diseño robusto desde su inicio.\n\nEl desafío fue inmenso: crear orden a partir del caos de herramientas de IA en rápido desarrollo, asegurando escalabilidad, consistencia y una experiencia de usuario excepcional en más de 20 aplicaciones diferentes impulsadas por IA."
    },
    sections: {
      challenge: {
        title: "El Desafío",
        content: "La complejidad de las aplicaciones impulsadas por IA creó inconsistencias en la plataforma, dificultando escalar y mantener la calidad del diseño a medida que se desarrollaban rápidamente nuevas funcionalidades. El proceso de diseño existente estaba fragmentado, lo que llevaba a esfuerzos duplicados y experiencias de usuario deficientes en diferentes herramientas de IA.\n\nLos equipos pasaban más tiempo reinventando soluciones de diseño que enfocándose en la innovación de IA. Cada equipo de producto tenía su propia interpretación de componentes, creando un ecosistema desarticulado que confundía a los usuarios y ralentizaba los ciclos de desarrollo."
      },
      architecture: {
        title: "Arquitectura del Sistema de Diseño",
        foundationLayer: {
          title: "Capa de Fundación",
          items: [
            "Tokens de diseño para colores, tipografía y espaciado",
            "Sistemas de cuadrícula y principios de diseño",
            "Directrices y estándares de accesibilidad",
            "Biblioteca de iconos y estilo de ilustración"
          ]
        },
        componentLayer: {
          title: "Capa de Componentes",
          items: [
            "Implementación de metodología de diseño atómico",
            "Más de 50 componentes UI reutilizables",
            "Componentes específicos de IA para visualización de datos",
            "Patrones interactivos para interfaces de aprendizaje automático"
          ]
        },
        imageAlt: "Tokens de diseño y sistema de colores",
        imageCaption: "Implementación de tokens de diseño y sistema de colores para modos oscuro y claro"
      },
      implementation: {
        title: "Estrategia de Implementación",
        content: "Como diseñador principal en MindSet DS, desarrollé un sistema de diseño robusto desde su inicio, asegurando la alineación entre diseño y desarrollo, implementando temas de modo oscuro y optimizando el diseño, despliegue y evolución de herramientas impulsadas por IA.\n\nLa implementación se centró en tres principios fundamentales: escalabilidad, accesibilidad y experiencia del desarrollador. Comenzamos con los componentes más críticos y expandimos gradualmente el sistema basándonos en patrones de uso reales y retroalimentación del equipo."
      },
      features: {
        title: "Características Clave del Sistema",
        darkMode: {
          title: "Implementación de Modo Oscuro",
          description: "Implementé un sistema integral de modo oscuro que adapta automáticamente todos los componentes y mantiene estándares de accesibilidad. Esto incluyó crear tokens de color semánticos que funcionan en temas claros y oscuros mientras se preservan las relaciones de contraste."
        },
        aiComponents: {
          title: "Componentes Específicos de IA",
          description: "Desarrollé componentes especializados para interfaces de IA, incluyendo widgets de visualización de datos, indicadores de rendimiento de modelos y displays interactivos de datos de entrenamiento. Estos componentes estandarizaron cómo se presenta la información compleja de IA en toda la plataforma."
        },
        documentation: {
          title: "Documentación y Adopción",
          description: "Creé documentación integral incluyendo guías de uso, ejemplos de código y principios de diseño. Establecí un modelo de gobernanza para la evolución del sistema de diseño y capacité a los equipos de desarrollo en mejores prácticas de implementación."
        },
        imageAlt: "Muestra de biblioteca de componentes",
        imageCaption: "Biblioteca de componentes mostrando metodología de diseño atómico"
      },
      results: {
        title: "Resultados e Impacto",
        content: "La transformación del sistema de diseño entregó resultados medibles que superaron las expectativas. El tiempo de traspaso de diseño a desarrollo se redujo en un 60%, mientras que establecer consistencia en más de 20 herramientas de IA permitió iteraciones de producto más rápidas y mejoró significativamente la experiencia del usuario.\n\nEl sistema se convirtió en la base para todo el desarrollo de nuevos productos, con equipos reportando una entrega de funcionalidades 40% más rápida y una reducción del 75% en errores relacionados con el diseño. Lo más importante, las puntuaciones de satisfacción del usuario aumentaron en un 35% ya que la experiencia consistente redujo la confusión y la carga cognitiva."
      }
    }
  }
};
