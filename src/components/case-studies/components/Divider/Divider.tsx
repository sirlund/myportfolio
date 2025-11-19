import styles from './Divider.module.css';

interface DividerProps {
  /**
   * Spacing variant
   * - 'default': spacing normal
   * - 'large': más espacio arriba y abajo
   */
  spacing?: 'default' | 'large';

  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * Divider - Separador horizontal entre secciones
 *
 * Uso:
 * ```tsx
 * <Divider />
 * <Divider spacing="large" />
 * ```
 */
export function Divider({ spacing = 'default', className = '' }: DividerProps) {
  return (
    <div className={`${styles.divider} ${spacing === 'large' ? styles.large : ''} ${className}`}>
      <hr className={styles.line} />
    </div>
  );
}
