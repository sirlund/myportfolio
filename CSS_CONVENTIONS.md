# CSS Conventions & Architecture

## Overview
Este proyecto usa **CSS Modules** para todos los componentes con convención **camelCase** para nombres de clases.

## Estructura de Archivos

```
src/
├── styles/
│   └── globals.css              # Solo variables CSS y estilos base
├── App.module.css               # Estilos del componente App
└── components/
    ├── base/                    # Componentes base reutilizables
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   └── index.ts
    │   └── ...
    ├── layout/                  # Componentes de layout
    │   ├── Header/
    │   └── Footer/
    ├── sections/                # Secciones de página
    │   ├── Hero/
    │   └── Work/
    └── case-studies/
        ├── CaseStudyLayout/     # Layout de case studies
        └── shared/              # Estilos compartidos entre case studies
            └── CaseStudyContent.module.css
```

## Convenciones de Nombres

### Clases CSS (camelCase)
```css
/* ✅ Correcto */
.heroSection { }
.navButton { }
.projectTitle { }
.contentWrapper { }

/* ❌ Incorrecto */
.hero-section { }
.nav-button { }
```

### Uso en componentes
```tsx
import styles from './Component.module.css';

<div className={styles.heroSection}>
  <h1 className={styles.projectTitle}>Title</h1>
</div>
```

### Data Attributes para Variantes
```tsx
// Component
<button
  className={styles.button}
  data-variant={variant}
>

// CSS
.button[data-variant="primary"] { }
.button[data-variant="secondary"] { }
```

## Variables CSS (globals.css)

### Spacing
```css
calc(var(--spacing, 0.25rem) * 4)  /* 1rem / 16px */
calc(var(--spacing, 0.25rem) * 8)  /* 2rem / 32px */
```

### Colors
- `--background` - Fondo principal
- `--foreground` - Texto principal
- `--muted` - Fondo secundario / elementos atenuados
- `--muted-foreground` - Texto secundario
- `--primary` - Color primario
- `--border` - Bordes

### Typography
- `--text-xs` a `--text-6xl` - Escala tipográfica
- `--font-hero-title`, `--font-section-title` - Semánticos

## Patrones Comunes

### Mobile-First Media Queries
```css
/* Mobile (default) */
.element {
  padding: 1rem;
}

/* Tablet (640px+) */
@media (width >= 40rem) {
  .element {
    padding: 2rem;
  }
}

/* Desktop (1024px+) */
@media (width >= 64rem) {
  .element {
    padding: 3rem;
  }
}
```

### Transiciones
```css
transition: all 0.3s;
transition-property: opacity, transform;
transition-duration: var(--default-transition-duration, 0.15s);
```

## Selectores ID

**Regla:** No usar selectores ID (`#id`) para estilos.

**Excepción:** Los IDs se usan solo para:
- Navegación por scroll (`#about`, `#work`, `#contact`)
- Anclajes de página

```tsx
// ✅ ID para navegación
<Section id="about" className={styles.aboutSection}>

// ❌ No usar #about en CSS
#about { }  /* Incorrecto */

// ✅ Usar className
.aboutSection { }  /* Correcto */
```

## Colores Hardcodeados

Los siguientes colores hardcodeados son **intencionales** y específicos del diseño:

### Branding de Proyectos (Work.module.css)
```css
.projectMindstudio { background-color: #255fb3; }  /* Mindstudio blue */
.projectTreez { background-color: #f1f6ea; }       /* Treez green */
.projectNacional { background-color: #dc2626; }    /* Nacional red */
```

### UI Específica
```css
/* Hero canvas background */
.canvasContainer { background-color: #fafafa; }

/* Mobile nav overlay text */
.mobileNavLink { color: #ffffff; }
```

## Imports

```tsx
// Componente
import styles from './Component.module.css';

// Estilos compartidos
import styles from '../shared/SharedStyles.module.css';
```

## Build & Hot Module Replacement

- ✅ Vite detecta cambios automáticamente
- ✅ HMR funciona con CSS Modules
- ✅ Nombres de clase hasheados en producción

---

**Última actualización:** Fase 3 de refactorización CSS
