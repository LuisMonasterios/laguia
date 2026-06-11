import type { ToolRow } from '../components/ComparisonTable';

export const IMAGES = {
	hero: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=500&fit=crop',
	looka: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=260&fit=crop',
	brandmark: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=260&fit=crop',
	canva: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=260&fit=crop',
	logoai: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=260&fit=crop',
};

export const logosTools: ToolRow[] = [
	{
		name: 'Looka',
		price: 'Desde $20 (pago único)',
		freeTier: false,
		spanish: false,
		bestFor: 'Logos + identidad de marca completa',
		rating: 4.5,
		url: 'https://looka.com',
	},
	{
		name: 'Brandmark',
		price: 'Desde $25 (pago único)',
		freeTier: true,
		spanish: false,
		bestFor: 'Logos minimalistas con IA',
		rating: 4.4,
		url: 'https://brandmark.io',
	},
	{
		name: 'LogoAI',
		price: 'Desde $29 (pago único)',
		freeTier: false,
		spanish: false,
		bestFor: 'Variaciones y mockups incluidos',
		rating: 4.3,
		url: 'https://www.logoai.com',
	},
	{
		name: 'Canva',
		price: 'Gratis / Pro $12.99/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Logo + kit de marca editable',
		rating: 4.6,
		url: 'https://www.canva.com',
	},
	{
		name: 'Adobe Firefly',
		price: 'Gratis / desde $4.99/mes',
		freeTier: true,
		spanish: true,
		bestFor: 'Iconos e ilustraciones de marca',
		rating: 4.4,
		url: 'https://firefly.adobe.com',
	},
	{
		name: 'Designs.ai',
		price: 'Desde $19/mes',
		freeTier: false,
		spanish: false,
		bestFor: 'Logo, vídeo y voz en una suite',
		rating: 4.2,
		url: 'https://designs.ai',
	},
	{
		name: 'Wix Logo Maker',
		price: 'Gratis / desde $12',
		freeTier: true,
		spanish: true,
		bestFor: 'Emprendedores con web Wix',
		rating: 4.1,
		url: 'https://www.wix.com/logo/maker',
	},
	{
		name: 'Hatchful (Shopify)',
		price: 'Gratuito',
		freeTier: true,
		spanish: false,
		bestFor: 'Logos rápidos para e-commerce',
		rating: 4.0,
		url: 'https://www.shopify.com/tools/logo-maker',
	},
];

export const productList = [
	{
		rank: 1,
		name: 'Looka',
		description:
			'Genera logos, paleta de colores, tipografías y mockups de marca en un solo flujo.',
		rating: 4.5,
		price: 'Desde $20 (pago único)',
		url: 'https://looka.com',
		image: IMAGES.looka,
		imageAlt: 'Looka generador de logos con IA',
		badge: "Editor's choice",
		highlight: true,
	},
	{
		rank: 2,
		name: 'Canva',
		description: 'Logo Maker con IA, editable al instante y con plantillas para redes y papelería.',
		rating: 4.6,
		price: 'Gratis / Pro $12.99/mes',
		url: 'https://www.canva.com',
		image: IMAGES.canva,
		imageAlt: 'Canva Logo Maker inteligencia artificial',
	},
	{
		rank: 3,
		name: 'Brandmark',
		description: 'Logos limpios y modernos a partir de keywords. Previsualización gratuita.',
		rating: 4.4,
		price: 'Desde $25 (pago único)',
		url: 'https://brandmark.io',
		image: IMAGES.brandmark,
		imageAlt: 'Brandmark diseño de logo con IA',
	},
	{
		rank: 4,
		name: 'LogoAI',
		description: 'Incluye variaciones, favicon y mockups en tarjetas y redes sociales.',
		rating: 4.3,
		price: 'Desde $29 (pago único)',
		url: 'https://www.logoai.com',
		image: IMAGES.logoai,
		imageAlt: 'LogoAI creador de logos automático',
	},
	{
		rank: 5,
		name: 'Adobe Firefly',
		description: 'Ideal para iconos e ilustraciones de marca con licencia comercial clara.',
		rating: 4.4,
		price: 'Gratis / desde $4.99/mes',
		url: 'https://firefly.adobe.com',
		image: IMAGES.brandmark,
		imageAlt: 'Adobe Firefly diseño gráfico IA',
	},
];

export const faqItems = [
	{
		question: '¿Puedo usar un logo generado con IA comercialmente?',
		answer:
			'Depende de la herramienta y del plan. Looka, Canva Pro y Adobe Firefly ofrecen licencias comerciales en sus planes de pago. Lee siempre los términos antes de registrar la marca.',
	},
	{
		question: '¿Cuál es la mejor IA gratis para crear logos?',
		answer:
			'Canva y Hatchful (Shopify) permiten crear y descargar logos gratis. Brandmark muestra previews sin coste. Para uso comercial serio, invierte en un plan de pago.',
	},
	{
		question: '¿Un logo de IA es único?',
		answer:
			'Las IA combinan elementos existentes; otros usuarios pueden obtener diseños similares. Para marcas serias, personaliza el resultado o contrata un diseñador para refinarlo.',
	},
	{
		question: '¿Qué datos necesito para generar un logo con IA?',
		answer:
			'Normalmente: nombre de la marca, sector, estilo preferido (minimalista, moderno, vintage) y colores. Cuanto más específico seas, mejores resultados obtendrás.',
	},
];
