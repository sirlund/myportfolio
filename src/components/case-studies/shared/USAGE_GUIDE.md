# Case Study Components - Guía de Uso Actualizada

Sistema modular y optimizado para crear case studies con mínimo esfuerzo.

---

## 🎯 Filosofía del Sistema

**Problema anterior:** Cada sección necesitaba su propio CSS, código repetitivo, layout duplicado.

**Solución actual:**
- **ContentSection**: Layout madre que maneja max-width, padding, margins automáticamente
- **Componentes visuales**: Cards, grids, layouts que se insertan dentro de ContentSection
- **RichText**: Renderiza texto con HTML y párrafos sin código repetitivo

---

## 📦 Componentes Principales

### 1. ContentSection (NEW!)

**El componente madre para TODO el contenido.**

Maneja automáticamente:
- Max-width (default: 64rem/1024px, wide: 72rem/1152px)
- Padding horizontal responsive
- Margin bottom entre secciones
- Typography para label + title

**Props:**
```typescript
{
  title?: string;           // Título h2
  label?: string;           // Pretitle (ej: "01. Context")
  width?: 'default' | 'wide'; // default = 64rem/1024px, wide = 72rem/1152px
  children: ReactNode;      // Contenido
  className?: string;       // CSS adicional
}
```

**Uso básico:**
```tsx
import { ContentSection } from '@/components/case-studies/shared';

// Sección de texto
<ContentSection title="Overview">
  <p>Contenido aquí...</p>
</ContentSection>

// Sección con label + title
<ContentSection label="01. Context" title="The problem">
  <p>Descripción...</p>
</ContentSection>

// Sección wide para grids
<ContentSection
  label="03. Objectives"
  title="Goals"
  width="wide"
>
  <CardGrid cards={...} />
</ContentSection>
```

---

### 2. RichText (NEW!)

**Renderiza texto con HTML + párrafos automáticamente.**

Reemplaza el código repetitivo:
```tsx
// ❌ ANTES (código repetitivo)
{content.split('\n\n').map((p, i) => (
  <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
))}

// ✅ AHORA (simple)
<RichText content={content} />
```

**Props:**
```typescript
{
  content: string;    // Texto con HTML y \n\n
  className?: string; // CSS adicional
}
```

**Uso:**
```tsx
import { RichText } from '@/components/case-studies/shared';

<ContentSection title="Overview">
  <RichText content={t.overview.content} />
</ContentSection>
```

---

### 3. TwoColumnLayout

Layout de 2 columnas (responsive: 1 col mobile → 2 col desktop).

**Props:**
```typescript
{
  columns: Array<{
    title: string;
    content: string; // Soporta HTML
  }>;
}
```

**Uso:**
```tsx
<ContentSection label="01. Context" title="The challenge" width="wide">
  <p style={{ marginBottom: '2rem' }}>Intro text...</p>
  <TwoColumnLayout columns={t.sections.context.twoColumn.columns} />
</ContentSection>
```

---

### 4. CardGrid

Grid responsive de cards con iconos.

**Props:**
```typescript
{
  cards: Array<{
    icon?: ReactNode;
    title: string;
    description: string;
  }>;
}
```

**Uso:**
```tsx
import { Target, Layers, Zap } from 'lucide-react';

<ContentSection label="03. Objectives" title="Goals" width="wide">
  <CardGrid
    cards={[
      {
        icon: <Target size={32} />,
        title: "Goal 1",
        description: "Description..."
      },
      {
        icon: <Layers size={32} />,
        title: "Goal 2",
        description: "Description..."
      }
    ]}
  />
</ContentSection>
```

**Iconos recomendados (Lucide):**
- `Target` - Objetivos
- `Layers` - Arquitectura
- `GitBranch` - Procesos
- `Zap` - Performance
- `Users` - Equipo
- `TrendingUp` - Resultados

---

### 5. DiagramContainer

Contenedor destacado para diagramas/procesos.

**Props:**
```typescript
{
  title?: string;
  children: ReactNode;
}
```

**Uso:**
```tsx
<ContentSection label="04. Process" title="Implementation">
  <DiagramContainer title="7-step process">
    <div>
      {/* Tu contenido aquí */}
    </div>
  </DiagramContainer>
</ContentSection>
```

---

### 6. ThreeColumnLayout

Layout de 3 columnas (1 col mobile → 2 col tablet → 3 col desktop).

**Props:**
```typescript
{
  columns: Array<{
    title: string;
    content: string;
  }>;
}
```

**Uso:**
```tsx
<ContentSection width="wide">
  <ThreeColumnLayout columns={conceptsData} />
</ContentSection>
```

---

## 🏗️ CaseStudyLayout (Actualizado)

**Props simplificadas:**
```typescript
{
  title: string;
  subtitle: string;
  heroImage: string;
  details: ProjectDetail[];
  impactStats?: ImpactStat[]; // Opcional
  children: ReactNode;          // ← Todo el contenido va aquí
}
```

**Ya NO necesita:**
- ❌ `overview` prop
- ❌ `introduction` prop
- ❌ `sections` array

