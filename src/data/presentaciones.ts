import type { ToolRow } from '../components/ComparisonTable';
import { ARTICLE_IMAGES as IMG } from '../config/images';

export const IMAGES = {
	hero: IMG.presentacionesHero,
	gamma: IMG.presentacionesGamma,
	canva: IMG.logosCanva,
	beautiful: IMG.marketingCharts,
	tome: IMG.presentacionesSlides,
	slidesai: IMG.marketingAnalytics,
	google: IMG.presentacionesGoogle,
};

export const presentationTools: ToolRow[] = [
	{
		name: 'Gamma',
		price: 'Desde $0 / Pro $10/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Crear decks completos con IA',
		rating: 4.8,
		url: 'https://gamma.app',
	},
	{
		name: 'Canva',
		price: 'Gratis / Pro $12.99/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Diseño visual y equipos',
		rating: 4.7,
		url: 'https://www.canva.com',
	},
	{
		name: 'Beautiful.ai',
		price: 'Desde $12/mes',
		freeTier: false,
		spanish: false,
		bestFor: 'Diseño automático profesional',
		rating: 4.5,
		url: 'https://www.beautiful.ai',
	},
	{
		name: 'Tome',
		price: 'Gratis / Pro $16/mes',
		freeTier: true,
		spanish: false,
		bestFor: 'Narrativa visual con IA',
		rating: 4.4,
		url: 'https://tome.app',
	},
	{
		name: 'SlidesAI',
		price: 'Desde $0 / Pro $10/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Extensión para Google Slides',
		rating: 4.3,
		url: 'https://www.slidesai.io',
	},
	{
		name: 'Presentations.AI',
		price: 'Desde $0 / Pro $8/mes',
		freeTier: true,
		spanish: false,
		bestFor: 'Presentaciones corporativas',
		rating: 4.2,
		url: 'https://presentations.ai',
	},
	{
		name: 'Microsoft Copilot',
		price: 'M365 / Copilot Pro',
		freeTier: false,
		spanish: true,
		bestFor: 'Usuarios de PowerPoint',
		rating: 4.4,
		url: 'https://www.microsoft.com/copilot',
	},
	{
		name: 'Google Slides + Gemini',
		price: 'Gratis',
		freeTier: true,
		spanish: true,
		bestFor: 'Opción 100% gratuita',
		rating: 4.1,
		url: 'https://slides.google.com',
	},
];

export const productList = [
	{
		rank: 1,
		name: 'Gamma',
		description:
			'Genera presentaciones completas desde un prompt. La mejor relación velocidad, diseño y facilidad de uso.',
		rating: 4.8,
		price: 'Gratis / Pro $10/mes',
		url: 'https://gamma.app',
		image: IMAGES.gamma,
		imageAlt: 'Interfaz de Gamma para crear presentaciones con IA',
		badge: "Editor's choice",
		highlight: true,
	},
	{
		rank: 2,
		name: 'Canva',
		description:
			'Ideal para equipos que necesitan diseño visual, plantillas y colaboración en tiempo real.',
		rating: 4.7,
		price: 'Gratis / Pro $12.99/mes',
		url: 'https://www.canva.com',
		image: IMAGES.canva,
		imageAlt: 'Canva con funciones de IA para diseño de diapositivas',
	},
	{
		rank: 3,
		name: 'Beautiful.ai',
		description:
			'Diseño corporativo automático con reglas inteligentes que mantienen coherencia visual.',
		rating: 4.5,
		price: 'Desde $12/mes',
		url: 'https://www.beautiful.ai',
		image: IMAGES.beautiful,
		imageAlt: 'Beautiful.ai presentaciones profesionales',
	},
	{
		rank: 4,
		name: 'SlidesAI',
		description: 'Extensión para Google Slides. Convierte textos en diapositivas sin salir de Google.',
		rating: 4.3,
		price: 'Gratis / Pro $10/mes',
		url: 'https://www.slidesai.io',
		image: IMAGES.slidesai,
		imageAlt: 'SlidesAI extensión Google Slides',
	},
	{
		rank: 5,
		name: 'Google Slides + Gemini',
		description: 'Opción 100% gratuita integrada en el ecosistema Google Workspace.',
		rating: 4.1,
		price: 'Gratuito',
		url: 'https://slides.google.com',
		image: IMAGES.google,
		imageAlt: 'Google Slides con asistente Gemini',
	},
];

export const faqItems = [
	{
		question: '¿Cuál es la mejor IA para hacer presentaciones gratis?',
		answer:
			'Gamma y Google Slides con Gemini son las mejores opciones gratuitas en 2026. Gamma genera presentaciones completas desde un prompt en minutos. Google Slides es ideal si ya trabajas con Google Workspace y necesitas colaboración sin coste.',
	},
	{
		question: '¿Puedo usar IA para presentaciones en español?',
		answer:
			'Sí. Gamma, Canva, SlidesAI y Google Slides soportan español tanto en la interfaz como en la generación de contenido. Siempre revisa ortografía y terminología específica de tu sector antes de presentar.',
	},
	{
		question: '¿La IA reemplaza a PowerPoint?',
		answer:
			'No completamente. La IA acelera borradores, diseño y redacción, pero la revisión de datos, branding corporativo y narrativa estratégica sigue siendo responsabilidad tuya. PowerPoint con Copilot sigue siendo relevante en entornos Microsoft.',
	},
	{
		question: '¿Qué IA para presentaciones recomiendan para empresas?',
		answer:
			'Para equipos, Canva y Microsoft Copilot en PowerPoint ofrecen colaboración, permisos y coherencia de marca. Gamma funciona muy bien para equipos ágiles que priorizan velocidad de entrega.',
	},
	{
		question: '¿Es seguro subir documentos confidenciales a estas herramientas?',
		answer:
			'Depende de la política de cada plataforma. Revisa los términos de privacidad y, para datos sensibles, usa planes empresariales con garantías de no entrenamiento o procesamiento local.',
	},
];
