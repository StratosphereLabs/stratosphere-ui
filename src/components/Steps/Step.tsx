import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const STEP_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export type StepColor = (typeof STEP_COLORS)[number];

export interface StepProps extends HTMLAttributes<HTMLLIElement> {
  color?: StepColor;
  icon?: boolean;
}

export const Step = ({ className, color, icon, ...props }: StepProps) => (
  <li
    className={classNames(
      'step',
      color && `step-${color}`,
      icon && 'step-icon',
      className,
    )}
    {...props}
  />
);
