import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../../lib/contexts';
import { CONTACT } from '../../../lib/constants';
import { Section, Container, Heading, Text, BlockLink } from '../../base';
import styles from './Contact.module.css';

export function Contact() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      name: t('contact.email'),
      href: `mailto:${CONTACT.EMAIL}`,
      description: t('contact.emailDesc'),
    },
    {
      name: t('contact.linkedin'),
      href: CONTACT.LINKEDIN,
      description: t('contact.linkedinDesc'),
      external: true,
    },
    // {
    //   name: t('contact.dribbble'),
    //   href: CONTACT.DRIBBBLE,
    //   description: t('contact.dribbbleDesc'),
    //   external: true,
    // },
    {
      name: t('contact.resume'),
      href: CONTACT.RESUME,
      description: t('contact.resumeDesc'),
    },
  ];

  return (
    <Section id="contact">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2}>{t('contact.title')}</Heading>

          <Text size="lg" color="muted" className={styles.content}>
            {t('contact.description') as string}
          </Text>

          <div className={styles.links}>
            {links.map((link, index) => (
              <BlockLink
                key={link.name}
                href={link.href}
                external={link.external}
                title={link.name}
                description={link.description}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}