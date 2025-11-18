# CSS Conventions & Architecture

## Overview

This project uses **CSS Modules** for all components with **camelCase** naming convention. The styling approach prioritizes specificity over BEM-style verbosity, leveraging CSS Modules' automatic scoping.

## File Structure

```
src/
├── styles/
│   └── globals.css                  # CSS variables, base styles, typography
│
├── App.module.css                   # App-level styles
│
└── components/
    ├── base/                        # Base components
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   ├── Button.stories.tsx
    │   │   └── index.ts
    │   └── ...
    │
    ├── layout/                      # Layout components
    │   ├── Header/
    │   │   ├── Header.tsx
    │   │   ├── Header.module.css
    │   │   └── index.ts
    │   └── Footer/
    │
    ├── sections/                    # Page sections
    │   ├── Hero/
    │   │   ├── Hero.tsx
    │   │   ├── Hero.module.css
    │   │   └── index.ts
    │   └── Work/
    │
    └── case-studies/
        ├── published/               # Active case studies
        ├── _drafts/                 # WIP case studies
        ├── CaseStudyLayout/         # Shared layout
        └── shared/                  # Shared styles
            └── CaseStudy.css        # Cross-case-study styles
```

## Naming Conventions

### Class Names (camelCase)

```css
/* ✅ Correct - camelCase */
.heroSection { }
.navButton { }
.projectTitle { }
.contentWrapper { }
.caseStudyHero { }

/* ❌ Incorrect - kebab-case */
.hero-section { }
.nav-button { }
```

### Usage in Components

```tsx
import styles from './Component.module.css';

function Component() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.projectTitle}>Title</h1>
      <button className={styles.navButton}>Click</button>
    </div>
  );
}
```

### Variants with Data Attributes

Instead of creating multiple class names, use data attributes for component variants:

```tsx
// Component
interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'link';
}

function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button
      className={styles.button}
      data-variant={variant}
    >
      {children}
    </button>
  );
}
```

```css
/* CSS - Base styles */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

/* Variants via data attributes */
.button[data-variant="primary"] {
  background-color: var(--primary);
  color: white;
}

.button[data-variant="ghost"] {
  background-color: transparent;
  border: 1px solid var(--border);
}

.button[data-variant="link"] {
  background-color: transparent;
  padding: 0;
  text-decoration: underline;
}
```

## Import Patterns

### ✅ Use @/ Path Aliases

```tsx
// Component imports
import { Button, Text } from '@/components/base';
import { useLanguage } from '@/contexts';
import { translations } from '@/translations';

// CSS Module imports (relative paths)
import styles from './Component.module.css';
```

### ❌ Avoid Deep Relative Paths

```tsx
// Don't do this
import { Button } from '../../../components/base/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

// Do this instead
import { Button } from '@/components/base';
import { useLanguage } from '@/contexts';
```

**Note:** CSS Modules should always use relative paths since they're co-located with components.

## CSS Variables (globals.css)

### Color System

```css
/* Light mode (default) */
--background: #fafafa;
--foreground: #171717;
--muted: #f5f5f5;
--muted-foreground: #737373;
--primary: #1e1e1e;
--border: #e5e5e5;

/* Dark mode */
@media (prefers-color-scheme: dark) {
  --background: #0a0a0a;
  --foreground: #ededed;
  --muted: #1a1a1a;
  --muted-foreground: #a3a3a3;
  --primary: #fafafa;
  --border: #262626;
}
```

### Typography Scale

```css
/* Base scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Semantic sizes (mobile-first, responsive) */
--font-hero-title: var(--text-4xl);
--font-section-title: var(--text-3xl);
--font-text-lg: var(--text-lg);
--font-text-md: var(--text-base);
--font-text-sm: var(--text-sm);
```

### Spacing System

```css
/* Use calc() for spacing multiples */
calc(var(--spacing, 0.25rem) * 4)   /* 1rem / 16px */
calc(var(--spacing, 0.25rem) * 8)   /* 2rem / 32px */
calc(var(--spacing, 0.25rem) * 12)  /* 3rem / 48px */
calc(var(--spacing, 0.25rem) * 16)  /* 4rem / 64px */
```

## Responsive Design

### Mobile-First Breakpoints

```css
/* Mobile (default - no media query needed) */
.element {
  padding: 1rem;
  font-size: var(--text-base);
}

/* Tablet: 640px / 40rem */
@media (width >= 40rem) {
  .element {
    padding: 1.5rem;
    font-size: var(--text-lg);
  }
}

/* Desktop Small: 768px / 48rem */
@media (width >= 48rem) {
  .element {
    padding: 2rem;
  }
}

/* Desktop Medium: 1024px / 64rem */
@media (width >= 64rem) {
  .element {
    padding: 3rem;
    font-size: var(--text-xl);
  }
}

/* Desktop Large: 1280px / 80rem */
@media (width >= 80rem) {
  .element {
    max-width: 1200px;
  }
}
```

### Standard Breakpoint Usage

```css
/* ✅ Prefer range syntax (modern browsers) */
@media (width >= 64rem) { }

/* ✅ Also acceptable (wider support) */
@media (min-width: 64rem) { }

/* ❌ Avoid max-width (not mobile-first) */
@media (max-width: 64rem) { }
```

## Patterns & Best Practices

### Layout Patterns

**Container Pattern:**
```css
.container {
  width: 100%;
  max-width: calc(var(--spacing) * 300); /* 75rem / 1200px */
  margin: 0 auto;
  padding: 0 calc(var(--spacing) * 6); /* 1.5rem / 24px */
}

@media (width >= 48rem) {
  .container {
    padding: 0 calc(var(--spacing) * 12); /* 3rem / 48px */
  }
}
```

