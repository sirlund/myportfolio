import { ReactNode } from 'react';
import styles from './Container.module.css';

/**
 * Container Component - Max-width wrapper with responsive padding
 *
 * Usage:
 *   <Container>
 *     <Heading level={2}>Title</Heading>
 *     <Text>Content</Text>
 *   </Container>
 */

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}
