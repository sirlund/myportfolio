import { ReactNode, HTMLAttributes } from 'react';
import styles from './List.module.css';

export interface ListProps extends Omit<HTMLAttributes<HTMLUListElement | HTMLOListElement>, 'children'> {
  children: ReactNode;
  ordered?: boolean;
  variant?: 'default' | 'unstyled' | 'compact';
  className?: string;
}

export function List({
  children,
  ordered = false,
  variant = 'default',
  className = '',
  ...props
}: ListProps) {
  const Component = ordered ? 'ol' : 'ul';
  const classes = [styles.list, className].filter(Boolean).join(' ');

  return (
    <Component
      className={classes}
      data-variant={variant}
      data-ordered={ordered}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
}

export function ListItem({
  children,
  className = '',
  ...props
}: ListItemProps) {
  const classes = [styles.listItem, className].filter(Boolean).join(' ');

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  );
}
