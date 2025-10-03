import { motion } from 'motion/react';
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
            © {currentYear} Nicolás Lundin. Maybe some rights reserved :)
          </div>

          <div className="footer-links">
            <motion.a
              href="https://linkedin.com/in/nicolaslundin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://dribbble.com/sirlund"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="footer-link"
            >
              Dribbble
            </motion.a>
            <motion.a
              href="mailto:nlundin@gmail.com"
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