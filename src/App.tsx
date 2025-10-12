import { createContext, useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from './components/base/sonner';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { LanguageProvider } from './lib/contexts';
import { ERROR_MESSAGES } from './lib/constants';
import './styles/App.css';

// Lazy load case study components
import { lazy } from 'react';
const MindStudioCaseStudy = lazy(() => import('./components/case-studies/MindStudioCaseStudy'));
const TreezCaseStudy = lazy(() => import('./components/case-studies/TreezCaseStudy'));
const WeniaCaseStudy = lazy(() => import('./components/case-studies/WeniaCaseStudy'));
const NacionalCaseStudy = lazy(() => import('./components/case-studies/NacionalCaseStudy'));
const KlareCaseStudy = lazy(() => import('./components/case-studies/KlareCaseStudy'));

// Navigation context interface
interface NavigationContextType {
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

// Navigation provider component (must be inside BrowserRouter)
function NavigationProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToWork = () => {
    // Get current language from pathname
    const isSpanish = location.pathname.startsWith('/es');
    const targetPath = isSpanish ? '/es' : '/';

    navigate(targetPath);

    // Wait for navigation, then scroll to work section
    setTimeout(() => {
      const element = document.getElementById('work');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ navigateToWork }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner">Loading...</div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="error-container">
    <h2 className="error-title">Something went wrong</h2>
    <p className="error-message">
      {error.message || ERROR_MESSAGES.UNEXPECTED_ERROR}
    </p>
    <button onClick={() => window.location.href = '/'} className="error-button">
      Go to home
    </button>
  </div>
);

// Home page component
function HomePage() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}

// App content (must be inside BrowserRouter)
function AppContent() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <div className="app-container">
          <CustomCursor />
          <Header />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* English routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/mindstudio" element={<MindStudioCaseStudy />} />
              <Route path="/treez" element={<TreezCaseStudy />} />
              <Route path="/wenia" element={<WeniaCaseStudy />} />
              <Route path="/nacional" element={<NacionalCaseStudy />} />
              <Route path="/klare" element={<KlareCaseStudy />} />

              {/* Spanish routes */}
              <Route path="/es" element={<HomePage />} />
              <Route path="/es/mindstudio" element={<MindStudioCaseStudy />} />
              <Route path="/es/treez" element={<TreezCaseStudy />} />
              <Route path="/es/wenia" element={<WeniaCaseStudy />} />
              <Route path="/es/nacional" element={<NacionalCaseStudy />} />
              <Route path="/es/klare" element={<KlareCaseStudy />} />

              {/* 404 - Redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
          <Toaster position="bottom-right" duration={4000} />
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
