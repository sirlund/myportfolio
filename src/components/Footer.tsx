import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE, CONTACT } from '../config/constants';
import '../styles/Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-inner"
        >
          <div className="footer-copyright">
            © {currentYear} {SITE.NAME}. {t('footer.rights')}
          </div>

          <div className="footer-links">
            <motion.a
              href={CONTACT.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              {t('contact.linkedin')}
            </motion.a>
            <motion.a
              href={CONTACT.DRIBBBLE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              {t('contact.dribbble')}
            </motion.a>
            <motion.a
              href={`mailto:${CONTACT.EMAIL}`}
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              {t('contact.email')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}