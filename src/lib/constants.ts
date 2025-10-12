// Application-wide constants

// Site configuration (non-translatable constants only)
export const SITE = {
  NAME: 'Nicolás Lundin', // Person's name - not translatable
} as const;

// Contact information (URLs only - non-translatable)
export const CONTACT = {
  EMAIL: 'hola@nlund.in',
  LINKEDIN: 'https://linkedin.com/in/nicolaslundin',
  DRIBBBLE: 'https://dribbble.com/sirlund',
  RESUME: '#', // Update with actual resume URL
} as const;

// Base path configuration
export const BASE_PATH = '/';

// Layout constants
export const LAYOUT = {
  HEADER_HEIGHT: 80,
  SCROLL_OFFSET: 100,
  FOOTER_HEIGHT: 200,
} as const;

// Animation durations (in milliseconds)
export const ANIMATION = {
  SCROLL_DURATION: 800,
  TRANSITION_DURATION: 300,
  DEBOUNCE_DELAY: 150,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NAVIGATION_FAILED: 'Navigation failed',
  ROUTE_NOT_FOUND: 'Route not found',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
} as const;

// Scroll behavior options
export const SCROLL_OPTIONS: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
};
