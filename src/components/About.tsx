import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/About.css';

export function About() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = t('about.toolsList') as string[];
  const skills = t('about.skillsList') as string[];
  const industries = t('about.industriesList') as string[];

  return (
    <section id="about" className="section about">
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>{t('about.title')}</h2>

          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: t('about.description1') as string }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.description2') as string }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.description3') as string }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="divider"
          >
            <div className="grid">
              <div>
                <h4>{t('about.tools')}</h4>
                <div className="grid-content">
                  {tools.map((tool, index) => (
                    <p key={index}>{tool}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4>{t('about.skills')}</h4>
                <div className="grid-content">
                  {skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4>{t('about.industries')}</h4>
                <div className="grid-content">
                  {industries.map((industry, index) => (
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