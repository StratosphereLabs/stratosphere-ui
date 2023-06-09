import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  compact?: boolean;
  imageFull?: boolean;
  normal?: boolean;
  side?: boolean;
}

export const Card = ({
  bordered,
  className,
  compact,
  imageFull,
  normal,
  side,
  ...props
}: CardProps) => (
  <div
    data-testid="card"
    className={classNames(
      'card',
      bordered && 'card-bordered',
      compact && 'card-compact',
      imageFull && 'image-full',
      normal && 'card-normal',
      side && 'card-side',
      className,
    )}
    {...props}
  />
);
