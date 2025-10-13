import { ReactNode, AnchorHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

/**
 * Link Component - Internal and external links with consistent styling
 *
 * Usage:
 *   <Link href="/about">Internal link</Link>
 *   <Link href="https://example.com" external>External link</Link>
 *   <Link href="mailto:email@example.com">Email link</Link>
 */

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

export function Link({
  children,
  href,
  external = false,
  className = '',
  ...props
}: LinkProps) {
  const classes = [styles.link, className].filter(Boolean).join(' ');

  // External links or special protocols
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal links with React Router
  return (
    <RouterLink to={href} className={classes} {...props}>
      {children}
    </RouterLink>
  );
}
