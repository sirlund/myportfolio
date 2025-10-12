import { motion } from 'motion/react';
import { useLanguage } from '../../lib/contexts';
import { SITE, CONTACT } from '../../lib/constants';
import { Text, Link } from '../base';
import '../../styles/Footer.css';

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
          <Text size="sm" className="footer-copyright">
            © {currentYear} {SITE.NAME}. {t('footer.rights') as string}
          </Text>

          <div className="footer-links">
            <motion.div whileHover={{ y: -2 }}>
              <Link href={CONTACT.LINKEDIN} external className="footer-link">
                {t('contact.linkedin')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href={CONTACT.DRIBBBLE} external className="footer-link">
                {t('contact.dribbble')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href={`mailto:${CONTACT.EMAIL}`} className="footer-link">
                {t('contact.email')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}