import { ReactNode, ButtonHTMLAttributes } from 'react';

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
  const classes = [
    'button',
    `button-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
