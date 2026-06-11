# Configuración pendiente — La guIA

Checklist para dejar el sitio 100% operativo. Marca cada paso al completarlo.

---

## Estado rápido

| # | Qué | Quién lo hace | Estado |
|---|-----|---------------|--------|
| 1 | Variables de entorno en Vercel | Tú (5 min) | ⬜ Pendiente |
| 2 | OAuth App en GitHub (Panel CMS) | Tú (5 min) | ⬜ Pendiente |
| 3 | Push del código OAuth | Cursor / tú | ⬜ Pendiente |
| 4 | Google Search Console + sitemap | Tú (10 min) | ⬜ Pendiente |
| 5 | Google AdSense | Tú (cuando tengas tráfico) | ⬜ Opcional |
| 6 | Enlaces de afiliado reales | Tú (al unirte a programas) | ⬜ Opcional |
| 7 | Redes sociales en footer | Tú (cuando las tengas) | ⬜ Opcional |

---

## Paso 1 — Variables de entorno en Vercel

1. Entra en [vercel.com](https://vercel.com) → proyecto **laguia**
2. **Settings → Environment Variables**
3. Añade estas variables (marca **Production**, **Preview** y **Development**):

| Variable | Valor | Para qué |
|----------|-------|----------|
| `PUBLIC_ADMIN_PASSWORD` | Una clave segura que elijas | Login en `/admin/acceso/` |
| `GITHUB_CLIENT_ID` | Lo obtienes en el Paso 2 | Panel CMS |
| `GITHUB_CLIENT_SECRET` | Lo obtienes en el Paso 2 | Panel CMS |
| `SITE_URL` | `https://www.laguia.tech` | OAuth callback |
| `ALLOWED_ORIGINS` | `www.laguia.tech,laguia.tech` | Seguridad OAuth |

4. Tras guardar, ve a **Deployments → ⋯ → Redeploy** para que surtan efecto.

---

## Paso 2 — Crear OAuth App en GitHub

1. Abre [github.com/settings/developers](https://github.com/settings/developers)
2. **OAuth Apps → New OAuth App**
3. Rellena:

| Campo | Valor |
|-------|-------|
| **Application name** | `La guIA CMS` |
| **Homepage URL** | `https://www.laguia.tech/admin/` |
| **Authorization callback URL** | `https://www.laguia.tech/api/callback` |

> **Importante:** Si entras al admin por `laguia.tech` (sin www), añade también en GitHub una segunda OAuth App con callback `https://laguia.tech/api/callback`, **o** usa siempre `https://www.laguia.tech/admin/` para evitar conflictos de dominio.

4. Crea la app → **Generate a new client secret**
5. Copia **Client ID** y **Client Secret** → pégalos en Vercel (Paso 1)

> El repo `LuisMonasterios/laguia` debe ser tuyo y tu cuenta de GitHub debe tener permisos de escritura.

---

## Paso 3 — Subir el código y probar

```powershell
cd "C:\Users\Luis\Documents\DESARROLLOS PERSONALES\laguia"
git add .
git commit -m "Configurar OAuth Decap CMS y URLs www"
git push
```

Espera el deploy en Vercel (~1 min) y prueba:

| URL | Qué debería pasar |
|-----|-------------------|
| `/admin/acceso/` | Login con tu `PUBLIC_ADMIN_PASSWORD` → barra admin arriba |
| `/admin/` | Panel CMS → **Login with GitHub** → editar artículos |
| `/sitemap-index.xml` | Lista de URLs del sitio |
| Footer → **Sitemap XML** | Mismo sitemap |

**Editar sin CMS:** con la barra admin, **Editar artículo** abre GitHub directamente (no necesita OAuth).

---

## Paso 4 — Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console)
2. **Añadir propiedad** → `https://www.laguia.tech`
3. Verifica el dominio (DNS en Porkbun o meta tag HTML)
4. **Sitemaps → Añadir:** `https://www.laguia.tech/sitemap-index.xml`
5. **Inspección de URL** → solicita indexación del artículo principal

---

## Paso 5 — Google AdSense (cuando quieras monetizar)

1. [google.com/adsense](https://www.google.com/adsense) → solicitar cuenta
2. Necesitas contenido suficiente y tráfico mínimo
3. Tras aprobación, añadiremos el script de AdSense al layout

---

## Paso 6 — Enlaces de afiliado

Sustituye las URLs genéricas en `src/data/presentaciones.ts` cuando te acepten en:

- Gamma, Beautiful.ai, Tome, Canva, etc.

Formato recomendado: `?ref=laguia` o el parámetro que dé cada programa.

---

## Paso 7 — Redes sociales

Cuando tengas perfiles, edita `src/config.ts` → `SOCIAL_LINKS` con las URLs reales.

---

## Desarrollo local del CMS

Para editar en local con Decap CMS:

```powershell
# Terminal 1
npm run dev

# Terminal 2
npx decap-server
```

Abre `http://localhost:4321/admin/` — usa `local_backend` solo en local (no está en producción).

---

## Resumen de accesos admin

```
/admin/acceso/     → contraseña → barra admin en todo el sitio
/admin/            → Panel CMS visual (GitHub OAuth)
GitHub directo     → barra admin → "Editar artículo"
```

Contraseña por defecto (cámbiala en Vercel): `laguia-admin-2026`
