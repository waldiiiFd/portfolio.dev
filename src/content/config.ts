import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'es']),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    link: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};