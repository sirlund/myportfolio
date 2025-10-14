# Nicolás Lundin - Product Designer Portfolio

A modern, bilingual portfolio website showcasing product design work with emphasis on design systems and user-centered solutions.

## ✨ Features

- **Bilingual Support** - Complete EN/ES translations with URL-based language routing
- **Real Routing** - React Router with language prefixes (`/` for EN, `/es` for ES)
- **Modular Translations** - Separate translation files for case studies, easy to maintain
- **3D Interactive Hero** - Three.js animated bubble with mobile touch gestures
- **Responsive Design** - Mobile-first approach with optimized layouts
- **Case Studies** - Detailed project showcases with rich content formatting
- **HTML Formatting Support** - Use `<strong>`, `<em>`, and `<br>` in translations
- **Optimized Build** - Code splitting for faster load times

## 🚀 Tech Stack

- **React 18** + TypeScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations and transitions
- **Three.js** - 3D graphics for hero section
- **CSS Custom Properties** - Theme and styling

## 📁 Project Structure

```
src/
├── components/
│   ├── case-studies/          # Case study components
│   │   ├── CaseStudyLayout.tsx
│   │   ├── MindStudioCaseStudy.tsx
│   │   └── TreezCaseStudy.tsx
│   ├── ui/                     # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── contexts/
│   └── LanguageContext.tsx     # Translation system & language state
├── translations/
│   └── case-studies/           # Modular case study translations
│       ├── mindstudio.tsx
│       └── treez.tsx
├── hooks/
│   └── useCaseStudyTranslation.ts
├── config/
│   └── constants.ts            # Non-translatable constants
├── styles/                     # Component styles
└── assets/                     # Images and static files
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

# Deploy to GitHub Pages
npm run deploy
```

The dev server will be available at `http://localhost:3000`
Storybook will be available at `http://localhost:6006`

## 📚 Storybook

This project includes comprehensive component documentation via Storybook.

### Quick Start

```bash
# View components locally
npm run storybook

# Build Storybook
npm run build-storybook

# Publish to Chromatic
npx chromatic --project-token=chpt_84e638307657fa9
```

### Resources

- **Local Storybook**: http://localhost:6006/
- **Published Storybook**: https://68edaec866f34987cc3f36ba-cbipxcggqr.chromatic.com/
- **Detailed Workflow Guide**: See [STORYBOOK_WORKFLOW.md](./STORYBOOK_WORKFLOW.md)

The workflow guide includes:
- Creating new stories
- Using decorators (Router, Language contexts)
- Working with animations (MotionLink example)
- Publishing to Chromatic
- Best practices and troubleshooting

## 🌐 Translation System

### Main Site Content

Translations for navigation, hero, work, about, contact, and footer are in:
```
src/contexts/LanguageContext.tsx
```

**HTML Formatting Support:**
```typescript
'about.description': "I'm <strong>Nicolás</strong>, a product designer..."
'hero.subtitle': "Line one<br><br>Line two"
```

### Case Studies

Each case study has its own translation file for better organization:
```
src/translations/case-studies/mindstudio.tsx
src/translations/case-studies/treez.tsx
```

**Adding a New Case Study:**

1. Create translation file: `src/translations/case-studies/yourproject.tsx`
2. Add to hook: `src/hooks/useCaseStudyTranslation.ts`
3. Create component: `src/components/case-studies/YourProjectCaseStudy.tsx`
4. Add route in `src/App.tsx`

**Content Formatting in Case Studies:**
- Use `\n\n` for paragraph breaks (auto-converted to `<p>` tags)
- Use HTML tags: `<strong>`, `<em>`
- Example: `content: "First paragraph.\n\nSecond with <strong>bold</strong>."`

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

Language is automatically detected from URL and persists across navigation.

## 📝 Content Guidelines

### For Writers

When editing translations in `LanguageContext.tsx`:

- **Bold text:** `<strong>word</strong>`
- **Italic text:** `<em>word</em>`
- **Line break:** `<br>` (single) or `<br><br>` (double)
- **Lists:** Use arrays for `toolsList`, `skillsList`, `industriesList`

### For Case Studies

When editing case study translations:

- **Paragraphs:** Separate with `\n\n`
- **HTML tags:** Use `<strong>` and `<em>`
- **Complex layouts:** Use JSX content in component

See existing case studies for examples.

## 🎨 Customization

### Colors & Theme

Edit CSS custom properties in `src/styles/` files.

### Contact Information

Update URLs in:
```
src/config/constants.ts
```

### 3D Bubble Animation

Customize in:
```
src/components/ThreeCanvas.tsx
```

## 🚢 Deployment

The site is configured for GitHub Pages deployment:

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
base: '/'  // or '/repo-name/' if not using custom domain
```

## 📦 Build Optimization

The build uses manual code splitting:

- `three.js` - 3D graphics library
- `react-vendor` - React core
- `motion` - Animation library

This results in better caching and faster page loads.

## 🔧 Environment

- **Development:** Vite dev server with HMR
- **Production:** Optimized build with code splitting
- **Deployment:** GitHub Pages (static hosting)

## 📄 License

Maybe some rights reserved :)

## 👤 Author

**Nicolás Lundin**
- Email: hola@nlund.in
- LinkedIn: [linkedin.com/in/nicolaslundin](https://linkedin.com/in/nicolaslundin)
- Location: Santiago, Chile

---

Built with ❤️ using React, TypeScript, and Three.js
