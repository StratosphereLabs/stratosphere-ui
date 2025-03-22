import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const CARD_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type CardSize = (typeof CARD_SIZES)[number];

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  dash?: boolean;
  imageFull?: boolean;
  side?: boolean;
  size?: CardSize;
}

export const Card = ({
  border,
  className,
  dash,
  imageFull,
  side,
  size,
  ...props
}: CardProps) => (
  <div
    data-testid="card"
    className={classNames(
      'card',
      border && 'card-border',
      dash && 'card-dash',
      imageFull && 'image-full',
      side && 'card-side',
      size && `card-${size}`,
      className,
    )}
    {...props}
  />
);
