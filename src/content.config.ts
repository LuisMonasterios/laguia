import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/articulos' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(['productividad', 'profesiones', 'creatividad']),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		image: z.string(),
		imageAlt: z.string(),
		readingTime: z.number().default(8),
		featured: z.boolean().default(false),
		affiliateDisclosure: z.boolean().default(true),
	}),
});

export const collections = { articulos };
