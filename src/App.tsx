import { useEffect, useState, createContext, useContext, Suspense } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Route, ROUTES } from './config/routes';
import { ERROR_MESSAGES } from './config/constants';
import {
  parseRouteFromURL,
  updateURL,
  scrollToElement,
  scrollToTop,
  handlePopState as setupPopStateHandler,
} from './utils/navigation';
import './styles/App.css';

// Navigation context interface
interface NavigationContextType {
  currentRoute: Route;
  navigateTo: (route: Route) => void;
  navigateToWork: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner">Loading...</div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
  <div className="error-container">
    <h2 className="error-title">Something went wrong</h2>
    <p className="error-message">
      {error.message || ERROR_MESSAGES.UNEXPECTED_ERROR}
    </p>
    <button onClick={resetError} className="error-button">
      Try again
    </button>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>(parseRouteFromURL);
  const [error, setError] = useState<Error | null>(null);

  const navigateTo = (route: Route) => {
    try {
      setError(null);
      setCurrentRoute(route);
      updateURL(route);
      scrollToTop();
    } catch (err) {
      setError(err instanceof Error ? err : new Error(ERROR_MESSAGES.NAVIGATION_FAILED));
    }
  };

  const navigateToWork = () => {
    try {
      setError(null);
      setCurrentRoute('home');
      updateURL('home', 'work');

      // Wait for the route change to complete, then scroll to work section
      setTimeout(() => scrollToElement('work'), 100);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(ERROR_MESSAGES.NAVIGATION_FAILED));
    }
  };

  const resetError = () => {
    setError(null);
    setCurrentRoute('home');
    updateURL('home');
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const cleanup = setupPopStateHandler((route) => {
      setCurrentRoute(route);

      // Handle section scrolling from hash
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => scrollToElement(hash.substring(1)), 100);
      }
    });

    return cleanup;
  }, []);

  // Smooth scrolling for anchor links (only on home page)
  useEffect(() => {
    if (currentRoute !== 'home') return;

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href) {
        const sectionId = href.substring(1); // Remove the '#'
        updateURL('home', sectionId);
        scrollToElement(sectionId);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, [currentRoute]);

  const renderPage = () => {
    // Render case study pages
    if (currentRoute !== 'home') {
      const routeConfig = ROUTES[currentRoute];
      const Component = routeConfig.component;

      if (!Component) {
        return <ErrorFallback error={new Error(ERROR_MESSAGES.ROUTE_NOT_FOUND)} resetError={resetError} />;
      }

      return (
        <Suspense fallback={<LoadingFallback />}>
          <Component />
        </Suspense>
      );
    }

    // Render home page
    return (
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    );
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigateTo, navigateToWork }}>
      <div className="app-container">
        <CustomCursor />
        <Header />
        {error ? (
          <ErrorFallback error={error} resetError={resetError} />
        ) : (
          renderPage()
        )}
        <Footer />
        <Toaster position="bottom-right" duration={4000} />
      </div>
    </NavigationContext.Provider>
  );
}
