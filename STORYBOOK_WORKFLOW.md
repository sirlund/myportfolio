# 📚 Storybook Workflow Guide

Guía completa para desarrollar, visualizar y publicar componentes en Storybook.

## 🎯 Tabla de Contenidos

1. [Desarrollo Local](#desarrollo-local)
2. [Anatomía de un Story](#anatomía-de-un-story)
3. [Publicación en Chromatic](#publicación-en-chromatic)
4. [Mejores Prácticas](#mejores-prácticas)
5. [Ejemplos Avanzados](#ejemplos-avanzados)

---

## 🔧 Desarrollo Local

### Iniciar Storybook

```bash
npm run storybook
```

Esto abrirá Storybook en `http://localhost:6006/`

### Estructura de Archivos

```
src/components/
├── base/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── Button.stories.tsx  ← Story file
│   └── Link/
│       ├── Link.tsx
│       ├── Link.module.css
│       ├── Link.stories.tsx
│       └── MotionLink.stories.tsx  ← Variant story
```

---

## 📝 Anatomía de un Story

### 1. Estructura Básica

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

// Meta configuration
const meta = {
  title: 'Category/ComponentName',  // Sidebar path
  component: ComponentName,
  parameters: {
    layout: 'centered',  // 'centered' | 'fullscreen' | 'padded'
  },
  tags: ['autodocs'],  // Auto-generate documentation
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    prop1: 'value1',
    prop2: true,
  },
};
```

### 2. Con Decorators (Context)

Cuando tu componente necesita providers (Router, Language, etc.):

```tsx
import { withRouter } from '../../../../.storybook/decorators';

const meta = {
  title: 'Base/Link',
  component: Link,
  decorators: [withRouter],  // Adds Router context
  // ...
};
```

**Decorators disponibles:**
- `withRouter` - React Router context
- `withLanguageProvider` - Language context
- `withAppContext` - Router + Language

### 3. Múltiples Variantes

```tsx
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Icon name="mail" />
      <span>Email</span>
    </Button>
  ),
};
```

---

## 🚀 Publicación en Chromatic

### Opción 1: Manual

```bash
# Publicar manualmente
npx chromatic --project-token=chpt_84e638307657fa9

# Con opciones adicionales
npx chromatic --project-token=chpt_84e638307657fa9 --auto-accept-changes
```

### Opción 2: Automática (GitHub Actions)

Ya configurado en `.github/workflows/chromatic.yml`

**Se publica automáticamente cuando:**
1. Haces push a `main`
2. Creas un Pull Request
3. Actualizas un Pull Request

**Ver resultados:**
```
✔ Storybook published
View at https://68edaec866f34987cc3f36ba-cbipxcggqr.chromatic.com/
Build details: https://www.chromatic.com/build?appId=...
```

### Comandos Útiles

```bash
# Publicar sin esperar resultados de tests visuales
npx chromatic --exit-once-uploaded

# Forzar rebuild
npx chromatic --force-rebuild

# Auto-aceptar cambios (primera vez)
npx chromatic --auto-accept-changes
```

---

## 🎨 Mejores Prácticas

### 1. Nombrado de Stories

```tsx
// ✅ Bueno - Descriptivo
export const Default: Story = {};
export const WithLongText: Story = {};
export const DisabledState: Story = {};

// ❌ Malo - No descriptivo
export const Story1: Story = {};
export const Test: Story = {};
```

### 2. Organización por Categorías

```tsx
// Componentes base
title: 'Base/Button'
title: 'Base/Link'

// Layout
title: 'Layout/Header'
title: 'Layout/Footer'

// Secciones
title: 'Sections/Hero'
title: 'Sections/Contact'

// Foundation
title: 'Foundation/Icons'
```

### 3. Documentación Automática

```tsx
/**
 * Button component for user interactions
 *
 * @example
 * <Button variant="primary">Click me</Button>
 */
export function Button({ variant, children, ...props }: ButtonProps) {
  // ...
}
```

### 4. Args vs Render

```tsx
// Para props simples - usa args
export const Simple: Story = {
  args: {
    text: 'Hello',
    disabled: false,
  },
};

// Para JSX complejo - usa render
export const Complex: Story = {
  render: () => (
    <Container>
      <Heading>Title</Heading>
      <Button>Action</Button>
    </Container>
  ),
};
```

---

## 🌟 Ejemplos Avanzados

### Componentes con Animaciones (Link)

El componente `Link` tiene soporte nativo para animaciones de Framer Motion:

```tsx
import { Link } from './Link';

const meta = {
  title: 'Base/Link',
  component: Link,
  // ...
} satisfies Meta<typeof Link>;

export const WithHoverAnimation: Story = {
  args: {
    href: '/about',
    children: 'Hover me!',
    whileHover: { scale: 1.05 },
    transition: { duration: 0.2 },
  },
};

export const WithSlideAnimation: Story = {
  args: {
    href: '/contact',
    children: 'Slide on hover',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const ContactStyleLink: Story = {
  render: () => (
    <Link
      href="mailto:example@email.com"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div>Email</div>
      <ArrowUpRight size={16} />
    </Link>
  ),
};
```

### Componentes con Estado

```tsx
import { useState } from 'react';

export const Interactive: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    return (
      <Button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </Button>
    );
  },
};
```

### Testing de Responsive

```tsx
export const Mobile: Story = {
  args: {
    // ...
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop: Story = {
  args: {
    // ...
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
```

### Testing de Temas

```tsx
export const LightMode: Story = {
  args: {
    // ...
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const DarkMode: Story = {
  args: {
    // ...
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
```

---

## 📊 Workflow Completo: Ejemplo Real

### Paso 1: Crear Componente

```tsx
// src/components/base/Card/Card.tsx
export interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

export function Card({ title, description, image, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### Paso 2: Crear Stories

```tsx
// src/components/base/Card/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Base/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a card description',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'Card featuring an image',
    image: 'https://via.placeholder.com/300x200',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Clickable Card',
    description: 'Click to see action',
    onClick: () => alert('Card clicked!'),
  },
};
```

### Paso 3: Ver en Local

```bash
npm run storybook
# Navega a http://localhost:6006/
# Ve a Base > Card en el sidebar
```

### Paso 4: Iterar

- Modifica el componente
- Cambios se reflejan automáticamente
- Prueba todas las variantes
- Ajusta los args desde el panel Controls

### Paso 5: Publicar

```bash
# Commit y push
git add .
git commit -m "Add Card component with stories"
git push

# GitHub Actions publica automáticamente a Chromatic
# O publica manualmente:
npx chromatic --project-token=chpt_84e638307657fa9
```

---

## 🔍 Troubleshooting

### Problema: Componente no aparece

**Solución:**
- Verifica que el archivo termine en `.stories.tsx`
- Asegúrate de exportar `default meta`
- Reinicia Storybook

### Problema: Error de Context

**Solución:**
Añade el decorator apropiado:

```tsx
import { withRouter } from '../../../../.storybook/decorators';

const meta = {
  decorators: [withRouter],
  // ...
};
```

### Problema: Estilos no se aplican

**Solución:**
- Verifica que importes el CSS Module
- Usa className correctamente:
```tsx
import styles from './Component.module.css';
<div className={styles.myClass}>
```

---

## 📚 Recursos

- **Storybook Local**: http://localhost:6006/
- **Chromatic Dashboard**: https://www.chromatic.com/builds?appId=68edaec866f34987cc3f36ba
- **Storybook Publicado**: https://68edaec866f34987cc3f36ba-cbipxcggqr.chromatic.com/
- **Docs Oficiales**: https://storybook.js.org/docs
- **Chromatic Docs**: https://www.chromatic.com/docs/

---

## 🎯 Quick Reference

```bash
# Desarrollo
npm run storybook              # Iniciar local
npm run build-storybook        # Build para producción

# Publicación
npx chromatic --project-token=chpt_84e638307657fa9

# Con opciones
npx chromatic --exit-once-uploaded           # No esperar tests
npx chromatic --auto-accept-changes          # Aceptar cambios
npx chromatic --force-rebuild                # Forzar rebuild
```

---

**Última actualización:** 2025-10-14
**Versión Storybook:** 9.1.10
**Versión Chromatic CLI:** 13.3.0
