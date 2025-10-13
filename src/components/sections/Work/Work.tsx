import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../../lib/contexts";
import { Icon } from "../../icons";
import { Heading, Text, Button, Image } from "../../base";
import imgMindstudio from "../../../assets/mindstudio_cover.png";
import imgTreez from "../../../assets/treez_cover.png";
import styles from './Work.module.css';

// Mindstudio Icon Component
function MindstudioIcon() {
  return (
    <div className={styles.mindstudioIcon}>
      <Icon name="mindstudio" size="100%" />
    </div>
  );
}

// Treez Icon Component
function TreezIcon() {
  return (
    <div className={styles.treezIcon}>
      <Icon name="treez" size="100%" />
    </div>
  );
}

// Simple placeholder icons for other projects
function WeniaIcon() {
  return (
    <div className={styles.placeholderIcon}>
      <span>W</span>
    </div>
  );
}

function NacionalIcon() {
  return (
    <div className={styles.placeholderIcon}>
      <span>NMP</span>
    </div>
  );
}

function KlareIcon() {
  return (
    <div className={styles.placeholderIcon}>
      <span>K</span>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title:
      "At Mindstudio, I transformed design complexity into a systematic approach that facilitated the scaling of AI-driven applications.",
    description:
      "As the lead designer at MindSet DS, I developed a robust design system from inception, ensuring alignment between design and development, implementing dark mode theming, and optimizing the design, deployment, and evolution of AI-powered tools.",
    className: styles.projectMindstudio,
    icon: <MindstudioIcon />,
    image: imgMindstudio,
    route: "mindstudio" as const,
  },
  // {
  //   id: 2,
  //   title:
  //     "At Wenia, I created a revolutionary mobile crypto experience that simplified complex financial processes.",
  //   description:
  //     "As the UI/UX lead, I designed a streamlined mobile application that makes cryptocurrency trading accessible to everyday users, focusing on clear information architecture and intuitive user flows that reduce the complexity of digital asset management.",
  //   className: "project-wenia",
  //   icon: <WeniaIcon />,
  //   image:
  //     "https://images.unsplash.com/photo-1634542118071-f391e9a0cfb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcnlwdG8lMjBhcHB8ZW58MXx8fHwxNzU4OTIyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   route: "wenia" as const,
  // },
  {
    id: 3,
    title:
      "At Treez, I developed a design system that ensured consistent product quality across platforms",
    description:
      "As the Design System Lead, I spearheaded the development of Root DS — a scalable and accessible system that effectively addressed years of design debt, enhancing consistency, clarity, and efficiency.",
    className: styles.projectTreez,
    icon: <TreezIcon />,
    image: imgTreez,
    route: "treez" as const,
  },
  // {
  //   id: 4,
  //   title:
  //     "At Nacional Monte de Piedad, I modernized Mexico's largest pawn shop chain through systematic design innovation.",
  //   description:
  //     "As the lead designer, I developed a comprehensive design system that transformed their digital financial services, creating consistent user experiences across all customer touchpoints while maintaining their trusted brand heritage.",
  //   className: "project-nacional",
  //   icon: <NacionalIcon />,
  //   image:
  //     "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5MjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   route: "nacional" as const,
  // },
  // {
  //   id: 5,
  //   title:
  //     "At Klare, I transformed insurance from a bureaucratic maze into an intuitive digital experience.",
  //   description:
  //     "Leading the UI team, I redesigned the entire life insurance journey, converting a historically slow and complex process into a 100% digital, user-friendly experience that customers could complete with confidence and ease.",
  //   className: "project-klare",
  //   icon: <KlareIcon />,
  //   image:
  //     "https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODkyMjg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
  //   route: "klare" as const,
  // },
];

export function Work() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
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
          <div className={styles.projectContainer}>
            <div className={styles.projectContent}>
              <div className={styles.projectInner}>
                <div className={styles.projectContentContainer}>
                  <div className={styles.projectIconContainer}>
                    {project.icon}
                  </div>

                  <div className={styles.projectTextSection}>
                    <div className={styles.projectTitleContainer}>
                      <Heading
                        level={2}
                        className={styles.projectTitle}
                      >
                        {project.title}
                      </Heading>
                    </div>
                    <div className={styles.projectDescriptionContainer}>
                      <Text
                        size="lg"
                        className={styles.projectDescription}
                      >
                        {project.description}
                      </Text>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => navigateToProject(project.route)}
                      variant="primary"
                      className={styles.projectButton}
                    >
                      View Project
                    </Button>
                  </motion.div>
                </div>

                <div className={styles.projectImageSection}>
                  <div className={styles.projectImageContainer}>
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={styles.projectImage}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}