# Nicolás Lundin - Product Designer Portfolio

A modern, bilingual portfolio website showcasing product design work with emphasis on design systems and user-centered solutions.

## ✨ Features

- **Bilingual Support** - Complete EN/ES translations with URL-based language routing
- **Real Routing** - React Router with language prefixes (`/` for EN, `/es` for ES)
- **Modular Translations** - Language-first organization with separate common and case study translations
- **3D Interactive Hero** - Three.js animated bubble with mobile touch gestures
- **Responsive Design** - Mobile-first approach with optimized layouts
- **Case Studies** - Detailed project showcases with rich content formatting
- **HTML Formatting Support** - Use `<strong>`, `<em>`, and `\n\n` paragraph breaks in translations
- **Component Library** - Reusable base components with Storybook documentation
- **Optimized Build** - Code splitting and lazy loading for faster load times
- **Type-Safe** - Full TypeScript implementation throughout

## 🚀 Tech Stack

- **React 18** + TypeScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing with language support
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics for interactive hero section
- **CSS Modules** - Scoped styling with camelCase convention
- **Storybook** - Component documentation and development
- **Chromatic** - Visual regression testing

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
│       └── case-studies/          # Project cover images
│           ├── mindstudio_cover.png
│           └── treez_cover.png
│
├── components/
│   ├── base/                      # Reusable atomic components
│   │   ├── BlockLink/             # Card-style clickable blocks
│   │   ├── Button/                # Primary, ghost, link variants
│   │   ├── Container/             # Max-width content wrapper
│   │   ├── Heading/               # Semantic h1-h6 headings
│   │   ├── Image/                 # Lazy loading with fallback
│   │   ├── Link/                  # Internal/external navigation
│   │   ├── List/                  # Ordered/unordered lists
│   │   ├── Section/               # Page sections with variants
│   │   ├── Text/                  # Typography with HTML support
│   │   ├── sonner.tsx             # Toast notifications
│   │   └── index.ts               # Centralized exports
│   │
│   ├── case-studies/
│   │   ├── published/             # Active case studies
│   │   │   ├── MindStudioCaseStudy.tsx
│   │   │   ├── TreezCaseStudy.tsx
│   │   │   └── index.ts
│   │   ├── _drafts/               # Work-in-progress case studies
│   │   │   ├── KlareCaseStudy.tsx
│   │   │   ├── NacionalCaseStudy.tsx
│   │   │   └── WeniaCaseStudy.tsx
│   │   ├── CaseStudyLayout/       # Shared layout component
│   │   ├── shared/                # Shared styles
│   │   └── index.ts
│   │
│   ├── icons/                     # Icon system
│   │   ├── Icon.tsx               # Icon component
│   │   ├── iconRegistry.tsx       # Icon definitions
│   │   ├── index.ts
│   │   └── README.md              # Icon usage guide
│   │
│   ├── layout/                    # Layout components
│   │   ├── CustomCursor/          # Custom cursor implementation
│   │   ├── Footer/                # Site footer
│   │   └── Header/                # Navigation with mobile menu
│   │
│   └── sections/                  # Page sections
│       ├── About/                 # About section
│       ├── Contact/               # Contact information
│       ├── Hero/                  # Landing section
│       ├── Work/                  # Project showcase
│       └── ThreeCanvas.tsx        # 3D bubble animation
│
├── contexts/                      # React contexts (NEW STRUCTURE)
│   ├── LanguageContext.tsx        # Language state & detection
│   ├── NavigationContext.tsx      # Navigation utilities
│   └── index.ts                   # Centralized exports
│
├── lib/                           # Utilities and shared logic
│   ├── constants.ts               # App-wide constants
│   ├── hooks.ts                   # Custom hooks
│   ├── routes.ts                  # Route definitions
│   └── utils.ts                   # Utility functions
│
├── translations/                  # Translation system (NEW STRUCTURE)
│   ├── en/                        # English translations
│   │   ├── common.ts              # Site-wide content
│   │   ├── case-studies/          # Case study translations
│   │   │   ├── mindstudio.ts
│   │   │   └── treez.ts
│   │   └── index.ts               # Language exports
│   │
│   ├── es/                        # Spanish translations
│   │   ├── common.ts              # Site-wide content
│   │   ├── case-studies/          # Case study translations
│   │   │   ├── mindstudio.ts
│   │   │   └── treez.ts
│   │   └── index.ts               # Language exports
│   │
│   └── index.ts                   # Main translations export
│
├── styles/
│   └── globals.css                # CSS variables & base styles
│
├── App.tsx                        # Main app component
├── App.module.css                 # App-level styles
└── main.tsx                       # Entry point
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook (component development)
npm run storybook

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

