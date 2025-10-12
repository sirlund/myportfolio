import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../lib/contexts';
import { CONTACT } from '../../lib/constants';
import { Section, Container, Heading, Text } from '../base';
import '../../styles/sections/Contact.css';

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
      target: '_blank' as const,
      rel: 'noopener noreferrer',
      href: CONTACT.LINKEDIN,
      description: t('contact.linkedinDesc'),
    },
    // {
    //   name: t('contact.dribbble'),
    //   target: '_blank' as const,
    //   rel: 'noopener noreferrer',
    //   href: CONTACT.DRIBBBLE,
    //   description: t('contact.dribbbleDesc'),
    // },
    {
      name: t('contact.resume'),
      href: CONTACT.RESUME,
      description: t('contact.resumeDesc'),
    },
  ];

  return (
    <Section id="contact" variant="contact">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2}>{t('contact.title')}</Heading>

          <Text size="lg" color="muted" className="content">
            {t('contact.description') as string}
          </Text>

          <div className="links">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.rel}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="link"
              >
                <div>
                  <Text size="md" className="link-name">
                    {link.name}
                  </Text>
                  <Text size="sm" color="muted" className="link-description">
                    {link.description}
                  </Text>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="link-icon"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}