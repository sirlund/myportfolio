import { CaseStudyLayout } from './CaseStudyLayout';
import { ImageWithFallback } from '../ui/image';
import { useCaseStudyTranslation } from '../../hooks/useCaseStudyTranslation';
import imgMindstudio from '../../assets/mindstudio_cover.png';
import '../../styles/CaseStudyContent.css';

export function MindStudioCaseStudy() {
  const t = useCaseStudyTranslation('mindstudio');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgMindstudio}
      details={t.details}
      overview={t.overview}
      sections={[
        {
          title: t.sections.challenge.title,
          content: t.sections.challenge.content
        },
        {
          title: t.sections.architecture.title,
          content: (
            <div className="cs-content-wrapper">
              <div className="cs-two-column">
                <div>
                  <h3 className="cs-section-heading">{t.sections.architecture.foundationLayer.title}</h3>
                  <ul className="cs-feature-list">
                    {t.sections.architecture.foundationLayer.items.map((item, index) => (
                      <li key={index} className="cs-feature-item">
                        <span className="cs-bullet"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="cs-section-heading">{t.sections.architecture.componentLayer.title}</h3>
                  <ul className="cs-feature-list">
                    {t.sections.architecture.componentLayer.items.map((item, index) => (
                      <li key={index} className="cs-feature-item">
                        <span className="cs-bullet"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738606410165-46da2b5b700e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHRva2VucyUyMGNvbG9yc3xlbnwxfHx8fDE3NTg5Mzk0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t.sections.architecture.imageAlt}
                className="cs-image-full"
              />
              <p className="cs-image-caption">
                {t.sections.architecture.imageCaption}
              </p>
            </div>
          )
        },
        {
          title: t.sections.implementation.title,
          content: t.sections.implementation.content
        },
        {
          title: t.sections.features.title,
          content: (
            <div className="cs-content-wrapper">
              <div className="cs-feature-block-list">
                <div className="cs-feature-block">
                  <h3>{t.sections.features.darkMode.title}</h3>
                  <p>{t.sections.features.darkMode.description}</p>
                </div>

                <div className="cs-feature-block">
                  <h3>{t.sections.features.aiComponents.title}</h3>
                  <p>{t.sections.features.aiComponents.description}</p>
                </div>

                <div className="cs-feature-block">
                  <h3>{t.sections.features.documentation.title}</h3>
                  <p>{t.sections.features.documentation.description}</p>
                </div>
              </div>

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737918543099-dfa8ec2e3909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1ODg3NzAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t.sections.features.imageAlt}
                className="cs-image-full"
              />
              <p className="cs-image-caption">
                {t.sections.features.imageCaption}
              </p>
            </div>
          )
        },
        {
          title: t.sections.results.title,
          content: t.sections.results.content
        }
      ]}
    />
  );
}

export default MindStudioCaseStudy;