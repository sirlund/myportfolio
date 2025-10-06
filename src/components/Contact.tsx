import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_SECTION } from '../config/constants';
import '../styles/Contact.css';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">{CONTACT_SECTION.TITLE}</h2>

          <p className="contact-description">
            {CONTACT_SECTION.DESCRIPTION}
          </p>

          <div className="contact-links">
            {CONTACT_SECTION.LINKS.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.rel}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="contact-link"
              >
                <div>
                  <div className="contact-link-name">
                    {link.name}
                  </div>
                  <div className="contact-link-description">
                    {link.description}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="contact-link-icon"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}