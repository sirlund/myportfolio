import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nlund.in',
  output: 'static',

  // Prefetch links on hover for faster navigation
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es'
        }
      }
    })
  ],

  // Build configuration
  build: {
    assets: 'assets'
  },

  // Development server
  server: {
    port: 4321
  },

  // Vite configuration for path aliases
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    // Pre-bundle heavy dependencies for faster dev server
    optimizeDeps: {
      include: ['three', 'lucide-astro']
    }
  }
});
