import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts";
import { Icon } from "@/components/icons";
import { Heading, Text, Button, Image } from "@/components/base";
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgMindstudio from "@/assets/images/case-studies/mindstudio_cover.png";
import imgTreez from "@/assets/images/case-studies/treez_cover.png";
import styles from './Work.module.css';

const baseProjects = [
  {
    id: 1,
    className: styles.projectMindstudio,
    icon: <Icon name="mindstudio" size={52} />,
    image: imgMindstudio,
    route: "mindstudio" as const,
    buttonType: 'inverse',
  },
  {
    id: 2,
    className: styles.projectWenia,
    icon: <Icon name="placeholder" size={40} />,
    image: "https://images.unsplash.com/photo-1634542118071-f391e9a0cfb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcnlwdG8lMjBhcHB8ZW58MXx8fHwxNzU4OTIyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    route: "wenia" as const,
    buttonType: 'primary',
  },
  {
    id: 3,
    className: styles.projectTreez,
    icon: <Icon name="treez" size={72} />,
    image: imgTreez,
    route: "treez" as const,
    buttonType: 'primary',
  },
  {
    id: 4,
    className: styles.projectNMP,
    icon: <Icon name="placeholder" size={40} />,
    image: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5MjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    route: "nmp" as const,
    buttonType: 'primary',
  },
  {
    id: 5,
    className: styles.projectKlare,
    icon: <Icon name="placeholder" size={40} />,
    image: "https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODkyMjg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    route: "klare" as const,
    buttonType: 'primary',
  },
];

export function Work() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, t } = useLanguage();
  const mindstudioTranslation = useCaseStudyTranslation('mindstudio');
  const treezTranslation = useCaseStudyTranslation('treez');
  const weniaTranslation = useCaseStudyTranslation('wenia');
  const nmpTranslation = useCaseStudyTranslation('nmp');
  const klareTranslation = useCaseStudyTranslation('klare');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const translationMap: Record<string, ReturnType<typeof useCaseStudyTranslation>> = {
    mindstudio: mindstudioTranslation,
    treez: treezTranslation,
    wenia: weniaTranslation,
    nmp: nmpTranslation,
    klare: klareTranslation,
  };

  const projects = baseProjects.map((project) => {
    const translation = translationMap[project.route];

    return {
      ...project,
      title: translation?.home?.title ?? '',
      description: translation?.home?.subtitle ?? '',
    };
  });

  const navigateToProject = (projectRoute: string) => {
    const path = language === 'es' ? `/es/${projectRoute}` : `/${projectRoute}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="work" className={styles.workSection} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={styles.comingSoonContainer}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Heading level={2} className={styles.comingSoonTitle}>
            {t('work.comingSoon') as string}
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Text size="lg" color="muted" className={styles.comingSoonDescription}>
            {t('work.description') as string}
          </Text>
        </motion.div>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`${styles.projectItem} ${project.className}`}
        >
          <div className={styles.projectInner}>
            <div className={styles.projectContent}>
              <div className={styles.projectIconContainer}>
                {project.icon}
              </div>

              <Heading level={2} className={styles.projectTitle}>
                {project.title}
              </Heading>

              <Text size="lg" className={styles.projectDescription}>
                {project.description}
              </Text>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToProject(project.route)}
                  variant={project.buttonType}
                  className={styles.projectButton}
                >
                  View Project
                </Button>
              </motion.div>
            </div>

            <div className={styles.projectImageContainer}>
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                className={styles.projectImage}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}