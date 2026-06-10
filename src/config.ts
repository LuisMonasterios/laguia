export const SITE = {
	name: 'La guIA',
	tagline: 'Herramientas de IA probadas y comparadas',
	description:
		'Guías expertas sobre herramientas de inteligencia artificial. Comparativas interactivas, análisis honestos y recomendaciones para profesionales, equipos y creadores.',
	url: 'https://www.laguia.tech',
	locale: 'es',
	author: 'La guIA',
	email: 'contacto@laguia.tech',
} as const;

export const GITHUB = {
	repo: 'LuisMonasterios/laguia',
	branch: 'main',
	editBase: 'https://github.com/LuisMonasterios/laguia/edit/main',
} as const;

export const CATEGORIES = {
	productividad: {
		label: 'Productividad',
		color: '#6366f1',
		icon: 'productivity',
		description: 'Presentaciones, textos, PDF y automatización.',
	},
	profesiones: {
		label: 'Profesiones',
		color: '#8b5cf6',
		icon: 'professions',
		description: 'IA para abogados, médicos, marketing y más.',
	},
	creatividad: {
		label: 'Creatividad',
		color: '#ec4899',
		icon: 'creativity',
		description: 'Imágenes, logos, vídeo y diseño.',
	},
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export const NAV_ITEMS = [
	{ href: '/', label: 'Inicio', icon: 'home' },
	{ href: '/#categorias', label: 'Categorías', icon: 'grid' },
	{ href: '/#articulos', label: 'Guías', icon: 'book' },
	{ href: '/nosotros/', label: 'Nosotros', icon: 'users' },
	{ href: '/contacto/', label: 'Contacto', icon: 'mail' },
] as const;

export const FOOTER_LINKS = {
	legal: [
		{ href: '/aviso-legal/', label: 'Aviso legal' },
		{ href: '/privacidad/', label: 'Política de privacidad' },
		{ href: '/cookies/', label: 'Política de cookies' },
		{ href: '/terminos/', label: 'Términos y condiciones' },
	],
	explore: [
		{ href: '/#articulos', label: 'Todas las guías' },
		{ href: '/nosotros/', label: 'Sobre nosotros' },
		{ href: '/contacto/', label: 'Contacto' },
		{ href: '/sitemap-index.xml', label: 'Sitemap XML' },
	],
} as const;

export const SOCIAL_LINKS = [
	{ name: 'X (Twitter)', href: '#', icon: 'twitter' },
	{ name: 'Instagram', href: '#', icon: 'instagram' },
	{ name: 'YouTube', href: '#', icon: 'youtube' },
	{ name: 'LinkedIn', href: '#', icon: 'linkedin' },
] as const;
