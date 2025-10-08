import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Site
    'site.title': 'Senior Product Designer',
    'site.tagline': 'Senior Product Designer creating user-friendly solutions for complex digital challenges.',

    // Hero
    'hero.location': 'Santiago, Chile',
    'hero.viewWork': 'View Work',

    // Work
    'work.comingSoon': 'Case Studies Coming Soon',
    'work.description': "I'm currently finalizing detailed case studies of my work. Check back soon to see in-depth explorations of my design process and outcomes.",

    // About
    'about.title': 'About',
    'about.tools': 'Tools',
    'about.skills': 'Skills',
    'about.industries': 'Industries',
    'about.description1': "I'm a Senior Product Designer specializing in design systems and fintech. I transform complex processes into intuitive digital experiences.",
    'about.description2': "I build scalable design systems from the ground up and lead teams to deliver consistent, high-quality products through systematic thinking and cross-functional collaboration.",
    'about.description3': "My work spans AI platforms, fintech, insurtech, and cannabis tech—making complex technologies accessible and user-friendly.",

    // Contact
    'contact.title': "Let's Connect",
    'contact.description': "Open to discussing design systems, fintech, and complex product challenges. Let's work together or chat about design.",
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.dribbble': 'Dribbble',
    'contact.resume': 'Resume',
    'contact.emailDesc': 'hola@nlund.in',
    'contact.linkedinDesc': 'Connect with me',
    'contact.dribbbleDesc': 'View my work',
    'contact.resumeDesc': 'Download PDF',

    // Footer
    'footer.rights': 'Maybe some rights reserved :)',

    // Case Study
    'caseStudy.backToWork': 'Back to Work',
  },
  es: {
    // Navigation
    'nav.work': 'Trabajo',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',

    // Site
    'site.title': 'Diseñador de Producto Senior',
    'site.tagline': 'Diseñador de Producto Senior creando soluciones fáciles de usar para desafíos digitales complejos.',

    // Hero
    'hero.location': 'Santiago, Chile',
    'hero.viewWork': 'Ver Trabajo',

    // Work
    'work.comingSoon': 'Casos de Estudio Próximamente',
    'work.description': 'Actualmente estoy finalizando casos de estudio detallados de mi trabajo. Vuelve pronto para ver exploraciones en profundidad de mi proceso de diseño y resultados.',

    // About
    'about.title': 'Acerca',
    'about.tools': 'Herramientas',
    'about.skills': 'Habilidades',
    'about.industries': 'Industrias',
    'about.description1': 'Soy un Diseñador de Producto Senior especializado en sistemas de diseño y fintech. Transformo procesos complejos en experiencias digitales intuitivas.',
    'about.description2': 'Construyo sistemas de diseño escalables desde cero y lidero equipos para entregar productos consistentes de alta calidad a través de pensamiento sistemático y colaboración multifuncional.',
    'about.description3': 'Mi trabajo abarca plataformas de IA, fintech, insurtech y tecnología cannábica—haciendo tecnologías complejas accesibles y fáciles de usar.',

    // Contact
    'contact.title': 'Conectemos',
    'contact.description': 'Abierto a discutir sistemas de diseño, fintech y desafíos de productos complejos. Trabajemos juntos o charlemos sobre diseño.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.dribbble': 'Dribbble',
    'contact.resume': 'Currículum',
    'contact.emailDesc': 'hola@nlund.in',
    'contact.linkedinDesc': 'Conéctate conmigo',
    'contact.dribbbleDesc': 'Ver mi trabajo',
    'contact.resumeDesc': 'Descargar PDF',

    // Footer
    'footer.rights': 'Quizás algunos derechos reservados :)',

    // Case Study
    'caseStudy.backToWork': 'Volver al Trabajo',
  },
};

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

  const t = (key: string): string => {
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
