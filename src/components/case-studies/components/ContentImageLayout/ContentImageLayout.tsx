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
  backgroundColor?: string;
  style?: CSSProperties;
  caption?: string;
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
  backgroundColor?: string;
  /** Natural width of the column content (used for auto-proportions) */
  naturalWidth?: number;
  /** Natural height of the column content (used for auto-proportions) */
  naturalHeight?: number;
  /** Custom row heights for the column (e.g., "1fr 2fr"). If provided, uses grid layout instead of flex. */
  rowHeights?: string;
  style?: CSSProperties;
}

export function Column({
  children,
  width,
  stretch = true,
  gap = 'default',
  className = '',
  backgroundColor,
  rowHeights,
  style
}: ColumnProps) {
  const classes = [
    styles.column,
    styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
    stretch ? styles.columnStretch : styles.columnNoStretch,
    className
  ].filter(Boolean).join(' ');

  const customStyle: CSSProperties = {
    ...style,
    backgroundColor,
    display: rowHeights ? 'grid' : undefined,
    gridTemplateRows: rowHeights,
  };

  return (
    <div className={classes} style={customStyle}>
      {children}
    </div>
  );
}

Column.displayName = 'Column';

export function ContentImageLayout({
  children,
  columns = 2,
  gap = 'default',
  columnWidths,
  stretch = true,
  columnLayout = false,
  className = '',
  backgroundColor,
  style,
  caption
}: ContentImageLayoutProps) {
  // Column layout mode: use children as Column components
  if (columnLayout) {
    const columnChildren = Children.toArray(children).filter(child =>
      isValidElement(child) && (
        child.type === Column ||
        (typeof child.type === 'function' && (child.type as any).displayName === 'Column') ||
        (typeof child.type === 'object' && (child.type as any).displayName === 'Column')
      )
    );

    /**
     * Smart Proportions Logic:
     * We calculate the column width based on the ratio between the content's natural width and height.
     * 
     * Formula: width / height = horizontal_weight_per_unit_of_height
     * 
     * Why this works:
     * When columns share the same height, the ratio of their widths should be equal 
     * to the ratio of their natural aspect ratios.
     * 
     * Pro-tip: For columns with multiple images (stack), sum the heights of all images 
     * (including gaps) and use that as `naturalHeight`. 
     * If height_L1 + gap = height_R1 + height_R2 + gap, the alignment will be pixel-perfect.
     */
    const columnWidthsVal = columnWidths || columnChildren
      .map((child: any) => {
        const { naturalWidth, naturalHeight, width } = child.props;
        // If natural dimensions are provided, calculate the weight as width/height ratio
        if (naturalWidth && naturalHeight) {
          return `${(naturalWidth / naturalHeight).toFixed(4)}fr`;
        }
        // Fallback to specific width or 1fr
        return width || '1fr';
      })
      .join(' ');

    const classes = [
      styles.columnLayout,
      styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
      className
    ].filter(Boolean).join(' ');

    const customStyle: CSSProperties = {
      ...style,
      ['--custom-columns' as string]: columnWidthsVal,
      backgroundColor
    };

    return (
      <div className={classes} style={customStyle}>
        {children}
        {caption && <div className={styles.caption}>{caption}</div>}
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

  const customStyle: CSSProperties = {
    ...style,
    ...(columnWidths ? { ['--custom-columns' as string]: columnWidths } : {}),
    backgroundColor
  };

  return (
    <div className={classes} style={customStyle}>
      {children}
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  );
}
