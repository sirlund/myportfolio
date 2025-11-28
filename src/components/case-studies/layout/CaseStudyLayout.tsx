import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '@/contexts';
import { useLanguage } from '@/contexts';
import { Image } from '@/components/base';
import { SEO } from '@/components/SEO';
import { ContentSection, RichText } from '@/components/case-studies/shared';
import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './CaseStudyLayout.module.css';

interface ProjectDetail {
  label: string;
  value: string;
}

interface CaseStudyLayoutProps {
  // Hero section
  title: string;
  subtitle: string;
  heroImage: string;

  // Project details
  details: ProjectDetail[];

  // SEO
  seoDescription?: string;

  // Impact stats section (optional)
  impactStats?: {
    metric: string;
    label: string;
  }[];

  // Content sections (overview, introduction, main sections, etc.)
  children: ReactNode;
}

export function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  details,
  seoDescription,
  impactStats,
  children
}: CaseStudyLayoutProps) {
  const { navigateToWork } = useNavigation();
  const { language } = useLanguage();
  const { t } = useLanguage();
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowBackButton(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate SEO meta title and description
  const seoTitle = `${title} — Nicolás Lundin`;
  const seoDesc = seoDescription || subtitle;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        path={location.pathname}
        lang={language}
      />
      <div className={styles.container}>
      {/* Fixed Back Button (appears on scroll) */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showBackButton ? 1 : 0,
          y: showBackButton ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={navigateToWork}
        className={styles.backButtonFixed}
        style={{ pointerEvents: showBackButton ? 'auto' : 'none' }}
      >
        <ArrowLeft size={18} />
        <span>{t('caseStudy.backToWork')}</span>
      </motion.button>

      {/* Back Navigation (visible initially) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.backNav}
      >
        <div className={styles.backNavContainer}>
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToWork}
            className={styles.backButton}
          >
            <ArrowLeft size={18} />
            <span>{t('caseStudy.backToWork')}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.hero}
      >
        <div className={styles.heroContainer}>
          {/* Title Section */}
          <div className={styles.titleSection}>
            <h1>{title}</h1>
            <p className={styles.subtitle}>
              {subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className={styles.heroImage}>
            <Image
              src={heroImage}
              alt={title}
            />
          </div>

          {/* Project Details Grid */}
          <div className={styles.detailsGrid}>
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={styles.detailItem}
              >
                <h6>
                  {detail.label}
                </h6>
                <p>
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Impact Stats Section (optional) */}
      {impactStats && impactStats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={styles.impactStats}
        >
          <div className={styles.impactStatsContainer}>
            <div className={styles.impactStatsGrid}>
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={styles.impactStatItem}
                >
                  <div className={styles.impactMetric}>{stat.metric}</div>
                  <div className={styles.impactLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Content Sections (via children) */}
      {children}

      {/* Bottom Spacing */}
      <div className={styles.bottomSpacing} />
    </div>
    </>
  );
}