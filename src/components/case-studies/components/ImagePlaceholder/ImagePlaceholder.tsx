import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  /**
   * Aspect ratio
   */
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '21/9';

  /**
   * Caption debajo de la imagen
   */
  caption?: string;

  /**
   * Label dentro del placeholder
   */
  label?: string;

  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * ImagePlaceholder - Placeholder para imágenes en case studies
 *
 * Uso:
 * ```tsx
 * <ImagePlaceholder aspectRatio="16/9" label="Before/After comparison" />
 * <ImagePlaceholder aspectRatio="4/3" caption="Dashboard redesign" />
 * ```
 */
export function ImagePlaceholder({
  aspectRatio = '16/9',
  caption,
  label = 'Image placeholder',
  className = ''
}: ImagePlaceholderProps) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <div
        className={styles.placeholder}
        style={{ aspectRatio }}
      >
        <span className={styles.label}>{label}</span>
      </div>
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
}
