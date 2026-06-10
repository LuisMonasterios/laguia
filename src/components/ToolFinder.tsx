import { useState } from 'react';

type Answer = 'speed' | 'design' | 'team' | 'free';

interface Question {
	id: string;
	text: string;
	options: { value: Answer; label: string }[];
}

const questions: Question[] = [
	{
		id: 'priority',
		text: '¿Qué es lo más importante para ti?',
		options: [
			{ value: 'speed', label: 'Crear la presentación lo más rápido posible' },
			{ value: 'design', label: 'Diseño profesional y visual' },
			{ value: 'team', label: 'Colaborar con mi equipo' },
			{ value: 'free', label: 'Usar una herramienta gratuita' },
		],
	},
	{
		id: 'experience',
		text: '¿Cuánta experiencia tienes creando diapositivas?',
		options: [
			{ value: 'speed', label: 'Poca — quiero que la IA haga casi todo' },
			{ value: 'design', label: 'Media — me importa el resultado final' },
			{ value: 'team', label: 'Mucha — necesito integrarla en mi flujo de trabajo' },
			{ value: 'free', label: 'Cualquiera — solo probar opciones gratis' },
		],
	},
];

const recommendations: Record<Answer, { tool: string; reason: string; url: string }> = {
	speed: {
		tool: 'Gamma',
		reason: 'Genera presentaciones completas a partir de un prompt en minutos.',
		url: 'https://gamma.app',
	},
	design: {
		tool: 'Beautiful.ai',
		reason: 'Plantillas inteligentes que mantienen coherencia visual automáticamente.',
		url: 'https://www.beautiful.ai',
	},
	team: {
		tool: 'Canva',
		reason: 'Colaboración en tiempo real, comentarios y biblioteca compartida.',
		url: 'https://www.canva.com',
	},
	free: {
		tool: 'Google Slides + Gemini',
		reason: 'Gratis con cuenta Google y asistente IA integrado.',
		url: 'https://slides.google.com',
	},
};

export default function ToolFinder() {
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState<Answer[]>([]);
	const [done, setDone] = useState(false);

	const current = questions[step];
	const progress = ((step + (done ? 1 : 0)) / questions.length) * 100;

	function select(value: Answer) {
		const next = [...answers, value];
		setAnswers(next);
		if (step + 1 >= questions.length) {
			setDone(true);
		} else {
			setStep(step + 1);
		}
	}

	function reset() {
		setStep(0);
		setAnswers([]);
		setDone(false);
	}

	const result = done ? recommendations[answers[answers.length - 1] ?? 'speed'] : null;

	return (
		<div className="finder">
			<div className="finder__progress" aria-hidden="true">
				<div className="finder__progress-bar" style={{ width: `${progress}%` }} />
			</div>

			{!done && current && (
				<div className="finder__step">
					<p className="finder__step-label">
						Pregunta {step + 1} de {questions.length}
					</p>
					<h3 className="finder__question">{current.text}</h3>
					<div className="finder__options">
						{current.options.map((opt) => (
							<button
								key={opt.value + opt.label}
								type="button"
								className="finder__option"
								onClick={() => select(opt.value)}
							>
								{opt.label}
							</button>
						))}
					</div>
				</div>
			)}

			{done && result && (
				<div className="finder__result">
					<p className="finder__result-label">Nuestra recomendación</p>
					<h3 className="finder__result-tool">{result.tool}</h3>
					<p className="finder__result-reason">{result.reason}</p>
					<div className="finder__actions">
						<a href={result.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
							Probar {result.tool}
						</a>
						<button type="button" className="btn btn-secondary" onClick={reset}>
							Repetir quiz
						</button>
					</div>
				</div>
			)}

			<style>{`
				.finder {
					margin: 2rem 0;
					padding: 1.5rem;
					background: linear-gradient(135deg, #eef2ff 0%, #faf5ff 100%);
					border: 1px solid #c7d2fe;
					border-radius: var(--radius-lg);
				}
				.finder__progress {
					height: 4px;
					background: #e2e8f0;
					border-radius: 999px;
					margin-bottom: 1.5rem;
					overflow: hidden;
				}
				.finder__progress-bar {
					height: 100%;
					background: linear-gradient(90deg, var(--color-accent), var(--color-ia));
					transition: width 0.3s ease;
				}
				.finder__step-label,
				.finder__result-label {
					margin: 0 0 0.5rem;
					font-size: 0.8rem;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.05em;
					color: var(--color-ia);
				}
				.finder__question {
					margin: 0 0 1.25rem;
					font-size: 1.15rem;
				}
				.finder__options {
					display: grid;
					gap: 0.75rem;
				}
				.finder__option {
					padding: 1rem 1.15rem;
					text-align: left;
					font: inherit;
					font-weight: 500;
					background: white;
					border: 1px solid var(--color-border);
					border-radius: var(--radius-sm);
					cursor: pointer;
					transition: border-color 0.15s, box-shadow 0.15s;
				}
				.finder__option:hover {
					border-color: var(--color-accent);
					box-shadow: var(--shadow-sm);
				}
				.finder__result-tool {
					margin: 0 0 0.5rem;
					font-size: 1.75rem;
					background: linear-gradient(135deg, var(--color-accent), var(--color-ia));
					-webkit-background-clip: text;
					background-clip: text;
					color: transparent;
				}
				.finder__result-reason {
					margin: 0 0 1.25rem;
					color: var(--color-text-muted);
				}
				.finder__actions {
					display: flex;
					flex-wrap: wrap;
					gap: 0.75rem;
				}
			`}</style>
		</div>
	);
}
