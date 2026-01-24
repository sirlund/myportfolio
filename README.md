# Nicolás Lundin - Product Designer Portfolio

Portfolio profesional de Lead UI Designer con 15 años de experiencia, construido con Astro.

## Tech Stack

- **Astro** - Framework de contenido estático con islands architecture
- **MDX** - Case studies con componentes interactivos
- **Three.js** - Hero 3D interactivo (code-split, solo carga en home)
- **TypeScript** - Type-safe
- **View Transitions** - Navegación fluida entre páginas

## Features

- **Bilingüe** - EN/ES con rutas (`/` para EN, `/es` para ES)
- **SEO optimizado** - og:image, hreflang, JSON-LD structured data
- **Performance** - Self-hosted fonts, imágenes WebP responsive, code-splitting
- **Content Collections** - Case studies en MDX con frontmatter tipado

## Estructura

```
src/
├── assets/images/       # Imágenes optimizadas por Astro
├── components/          # Componentes Astro
│   ├── case-studies/    # Componentes para MDX
│   └── icons/           # Sistema de iconos
├── content/             # Content Collections
│   ├── case-studies/    # MDX case studies (en/, es/)
│   └── pages/           # Contenido de páginas
├── i18n/                # Utilidades de internacionalización
├── layouts/             # BaseLayout, CaseStudyLayout
├── pages/               # Rutas ([...lang]/index, [slug])
├── scripts/             # Three.js bubble animation
└── styles/              # tokens.css, globals.css
```

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run deploy   # Deploy a GitHub Pages
```

## Deployment

El sitio se despliega automáticamente a GitHub Pages con `npm run deploy`.

Dominio: [nlund.in](https://nlund.in)

---

## Changelog

### 2025-01-19 - Performance & SEO Optimization

**Performance:**
- Code-split Three.js (469KB solo carga en home, no en case studies)
- Self-host Geist font (eliminado Google Fonts roundtrip)
- Imágenes WebP responsive con srcset optimizado
- Font preloading para weights críticos
- Fix LCP: título del hero sin animación delay

**SEO:**
- og:image meta tags (homepage + case studies)
- hreflang tags para EN↔ES
- JSON-LD Person schema structured data
- robots.txt habilitado + sitemap reference
- Google Analytics (GA4) restaurado con View Transitions

**Cleanup:**
- Eliminado Storybook/Chromatic (para recrear desde cero)
- Eliminados archivos de React no usados
- README actualizado para Astro

**Scores PageSpeed (mobile):**
- Performance: 98
- Accessibility: 100
- Best Practices: 100
