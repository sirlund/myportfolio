import { ReactNode } from 'react';
import styles from './ContentSection.module.css';

interface ContentSectionProps {
  /**
   * Section title (h2)
   */
  title?: string;

  /**
   * Optional label/pretitle (e.g., "01. Context")
   */
  label?: string;

  /**
   * Content to render inside the section
   */
  children: ReactNode;

  /**
   * Width variant:
   * - 'default': 64rem (1024px) - para todo el contenido
   * - 'wide': 72rem (1152px) - para casos especiales que necesiten más ancho
   */
  width?: 'default' | 'wide';

  /**
   * Centrar el header (label + title)
   */
  centered?: boolean;

  /**
   * Variante de título
   * - 'default': Título grande (3xl -> 5xl)
   * - 'small': Título pequeño (2xl -> 3xl) para secciones como Context
   */
  titleSize?: 'default' | 'small';

  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * ContentSection - Layout wrapper para contenido de case studies
 *
 * Maneja automáticamente:
 * - Max-width responsive (default: 64rem/1024px, wide: 72rem/1152px)
 * - Padding horizontal
 * - Margin bottom entre secciones
 * - Typography para title/label
 *
 * Uso:
 * ```tsx
 * <ContentSection title="Overview" width="default">
 *   <p>Contenido aquí...</p>
 * </ContentSection>
 *
 * <ContentSection label="01. Context" title="The problem" width="wide">
 *   <CardGrid cards={...} />
 * </ContentSection>
 * ```
 */
export function ContentSection({
  title,
  label,
  children,
  width = 'default',
  centered = false,
  titleSize = 'default',
  className = ''
}: ContentSectionProps) {
  return (
    <section
      className={`${styles.section} ${width === 'wide' ? styles.wide : ''} ${className}`}
    >
      <div className={styles.container}>
        {(label || title) && (
          <div className={`${styles.header} ${centered ? styles.centered : ''}`}>
            {label && (
              <span className={styles.label}>{label}</span>
            )}
            {title && (
              <h2 className={`${styles.title} ${titleSize === 'small' ? styles.titleSmall : ''}`}>{title}</h2>
            )}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
