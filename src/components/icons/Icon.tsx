import { ICONS, IconName } from './iconRegistry';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
}

/**
 * Reusable Icon component
 *
 * Usage:
 * <Icon name="mindstudio" size={52} />
 * <Icon name="treez" size="100%" color="white" />
 * <Icon name="mindstudio" className="custom-class" />
 */
export function Icon({
  name,
  size = 24,
  color,
  className = '',
  ...props
}: IconProps) {
  const icon = ICONS[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      viewBox={icon.viewBox}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        width: sizeValue,
        height: sizeValue,
        ...props.style,
      }}
      {...props}
    >
      {icon.paths.map((path, index) => (
        <path
          key={index}
          d={path}
          fill={color || icon.fill || 'currentColor'}
          clipRule="evenodd"
          fillRule="evenodd"
        />
      ))}
    </svg>
  );
}