**Section Pattern:**
```css
.section {
  padding: calc(var(--spacing) * 16) 0; /* 4rem top/bottom */
}

@media (width >= 64rem) {
  .section {
    padding: calc(var(--spacing) * 24) 0; /* 6rem top/bottom */
  }
}
```

### Transitions & Animations

```css
/* Standard transitions */
.element {
  transition: all 0.2s ease-in-out;
}

/* Specific property transitions */
.element {
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

/* Using CSS variables */
.element {
  transition-duration: var(--default-transition-duration, 0.15s);
}
```

### Hover States

```css
.button {
  background-color: var(--primary);
  transform: scale(1);
  transition: all 0.2s;
}

.button:hover {
  background-color: var(--primary-hover);
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.98);
}
```

## Specificity Strategy

### ✅ Leverage CSS Modules Scoping

```css
/* Instead of BEM like .card__header--primary */
.card { }
.header { }
.primary { }

/* Use specificity */
.card .header { }
.card.primary .header { }
```

### Combine with Data Attributes

```css
/* Base component */
.button { }

/* Size variants */
.button[data-size="small"] { }
.button[data-size="large"] { }

/* State variants */
.button[data-state="active"] { }
.button[data-state="disabled"] { }
```

## Special Cases

### ID Selectors

**Rule:** Never use ID selectors (`#id`) for styling.

**Exception:** IDs are only for:
- Navigation anchors (`#about`, `#work`, `#contact`)
- JavaScript hooks (if needed)
- Accessibility (ARIA relationships)

```tsx
// ✅ ID for navigation
<Section id="about" className={styles.aboutSection}>

// ❌ Don't style with ID
#about { color: red; }  /* Never do this */

// ✅ Style with class
.aboutSection { color: var(--foreground); }
```

### Hardcoded Colors

The following hardcoded colors are **intentional** and represent specific branding:

**Project Branding (Work.module.css):**
```css
.projectMindstudio {
  background-color: #255fb3;  /* MindStudio brand blue */
}

.projectTreez {
  background-color: #f1f6ea;  /* Treez brand green */
}

.projectNacional {
  background-color: #dc2626;  /* Nacional brand red */
}
```

**UI Specific Colors:**
```css
/* Hero canvas background (matches Three.js config) */
.canvasContainer {
  background-color: #fafafa;
}

/* Mobile nav text (overlay requires specific contrast) */
.mobileNavLink {
  color: #ffffff;
}
```

**Guideline:** Only hardcode colors when:
1. They represent external brand colors
2. They're tightly coupled to specific UI requirements
3. They need to match non-CSS values (e.g., Three.js config)

Otherwise, always use CSS custom properties.

## Code Organization

### Component CSS Structure

```css
/* 1. Component base styles */
.component {
  /* Layout */
  display: flex;

  /* Box model */
  padding: 1rem;
  margin: 0;

  /* Typography */
  font-size: var(--text-base);

  /* Visual */
  background-color: var(--background);
  border: 1px solid var(--border);

  /* Effects */
  transition: all 0.2s;
}

/* 2. Nested elements */
.component .header { }
.component .content { }
.component .footer { }

/* 3. Variants */
.component[data-variant="primary"] { }
.component[data-variant="secondary"] { }

/* 4. States */
.component:hover { }
.component:focus { }
.component:active { }

/* 5. Responsive */
@media (width >= 48rem) {
  .component {
    padding: 2rem;
  }
}
```

### Import Order in Components

```tsx
// 1. React & external libraries
import { useState } from 'react';
import { motion } from 'motion/react';

// 2. Internal imports (@/ aliases)
import { Button, Text } from '@/components/base';
import { useLanguage } from '@/contexts';

// 3. Relative imports (same directory)
import { HelperComponent } from './HelperComponent';

// 4. CSS Module (always last)
import styles from './Component.module.css';
```

## Build & Development

### Hot Module Replacement (HMR)

- ✅ Vite automatically detects CSS changes
- ✅ HMR works seamlessly with CSS Modules
- ✅ Changes reflect immediately in browser

### Production Build

- ✅ Class names are hashed in production
- ✅ Unused styles are eliminated
- ✅ CSS is minified and optimized
- ✅ Automatic vendor prefixing

**Example output:**
```css
/* Development */
.button { }

/* Production */
._button_1a2b3c { }
```

## Common Patterns Reference

### Card Component

```css
.card {
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transform: translateY(-2px);
}
```

### Flex Layout

```css
.flexContainer {
  display: flex;
  gap: calc(var(--spacing) * 4);
  flex-wrap: wrap;
}

.flexContainer .item {
  flex: 1 1 auto;
  min-width: 250px;
}
```

### Grid Layout

```css
.gridContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--spacing) * 8);
}
```

## Troubleshooting

### Styles Not Applying

1. Check CSS Module import: `import styles from './Component.module.css'`
2. Verify className usage: `className={styles.className}`
3. Ensure file ends with `.module.css`
4. Check for typos in class names

### Specificity Issues

1. Use data attributes instead of multiple classes
2. Leverage CSS Modules automatic scoping
3. Avoid `!important` (use data attributes for overrides)

### HMR Not Working

1. Ensure file is saved
2. Check Vite dev server is running
3. Verify file is in `src/` directory
4. Clear browser cache if needed

---

**Last Updated:** January 2025 - Post-restructure with @/ aliases
