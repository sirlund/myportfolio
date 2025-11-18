import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../src/contexts';
import { ReactNode } from 'react';

/**
 * Decorator to wrap stories with LanguageProvider context
 */
export const withLanguageProvider = (Story: () => ReactNode) => (
  <LanguageProvider>
    <Story />
  </LanguageProvider>
);

/**
 * Decorator to wrap stories with BrowserRouter (for components using react-router)
 */
export const withRouter = (Story: () => ReactNode) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

/**
 * Combined decorator with both Router and LanguageProvider
 */
export const withAppContext = (Story: () => ReactNode) => (
  <BrowserRouter>
    <LanguageProvider>
      <Story />
    </LanguageProvider>
  </BrowserRouter>
);
