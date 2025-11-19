# Case Study Components - Guía de Uso

Componentes reutilizables inspirados en el estilo visual ANZ para crear case studies con mejor jerarquía tipográfica y ritmo visual.

## 🎨 Componentes Disponibles

### 1. TwoColumnLayout

Layout de 2 columnas (responsivo: 1 columna mobile, 2 columnas desktop) ideal para presentar Challenge | Solution o cualquier contenido que se beneficie de comparación lado a lado.

**Uso:**
```tsx
import { TwoColumnLayout } from '@/components/case-studies/shared';

<TwoColumnLayout
  columns={[
    {
      title: "El desafío",
      content: "<strong>Problema principal</strong><br/>Descripción del problema..."
    },
    {
      title: "La solución",
      content: "<strong>Enfoque adoptado</strong><br/>Cómo lo resolvimos..."
    }
  ]}
/>
```

**Características:**
- Mobile: 1 columna (stack vertical)
- Desktop (≥1024px): 2 columnas lado a lado
- Gap responsive entre columnas
- Soporta HTML en content

---

### 2. CardGrid + Card

Grid responsivo de cards con iconos, ideal para hipótesis, objetivos, features, o conceptos.

**Uso:**
```tsx
import { CardGrid } from '@/components/case-studies/shared';
import { Target, Layers } from 'lucide-react';

<CardGrid
  cards={[
    {
      icon: <Target size={32} />,
      title: "Objetivo 1",
      description: "Descripción del primer objetivo..."
    },
    {
      icon: <Layers size={32} />,
      title: "Objetivo 2",
      description: "Descripción del segundo objetivo..."
    }
  ]}
/>
```

**Características:**
- Mobile: 1 columna
- Tablet (≥640px): 2 columnas
- Desktop: 2 columnas (con gap aumentado)
- Hover effect (translateY)
- Fondo muted con border-radius
- Iconos opcionales (usa Lucide React)

**Iconos recomendados (Lucide):**
- `Target` - Objetivos
- `Layers` - Arquitectura/Capas
- `GitBranch` - Procesos/Flujos
- `Zap` - Performance/Velocidad
- `Users` - Usuarios/Equipo
- `TrendingUp` - Resultados/Crecimiento

---

### 3. DiagramContainer

Contenedor con fondo destacado para diagramas, procesos, o contenido que necesite resaltar visualmente.

**Uso:**
```tsx
import { DiagramContainer } from '@/components/case-studies/shared';

<DiagramContainer title="Proceso de implementación">
  <div>
    {/* Tu contenido aquí: puede ser texto, imágenes, SVGs, etc. */}
    <p><strong>Paso 1:</strong> Descripción...</p>
    <p><strong>Paso 2:</strong> Descripción...</p>
  </div>
</DiagramContainer>
```

**Características:**
- Fondo muted (var(--muted))
- Padding generoso y responsive
- Border-radius
- Título opcional centrado
- Centro el contenido por defecto (text-align: center)

**Tip:** Para contenido alineado a la izquierda, wrap tu contenido en un div con `textAlign: 'left'`:
```tsx
<DiagramContainer title="Mi diagrama">
  <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
    {/* contenido alineado a izquierda */}
  </div>
</DiagramContainer>
```

---

### 4. ThreeColumnLayout

Layout de 3 columnas (responsivo: 1 col mobile → 2 col tablet → 3 col desktop) para conceptos, features, o comparaciones.

**Uso:**
```tsx
import { ThreeColumnLayout } from '@/components/case-studies/shared';

<ThreeColumnLayout
  columns={[
    {
      title: "Concepto 1",
      content: "Descripción del primer concepto..."
    },
    {
      title: "Concepto 2",
      content: "Descripción del segundo concepto..."
    },
    {
      title: "Concepto 3",
      content: "Descripción del tercer concepto..."
    }
  ]}
/>
```

**Características:**
- Mobile: 1 columna
- Tablet (≥768px): 2 columnas
- Desktop Large (≥1280px): 3 columnas
- Gap responsive
- Soporta HTML en content

---

## 📏 Numeración de Secciones

Para agregar numeración estilo "01. SECTION NAME":

```tsx
sections={[
  {
    number: "01.",  // ← Agregar esta propiedad
    title: "El problema",
    content: "..."
  },
  {
    number: "02.",
    title: "Objetivos",
    content: "..."
  }
]}
```

**Estilo aplicado:**
- Uppercase
- Letra pequeña (0.875rem)
- Color muted
- Letter-spacing amplio (0.1em)
- Margen inferior

---

## 💡 Ejemplo Completo

Aquí un ejemplo de cómo usar todos los componentes juntos:

```tsx
import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout';
import { TwoColumnLayout, CardGrid, DiagramContainer } from '@/components/case-studies/shared';
import { Target, Layers, GitBranch, Zap } from 'lucide-react';

export function MyCaseStudy() {
  return (
    <CaseStudyLayout
      title="Mi Proyecto"
      subtitle="Descripción breve"
      heroImage={imgHero}
      sections={[
        {
          number: "01.",
          title: "El problema",
          content: (
            <>
              <p>Introducción al problema...</p>
              <TwoColumnLayout
                columns={[
                  { title: "Desafío", content: "..." },
                  { title: "Impacto", content: "..." }
                ]}
              />
            </>
          )
        },
        {
          number: "02.",
          title: "Objetivos",
          content: (
            <CardGrid
              cards={[
                {
                  icon: <Target size={32} />,
                  title: "Objetivo 1",
                  description: "..."
                },
                {
                  icon: <Layers size={32} />,
                  title: "Objetivo 2",
                  description: "..."
                }
              ]}
            />
          )
        },
        {
          number: "03.",
          title: "Proceso",
          content: (
            <DiagramContainer title="Fases del proyecto">
              <div>
                {/* Tu diagrama o proceso paso a paso */}
              </div>
            </DiagramContainer>
          )
        }
      ]}
    />
  );
}
```

---

## 🎯 Mejores Prácticas

1. **TwoColumnLayout**: Úsalo para comparaciones o contenido complementario (problema/solución, antes/después)
2. **CardGrid**: Ideal para 4-6 items (2x2 o 3x2 grid). Usa iconos relevantes para mejorar la escaneo visual
3. **DiagramContainer**: Úsalo para contenido que necesite destacarse (procesos, diagramas, timelines)
4. **ThreeColumnLayout**: Para conceptos de diseño o features que se benefician de comparación

## 🔗 Recursos

- **Lucide Icons**: https://lucide.dev/icons/
- **CSS Modules**: Los estilos están en `CaseStudyLayout.module.css`
- **Referencia ANZ**: https://toan.framer.website/anz

---

**Última actualización:** Noviembre 2025
