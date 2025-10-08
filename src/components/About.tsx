import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ABOUT } from '../config/constants';
import '../styles/About.css';

export function About() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">{t('about.title')}</h2>

          <div className="about-content">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-divider"
          >
            <div className="about-grid">
              <div>
                <h4 className="about-grid-title">{t('about.tools')}</h4>
                <div className="about-grid-content">
                  {ABOUT.TOOLS.map((tool, index) => (
                    <p key={index}>{tool}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="about-grid-title">{t('about.skills')}</h4>
                <div className="about-grid-content">
                  {ABOUT.SKILLS.map((skill, index) => (
                    <p key={index}>{skill}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="about-grid-title">{t('about.industries')}</h4>
                <div className="about-grid-content">
                  {ABOUT.INDUSTRIES.map((industry, index) => (
                    <p key={index}>{industry}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}