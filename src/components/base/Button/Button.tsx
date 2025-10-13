import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

/**
 * Button Component - Reusable button with variants
 *
 * Usage:
 *   <Button variant="primary" onClick={handleClick}>Click me</Button>
 *   <Button variant="ghost">Ghost button</Button>
 *   <Button variant="link">Link style</Button>
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'link';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = [styles.button, className].filter(Boolean).join(' ');

  return (
    <button className={classes} data-variant={variant} {...props}>
      {children}
    </button>
  );
}
