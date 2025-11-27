import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts';
import { CONTACT } from '@/lib/constants';
import { Section, Container, Heading, Text, BlockLink } from '@/components/base';
import { toast } from 'sonner';
import styles from './Contact.module.css';

export function Contact() {
  const ref = useRef(null);
  const { t, language } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CONTACT.EMAIL);
      setEmailCopied(true);
      toast.success(
        language === 'es'
          ? '¡Email copiado al portapapeles!'
          : 'Email copied to clipboard!'
      );
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      toast.error(
        language === 'es'
          ? 'Error al copiar el email'
          : 'Failed to copy email'
      );
    }
  };

  const links: Array<{
    name: string;
    href: string;
    description: string;
    external?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = [
    {
      name: t('contact.email'),
      href: `mailto:${CONTACT.EMAIL}`,
      description: emailCopied
        ? (language === 'es' ? '¡Copiado!' : 'Copied!')
        : t('contact.emailDesc'),
      onClick: handleEmailClick,
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
    // {
    //   name: t('contact.resume'),
    //   href: CONTACT.RESUME,
    //   description: t('contact.resumeDesc'),
    // },
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
                onClick={link.onClick}
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