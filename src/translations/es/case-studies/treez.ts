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

export const treez = {
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
};
