import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const PROGRESS_COLORS = [
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export type ProgressColor = (typeof PROGRESS_COLORS)[number];

export interface ProgressProps extends HTMLAttributes<HTMLProgressElement> {
  color?: ProgressColor;
}

export const Progress = ({ className, color, ...props }: ProgressProps) => (
  <progress
    className={classNames('progress', color && `progress-${color}`, className)}
    {...props}
  />
);
