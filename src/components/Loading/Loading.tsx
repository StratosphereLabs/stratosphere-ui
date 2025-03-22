import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const LOADING_SHAPES = [
  'spinner',
  'dots',
  'ring',
  'ball',
  'bars',
  'infinity',
] as const;

export type LoadingShape = (typeof LOADING_SHAPES)[number];

export const LOADING_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type LoadingSize = (typeof LOADING_SIZES)[number];

export interface LoadingProps extends HTMLAttributes<HTMLSpanElement> {
  shape?: LoadingShape;
  size?: LoadingSize;
}

export const Loading = ({ className, shape, size, ...props }: LoadingProps) => (
  <span
    className={classNames(
      'loading',
      shape && `loading-${shape}`,
      size && `loading-${size}`,
      className,
    )}
    {...props}
  />
);
