import { Route, VALID_ROUTES } from '../config/routes';
import { BASE_PATH, SCROLL_OPTIONS } from '../config/constants';

/**
 * Parses the current URL and returns the corresponding route
 */
export function parseRouteFromURL(): Route {
  const path = window.location.pathname
    .replace(BASE_PATH, '')
    .replace(/^\//, '');

  // If empty path or just 'myportfolio', return home
  if (path === '' || path === 'myportfolio') {
    return 'home';
  }

  // Validate if it's a valid route
  if (VALID_ROUTES.includes(path as Route)) {
    return path as Route;
  }

  // Default to home if route is invalid
  return 'home';
}

/**
 * Builds a URL for a given route
 */
export function buildRouteURL(route: Route): string {
  return route === 'home' ? BASE_PATH : `${BASE_PATH}${route}`;
}

/**
 * Scrolls to a specific element by ID
 */
export function scrollToElement(
  elementId: string,
  options: ScrollIntoViewOptions = SCROLL_OPTIONS
): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView(options);
  }
}

/**
 * Scrolls to the top of the page
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({ top: 0, behavior });
}

/**
 * Updates the browser's URL without reloading
 */
export function updateURL(route: Route, section?: string): void {
  const url = buildRouteURL(route);
  const finalURL = section ? `${url}#${section}` : url;
  const state = section ? { route, section } : { route };

  window.history.pushState(state, '', finalURL);
}

/**
 * Handles browser back/forward navigation
 */
export function handlePopState(
  callback: (route: Route) => void
): () => void {
  const handler = (event: PopStateEvent) => {
    const state = event.state;
    if (state && state.route) {
      callback(state.route);
    } else {
      callback(parseRouteFromURL());
    }
  };

  window.addEventListener('popstate', handler);

  // Return cleanup function
  return () => window.removeEventListener('popstate', handler);
}
