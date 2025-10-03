import { useEffect, useState, createContext, useContext, Suspense, lazy } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ThreeCanvas } from './components/ThreeCanvas';
import './styles/App.css';
// Lazy load case study components for better performance
const MindStudioCaseStudy = lazy(() => import('./components/case-studies/MindStudioCaseStudy'));
const WeniaCaseStudy = lazy(() => import('./components/case-studies/WeniaCaseStudy'));
const TreezCaseStudy = lazy(() => import('./components/case-studies/TreezCaseStudy'));
const NacionalCaseStudy = lazy(() => import('./components/case-studies/NacionalCaseStudy'));
const KlareCaseStudy = lazy(() => import('./components/case-studies/KlareCaseStudy'));

type Route = 'home' | 'mindstudio' | 'wenia' | 'treez' | 'nacional' | 'klare';

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

// Simple Error Boundary component
const ErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
  <div className="error-container">
    <h2 className="error-title">Something went wrong</h2>
    <p className="error-message">
      {error.message || 'An unexpected error occurred'}
    </p>
    <button
      onClick={resetError}
      className="error-button"
    >
      Try again
    </button>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [error, setError] = useState<Error | null>(null);

  const navigateTo = (route: Route) => {
    try {
      setError(null); // Clear any previous errors
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Navigation failed'));
    }
  };

  const navigateToWork = () => {
    try {
      setError(null);
      setCurrentRoute('home');
      // Wait for the route change to complete, then scroll to work section
      setTimeout(() => {
        const workElement = document.getElementById('work');
        if (workElement) {
          workElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Navigation to work failed'));
    }
  };

  const resetError = () => {
    setError(null);
    setCurrentRoute('home');
  };

  useEffect(() => {
    // Smooth scrolling for anchor links (only on home page)
    if (currentRoute === 'home') {
      const handleClick = (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', handleClick);
      });

      // Cleanup event listeners
      return () => {
        links.forEach(link => {
          link.removeEventListener('click', handleClick);
        });
      };
    }
  }, [currentRoute]);

  const renderPage = () => {
    const LoadingFallback = () => (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );

    switch (currentRoute) {
      case 'mindstudio':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <MindStudioCaseStudy />
          </Suspense>
        );
      case 'wenia':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <WeniaCaseStudy />
          </Suspense>
        );
      case 'treez':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <TreezCaseStudy />
          </Suspense>
        );
      case 'nacional':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <NacionalCaseStudy />
          </Suspense>
        );
      case 'klare':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <KlareCaseStudy />
          </Suspense>
        );
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <Work />
            <About />
            <Contact />
          </main>
        );
    }
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
        <Toaster
          position="bottom-right"
          duration={4000}
        />
      </div>
    </NavigationContext.Provider>
  );
}