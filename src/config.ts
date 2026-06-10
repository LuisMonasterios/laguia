export const SITE = {
	name: 'La guIA',
	tagline: 'Herramientas de IA probadas y comparadas',
	description:
		'Guías interactivas sobre herramientas de inteligencia artificial: comparativas, tutoriales y recomendaciones para profesionales y equipos.',
	url: 'https://laguia.tech',
	locale: 'es',
	author: 'La guIA',
} as const;

export const CATEGORIES = {
	productividad: { label: 'Productividad', color: '#6366f1' },
	profesiones: { label: 'Profesiones', color: '#8b5cf6' },
	creatividad: { label: 'Creatividad', color: '#ec4899' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
