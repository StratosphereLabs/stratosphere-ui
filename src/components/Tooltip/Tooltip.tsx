import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const TOOLTIP_POSITIONS = ['top', 'bottom', 'left', 'right'] as const;

export type TooltipPosition = (typeof TOOLTIP_POSITIONS)[number];

export const TOOLTIP_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'warning',
  'success',
  'error',
] as const;

export type TooltipColor = (typeof TOOLTIP_COLORS)[number];

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  color?: TooltipColor;
  open?: boolean;
  position?: TooltipPosition;
  text?: string;
}

export const Tooltip = ({
  className,
  color,
  open,
  position,
  text,
  ...props
}: TooltipProps) => (
  <div
    className={classNames(
      'tooltip',
      open && 'tooltip-open',
      position && `tooltip-${position}`,
      color && `tooltip-${color}`,
      className,
    )}
    data-tip={text}
    {...props}
  />
);
