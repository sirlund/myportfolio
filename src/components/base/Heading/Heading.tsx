import { ReactNode, HTMLAttributes } from 'react';
import styles from './Heading.module.css';

/**
 * Heading Component - Semantic headings with consistent styling
 *
 * Usage:
 *   <Heading level={1}>Hero Title</Heading>
 *   <Heading level={2}>{t('about.title')}</Heading>
 *   <Heading level={3} className="custom-class">Subtitle</Heading>
 */

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level, className = '', ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = [styles.heading, className].filter(Boolean).join(' ');

  return (
    <Tag className={classes} data-level={level} {...props}>
      {children}
    </Tag>
  );
}
