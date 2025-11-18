import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from '@/translations';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Translation Guide for Content Writers:
 *
 * All text content supports HTML formatting tags:
 * - Use <strong> for bold text
 * - Use <em> for italic text
 * - Use <br> for single line break
 * - Use <br><br> for paragraph breaks (double line break)
 *
 * Examples:
 *   "This is <strong>bold</strong> text"
 *   "Line one<br>Line two"
 *   "First paragraph.<br><br>Second paragraph with <em>italic</em>."
 *
 * Note: Case studies support \n\n for paragraph breaks (auto-converted to <p> tags),
 * but for all other site content, use <br><br> for line breaks.
 */

// Helper to detect language from URL path
function getLanguageFromPath(pathname: string): Language {
  return pathname.startsWith('/es/') || pathname === '/es' ? 'es' : 'en';
}

// Internal component to sync language with URL
function LanguageSync({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) {
  const location = useLocation();

  useEffect(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    if (urlLang !== language) {
      setLanguage(urlLang);
    }
  }, [location.pathname, language, setLanguage]);

  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Detect initial language from URL
    if (typeof window !== 'undefined') {
      return getLanguageFromPath(window.location.pathname);
    }
    return 'en';
  });

  const t = (key: string): string | string[] => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <LanguageSync language={language} setLanguage={setLanguage} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export type { Language, LanguageContextType };
