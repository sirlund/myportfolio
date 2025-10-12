import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../lib/contexts';
import { SITE } from '../lib/constants';
import '../styles/Header.css';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: t('nav.work'), sectionId: 'work' },
    { name: t('nav.about'), sectionId: 'about' },
    { name: t('nav.contact'), sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isHomePage = location.pathname === '/' || location.pathname === '/es';

  const scrollToSection = (sectionId: string) => {
    // First close the mobile menu
    setIsMobileMenuOpen(false);

    // Use requestAnimationFrame to ensure DOM updates complete
    requestAnimationFrame(() => {
      if (!isHomePage) {
        // Navigate to home first, preserving language
        const homePath = language === 'es' ? '/es' : '/';
        navigate(homePath);

        // Wait for navigation and mobile menu animation
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        // Already on home page, just scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      }
    });
  };

  const goToHome = () => {
    const homePath = language === 'es' ? '/es' : '/';
    navigate(homePath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';

    // Get current path without language prefix
    let currentPath = location.pathname.replace(/^\/es/, '').replace(/^\//, '');

    // Build new path with appropriate language prefix
    let newPath = newLang === 'es' ? `/es/${currentPath}` : `/${currentPath}`;

    // Clean up double slashes
    newPath = newPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/';

    navigate(newPath);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`header ${
          isScrolled
            ? 'header-scrolled'
            : 'header-transparent'
        }`}
        style={{
          zIndex: isMobileMenuOpen ? 100 : 50,
          backgroundColor: isMobileMenuOpen ? 'transparent' : undefined
        }}
      >
        <nav className="header-nav">
          <div className="header-inner">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="header-logo"
              onClick={goToHome}
              style={{ color: isMobileMenuOpen ? '#ffffff' : 'inherit' }}
            >
              <span className="header-logo-text">{SITE.NAME}</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="header-desktop-nav">
              <div className="header-nav-items">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="header-nav-button"
                  >
                    {item.name}
                  </motion.button>
                ))}
                {/* Language switcher - Desktop */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={switchLanguage}
                  className="header-nav-button header-lang-button"
                  aria-label="Switch language"
                >
                  {language === 'en' ? 'ES' : 'EN'}
                </motion.button>
              </div>
            </div>

            {/* Language switcher - Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={switchLanguage}
              className="header-mobile-lang-button"
              style={{ color: isMobileMenuOpen ? '#ffffff' : 'inherit' }}
              aria-label="Switch language"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header-mobile-menu-button"
              aria-label="Toggle menu"
              style={{ color: isMobileMenuOpen ? '#ffffff' : 'inherit' }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="menu-icon"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, top: "0px" },
                    open: { rotate: 45, top: "8px" }
                  }}
                  transition={{ duration: 0.3 }}
                  className="menu-line"
                  style={{ position: 'absolute' }}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="menu-line"
                  style={{ position: 'absolute' }}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, bottom: "0px" },
                    open: { rotate: -45, bottom: "8px" }
                  }}
                  transition={{ duration: 0.3 }}
                  className="menu-line"
                  style={{ position: 'absolute' }}
                />
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%"
        }}
        transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="header-mobile-nav-overlay"
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="header-mobile-nav-content">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 50
              }}
              transition={{
                duration: 0.4,
                delay: isMobileMenuOpen ? 0.1 + index * 0.1 : 0,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{ x: 20 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.sectionId)}
              className="header-mobile-nav-link"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}