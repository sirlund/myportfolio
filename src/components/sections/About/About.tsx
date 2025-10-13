import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../../lib/contexts';
import { Section, Container, Heading, Text, List, ListItem } from '../../base';
import styles from './About.module.css';

export function About() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = t('about.toolsList') as string[];
  const skills = t('about.skillsList') as string[];
  const industries = t('about.industriesList') as string[];

  return (
    <Section id="about" className={styles.aboutSection}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2}>{t('about.title')}</Heading>

          <div className={styles.content}>
            <Text size="lg" color="muted">{t('about.description1') as string}</Text>
            <Text size="lg" color="muted">{t('about.description2') as string}</Text>
            <Text size="lg" color="muted">{t('about.description3') as string}</Text>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.divider}
          >
            <div className={styles.grid}>
              <div>
                <Heading level={4}>{t('about.tools')}</Heading>
                <List variant="compact" className={styles.gridContent}>
                  {tools.map((tool, index) => (
                    <ListItem key={index}>
                      <Text size="sm">{tool}</Text>
                    </ListItem>
                  ))}
                </List>
              </div>

              <div>
                <Heading level={4}>{t('about.skills')}</Heading>
                <List variant="compact" className={styles.gridContent}>
                  {skills.map((skill, index) => (
                    <ListItem key={index}>
                      <Text size="sm">{skill}</Text>
                    </ListItem>
                  ))}
                </List>
              </div>

              <div>
                <Heading level={4}>{t('about.industries')}</Heading>
                <List variant="compact" className={styles.gridContent}>
                  {industries.map((industry, index) => (
                    <ListItem key={index}>
                      <Text size="sm">{industry}</Text>
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}