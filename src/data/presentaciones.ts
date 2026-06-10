import type { ToolRow } from '../components/ComparisonTable';

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
		bestFor: 'Presentaciones corporativas rápidas',
		rating: 4.2,
		url: 'https://presentations.ai',
	},
	{
		name: 'Microsoft Copilot',
		price: 'Incluido en M365 / Copilot Pro',
		freeTier: false,
		spanish: true,
		bestFor: 'Usuarios de PowerPoint',
		rating: 4.4,
		url: 'https://microsoft.com/copilot',
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

export const faqItems = [
	{
		question: '¿Cuál es la mejor IA para hacer presentaciones gratis?',
		answer:
			'Gamma y Google Slides con Gemini son las mejores opciones gratuitas en 2026. Gamma genera presentaciones completas desde un prompt; Google Slides es ideal si ya usas el ecosistema Google.',
	},
	{
		question: '¿Puedo usar IA para presentaciones en español?',
		answer:
			'Sí. Gamma, Canva, SlidesAI y Google Slides soportan español en la interfaz y en la generación de contenido. Verifica siempre el resultado antes de presentar.',
	},
	{
		question: '¿La IA reemplaza a PowerPoint?',
		answer:
			'No del todo. La IA acelera la creación de borradores, diseño y textos, pero revisar datos, branding y narrativa sigue siendo responsabilidad tuya.',
	},
	{
		question: '¿Qué IA para presentaciones recomiendan para empresas?',
		answer:
			'Para equipos, Canva y Microsoft Copilot en PowerPoint ofrecen colaboración, permisos y coherencia de marca. Gamma funciona bien para equipos ágiles que priorizan velocidad.',
	},
];
