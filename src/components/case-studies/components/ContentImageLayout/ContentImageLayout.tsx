import { ReactNode } from 'react';
import styles from './ContentImageLayout.module.css';

interface ContentImageLayoutProps {
  content: ReactNode;
  image: ReactNode;
  reverse?: boolean;
}

export function ContentImageLayout({ content, image, reverse = false }: ContentImageLayoutProps) {
  return (
    <div className={`${styles.layout} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.contentSide}>{content}</div>
      <div className={styles.imageSide}>{image}</div>
    </div>
  );
}
