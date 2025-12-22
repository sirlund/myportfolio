import styles from './CardGrid.module.css';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: 'vertical' | 'horizontal';
}

export function Card({ icon, title, description, variant = 'vertical' }: CardProps) {
  return (
    <div className={`${styles.card} ${variant === 'horizontal' ? styles.horizontal : ''}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

interface CardGridProps {
  cards: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
  variant?: 'vertical' | 'horizontal';
}

export function CardGrid({ cards, variant = 'vertical' }: CardGridProps) {
  return (
    <div className={styles.grid}>
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
