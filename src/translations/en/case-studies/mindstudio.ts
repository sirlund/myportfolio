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

export const mindstudio = {
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
};
