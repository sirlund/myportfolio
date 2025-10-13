import { motion } from 'motion/react';
import { useLanguage } from '../../../lib/contexts';
import { SITE, CONTACT } from '../../../lib/constants';
import { Text, Link } from '../../base';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.inner}
        >
          <Text size="sm" className={styles.copyright}>
            © {currentYear} {SITE.NAME}. {t('footer.rights') as string}
          </Text>

          <div className={styles.links}>
            <motion.div whileHover={{ y: -2 }}>
              <Link href={CONTACT.LINKEDIN} external>
                {t('contact.linkedin')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href={CONTACT.DRIBBBLE} external>
                {t('contact.dribbble')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href={`mailto:${CONTACT.EMAIL}`}>
                {t('contact.email')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
