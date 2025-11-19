import styles from './CardGrid.module.css';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

interface CardGridProps {
  cards: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className={styles.grid}>
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
