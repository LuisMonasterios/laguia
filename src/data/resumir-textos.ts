import type { ToolRow } from '../components/ComparisonTable';
import { ARTICLE_IMAGES as IMG } from '../config/images';

export const IMAGES = {
	hero: IMG.resumirHero,
	notebooklm: IMG.resumirBooks,
	quillbot: IMG.resumirWriting,
	claude: IMG.aiTech,
};

export const resumirTools: ToolRow[] = [
	{
		name: 'NotebookLM',
		price: 'Gratuito',
		freeTier: true,
		spanish: true,
		bestFor: 'Resumir PDFs y documentos largos',
		rating: 4.7,
		url: 'https://notebooklm.google.com',
	},
	{
		name: 'Claude',
		price: 'Gratis / Pro $20/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Textos extensos y análisis profundo',
		rating: 4.6,
		url: 'https://claude.ai',
	},
	{
		name: 'ChatGPT',
		price: 'Gratis / Plus $20/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Resúmenes rápidos y versátiles',
		rating: 4.5,
		url: 'https://chat.openai.com',
	},
	{
		name: 'QuillBot',
		price: 'Gratis / Premium $9.95/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Parafrasear y resumir párrafos',
		rating: 4.3,
		url: 'https://quillbot.com',
	},
	{
		name: 'Scholarcy',
		price: 'Gratis / Pro $9.99/mes',
		freeTier: true,
		spanish: false,
		bestFor: 'Papers académicos y estudios',
		rating: 4.4,
		url: 'https://www.scholarcy.com',
	},
	{
		name: 'Wordtune Read',
		price: 'Gratis / Plus $9.99/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Artículos web y blogs',
		rating: 4.2,
		url: 'https://www.wordtune.com/read',
	},
	{
		name: 'TLDR This',
		price: 'Gratis / Pro $4/mes',
		freeTier: true,
		spanish: false,
		bestFor: 'URLs y artículos online',
		rating: 4.1,
		url: 'https://tldrthis.com',
	},
	{
		name: 'Summarize.tech',
		price: 'Gratuito',
		freeTier: true,
		spanish: false,
		bestFor: 'Resumir vídeos de YouTube',
		rating: 4.0,
		url: 'https://www.summarize.tech',
	},
];

export const productList = [
	{
		rank: 1,
		name: 'NotebookLM',
		description:
			'Sube PDFs, informes o apuntes y obtén resúmenes, FAQs y mapas mentales. Gratis y muy preciso.',
		rating: 4.7,
		price: 'Gratuito',
		url: 'https://notebooklm.google.com',
		image: IMAGES.notebooklm,
		imageAlt: 'NotebookLM de Google para resumir documentos',
		badge: "Editor's choice",
		highlight: true,
	},
	{
		rank: 2,
		name: 'Claude',
		description: 'Resume documentos de cientos de páginas manteniendo contexto y matices.',
		rating: 4.6,
		price: 'Gratis / Pro $20/mes',
		url: 'https://claude.ai',
		image: IMAGES.claude,
		imageAlt: 'Claude resumiendo textos largos',
	},
	{
		rank: 3,
		name: 'ChatGPT',
		description: 'La opción más conocida: pega texto, sube archivos y pide el formato que necesites.',
		rating: 4.5,
		price: 'Gratis / Plus $20/mes',
		url: 'https://chat.openai.com',
		image: IMAGES.claude,
		imageAlt: 'ChatGPT para resumir textos',
	},
	{
		rank: 4,
		name: 'QuillBot',
		description: 'Resumidor integrado en editor: ideal para emails, informes cortos y parafraseo.',
		rating: 4.3,
		price: 'Gratis / Premium $9.95/mes',
		url: 'https://quillbot.com',
		image: IMAGES.quillbot,
		imageAlt: 'QuillBot resumidor de textos',
	},
	{
		rank: 5,
		name: 'Scholarcy',
		description: 'Extrae hallazgos clave de papers científicos en segundos.',
		rating: 4.4,
		price: 'Gratis / Pro $9.99/mes',
		url: 'https://www.scholarcy.com',
		image: IMAGES.notebooklm,
		imageAlt: 'Scholarcy resumen de artículos académicos',
	},
];

export const faqItems = [
	{
		question: '¿Cuál es la mejor IA gratis para resumir textos?',
		answer:
			'NotebookLM es la mejor opción gratuita para documentos y PDFs. ChatGPT y Claude también tienen planes free muy capaces para textos pegados directamente.',
	},
	{
		question: '¿Puedo resumir un PDF de 200 páginas?',
		answer:
			'Sí. NotebookLM y Claude Pro manejan documentos extensos. Divide el archivo en secciones si usas la versión gratuita con límites de contexto.',
	},
	{
		question: '¿Los resúmenes de IA son fiables?',
		answer:
			'Son un excelente primer borrador, pero pueden omitir matices o inventar detalles. Revisa siempre cifras, nombres y conclusiones críticas antes de usar el resumen profesionalmente.',
	},
	{
		question: '¿Qué IA resume vídeos de YouTube?',
		answer:
			'Summarize.tech genera resúmenes de vídeos por URL. También puedes usar NotebookLM subiendo la transcripción o ChatGPT con el texto del vídeo.',
	},
];
