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

export const treez = {
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
};