The dev server will be available at `http://localhost:3000`
Storybook will be available at `http://localhost:6006`

## 📚 Storybook

This project includes comprehensive component documentation via Storybook with visual regression testing through Chromatic.

### Quick Start

```bash
# View components locally
npm run storybook

# Build Storybook
npm run build-storybook

# Publish to Chromatic
npm run chromatic
```

### Resources

- **Local Storybook**: http://localhost:6006/
- **Published Storybook**: https://68edaec866f34987cc3f36ba-cbipxcggqr.chromatic.com/
- **Detailed Workflow Guide**: See [STORYBOOK_WORKFLOW.md](./STORYBOOK_WORKFLOW.md)

The workflow guide includes:
- Creating new stories
- Using decorators (Router, Language contexts)
- Working with animations
- Publishing to Chromatic
- Best practices and troubleshooting

## 🌐 Translation System

### Architecture

The translation system uses a language-first organization:

```
translations/
├── en/                    # All English content
│   ├── common.ts          # Navigation, hero, work, about, contact, footer
│   └── case-studies/      # Case study specific translations
└── es/                    # All Spanish content
    ├── common.ts
    └── case-studies/
```

### Usage

#### In Components

```typescript
import { useLanguage } from '@/contexts';

function Component() {
  const { t } = useLanguage();

  return (
    <h1>{t('hero.title')}</h1>
    <p>{t('hero.subtitle') as string}</p>
  );
}
```

#### In Case Studies

```typescript
import { useCaseStudyTranslation } from '@/lib/hooks';

function CaseStudy() {
  const content = useCaseStudyTranslation('mindstudio');

  return (
    <h1>{content.title}</h1>
    <p>{content.subtitle}</p>
  );
}
```

### Content Formatting

#### Common Translations (common.ts)

**HTML Formatting:**
```typescript
'about.description': "I'm <strong>Nicolás</strong>, a product designer..."
'hero.subtitle': "Line one<br><br>Line two"
```

**Arrays for Lists:**
```typescript
'about.toolsList': [
  'Figma / FigJam / Make',
  'Git / GitHub',
  'VSCode'
]
```

#### Case Study Translations

**Paragraph Breaks:**
```typescript
content: "First paragraph.\n\nSecond paragraph.\n\nThird paragraph."
```

**HTML Formatting:**
```typescript
content: "Text with <strong>bold</strong> and <em>italic</em> formatting."
```

**Combined:**
```typescript
content: "First paragraph with <strong>emphasis</strong>.\n\nSecond paragraph."
```

### Adding a New Case Study

1. **Create translation files:**
   ```
   src/translations/en/case-studies/yourproject.ts
   src/translations/es/case-studies/yourproject.ts
   ```

2. **Export from language index:**
   ```typescript
   // src/translations/en/index.ts
   import { yourproject } from './case-studies/yourproject';

   export const en = {
     ...common,
     caseStudies: {
       mindstudio,
       treez,
       yourproject  // Add here
     }
   };
   ```

3. **Create component:**
   ```
   src/components/case-studies/published/YourProjectCaseStudy.tsx
   ```

4. **Add routes in App.tsx:**
   ```typescript
   <Route path="/yourproject" element={<YourProjectCaseStudy />} />
   <Route path="/es/yourproject" element={<YourProjectCaseStudy />} />
   ```

## 🗺️ Routing

The site uses React Router with language-based URLs:

**English (default):**
- `/` - Home
- `/mindstudio` - MindStudio case study
- `/treez` - Treez case study

**Spanish:**
- `/es` - Home
- `/es/mindstudio` - MindStudio case study
- `/es/treez` - Treez case study

Language is automatically detected from URL path and synced across navigation.

## 🎨 Component Library

### Base Components

All base components are located in `src/components/base/` and use a consistent API:

- **Button** - `variant`: primary, ghost, link
- **Text** - `size`: lg, md, sm | `color`: default, muted
- **Heading** - `level`: 1-6 (semantic)
- **Link** - Auto-detects internal/external
- **Image** - Lazy loading, aspect ratio, fallback
- **List** - `variant`: default, unstyled, compact
- **Section** - `variant` for different styles
- **Container** - Max-width wrapper

**Centralized Import:**
```typescript
import { Text, Heading, Button, Link, Image } from '@/components/base';
```

