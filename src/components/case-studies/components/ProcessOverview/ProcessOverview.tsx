import styles from './ProcessOverview.module.css';

interface ProcessPhase {
  title: string;
  items: string[];
}

interface ProcessOverviewProps {
  title?: string;
  phases: ProcessPhase[];
  bottomLabel?: string;
}

/**
 * ProcessOverview - Timeline-style process visualization
 *
 * Shows process phases in a horizontal timeline with milestones
 */
export function ProcessOverview({
  title = "Process Overview",
  phases,
  bottomLabel
}: ProcessOverviewProps) {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <div className={styles.timeline}>
        {phases.map((phase, index) => (
          <div key={index} className={styles.phase}>
            {/* Milestone dot */}
            <div className={styles.milestone}>
              <div className={styles.dot} />
            </div>

            {/* Phase content */}
            <div className={styles.phaseContent}>
              <h4 className={styles.phaseTitle}>{phase.title}</h4>
              <ul className={styles.phaseItems}>
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Connector line (except for last item) */}
            {index < phases.length - 1 && (
              <div className={styles.connector} />
            )}
          </div>
        ))}
      </div>

      {bottomLabel && (
        <div className={styles.bottomLabel}>
          {bottomLabel}
        </div>
      )}
    </div>
  );
}
