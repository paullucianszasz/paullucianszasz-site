// Config pentru blog: articolele sunt fisiere markdown, cate unul per articol.
// Publish = adaugi un fisier .md in src/content/blog/ro/ (si oglinda in src/content/blog/en/), apoi npm run build.
// Frontmatter obligatoriu: title, date, description. Optional: excerpt, mirror (slugul articolului oglinda).
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const article = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  excerpt: z.string().optional(),
  mirror: z.string().optional()
});

export const collections = {
  articlesRo: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog/ro' }), schema: article }),
  articlesEn: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog/en' }), schema: article })
};
