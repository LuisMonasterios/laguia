// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
	site: 'https://laguia.tech',
	trailingSlash: 'always',
	integrations: [
		mdx({ rehypePlugins: [rehypeSlug] }),
		react(),
		sitemap(),
	],
});
