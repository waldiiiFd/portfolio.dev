import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'es']),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    projects: z.array(z.object({
      name: z.string(),
      role: z.string().optional(),
      technologies: z.array(z.string()).optional(),
    })).optional(),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    link: z.string().optional(),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',  
  schema: z.object({
    lang: z.enum(['en', 'es']),
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).default([]),
    type: z.enum(['job', 'education']),
    current: z.boolean().default(false),
    order: z.number().default(999),
    icon: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  experience: experienceCollection,
};