import { CaseStudyLayout } from './CaseStudyLayout';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import '../../styles/CaseStudyContent.css';

export function MindStudioCaseStudy() {
  return (
    <CaseStudyLayout
      title="MindStudio AI Platform"
      subtitle="Building a comprehensive design system to scale AI-driven applications from chaos to systematic excellence."
      heroImage="https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMGludGVyZmFjZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg5Mzk0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      details={[
        { label: "Role", value: "Lead Designer" },
        { label: "Duration", value: "8 months" },
        { label: "Year", value: "2024" },
        { label: "Team", value: "2 Designers, 4 Engineers, 1 PM" }
      ]}
      overview={{
        title: "Project Overview",
        content: "At Mindstudio, I transformed design complexity into a systematic approach that facilitated the scaling of AI-driven applications. As the lead designer at MindSet DS, I developed a robust design system from inception.\n\nThe challenge was immense: create order from the chaos of rapidly developing AI tools while ensuring scalability, consistency, and exceptional user experience across 20+ different AI-powered applications."
      }}
      sections={[
        {
          title: "The Challenge",
          content: "The complexity of AI-driven applications created inconsistencies across the platform, making it difficult to scale and maintain design quality as new features were rapidly developed. The existing design process was fragmented, leading to duplicated efforts and poor user experiences across different AI tools.\n\nTeams were spending more time reinventing design solutions than focusing on AI innovation. Each product team had their own interpretation of components, creating a disjointed ecosystem that confused users and slowed development cycles."
        },
        {
          title: "Design System Architecture",
          content: (
            <div className="cs-content-wrapper">
              <div className="cs-two-column">
                <div>
                  <h3 className="cs-section-heading">Foundation Layer</h3>
                  <ul className="cs-feature-list">
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Design tokens for colors, typography, and spacing</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Grid systems and layout principles</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Accessibility guidelines and standards</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Icon library and illustration style</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="cs-section-heading">Component Layer</h3>
                  <ul className="cs-feature-list">
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Atomic design methodology implementation</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>50+ reusable UI components</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>AI-specific components for data visualization</span>
                    </li>
                    <li className="cs-feature-item">
                      <span className="cs-bullet"></span>
                      <span>Interactive patterns for machine learning interfaces</span>
                    </li>
                  </ul>
                </div>
              </div>

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738606410165-46da2b5b700e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHRva2VucyUyMGNvbG9yc3xlbnwxfHx8fDE3NTg5Mzk0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design tokens and color system"
                className="cs-image-full"
              />
              <p className="cs-image-caption">
                Design tokens and color system implementation for dark and light modes
              </p>
            </div>
          )
        },
        {
          title: "Implementation Strategy",
          content: "As the lead designer at MindSet DS, I developed a robust design system from inception, ensuring alignment between design and development, implementing dark mode theming, and optimizing the design, deployment, and evolution of AI-powered tools.\n\nThe implementation focused on three core principles: scalability, accessibility, and developer experience. We started with the most critical components and gradually expanded the system based on real usage patterns and team feedback."
        },
        {
          title: "Key System Features",
          content: (
            <div className="cs-content-wrapper">
              <div className="cs-feature-block-list">
                <div className="cs-feature-block">
                  <h3>Dark Mode Implementation</h3>
                  <p>
                    Implemented a comprehensive dark mode system that automatically adapts all components
                    and maintains accessibility standards. This included creating semantic color tokens
                    that work across both light and dark themes while preserving contrast ratios.
                  </p>
                </div>

                <div className="cs-feature-block">
                  <h3>AI-Specific Components</h3>
                  <p>
                    Developed specialized components for AI interfaces including data visualization
                    widgets, model performance indicators, and interactive training data displays.
                    These components standardized how complex AI information is presented across the platform.
                  </p>
                </div>

                <div className="cs-feature-block">
                  <h3>Documentation & Adoption</h3>
                  <p>
                    Created comprehensive documentation including usage guidelines, code examples,
                    and design principles. Established a governance model for design system evolution
                    and trained development teams on implementation best practices.
                  </p>
                </div>
              </div>

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737918543099-dfa8ec2e3909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1ODg3NzAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Component library showcase"
                className="cs-image-full"
              />
              <p className="cs-image-caption">
                Component library showcasing atomic design methodology
              </p>
            </div>
          )
        },
        {
          title: "Results & Impact",
          content: "The design system transformation delivered measurable results that exceeded expectations. Design-to-development handoff time was reduced by 60%, while establishing consistency across 20+ AI tools enabled faster product iterations and significantly improved user experience.\n\nThe system became the foundation for all new product development, with teams reporting 40% faster feature delivery and 75% reduction in design-related bugs. Most importantly, user satisfaction scores increased by 35% as the consistent experience reduced confusion and cognitive load."
        }
      ]}
    />
  );
}

export default MindStudioCaseStudy;