import { useMemo, useState } from 'react';

export interface ToolRow {
	name: string;
	price: string;
	freeTier: boolean;
	spanish: boolean;
	bestFor: string;
	rating: number;
	url: string;
}

interface Props {
	tools: ToolRow[];
}

export default function ComparisonTable({ tools }: Props) {
	const [freeOnly, setFreeOnly] = useState(false);
	const [spanishOnly, setSpanishOnly] = useState(false);
	const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating');

	const filtered = useMemo(() => {
		let result = [...tools];
		if (freeOnly) result = result.filter((t) => t.freeTier);
		if (spanishOnly) result = result.filter((t) => t.spanish);
		result.sort((a, b) =>
			sortBy === 'rating' ? b.rating - a.rating : a.name.localeCompare(b.name, 'es'),
		);
		return result;
	}, [tools, freeOnly, spanishOnly, sortBy]);

	return (
		<div className="comparison">
			<div className="comparison__filters">
				<label className="comparison__filter">
					<input
						type="checkbox"
						checked={freeOnly}
						onChange={(e) => setFreeOnly(e.target.checked)}
					/>
					Solo plan gratuito
				</label>
				<label className="comparison__filter">
					<input
						type="checkbox"
						checked={spanishOnly}
						onChange={(e) => setSpanishOnly(e.target.checked)}
					/>
					Interfaz en español
				</label>
				<label className="comparison__sort">
					Ordenar:
					<select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'rating' | 'name')}>
						<option value="rating">Mejor valoración</option>
						<option value="name">Nombre A-Z</option>
					</select>
				</label>
			</div>

			<div className="comparison__table-wrap">
				<table className="comparison__table">
					<thead>
						<tr>
							<th>Herramienta</th>
							<th>Precio</th>
							<th>Gratis</th>
							<th>Español</th>
							<th>Ideal para</th>
							<th>Nota</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{filtered.map((tool) => (
							<tr key={tool.name}>
								<td data-label="Herramienta">
									<strong>{tool.name}</strong>
								</td>
								<td data-label="Precio">{tool.price}</td>
								<td data-label="Gratis">{tool.freeTier ? '✓' : '—'}</td>
								<td data-label="Español">{tool.spanish ? '✓' : '—'}</td>
								<td data-label="Ideal para">{tool.bestFor}</td>
								<td data-label="Nota">
									<span className="comparison__rating">{tool.rating.toFixed(1)}</span>
								</td>
								<td data-label="Enlace">
									<a href={tool.url} target="_blank" rel="noopener noreferrer">
										Visitar
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{filtered.length === 0 && (
				<p className="comparison__empty">Ninguna herramienta coincide con los filtros.</p>
			)}

			<style>{`
				.comparison {
					margin: 2rem 0;
				}
				.comparison__filters {
					display: flex;
					flex-wrap: wrap;
					gap: 1rem 1.5rem;
					align-items: center;
					margin-bottom: 1rem;
					padding: 1rem;
					background: var(--color-accent-soft);
					border-radius: var(--radius-md);
				}
				.comparison__filter,
				.comparison__sort {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					font-size: 0.9rem;
					font-weight: 500;
				}
				.comparison__sort select {
					padding: 0.35rem 0.5rem;
					border-radius: var(--radius-sm);
					border: 1px solid var(--color-border);
					font: inherit;
				}
				.comparison__table-wrap {
					overflow-x: auto;
					border: 1px solid var(--color-border);
					border-radius: var(--radius-md);
					background: var(--color-surface);
				}
				.comparison__table {
					width: 100%;
					border-collapse: collapse;
					font-size: 0.92rem;
				}
				.comparison__table th,
				.comparison__table td {
					padding: 0.85rem 1rem;
					text-align: left;
					border-bottom: 1px solid var(--color-border);
				}
				.comparison__table th {
					background: #f1f5f9;
					font-weight: 600;
					font-size: 0.8rem;
					text-transform: uppercase;
					letter-spacing: 0.03em;
					color: var(--color-text-muted);
				}
				.comparison__table tr:last-child td {
					border-bottom: none;
				}
				.comparison__rating {
					display: inline-block;
					padding: 0.15rem 0.5rem;
					border-radius: 999px;
					background: #ecfdf5;
					color: #047857;
					font-weight: 700;
				}
				.comparison__empty {
					text-align: center;
					padding: 2rem;
					color: var(--color-text-muted);
				}
				@media (max-width: 768px) {
					.comparison__table thead {
						display: none;
					}
					.comparison__table tr {
						display: block;
						padding: 1rem;
						border-bottom: 1px solid var(--color-border);
					}
					.comparison__table td {
						display: flex;
						justify-content: space-between;
						padding: 0.35rem 0;
						border: none;
					}
					.comparison__table td::before {
						content: attr(data-label);
						font-weight: 600;
						color: var(--color-text-muted);
						margin-right: 1rem;
					}
				}
			`}</style>
		</div>
	);
}
