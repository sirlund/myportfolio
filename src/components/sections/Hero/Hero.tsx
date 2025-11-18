import { motion } from 'motion/react';
import { useRef } from 'react';
import { ThreeCanvas } from '../ThreeCanvas';
import { useLanguage } from '@/contexts';
import { Heading, Text, Button } from '@/components/base';
import styles from './Hero.module.css';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const scrollToWork = () => {
    // Update URL with hash
    window.history.pushState({ route: 'home', section: '#work' }, '', '/#work');

    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className={styles.heroSection}
    >
      <div className={styles.canvasContainer}>
        <ThreeCanvas />
      </div>

      {/* Main content */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentCenter}>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Heading level={1} className={styles.title}>
                  {t('hero.title')}
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Text size="lg" color="muted" className={styles.description}>
                  {t('hero.subtitle') as string}
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  variant="link"
                  onClick={scrollToWork}
                  className="hero-button"
                >
                  {t('hero.viewWork')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={styles.scrollIndicator}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="32"
            viewBox="0 0 20 32"
            fill="none"
            className={styles.scrollIcon}
          >
            {/* Mouse body */}
            <rect 
              x="1" 
              y="1" 
              width="18" 
              height="26" 
              rx="9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
            {/* Scroll wheel */}
            <motion.rect 
              x="8.5" 
              y="6" 
              width="3" 
              height="6" 
              rx="1.5" 
              fill="currentColor"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Bottom indicator line */}
            <motion.line 
              x1="10" 
              y1="30" 
              x2="10" 
              y2="31" 
              stroke="currentColor" 
              strokeWidth="1.5"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}