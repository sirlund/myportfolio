import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts";
import { Icon } from "@/components/icons";
import { Heading, Text, Button, Image } from "@/components/base";
import { useCaseStudyTranslation } from '@/lib/hooks';
import coverImgMindstudio from "@/assets/images/case-studies/mindstudio_coverImg.png";
import coverImgTreez from "@/assets/images/case-studies/treez/treez_coverImg.png";
import coverImgWenia from "@/assets/images/case-studies/wenia_coverImg.png";
import coverImgNMP from "@/assets/images/case-studies/nmp_coverImg.png";
import coverImgKlare from "@/assets/images/case-studies/klare_coverImg.png";
import styles from './Work.module.css';

const baseProjects = [
  {
    id: 1,
    className: styles.projectMindstudio,
    icon: <Icon name="mindstudio" height="100%" />,
    image: coverImgMindstudio,
    route: "mindstudio" as const,
    buttonType: 'inverse',
  },
  {
    id: 2,
    className: styles.projectWenia,
    icon: <Icon name="wenia" height="100%" />,
    image: coverImgWenia,
    route: "wenia" as const,
    buttonType: 'primary',
  },
  {
    id: 3,
    className: styles.projectTreez,
    icon: <Icon name="treez" height="100%" />,
    image: coverImgTreez,
    route: "treez" as const,
    buttonType: 'primary',
  },
  {
    id: 4,
    className: styles.projectNMP,
    icon: <Icon name="nmp" height="100%" />,
    image: coverImgNMP,
    route: "nmp" as const,
    buttonType: 'primary',
  },
  {
    id: 5,
    className: styles.projectKlare,
    icon: <Icon name="klare" height="100%" />,
    image: coverImgKlare,
    route: "klare" as const,
    buttonType: 'inverse',
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
  };

  return (
    <section id="work" className={styles.workSection} ref={ref}>
      {/* <motion.div
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
      </motion.div> */}

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