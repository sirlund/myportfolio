import { ReactNode } from 'react';

/**
 * Heading Component - Semantic headings with consistent styling
 *
 * Usage:
 *   <Heading level={1}>Hero Title</Heading>
 *   <Heading level={2}>{t('about.title')}</Heading>
 *   <Heading level={3} className="custom-class">Subtitle</Heading>
 */

export interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Build CSS classes based on level
  const classes = [
    'heading',
    `heading-${level}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
