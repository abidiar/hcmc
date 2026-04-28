import { defineCollection, z } from 'astro:content';

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    primaryAction: z
      .object({
        label: z.string(),
        href: z.string()
      })
      .optional(),
    secondaryAction: z
      .object({
        label: z.string(),
        href: z.string()
      })
      .optional(),
    highlights: z
      .array(
        z.object({
          label: z.string(),
          text: z.string()
        })
      )
      .optional(),
    featureCards: z
      .array(
        z.object({
          title: z.string(),
          text: z.string(),
          href: z.string().optional()
        })
      )
      .optional()
  })
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

const programsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    audience: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

export const collections = {
  pages: pageCollection,
  news: newsCollection,
  events: eventsCollection,
  programs: programsCollection
};
