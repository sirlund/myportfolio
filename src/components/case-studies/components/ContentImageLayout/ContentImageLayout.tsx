import { ReactNode, CSSProperties, Children, isValidElement } from 'react';
import styles from './ContentImageLayout.module.css';

export interface ContentImageLayoutProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'default' | 'none' | 'compact';
  /** Define custom column widths (e.g., "2fr 1fr" or "60% 40%"). Only applies on desktop. */
  columnWidths?: string;
  /** Stretch items to fill row height (default: true) */
  stretch?: boolean;
  /** Enable column-based layout mode (use with Column components) */
  columnLayout?: boolean;
  className?: string;
}

export interface ColumnProps {
  children: ReactNode;
  /** Column width (e.g., "60%", "2fr", "400px"). Default: equal width */
  width?: string;
  /** Stretch children to fill column height (default: true) */
  stretch?: boolean;
  /** Gap between items in column */
  gap?: 'default' | 'none' | 'compact';
  className?: string;
}

export function Column({
  children,
  width,
  stretch = true,
  gap = 'default',
  className = ''
}: ColumnProps) {
  const classes = [
    styles.column,
    styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
    stretch ? styles.columnStretch : styles.columnNoStretch,
    className
  ].filter(Boolean).join(' ');

  const customStyle: CSSProperties = width
    ? {
        ['--column-width' as string]: width,
      }
    : {};

  return (
    <div className={classes} style={customStyle}>
      {children}
    </div>
  );
}

export function ContentImageLayout({
  children,
  columns = 2,
  gap = 'default',
  columnWidths,
  stretch = true,
  columnLayout = false,
  className = ''
}: ContentImageLayoutProps) {
  // Column layout mode: use children as Column components
  if (columnLayout) {
    const columnChildren = Children.toArray(children).filter(child =>
      isValidElement(child) && child.type === Column
    );

    const columnWidthsFromChildren = columnChildren
      .map((child: any) => child.props.width || '1fr')
      .join(' ');

    const classes = [
      styles.columnLayout,
      styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
      className
    ].filter(Boolean).join(' ');

    const customStyle: CSSProperties = {
      ['--custom-columns' as string]: columnWidthsFromChildren,
    };

    return (
      <div className={classes} style={customStyle}>
        {children}
      </div>
    );
  }

  // Standard grid mode
  const classes = [
    styles.layout,
    styles[`cols${columns}`],
    styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
    stretch ? styles.stretch : styles.noStretch,
    className
  ].filter(Boolean).join(' ');

  const customStyle: CSSProperties = columnWidths
    ? {
        ['--custom-columns' as string]: columnWidths,
      }
    : {};

  return (
    <div className={classes} style={customStyle}>
      {children}
    </div>
  );
}
