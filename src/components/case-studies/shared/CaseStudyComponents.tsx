import styles from './CaseStudyComponents.module.css';
import { ReactNode } from 'react';

// Two Column Layout Component (Challenge | Solution pattern)
interface TwoColumnProps {
  columns: {
    title: string;
    content: string;
  }[];
}

export function TwoColumnLayout({ columns }: TwoColumnProps) {
  return (
    <div className={styles.twoColumnLayout}>
      {columns.map((column, index) => (
        <div key={index}>
          <h3 className={styles.columnTitle}>{column.title}</h3>
          <div
            className={styles.columnContent}
            dangerouslySetInnerHTML={{ __html: column.content }}
          />
        </div>
      ))}
    </div>
  );
}

// Card Component (for hypotheses, concepts, features)
interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

// Card Grid Component
interface CardGridProps {
  cards: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

// Diagram Container
interface DiagramProps {
  title?: string;
  children: React.ReactNode;
}

export function DiagramContainer({ title, children }: DiagramProps) {
  return (
    <div className={styles.diagramContainer}>
      {title && <h3 className={styles.diagramTitle}>{title}</h3>}
      {children}
    </div>
  );
}

// Three Column Layout (for concepts)
interface ThreeColumnProps {
  columns: {
    title: string;
    content: string;
  }[];
}

export function ThreeColumnLayout({ columns }: ThreeColumnProps) {
  return (
    <div className={styles.threeColumnLayout}>
      {columns.map((column, index) => (
        <div key={index}>
          <h3 className={styles.columnTitle}>{column.title}</h3>
          <div
            className={styles.columnContent}
            dangerouslySetInnerHTML={{ __html: column.content }}
          />
        </div>
      ))}
    </div>
  );
}

// Content + Image Side by Side Layout (Toan-style)
interface ContentImageLayoutProps {
  /**
   * Content on the left side (can be text or any ReactNode)
   */
  content: ReactNode;

  /**
   * Image/placeholder on the right side
   */
  image: ReactNode;

  /**
   * Reverse layout: image on left, content on right
   */
  reverse?: boolean;
}

export function ContentImageLayout({ content, image, reverse = false }: ContentImageLayoutProps) {
  return (
    <div className={`${styles.contentImageLayout} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.contentSide}>{content}</div>
      <div className={styles.imageSide}>{image}</div>
    </div>
  );
}

// Process Timeline Layout (Title + Description side by side)
interface ProcessStep {
  /**
   * Step number/title (e.g., "1. Auditoría")
   */
  title: string;

  /**
   * Step description
   */
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className={styles.processTimeline}>
      {steps.map((step, index) => (
        <div key={index} className={styles.processStep}>
          <div className={styles.processStepTitle}>
            <h4 dangerouslySetInnerHTML={{ __html: step.title }} />
          </div>
          <div
            className={styles.processStepDescription}
            dangerouslySetInnerHTML={{ __html: step.description }}
          />
        </div>
      ))}
    </div>
  );
}
