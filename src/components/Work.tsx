import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useNavigation } from "../App";
import { Icon } from "./icons";
import imgMindstudio from "../assets/mindstudio_cover.png";
import imgTreez from "../assets/treez_cover.png";
import '../styles/Work.css';

// Mindstudio Icon Component
function MindstudioIcon() {
  return (
    <div className="mindstudio-icon">
      <Icon name="mindstudio" size="100%" />
    </div>
  );
}

// Treez Icon Component
function TreezIcon() {
  return (
    <div className="treez-icon">
      <Icon name="treez" size="100%" color="#404040" />
    </div>
  );
}

// Simple placeholder icons for other projects
function WeniaIcon() {
  return (
    <div className="placeholder-icon">
      <span>W</span>
    </div>
  );
}

function NacionalIcon() {
  return (
    <div className="placeholder-icon">
      <span>NMP</span>
    </div>
  );
}

function KlareIcon() {
  return (
    <div className="placeholder-icon">
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
    backgroundColor: "#255fb3",
    textColor: "white",
    icon: <MindstudioIcon />,
    image: imgMindstudio,
    route: "mindstudio" as const,
  },
  {
    id: 2,
    title:
      "At Wenia, I created a revolutionary mobile crypto experience that simplified complex financial processes.",
    description:
      "As the UI/UX lead, I designed a streamlined mobile application that makes cryptocurrency trading accessible to everyday users, focusing on clear information architecture and intuitive user flows that reduce the complexity of digital asset management.",
    backgroundColor: "#8b5cf6",
    textColor: "white",
    icon: <WeniaIcon />,
    image:
      "https://images.unsplash.com/photo-1634542118071-f391e9a0cfb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcnlwdG8lMjBhcHB8ZW58MXx8fHwxNzU4OTIyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    route: "wenia" as const,
  },
  {
    id: 3,
    title:
      "At Treez, I developed a design system that ensured consistent product quality across platforms",
    description:
      "As the Design System Lead, I spearheaded the development of Root DS — a scalable and accessible system that effectively addressed years of design debt, enhancing consistency, clarity, and efficiency.",
    backgroundColor: "#f1f6ea",
    textColor: "#29292a",
    descriptionColor: "#6d6d6e",
    buttonColor: "white",
    buttonTextColor: "black",
    icon: <TreezIcon />,
    image: imgTreez,
    route: "treez" as const,
  },
  {
    id: 4,
    title:
      "At Nacional Monte de Piedad, I modernized Mexico's largest pawn shop chain through systematic design innovation.",
    description:
      "As the lead designer, I developed a comprehensive design system that transformed their digital financial services, creating consistent user experiences across all customer touchpoints while maintaining their trusted brand heritage.",
    backgroundColor: "#dc2626",
    textColor: "white",
    icon: <NacionalIcon />,
    image:
      "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5MjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    route: "nacional" as const,
  },
  {
    id: 5,
    title:
      "At Klare, I transformed insurance from a bureaucratic maze into an intuitive digital experience.",
    description:
      "Leading the UI team, I redesigned the entire life insurance journey, converting a historically slow and complex process into a 100% digital, user-friendly experience that customers could complete with confidence and ease.",
    backgroundColor: "#059669",
    textColor: "white",
    icon: <KlareIcon />,
    image:
      "https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODkyMjg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    route: "klare" as const,
  },
];

export function Work() {
  const { navigateTo } = useNavigation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="work" className="work-section" ref={ref}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="work-project-item"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <div className="work-project-container">
            <div className="work-project-content">
              <div className="work-project-inner">
                {/* Content Section */}
                <div className="project-content-container">
                  {/* Icon */}
                  <div className="project-icon-container">
                    {project.icon}
                  </div>

                  {/* Text */}
                  <div className="project-text-section">
                    <div className="project-title-container">
                      <h2
                        className="project-title"
                        style={{ color: project.textColor }}
                      >
                        {project.title}
                      </h2>
                    </div>
                    <div className="project-description-container">
                      <p
                        className="project-description"
                        style={{
                          color:
                            project.descriptionColor ||
                            project.textColor,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    onClick={() => navigateTo(project.route)}
                    className="project-button"
                    style={{
                      backgroundColor:
                        project.buttonColor || "white",
                      color: project.buttonTextColor || "black",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="project-button-text">
                      View Project
                    </span>
                  </motion.button>
                </div>

                {/* Image Section */}
                <div className="project-image-section">
                  <div className="project-image-container">
                    <img
                      alt={`${project.title} preview`}
                      className="project-image"
                      src={project.image}
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