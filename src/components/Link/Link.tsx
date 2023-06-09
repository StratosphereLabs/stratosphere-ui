import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const LINK_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'success',
  'info',
  'warning',
  'error',
] as const;

export type LinkColor = (typeof LINK_COLORS)[number];

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  color?: LinkColor;
  hover?: boolean;
}

export const Link = ({ className, color, hover, ...props }: LinkProps) => (
  <a
    className={classNames(
      'link',
      color && `link-${color}`,
      hover && 'link-hover',
      className,
    )}
    {...props}
  />
);
