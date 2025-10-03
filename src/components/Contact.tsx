import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import '../styles/Contact.css';

const contactLinks = [
  {
    name: "Email",
    href: "mailto:nlundin@gmail.com",
    description: "nlundin@gmail.com"
  },
  {
    name: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://linkedin.com/in/nicolaslundin",
    description: "Connect with me"
  },
  {
    name: "Dribbble",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://dribbble.com/sirlund",
    description: "View my work"
  },
  {
    name: "Resume",
    href: "#",
    description: "Download PDF"
  }
];

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
          <h2 className="contact-title">Let's Connect</h2>

          <p className="contact-description">
            I'm always interested in discussing new opportunities, especially those involving
            design systems, fintech, or complex product challenges. Feel free to reach out if
            you'd like to work together or just want to chat about design.
          </p>

          <div className="contact-links">
            {contactLinks.map((link, index) => (
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