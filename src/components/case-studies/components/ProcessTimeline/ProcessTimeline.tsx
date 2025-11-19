import styles from './ProcessTimeline.module.css';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.stepTitle}>
            <h4 dangerouslySetInnerHTML={{ __html: step.title }} />
          </div>
          <div
            className={styles.stepDescription}
            dangerouslySetInnerHTML={{ __html: step.description }}
          />
        </div>
      ))}
    </div>
  );
}
