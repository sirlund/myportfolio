import styles from './TwoColumnLayout.module.css';

interface TwoColumnLayoutProps {
  columns: {
    title: string;
    content: string;
  }[];
}

export function TwoColumnLayout({ columns }: TwoColumnLayoutProps) {
  return (
    <div className={styles.layout}>
      {columns.map((column, index) => (
        <div key={index} className={styles.column}>
          <h3 className={styles.title}>{column.title}</h3>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: column.content }}
          />
        </div>
      ))}
    </div>
  );
}
