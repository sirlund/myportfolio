# Icon System

A centralized, type-safe icon management system for the portfolio.

## 📖 Quick Start

### Using an Icon

```tsx
import { Icon } from '@/components/icons';

// Basic usage
<Icon name="mindstudio" />

// With custom size
<Icon name="treez" size={100} />

// With custom color
<Icon name="mindstudio" color="#ffffff" />

// With CSS class and responsive size
<Icon name="treez" size="100%" className="my-icon" />
```

## 🎨 Adding a New Icon

### Step 1: Get Your SVG

Export your SVG from Figma, Illustrator, or any design tool. You need:
- The `viewBox` attribute (e.g., `"0 0 100 100"`)
- The path data from `<path d="..."/>`

### Step 2: Add to Icon Registry

Open `src/components/icons/iconRegistry.tsx` and add your icon:

```tsx
export const ICONS = {
  // ... existing icons

  myNewIcon: {
    viewBox: "0 0 100 100",  // From your SVG
    paths: [
      "M10 10 H 90 V 90 H 10 L 10 10",  // Path data from your SVG
      // Add more paths if your SVG has multiple <path> elements
    ],
    fill: "white",  // Optional: default fill color
  },
} as const;

export type IconName = keyof typeof ICONS;
```

### Step 3: Use Your Icon

```tsx
<Icon name="myNewIcon" size={50} />
```

That's it! TypeScript will auto-complete the icon name.

## 📐 Icon Properties

```tsx
interface IconProps {
  name: IconName;           // Icon name from registry (required)
  size?: number | string;   // Size in px or CSS unit (default: 24)
  color?: string;           // Fill color (default: from registry or 'currentColor')
  className?: string;       // Additional CSS classes
  style?: CSSProperties;    // Inline styles
  ...svgProps              // Any other SVG props (onClick, onHover, etc.)
}
```

## 💡 Examples

### Multiple Paths
If your SVG has multiple paths:

```tsx
logo: {
  viewBox: "0 0 200 50",
  paths: [
    "M10...",  // First path
    "M50...",  // Second path
    "M90...",  // Third path
  ],
  fill: "currentColor",
}
```

### Paths with Opacity or Custom Fill
If a specific path needs different fill or opacity:

```tsx
logo: {
  viewBox: "0 0 100 100",
  paths: [
    {
      d: "M10...",           // Path data
      fill: "#404040",       // Custom fill for this path
      opacity: 0.48,         // Custom opacity (0-1)
    },
    "M50...",               // Regular path (uses icon default fill)
    {
      d: "M90...",
      fill: "#ffffff",
    },
  ],
  fill: "currentColor",      // Default fill for string paths
}
```

### Responsive Icon
```tsx
<div className="icon-container">
  <Icon name="mindstudio" size="100%" />
</div>
```

### With Custom Styling
```tsx
<Icon
  name="treez"
  size={80}
  color="#404040"
  className="hover:opacity-80 transition-opacity"
  onClick={() => console.log('Clicked!')}
/>
```

### Dynamic Icon
```tsx
const iconName: IconName = isActive ? 'mindstudio' : 'treez';
<Icon name={iconName} size={40} />
```

## 🔍 Finding Icon Paths

### From Figma
1. Select your icon
2. Right-click → Copy as SVG
3. Paste into text editor
4. Look for `viewBox="..."` and `<path d="..."/>`

### From Illustrator
1. File → Export → Export for Screens
2. Format: SVG
3. Open the exported SVG in text editor
4. Copy `viewBox` and path `d` attributes

### From Existing SVG File
Open the `.svg` file in text editor and look for:
```xml
<svg viewBox="0 0 100 100">
  <path d="M10 10 H 90 V 90..."/>
</svg>
```

## 🎯 Benefits

- **Type-Safe**: TypeScript autocomplete for all icon names
- **Centralized**: All icons in one place
- **Flexible**: Easy to customize size, color, and styling
- **Simple**: Add new icons in seconds
- **Performant**: No extra HTTP requests, all icons bundled
- **Maintainable**: Easy to update or remove icons

## 📂 File Structure

```
src/components/icons/
├── Icon.tsx              # The main Icon component
├── iconRegistry.tsx      # Icon definitions (add new icons here)
├── index.ts              # Barrel exports
└── README.md             # This file
```

## 🛠️ Advanced Usage

### Icon with Animation
```tsx
<Icon
  name="mindstudio"
  className="animate-spin"
  size={50}
/>
```

### Icon in Button
```tsx
<button className="flex items-center gap-2">
  <Icon name="treez" size={20} />
  <span>View Case Study</span>
</button>
```

### Conditional Styling
```tsx
<Icon
  name="mindstudio"
  color={isActive ? '#255fb3' : '#gray'}
  size={isActive ? 60 : 40}
/>
```
