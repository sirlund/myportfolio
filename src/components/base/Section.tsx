import { ReactNode } from 'react';

/**
 * Section Component - Wrapper for page sections with consistent spacing
 *
 * Usage:
 *   <Section id="about" variant="about">
 *     <Container>...</Container>
 *   </Section>
 */

export interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: string;
  className?: string;
}

export function Section({ children, id, variant, className = '' }: SectionProps) {
  const classes = [
    'section',
    variant,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
