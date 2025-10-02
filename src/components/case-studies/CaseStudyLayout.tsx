import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../../App';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useEffect } from 'react';

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
    <div className="min-h-screen">
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
        className="fixed top-[88px] left-6 z-50 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border/20 hover:bg-background/90 flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
        style={{ pointerEvents: showBackButton ? 'auto' : 'none' }}
      >
        <ArrowLeft size={18} />
        <span>Back to Work</span>
      </motion.button>

      {/* Back Navigation (visible initially) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToWork}
            className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span>Back to Work</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Title Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <ImageWithFallback
              src={heroImage}
              alt={title}
              className="w-full h-[60vh] md:h-[70vh] object-cover rounded-2xl"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h6 className="mb-3 text-muted-foreground uppercase tracking-wider text-sm">
                  {detail.label}
                </h6>
                <p className="leading-relaxed">
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
        className="mb-24"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="mb-8">{overview.title}</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            {overview.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
          className="mb-24"
        >
          <div className={`mx-auto px-6 lg:px-8 ${section.fullWidth ? 'max-w-7xl' : 'max-w-4xl'}`}>
            <h2 className="mb-8">{section.title}</h2>
            <div className="text-muted-foreground leading-relaxed">
              {typeof section.content === 'string' ? (
                <div className="text-lg space-y-6">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
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
          className="mb-24"
        >
          {children}
        </motion.div>
      )}

      {/* Bottom Spacing */}
      <div className="pb-24" />
    </div>
  );
}