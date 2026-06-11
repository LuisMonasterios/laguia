import type { ToolRow } from '../components/ComparisonTable';
import { ARTICLE_IMAGES as IMG } from '../config/images';

export const IMAGES = {
	hero: IMG.marketingHero,
	jasper: IMG.marketingTeam,
	copyai: IMG.marketingMeeting,
	hubspot: IMG.marketingAnalytics,
	surfer: IMG.marketingCharts,
};

export const marketingTools: ToolRow[] = [
	{
		name: 'Jasper',
		price: 'Desde $49/mes',
		freeTier: false,
		spanish: true,
		bestFor: 'Equipos de marketing de contenidos',
		rating: 4.6,
		url: 'https://www.jasper.ai',
	},
	{
		name: 'Copy.ai',
		price: 'Gratis / Pro $49/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Copy para ads y redes sociales',
		rating: 4.4,
		url: 'https://www.copy.ai',
	},
	{
		name: 'Writesonic',
		price: 'Gratis / Pro desde $16/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'SEO y artículos de blog',
		rating: 4.3,
		url: 'https://writesonic.com',
	},
	{
		name: 'HubSpot AI',
		price: 'Gratis / desde $20/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'CRM + email marketing',
		rating: 4.5,
		url: 'https://www.hubspot.com',
	},
	{
		name: 'Surfer SEO',
		price: 'Desde $89/mes',
		freeTier: false,
		spanish: false,
		bestFor: 'Optimización SEO on-page',
		rating: 4.5,
		url: 'https://surferseo.com',
	},
	{
		name: 'Canva',
		price: 'Gratis / Pro $12.99/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Creatividades y redes sociales',
		rating: 4.7,
		url: 'https://www.canva.com',
	},
	{
		name: 'ChatGPT Plus',
		price: '$20/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Estrategia y brainstorming',
		rating: 4.4,
		url: 'https://chat.openai.com',
	},
	{
		name: 'AdCreative.ai',
		price: 'Desde $29/mes',
		freeTier: false,
		spanish: false,
		bestFor: 'Anuncios display y Meta Ads',
		rating: 4.2,
		url: 'https://www.adcreative.ai',
	},
];

export const productList = [
	{
		rank: 1,
		name: 'Jasper',
		description:
			'Plataforma completa para equipos de marketing: campañas, brand voice y plantillas multicanal.',
		rating: 4.6,
		price: 'Desde $49/mes',
		url: 'https://www.jasper.ai',
		image: IMAGES.jasper,
		imageAlt: 'Jasper IA para marketing de contenidos',
		badge: "Editor's choice",
		highlight: true,
	},
	{
		rank: 2,
		name: 'Copy.ai',
		description: 'Genera copy para anuncios, emails y redes en segundos. Plan gratuito generoso.',
		rating: 4.4,
		price: 'Gratis / Pro $49/mes',
		url: 'https://www.copy.ai',
		image: IMAGES.copyai,
		imageAlt: 'Copy.ai herramienta de copywriting con IA',
	},
	{
		rank: 3,
		name: 'HubSpot AI',
		description: 'Integra IA en CRM, emails y landing pages. Ideal si ya usas el ecosistema HubSpot.',
		rating: 4.5,
		price: 'Gratis / desde $20/mes',
		url: 'https://www.hubspot.com',
		image: IMAGES.hubspot,
		imageAlt: 'HubSpot marketing con inteligencia artificial',
	},
	{
		rank: 4,
		name: 'Surfer SEO',
		description: 'Optimiza artículos para posicionar en Google con sugerencias basadas en SERP real.',
		rating: 4.5,
		price: 'Desde $89/mes',
		url: 'https://surferseo.com',
		image: IMAGES.surfer,
		imageAlt: 'Surfer SEO optimización con IA',
	},
	{
		rank: 5,
		name: 'Writesonic',
		description: 'Buena relación calidad-precio para blogs, descripciones de producto y SEO.',
		rating: 4.3,
		price: 'Gratis / Pro desde $16/mes',
		url: 'https://writesonic.com',
		image: IMAGES.jasper,
		imageAlt: 'Writesonic generador de contenido marketing',
	},
];

export const faqItems = [
	{
		question: '¿Cuál es la mejor IA para marketing en 2026?',
		answer:
			'Para equipos profesionales, Jasper lidera en funciones y colaboración. Para freelancers y pymes, Copy.ai o Writesonic ofrecen excelente relación calidad-precio. Si tu foco es SEO, combina Surfer SEO con un redactor IA.',
	},
	{
		question: '¿La IA para marketing funciona en español?',
		answer:
			'Sí. Jasper, Copy.ai, Writesonic, HubSpot y Canva generan contenido en español de calidad aceptable. Siempre revisa modismos, tono de marca y datos antes de publicar.',
	},
	{
		question: '¿Puede Google penalizar contenido generado con IA?',
		answer:
			'Google penaliza contenido de baja calidad, no la IA en sí. Si el texto aporta valor, está bien estructurado y responde a la intención de búsqueda, puede posicionar igual que contenido humano.',
	},
	{
		question: '¿Qué IA usar para anuncios de Facebook e Instagram?',
		answer:
			'Copy.ai y AdCreative.ai están optimizados para ads. Canva es ideal para creatividades visuales. Prueba varias variantes y deja que los datos de conversión decidan.',
	},
];
