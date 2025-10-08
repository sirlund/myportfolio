import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

const translations = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Site
    'site.title': 'Senior Product Designer',
    'site.tagline': 'Senior Product Designer creating user-friendly solutions for complex digital challenges—from Chile, for the world.',

    // Hero
    'hero.title': 'Hello, I’m Nico.',
    'hero.subtitle': 'I design simple and useful digital experiences—with a dash of creativity—that combine UX, technology, and scalable interfaces.',
    'hero.location': 'Santiago, Chile',
    'hero.viewWork': 'View Projects',

    // Work
    'work.comingSoon': 'Case Studies Coming Soon',
    'work.description': "I'm currently finalizing detailed case studies of my work. Check back soon to see in-depth explorations of my design process and outcomes.",

    // About
    'about.title': 'About',
    'about.description1': "I'm Nicolás, a product designer with over 10 years of experience, specializing in design systems and user-centered digital solutions.",
    'about.description2': "I help teams identify opportunities, structure efficient flows, and deliver coherent, scalable products, collaborating closely with stakeholders and developers to bridge the gap between design and execution.",
    'about.description3': "When I'm not designing, you'll find me training on my road bike 🚴, experimenting with new recipes 🍳, or diving into fantasy literature 📚. I'm a father of a daughter and, recently, a son 👶, plus four cats 🐱, and like any good designer, I have a special relationship with coffee ☕️.",
    'about.tools': 'Tools',
    'about.skills': 'Skills',
    'about.industries': 'Industries',
    'about.toolsList': [
      'Figma / FigJam / Make', 
      'Git / GitHub', 
      'VSCode', 
      'Storybook', 
      'HTML / CSS / JS / React'
    ],
    'about.skillsList': [
      'User Research',
      'Information Architecture',
      'Interaction Design',
      'Design Systems',
      'Prototyping & Testing',
      'Cross-functional Collaboration'
    ],
    'about.industriesList': [
      'Web & Mobile Products',
      'Fintech & Crypto',
      'AI & Machine Learning',
      'Insurtech',
      'Enterprise SaaS'
    ],

    // Contact
    'contact.title': "Let's Connect",
    'contact.description': "Open to discussing complex product challenges. Whether you want to collaborate on a project, brainstorm ideas, or just chat about design, reach out!",
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
    'caseStudy.backToWork': 'Back to Work Section',
  },
  es: {
    // Navigation
    'nav.work': 'Trabajo',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',

    // Site
    'site.title': 'Diseñador de Producto Senior',
    'site.tagline': 'Diseñador de Producto Senior creando soluciones fáciles de usar para desafíos digitales complejos—desde Chile, para el mundo.',

    // Hero
    'hero.title': 'Hola, soy Nico.',
    'hero.subtitle': 'Diseño experiencias digitales simples y útiles —con un toque creativo— que integran UX, tecnología e interfaces que escalan.',
    'hero.location': 'Santiago, Chile',
    'hero.viewWork': 'Ver Proyectos',


    // Work
    'work.comingSoon': 'Casos de Estudio Próximamente',
    'work.description': 'Actualmente estoy finalizando casos de estudio detallados de mi trabajo. Vuelve pronto para ver exploraciones en profundidad de mi proceso de diseño y resultados.',

    // About
    'about.title': 'Acerca',
    'about.description1': "Soy Nicolás, diseñador de productos con más de 10 años de experiencia, especializado en sistemas de diseño y soluciones digitales centradas en el usuario.",
    'about.description2': "Ayudo a equipos a identificar oportunidades, estructurar flujos eficientes y entregar productos coherentes y escalables, colaborando estrechamente con stakeholders y desarrolladores para cerrar la brecha entre diseño y ejecución técnica.",
    'about.description3': "Cuando no estoy diseñando, me encontrarás entrenando en mi bicicleta de ruta 🚴, explorando recetas nuevas 🍳 o disfrutando de literatura fantástica 📚. Soy padre de una hija y, recientemente, un hijo 👶, además de cuatro gatos 🐱, y como buen diseñador, tengo una relación especial con el café ☕️.",
    'about.tools': 'Herramientas',
    'about.skills': 'Habilidades',
    'about.industries': 'Industrias',
    'about.toolsList': [
      'Figma / FigJam / Make', 
      'Git / GitHub', 
      'VSCode', 
      'Storybook', 
      'HTML / CSS / JS / React'
    ],    
    'about.skillsList': [
      'Investigación de Usuarios',
      'Arquitectura de Información',
      'Diseño de Interacción',
      'Sistemas de Diseño',
      'Prototipado y Testing',
      'Colaboración Multifuncional'
    ],
    'about.industriesList': [
      'Productos Web & Mobile',
      'Fintech & Cripto',
      'IA y Aprendizaje Automático',
      'Insurtech',
      'SaaS Empresarial'
    ],

    // Contact
    'contact.title': 'Conectemos',
    'contact.description': 'Abierto a discutir sobre desafíos de productos complejos. Ya sea que quieras colaborar en un proyecto, generar ideas o simplemente hablar sobre diseño ¡contáctame!',
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
    'caseStudy.backToWork': 'Volver a Trabajo',
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
