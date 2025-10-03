import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../App';
import '../styles/Header.css';

const navigation = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const { currentRoute, navigateTo } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          window.history.pushState({ route: 'home', section: href }, '', `/myportfolio/${href}`);

          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Increased delay to account for animations
      } else {
        // Update URL with hash
        window.history.pushState({ route: 'home', section: href }, '', `/myportfolio/${href}`);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`header ${
        isScrolled
          ? 'header-scrolled'
          : 'header-transparent'
      }`}
    >
      <nav className="header-nav">
        <div className="header-inner">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="header-logo"
            onClick={() => navigateTo('home')}
          >
            <span className="header-logo-text">Nicolás Lundin</span>
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
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="header-mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="header-mobile-nav"
        >
          <div className="header-mobile-nav-items">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="header-mobile-nav-button"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}