**Ahora todo va en children usando ContentSection.**

---

## 📝 Ejemplo Completo - MindStudio

```tsx
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import {
  ContentSection,
  RichText,
  TwoColumnLayout,
  CardGrid
} from '@/components/case-studies/shared';
import { Target, Layers, GitBranch, Zap } from 'lucide-react';

export function MindStudioCaseStudy() {
  const t = useCaseStudyTranslation('mindstudio');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgMindstudio}
      impactStats={t.impactStats}
      details={t.details}
    >
      {/* Overview - Texto simple */}
      <ContentSection title={t.overview.title}>
        <RichText content={t.overview.content} />
      </ContentSection>

      {/* Introduction - Texto simple */}
      <ContentSection title={t.introduction.title}>
        <RichText content={t.introduction.content} />
      </ContentSection>

      {/* 01. Context - Two columns (wide) */}
      <ContentSection
        label={t.sections.context.label}
        title={t.sections.context.title}
        width="wide"
      >
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          {t.sections.context.intro}
        </p>
        <TwoColumnLayout columns={t.sections.context.twoColumn.columns} />
      </ContentSection>

      {/* 02. Challenge - Texto */}
      <ContentSection
        label={t.sections.challenge.label}
        title={t.sections.challenge.title}
      >
        <RichText content={t.sections.challenge.content} />
      </ContentSection>

      {/* 03. Objectives - Card grid (wide) */}
      <ContentSection
        label={t.sections.objectives.label}
        title={t.sections.objectives.title}
        width="wide"
      >
        <CardGrid
          cards={t.sections.objectives.cards.map((card, index) => ({
            icon: [
              <Target size={32} />,
              <Layers size={32} />,
              <GitBranch size={32} />,
              <Zap size={32} />
            ][index],
            title: card.title,
            description: card.description
          }))}
        />
      </ContentSection>

      {/* Más secciones... */}
    </CaseStudyLayout>
  );
}
```

---

## 🎨 Cuándo Usar Cada Width

### `width="default"` (64rem / 1024px) - **Usar por defecto**
- ✅ Texto narrativo (Overview, Challenge, Reflection)
- ✅ Listas de texto
- ✅ Contenido para lectura
- ✅ TwoColumnLayout
- ✅ CardGrid
- ✅ La mayoría del contenido

### `width="wide"` (72rem / 1152px) - **Casos especiales**
- ⚠️ Solo cuando necesites más ancho que 1024px
- ⚠️ Grids muy amplios con muchas columnas
- ⚠️ Casos muy específicos

---

## ✅ Beneficios del Nuevo Sistema

### Antes:
```tsx
// ❌ Código repetitivo
<motion.div className={styles.overview}>
  <div className={styles.overviewContainer}>
    <h2>{overview.title}</h2>
    <div className={styles.overviewContent}>
      {overview.content.split('\n\n').map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
      ))}
    </div>
  </div>
</motion.div>

// Y necesitas CSS específico en CaseStudyLayout.module.css:
.overview { }
.overviewContainer { }
.overviewContent { }
```

### Ahora:
```tsx
// ✅ Simple y declarativo
<ContentSection title={t.overview.title}>
  <RichText content={t.overview.content} />
</ContentSection>

// Sin CSS adicional necesario ✨
```

**Resultados:**
- 🎯 **Menos código**: ~60% menos líneas por case study
- 🧩 **Más modular**: Componentes reutilizables
- 🎨 **Menos CSS**: ContentSection maneja todo el layout
- ✏️ **Más fácil de editar**: Solo cambias contenido en translations
- 🚀 **Más rápido**: Crear nuevos case studies es trivial

---

## 🔄 Migración de Case Studies Existentes

### Paso 1: Actualizar CaseStudyLayout props
```tsx
// ❌ ANTES
<CaseStudyLayout
  overview={t.overview}
  introduction={t.introduction}
  sections={sectionsArray}
/>

// ✅ AHORA
<CaseStudyLayout {...heroProps}>
  {/* contenido aquí */}
</CaseStudyLayout>
```

### Paso 2: Convertir overview/introduction
```tsx
// ❌ ANTES: prop del layout
overview={t.overview}

// ✅ AHORA: ContentSection hijo
<ContentSection title={t.overview.title}>
  <RichText content={t.overview.content} />
</ContentSection>
```

### Paso 3: Convertir sections array
```tsx
// ❌ ANTES: array de objetos
sections={[
  {
    label: "01. Context",
    title: "The problem",
    content: "..."
  }
]}

// ✅ AHORA: ContentSection componentes
<ContentSection label="01. Context" title="The problem">
  <RichText content={t.sections.context.content} />
</ContentSection>
```

---

## 📚 Recursos

- **Lucide Icons**: https://lucide.dev/icons/
- **ContentSection CSS**: `src/components/case-studies/shared/ContentSection.module.css`
- **Ejemplo completo**: `src/components/case-studies/published/MindStudioCaseStudy.tsx`

---

**Última actualización:** Noviembre 2025
**Versión:** 2.0 (Sistema modular)
