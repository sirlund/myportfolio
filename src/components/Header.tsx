import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE } from '../config/constants';
import '../styles/Header.css';

export function Header() {
  const { currentRoute, navigateTo } = useNavigation();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav.work'), href: '#work' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
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

  const scrollToSection = (href: string) => {
    // First close the mobile menu
    setIsMobileMenuOpen(false);

    // Use requestAnimationFrame to ensure DOM updates complete
    requestAnimationFrame(() => {
      if (currentRoute !== 'home') {
        navigateTo('home');
        // Wait for navigation and mobile menu animation
        setTimeout(() => {
          // Update URL with hash
          window.history.pushState({ route: 'home', section: href }, '', `/${href}`);

          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Increased delay to account for animations
      } else {
        // Update URL with hash
        window.history.pushState({ route: 'home', section: href }, '', `/${href}`);

        // Small delay for mobile menu to close
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const headerOffset = 80; // Adjust based on your header height
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
              onClick={() => navigateTo('home')}
              style={{ color: isMobileMenuOpen ? '#ffffff' : 'inherit' }}
            >
              <span className="header-logo-text">{SITE.NAME}</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="header-desktop-nav">
              <div className="header-nav-items">
                {navigation.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="header-nav-button"
                  >
                    {item.name}
                  </motion.button>
                ))}
                {/* Language switcher - Desktop */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
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
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
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
          {navigation.map((item, index) => (
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
              onClick={() => scrollToSection(item.href)}
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