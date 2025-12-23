import styles from './CardGrid.module.css';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'vertical' | 'horizontal';
}

export function Card({ icon, title, description, variant = 'vertical' }: CardProps) {
  return (
    <div className={`${styles.card} ${variant === 'horizontal' ? styles.horizontal : ''}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

interface CardGridProps {
  cards: {
    icon?: React.ReactNode;
    title: string;
    description?: string;
  }[];
  variant?: 'vertical' | 'horizontal';
  columns?: number;
}

export function CardGrid({ cards, variant = 'vertical', columns }: CardGridProps) {
  const gridStyle = columns ? {
    '--custom-cols': columns
  } as React.CSSProperties : undefined;

  return (
    <div className={styles.grid} style={gridStyle}>
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          variant={variant}
        />
      ))}
    </div>
  );
}
