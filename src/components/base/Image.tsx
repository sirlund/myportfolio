import { ImgHTMLAttributes, useState } from 'react';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  className?: string;
}

export function Image({
  src,
  alt,
  aspectRatio,
  objectFit = 'cover',
  loading = 'lazy',
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E",
  className = '',
  style,
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);
  const classes = ['image', className].filter(Boolean).join(' ');

  const imageStyle = {
    ...style,
    aspectRatio: aspectRatio,
    objectFit: objectFit,
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      loading={loading}
      onError={() => setError(true)}
      className={classes}
      style={imageStyle}
      {...props}
    />
  );
}
