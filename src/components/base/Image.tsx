import { ImgHTMLAttributes } from 'react';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  className?: string;
}

export function Image({
  src,
  alt,
  aspectRatio,
  objectFit = 'cover',
  loading = 'lazy',
  className = '',
  style,
  ...props
}: ImageProps) {
  const classes = ['image', className].filter(Boolean).join(' ');

  const imageStyle = {
    ...style,
    aspectRatio: aspectRatio,
    objectFit: objectFit,
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={classes}
      style={imageStyle}
      {...props}
    />
  );
}
