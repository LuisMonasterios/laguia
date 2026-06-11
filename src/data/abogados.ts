import type { ToolRow } from '../components/ComparisonTable';

export const IMAGES = {
	hero: 'https://images.unsplash.com/photo-1589829545855-d41829af765e?w=1200&h=500&fit=crop',
	harvey: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=260&fit=crop',
	spellbook: 'https://images.unsplash.com/photo-1505664194772-de5931159420?w=400&h=260&fit=crop',
	vlex: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=260&fit=crop',
	chatgpt: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=260&fit=crop',
};

export const abogadosTools: ToolRow[] = [
	{
		name: 'Harvey AI',
		price: 'Enterprise / bajo consulta',
		freeTier: false,
		spanish: false,
		bestFor: 'Grandes despachos internacionales',
		rating: 4.7,
		url: 'https://www.harvey.ai',
	},
	{
		name: 'CoCounsel',
		price: 'Desde ~$225/mes',
		freeTier: false,
		spanish: false,
		bestFor: 'Investigación jurídica profunda',
		rating: 4.6,
		url: 'https://cocounsel.thomsonreuters.com',
	},
	{
		name: 'Spellbook',
		price: 'Desde $40/mes',
		freeTier: false,
		spanish: false,
		bestFor: 'Redacción de contratos en Word',
		rating: 4.5,
		url: 'https://www.spellbook.legal',
	},
	{
		name: 'vLex',
		price: 'Desde ~€30/mes',
		freeTier: false,
		spanish: true,
		bestFor: 'Derecho español y latinoamericano',
		rating: 4.6,
		url: 'https://vlex.es',
	},
	{
		name: 'Lexis+ AI',
		price: 'Suscripción profesional',
		freeTier: false,
		spanish: false,
		bestFor: 'Jurisprudencia y citas verificadas',
		rating: 4.5,
		url: 'https://www.lexisnexis.com',
	},
	{
		name: 'ChatGPT Plus',
		price: '$20/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Borradores y análisis general',
		rating: 4.3,
		url: 'https://chat.openai.com',
	},
	{
		name: 'Claude Pro',
		price: '$20/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Documentos largos y revisión',
		rating: 4.4,
		url: 'https://claude.ai',
	},
	{
		name: 'Notion AI',
		price: 'Desde $10/mes',
		freeTier: false,
		spanish: true,
		bestFor: 'Gestión de casos y notas',
		rating: 4.2,
		url: 'https://www.notion.so',
	},
];

export const productList = [
	{
		rank: 1,
		name: 'vLex',
		description:
			'La referencia para abogados en España y LATAM: jurisprudencia, legislación y Vincent (IA) integrados.',
		rating: 4.6,
		price: 'Desde ~€30/mes',
		url: 'https://vlex.es',
		image: IMAGES.vlex,
		imageAlt: 'vLex plataforma jurídica con inteligencia artificial',
		badge: "Editor's choice",
		highlight: true,
	},
	{
		rank: 2,
		name: 'Spellbook',
		description: 'Redacta y revisa cláusulas contractuales directamente en Microsoft Word.',
		rating: 4.5,
		price: 'Desde $40/mes',
		url: 'https://www.spellbook.legal',
		image: IMAGES.spellbook,
		imageAlt: 'Spellbook IA para contratos legales',
	},
	{
		rank: 3,
		name: 'CoCounsel',
		description: 'Investigación jurídica con citas verificadas. Estándar en despachos anglosajones.',
		rating: 4.6,
		price: 'Desde ~$225/mes',
		url: 'https://cocounsel.thomsonreuters.com',
		image: IMAGES.harvey,
		imageAlt: 'CoCounsel Thomson Reuters IA legal',
	},
	{
		rank: 4,
		name: 'ChatGPT Plus',
		description: 'Versátil para borradores, resúmenes y lluvia de ideas. Requiere revisión humana.',
		rating: 4.3,
		price: 'Gratis / Plus $20/mes',
		url: 'https://chat.openai.com',
		image: IMAGES.chatgpt,
		imageAlt: 'ChatGPT para tareas legales',
	},
	{
		rank: 5,
		name: 'Claude Pro',
		description: 'Excelente para analizar contratos extensos gracias a su ventana de contexto amplia.',
		rating: 4.4,
		price: 'Gratis / Pro $20/mes',
		url: 'https://claude.ai',
		image: IMAGES.chatgpt,
		imageAlt: 'Claude IA para documentos legales',
	},
];

export const faqItems = [
	{
		question: '¿Es legal usar IA en un despacho de abogados?',
		answer:
			'Sí, siempre que cumplas deontología profesional: verificar citas, proteger datos de clientes y no delegar el juicio profesional. En España, el abogado sigue siendo responsable del trabajo entregado.',
	},
	{
		question: '¿Cuál es la mejor IA para abogados en España?',
		answer:
			'Para derecho español, vLex es la opción más especializada. Para redacción de contratos en Word, Spellbook. Para tareas generales con presupuesto ajustado, ChatGPT Plus o Claude Pro con prompts bien diseñados.',
	},
	{
		question: '¿Puede la IA sustituir a un abogado?',
		answer:
			'No. La IA acelera investigación, borradores y revisión, pero la estrategia procesal, la negociación y la responsabilidad legal recaen siempre en el profesional titulado.',
	},
	{
		question: '¿Es seguro subir expedientes confidenciales a ChatGPT?',
		answer:
			'Para datos sensibles de clientes, usa planes empresariales con garantías de privacidad o herramientas jurídicas certificadas. Evita subir información identificable a versiones gratuitas sin revisar los términos.',
	},
];
