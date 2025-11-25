import { ICONS, IconName } from './iconRegistry';

// Predefined sizes in pixels
const ICON_SIZES = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
} as const;

export type IconSize = keyof typeof ICON_SIZES;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  /** Predefined size: 'xs' (16px), 'sm' (24px), 'md' (32px), 'lg' (48px) */
  size?: IconSize;
  /** Custom width - number (px) or string ('100%', 'auto') */
  width?: number | string;
  /** Custom height - number (px) or string ('100%', 'auto') */
  height?: number | string;
  color?: string;
}

/**
 * Reusable Icon component
 *
 * Usage:
 * // Predefined sizes
 * <Icon name="mindstudio" size="sm" />
 * <Icon name="treez" size="lg" />
 *
 * // Custom dimensions
 * <Icon name="treez" height={32} width="auto" />
 * <Icon name="mindstudio" width="100%" height="auto" />
 * <Icon name="placeholder" width={40} height={40} />
 */
export function Icon({
  name,
  size,
  width,
  height,
  color,
  className = '',
  ...props
}: IconProps) {
  const icon = ICONS[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  // Determine dimensions
  let finalWidth: string;
  let finalHeight: string;

  if (width !== undefined || height !== undefined) {
    // Custom dimensions mode
    finalWidth = width !== undefined
      ? (typeof width === 'number' ? `${width}px` : width)
      : 'auto';
    finalHeight = height !== undefined
      ? (typeof height === 'number' ? `${height}px` : height)
      : 'auto';
  } else {
    // Predefined size mode (default to 'sm')
    const sizeValue = ICON_SIZES[size || 'sm'];
    finalWidth = `${sizeValue}px`;
    finalHeight = `${sizeValue}px`;
  }

  // Use custom renderer if available
  if (icon.customRender) {
    return icon.customRender({
      className,
      style: {
        width: finalWidth,
        height: finalHeight,
        ...props.style,
      },
    });
  }

  return (
    <svg
      viewBox={icon.viewBox}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        width: finalWidth,
        height: finalHeight,
        ...props.style,
      }}
      {...props}
    >
      {icon.paths.map((path, index) => {
        // Handle both string paths and PathDefinition objects
        const pathData = typeof path === 'string' ? path : path.d;
        const pathFill = typeof path === 'string'
          ? (color || icon.fill || 'currentColor')
          : (path.fill || color || icon.fill || 'currentColor');
        const pathOpacity = typeof path === 'string' ? undefined : path.opacity;

        return (
          <path
            key={index}
            d={pathData}
            fill={pathFill}
            fillOpacity={pathOpacity}
            clipRule="evenodd"
            fillRule="evenodd"
          />
        );
      })}
    </svg>
  );
}
