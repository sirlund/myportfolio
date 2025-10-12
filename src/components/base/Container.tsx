import { ReactNode } from 'react';

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
  const classes = ['container', className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}
