import classNames from 'classnames';
import { CSSProperties, HTMLAttributes } from 'react';

export interface RadialProgressProps extends HTMLAttributes<HTMLDivElement> {
  size?: string;
  thickness?: string;
  value: string | number;
}

export const RadialProgress = ({
  className,
  size,
  style,
  thickness,
  value,
  ...props
}: RadialProgressProps) => {
  const componentStyle = {
    '--size': size,
    '--thickness': thickness,
    '--value': value,
    ...style,
  } as CSSProperties;
  return (
    <div
      className={classNames('radial-progress', className)}
      style={componentStyle}
      {...props}
    />
  );
};
