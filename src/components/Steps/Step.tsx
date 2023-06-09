import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const STEP_COLORS = [
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
}

export const Step = ({ className, color, ...props }: StepProps) => (
  <li
    className={classNames('step', color && `step-${color}`, className)}
    {...props}
  />
);
