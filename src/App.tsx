import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/base/sonner';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { LanguageProvider, NavigationProvider } from '@/contexts';
import { ERROR_MESSAGES } from '@/lib/constants';
import styles from './App.module.css';

// Lazy load case study components
const MindStudioCaseStudy = lazy(() => import('@/components/case-studies/published/MindStudioCaseStudy'));
const TreezCaseStudy = lazy(() => import('@/components/case-studies/published/TreezCaseStudy'));
const WeniaCaseStudy = lazy(() => import('@/components/case-studies/_drafts/WeniaCaseStudy'));
const NacionalCaseStudy = lazy(() => import('@/components/case-studies/_drafts/NacionalCaseStudy'));
const KlareCaseStudy = lazy(() => import('@/components/case-studies/_drafts/KlareCaseStudy'));

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
        <div className={styles.appContainer}>
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
