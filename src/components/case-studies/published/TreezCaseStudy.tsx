import { CaseStudyLayout } from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgTreez from '@/assets/images/case-studies/treez_cover.png';

export function TreezCaseStudy() {
  const t = useCaseStudyTranslation('treez');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgTreez}
      details={t.details}
      overview={t.overview}
      sections={[
        {
          title: t.sections.context.title,
          content: t.sections.context.content
        },
        {
          title: t.sections.problem.title,
          content: (
            <div className={styles.contentWrapper}>
              <p>{t.sections.problem.intro}</p>

              <blockquote className={styles.quote}>
                "{t.sections.problem.quote}"
              </blockquote>

              <div className={styles.challengeList}>
                {t.sections.problem.challenges.map((challenge, index) => (
                  <div key={index} className={styles.challengeItem}>
                    <span className={styles.challengeIcon}>{challenge.icon}</span>
                    <span>{challenge.text}</span>
                  </div>
                ))}
              </div>

              <p>{t.sections.problem.conclusion}</p>
            </div>
          )
        },
        {
          title: t.sections.whyRoot.title,
          content: t.sections.whyRoot.content
        },
        {
          title: t.sections.objectives.title,
          content: t.sections.objectives.content
        },
        {
          title: t.sections.discovery.title,
          content: (
            <div className={styles.contentWrapper}>
              <p>{t.sections.discovery.intro}</p>

              <div className={styles.featureBlockList}>
                {t.sections.discovery.items.map((item, index) => (
                  <div key={index} className={styles.featureBlock}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <p>{t.sections.discovery.conclusion}</p>
            </div>
          )
        },
        {
          title: t.sections.principles.title,
          content: (
            <div className={styles.contentWrapper}>
              <p>{t.sections.principles.intro}</p>

              <div className={styles.principlesList}>
                {t.sections.principles.items.map((principle, index) => (
                  <div key={index} className={styles.principleItem}>
                    <h3>{principle}</h3>
                  </div>
                ))}
              </div>

              <p>{t.sections.principles.conclusion}</p>
            </div>
          )
        },
        {
          title: t.sections.architecture.title,
          content: (
            <div className={styles.contentWrapper}>
              <p>{t.sections.architecture.intro}</p>

              <div className={styles.twoColumn}>
                <div>
                  <h3 className={styles.sectionHeading}>{t.sections.architecture.foundations.title}</h3>
                  <ul className={styles.featureList}>
                    {t.sections.architecture.foundations.items.map((item, index) => (
                      <li key={index} className={styles.featureItem}>
                        <span className={styles.bullet}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={styles.sectionHeading}>{t.sections.architecture.components.title}</h3>
                  <ul className={styles.featureList}>
                    {t.sections.architecture.components.items.map((item, index) => (
                      <li key={index} className={styles.featureItem}>
                        <span className={styles.bullet}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={styles.sectionHeading}>{t.sections.architecture.patterns.title}</h3>
                  <ul className={styles.featureList}>
                    {t.sections.architecture.patterns.items.map((item, index) => (
                      <li key={index} className={styles.featureItem}>
                        <span className={styles.bullet}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className={styles.sectionHeading}>{t.sections.architecture.documentation.title}</h3>
                  <ul className={styles.featureList}>
                    {t.sections.architecture.documentation.items.map((item, index) => (
                      <li key={index} className={styles.featureItem}>
                        <span className={styles.bullet}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: t.sections.collaboration.title,
          content: (
            <div className={styles.contentWrapper}>
              <p dangerouslySetInnerHTML={{ __html: t.sections.collaboration.intro }}></p>

              <ul className={styles.featureList}>
                {t.sections.collaboration.items.map((item, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.bullet}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>{t.sections.collaboration.conclusion}</p>
            </div>
          )
        },
        {
          title: t.sections.outcomes.title,
          content: (
            <div className={styles.contentWrapper}>
              <p>{t.sections.outcomes.intro}</p>

              <div className={styles.metricsGrid}>
                {t.sections.outcomes.metrics.map((metric, index) => (
                  <div key={index} className={styles.metricItem}>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className={styles.quote}>
                "{t.sections.outcomes.quote.text}"
                <cite>— {t.sections.outcomes.quote.author}</cite>
              </blockquote>
            </div>
          )
        },
        {
          title: t.sections.whatsNext.title,
          content: t.sections.whatsNext.content
        },
        {
          title: t.sections.reflection.title,
          content: t.sections.reflection.content
        }
      ]}
    />
  );
}

export default TreezCaseStudy;