See individual component README files and Storybook for detailed usage.

## 🔧 Import Conventions

This project uses `@/` path aliases for clean imports:

```typescript
// ✅ Use @/ aliases
import { useLanguage } from '@/contexts';
import { Button } from '@/components/base';
import { translations } from '@/translations';
import imgCover from '@/assets/images/case-studies/cover.png';

// ❌ Avoid deep relative paths
import { useLanguage } from '../../../contexts';
```

**Alias mappings:**
- `@/components/*` - Components
- `@/contexts` - React contexts
- `@/lib/*` - Utilities and hooks
- `@/translations` - Translation system
- `@/assets/*` - Images and static files

## 📝 CSS Conventions

See [CSS_CONVENTIONS.md](./CSS_CONVENTIONS.md) for detailed styling guidelines.

**Quick Reference:**
- CSS Modules with **camelCase** class names
- Mobile-first responsive design
- CSS Custom Properties for theming
- Data attributes for component variants
- Specificity over BEM patterns

```css
/* Component styles */
.heroSection { }
.projectCard { }

/* Variants via data attributes */
.button[data-variant="primary"] { }
```

## 🎨 Customization

### Colors & Theme

Edit CSS custom properties in:
```
src/styles/globals.css
```

### Contact Information

Update URLs and constants in:
```
src/lib/constants.ts
```

### 3D Bubble Animation

Customize configuration in:
```
src/components/sections/ThreeCanvas.tsx
```

Look for the `CONFIG` object with documented parameters.

## 🚢 Deployment

The site is configured for GitHub Pages deployment with custom domain support:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to `gh-pages` branch
3. Make site available at your GitHub Pages URL

### GitHub Pages Configuration

Ensure `vite.config.ts` has correct `base`:
```typescript
base: '/'  // For custom domain
// or
base: '/repo-name/'  // For github.io/repo-name
```

Custom domain configured via `public/CNAME`:
```
nlund.in
```

## 📦 Build Optimization

The build uses manual code splitting for optimal performance:

```javascript
manualChunks: {
  'three': ['three'],                              // 469KB
  'react-vendor': ['react', 'react-dom', ...],     // 142KB
  'motion': ['motion']                             // 56KB
}
```

**Features:**
- Lazy-loaded route components
- Code splitting by vendor libraries
- Optimized for caching
- Gzip compression ready

**Build output:**
```
build/
├── assets/
│   ├── mindstudio_cover-*.png
│   ├── treez_cover-*.png
│   ├── three-*.js              # 469KB
│   ├── react-vendor-*.js       # 142KB
│   ├── motion-*.js             # 56KB
│   └── index-*.js              # Main bundle
└── index.html
```

## 🧪 Testing

**Storybook Tests:**
```bash
npm run storybook
```

**Visual Regression (Chromatic):**
```bash
npm run chromatic
```

## 🔧 Development Tools

- **TypeScript** - Type checking
- **ESLint** - Code linting (implied from React setup)
- **Vite** - Fast HMR and build
- **Storybook** - Component development
- **Chromatic** - Visual testing

## 📖 Documentation

- **[README.md](./README.md)** - This file (project overview)
- **[CSS_CONVENTIONS.md](./CSS_CONVENTIONS.md)** - Styling guidelines
- **[STORYBOOK_WORKFLOW.md](./STORYBOOK_WORKFLOW.md)** - Component development workflow
- **[CLAUDE.md](./claude.md)** - AI assistant configuration and project guidelines
- **[Icon README](./src/components/icons/README.md)** - Icon system usage

## 🐛 Troubleshooting

### Build Issues

**Module not found errors:**
- Verify `@/` alias is configured in `vite.config.ts`
- Check that `tsconfig.json` has correct paths

**Translation errors:**
- Ensure all translation keys exist in both `en` and `es`
- Check that case study names match in translation files

### Development Issues

**Storybook not loading:**
- Check decorators in `.storybook/decorators.tsx`
- Verify stories use correct import paths

**Routing issues:**
- Ensure `<BrowserRouter>` wraps app in `App.tsx`
- Check that routes match in both English and Spanish

## 📄 License

Maybe some rights reserved :)

## 👤 Author

**Nicolás Lundin**
Senior Product Designer

- **Email**: hola@nlund.in
- **LinkedIn**: [linkedin.com/in/nicolaslundin](https://linkedin.com/in/nicolaslundin)
- **Location**: Santiago, Chile

---

Built with ❤️ using React, TypeScript, and Three.js
