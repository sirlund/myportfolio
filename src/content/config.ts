import { defineCollection, z } from 'astro:content';

/**
 * Schema for home page content
 */
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Hero section
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      location: z.string(),
      cta: z.string(),
    }),

    // About section
    about: z.object({
      title: z.string(),
      tools: z.object({
        title: z.string(),
        items: z.array(z.string()),
      }),
      skills: z.object({
        title: z.string(),
        items: z.array(z.string()),
      }),
      industries: z.object({
        title: z.string(),
        items: z.array(z.string()),
      }),
    }),

    // Contact section
    contact: z.object({
      title: z.string(),
      description: z.string(),
      links: z.array(z.object({
        label: z.string(),
        description: z.string(),
        href: z.string(),
        icon: z.string().optional(),
      })),
    }),

    // Work section
    work: z.object({
      comingSoon: z.string(),
      comingSoonDescription: z.string(),
    }),

    // Navigation
    nav: z.object({
      work: z.string(),
      about: z.string(),
      contact: z.string(),
      backToProjects: z.string(),
    }),

    // Footer
    footer: z.object({
      rights: z.string(),
    }),
  }),
});

/**
 * Schema for case study content
 */
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic info
    title: z.string(),
    subtitle: z.string(),
    seoDescription: z.string().optional(),

    // Display order in Work section
    order: z.number(),

    // Images
    heroImage: z.string(),
    thumbnail: z.string(),

    // Project details (sidebar)
    details: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),

    // Impact metrics (optional)
    impactStats: z.array(z.object({
      metric: z.string(),
      label: z.string(),
      icon: z.string().optional(),
    })).optional(),

    // Theme colors (for Work section cards)
    theme: z.object({
      background: z.string(),
      text: z.string(),
      textMuted: z.string(),
    }).optional(),

    // Draft status
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages: pagesCollection,
  'case-studies': caseStudiesCollection,
};
