// Application-wide constants

// Site configuration
export const SITE = {
  NAME: 'Nicolás Lundin',
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

// Navigation sections on the home page
export const NAV_SECTIONS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

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
