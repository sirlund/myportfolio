import { motion } from 'motion/react';
import { SITE, CONTACT } from '../config/constants';
import '../styles/Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
            © {currentYear} {SITE.NAME}. Maybe some rights reserved :)
          </div>

          <div className="footer-links">
            <motion.a
              href={CONTACT.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={CONTACT.DRIBBBLE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              Dribbble
            </motion.a>
            <motion.a
              href={`mailto:${CONTACT.EMAIL}`}
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}