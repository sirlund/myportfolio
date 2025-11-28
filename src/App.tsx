import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/base/sonner';
import { SEO, HelmetProvider } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { LanguageProvider, NavigationProvider, useLanguage } from '@/contexts';
import { ERROR_MESSAGES } from '@/lib/constants';
import { ROUTES, VALID_ROUTES } from '@/lib/routes';
import styles from './App.module.css';

// Loading fallback component
const LoadingFallback = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingSpinner}>Loading...</div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className={styles.errorContainer}>
    <h2 className={styles.errorTitle}>Something went wrong</h2>
    <p className={styles.errorMessage}>
      {error.message || ERROR_MESSAGES.UNEXPECTED_ERROR}
    </p>
    <button onClick={() => window.location.href = '/'} className={styles.errorButton}>
      Go to home
    </button>
  </div>
);

// Home page component
function HomePage() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={t('site.title') as string}
        description={t('site.description') as string}
        path={language === 'es' ? '/es' : '/'}
        lang={language}
      />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}

// App content (must be inside BrowserRouter)
function AppContent() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <NavigationProvider>
          <div className={styles.appContainer}>
            <CustomCursor />
            <Header />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Home routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/es" element={<HomePage />} />

                {/* Case study routes - generated from ROUTES config */}
                {VALID_ROUTES.map((key) => {
                  const route = ROUTES[key];
                  if (!route.component) return null;
                  const Component = route.component;
                  return [
                    <Route key={key} path={route.path} element={<Component />} />,
                    <Route key={`es-${key}`} path={`/es${route.path}`} element={<Component />} />
                  ];
                })}

                {/* 404 - Redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
            <Footer />
            <Toaster position="bottom-right" duration={4000} />
          </div>
        </NavigationProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
