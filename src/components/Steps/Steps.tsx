import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const STEPS_DIRECTIONS = ['horizontal', 'vertical'] as const;

export type StepsDirection = (typeof STEPS_DIRECTIONS)[number];

export interface StepsProps extends HTMLAttributes<HTMLUListElement> {
  direction?: StepsDirection;
}

export const Steps = ({ className, direction, ...props }: StepsProps) => (
  <ul
    className={classNames(
      'steps',
      direction && `steps-${direction}`,
      className,
    )}
    {...props}
  />
);
