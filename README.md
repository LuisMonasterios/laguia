# La guIA — Blog de herramientas de IA

Blog estático con Astro, MDX y componentes interactivos. Desplegado en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
npm run preview
```

## Desplegar en Vercel + GitHub

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit: La guIA blog"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/laguia.git
git push -u origin main
```

### 2. Conectar Vercel

1. Entra en [vercel.com](https://vercel.com) → **Continue with GitHub**
2. **Add New Project** → importa el repo `laguia`
3. Framework: **Astro** (detectado automáticamente)
4. Deploy

### 3. Conectar dominio `laguia.tech` (Porkbun)

En Vercel: **Project → Settings → Domains** → añade `laguia.tech` y `www.laguia.tech`

En Porkbun DNS, añade:

| Tipo  | Host | Valor                |
|-------|------|----------------------|
| A     |      | `76.76.21.21`        |
| CNAME | www  | `cname.vercel-dns.com` |

*(Usa los valores exactos que muestre Vercel al añadir el dominio.)*

## Añadir un artículo nuevo

1. Crea `src/content/articulos/mi-articulo.mdx`
2. Añade frontmatter (title, description, pubDate, category, tags)
3. Importa componentes: `ComparisonTable`, `ToolFinder`, `ToolCard`, `FAQ`
4. Push → Vercel despliega automáticamente

## Estructura

```
src/
├── components/     # UI + React interactivo
├── content/articulos/  # Artículos MDX
├── data/           # Datos compartidos (tablas, FAQ)
├── layouts/        # BaseLayout, ArticleLayout
├── pages/          # Rutas
└── styles/         # CSS global
api/                # OAuth GitHub para Decap CMS (Vercel)
public/admin/       # Panel CMS
```

## Configuración pendiente

Ver **[CONFIGURACION.md](./CONFIGURACION.md)** — checklist completo con:

- Variables de entorno en Vercel (`PUBLIC_ADMIN_PASSWORD`, OAuth GitHub)
- OAuth App en GitHub para el Panel CMS
- Google Search Console + sitemap
- AdSense, afiliados y redes (opcional)
