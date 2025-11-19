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
    title: "At Mindstudio, design moved from chaos to clarity",
    subtitle: "As the lead behind MindSet DS, I built the design system from zero — creating the alignment, structure, and visual logic that now power how AI-driven tools are designed, themed, and deployed",
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
};
