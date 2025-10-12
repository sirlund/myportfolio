import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../../App';
import { useLanguage } from '../../lib/contexts';
import { Image } from '../base';
import { useState, useEffect } from 'react';
import '../../styles/CaseStudyLayout.css';

interface ProjectDetail {
  label: string;
  value: string;
}

interface CaseStudySection {
  title: string;
  content: string | React.ReactNode;
  fullWidth?: boolean;
}

interface CaseStudyLayoutProps {
  // Hero section
  title: string;
  subtitle: string;
  heroImage: string;
  
  // Project details
  details: ProjectDetail[];
  
  // Overview section
  overview: {
    title: string;
    content: string;
  };
  
  // Main sections
  sections: CaseStudySection[];
  
  // Additional custom content
  children?: React.ReactNode;
}

export function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  details,
  overview,
  sections,
  children
}: CaseStudyLayoutProps) {
  const { navigateToWork } = useNavigation();
  const { t } = useLanguage();
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

  return (
    <div className="case-study-container">
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
        className="case-study-back-button-fixed"
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
        className="case-study-back-nav"
      >
        <div className="case-study-back-nav-container">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToWork}
            className="case-study-back-button"
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
        className="case-study-hero"
      >
        <div className="case-study-hero-container">
          {/* Title Section */}
          <div className="case-study-title-section">
            <h1>{title}</h1>
            <p className="case-study-subtitle">
              {subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="case-study-hero-image">
            <Image
              src={heroImage}
              alt={title}
            />
          </div>

          {/* Project Details Grid */}
          <div className="case-study-details-grid">
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="case-study-detail-item"
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

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="case-study-overview"
      >
        <div className="case-study-overview-container">
          <h2>{overview.title}</h2>
          <div className="case-study-overview-content">
            {overview.content.split('\n\n').map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content Sections */}
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
          className="case-study-section"
        >
          <div className={`case-study-section-container ${section.fullWidth ? 'case-study-section-container-full' : ''}`}>
            <h2>{section.title}</h2>
            <div className="case-study-section-content">
              {typeof section.content === 'string' ? (
                <div className="case-study-section-text">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                  ))}
                </div>
              ) : (
                section.content
              )}
            </div>
          </div>
        </motion.section>
      ))}

      {/* Custom Children Content */}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="case-study-custom-content"
        >
          {children}
        </motion.div>
      )}

      {/* Bottom Spacing */}
      <div className="case-study-bottom-spacing" />
    </div>
  );
}