import { ImgHTMLAttributes, useState, useEffect } from 'react';
import styles from './Image.module.css';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  className?: string;
  /** Caption below the image (figcaption) */
  caption?: string;
  /** Label shown inside the placeholder when no image is available */
  label?: string;
  /** Remove default margin-top from figure element (default: false) */
  noMargin?: boolean;
}

export function Image({
  src,
  alt,
  aspectRatio,
  objectFit = 'cover',
  loading = 'lazy',
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E",
  className = '',
  caption,
  label,
  noMargin = false,
  style,
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);
  const classes = [styles.image, className].filter(Boolean).join(' ');

  // Reset error state when src changes
  useEffect(() => {
    setError(false);
  }, [src]);

  // Check if src is invalid (undefined, null, empty string, or just whitespace)
  const isInvalidSrc = !src || src.trim() === '';

  // Use fallback if src is invalid or if there was an error loading the image
  const shouldShowPlaceholder = isInvalidSrc || error;
  const imageSrc = shouldShowPlaceholder ? fallbackSrc : src;

  const imageStyle = {
    ...style,
    aspectRatio: aspectRatio,
    objectFit: objectFit,
  };

  const placeholderStyle = {
    ...style,
    aspectRatio: aspectRatio,
  };

  // If there's a caption, wrap in figure/figcaption
  if (caption) {
    const figureClasses = noMargin ? styles.figureNoMargin : styles.figure;

    return (
      <figure className={figureClasses}>
        {shouldShowPlaceholder && label ? (
          <div className={styles.placeholder} style={placeholderStyle}>
            <span className={styles.placeholderLabel}>{label}</span>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            loading={loading}
            onError={() => setError(true)}
            className={classes}
            style={imageStyle}
            {...props}
          />
        )}
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>
    );
  }

  // If showing placeholder with label, render special placeholder div
  if (shouldShowPlaceholder && label) {
    return (
      <div className={styles.placeholder} style={placeholderStyle}>
        <span className={styles.placeholderLabel}>{label}</span>
      </div>
    );
  }

  // Default: just render the image
  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={loading}
      onError={() => setError(true)}
      className={classes}
      style={imageStyle}
      {...props}
    />
  );
}
