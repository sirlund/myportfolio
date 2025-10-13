import { ReactNode, HTMLAttributes } from 'react';
import styles from './Text.module.css';

/**
 * Text Component - Renders text with support for:
 * - Multiline paragraphs (split by \n\n from translations)
 * - HTML formatting tags (<strong>, <em>, <br>, etc.)
 * - Different sizes (lg, md, sm)
 * - Color variants (default, muted)
 *
 * Usage:
 *   <Text size="lg">{t('about.description1')}</Text>
 *   <Text size="md" color="muted">Secondary text</Text>
 *   <Text as="span" size="sm">Small text</Text>
 */

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: string | ReactNode;
  size?: 'lg' | 'md' | 'sm';
  color?: 'default' | 'muted';
  as?: 'p' | 'div' | 'span';
  className?: string;
}

export function Text({
  children,
  size = 'md',
  color = 'default',
  as: Component = 'p',
  className = '',
  ...props
}: TextProps) {
  const classes = [styles.text, className].filter(Boolean).join(' ');

  // If children is a string, handle multiline and HTML
  if (typeof children === 'string') {
    // Split by double newlines to create paragraphs
    const paragraphs = children.split('\n\n').filter(p => p.trim());

    // If single paragraph, render as single element
    if (paragraphs.length === 1) {
      return (
        <Component
          className={classes}
          data-size={size}
          data-color={color}
          dangerouslySetInnerHTML={{ __html: children }}
          {...props}
        />
      );
    }

    // Multiple paragraphs, render as group
    return (
      <>
        {paragraphs.map((paragraph, index) => (
          <Component
            key={index}
            className={classes}
            data-size={size}
            data-color={color}
            dangerouslySetInnerHTML={{ __html: paragraph }}
            {...props}
          />
        ))}
      </>
    );
  }

  // If children is a ReactNode, render directly
  return (
    <Component className={classes} data-size={size} data-color={color} {...props}>
      {children}
    </Component>
  );
}
