import classNames from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export const BUTTON_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
  'ghost',
] as const;

export const BUTTON_SHAPES = ['circle', 'square'] as const;

export const BUTTON_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

export type ButtonColor = (typeof BUTTON_COLORS)[number];

export type ButtonShape = (typeof BUTTON_SHAPES)[number];

export type ButtonSize = (typeof BUTTON_SIZES)[number];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  block?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
  glass?: boolean;
  link?: boolean;
  loading?: boolean;
  noAnimation?: boolean;
  outline?: boolean;
  shape?: ButtonShape;
  size?: ButtonSize;
  wide?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      active,
      block,
      children,
      className,
      color,
      disabled,
      glass,
      link,
      loading,
      noAnimation,
      outline,
      shape,
      size,
      wide,
      ...props
    },
    ref,
  ): JSX.Element => (
    <button
      className={classNames(
        'btn',
        active && 'btn-active',
        block && 'btn-block',
        color && `btn-${color}`,
        disabled && 'btn-disabled',
        glass && 'glass',
        link && 'btn-link',
        noAnimation && 'no-animation',
        outline && 'btn-outline',
        shape && `btn-${shape}`,
        size && `btn-${size}`,
        wide && 'btn-wide',
        className,
      )}
      ref={ref}
      type="button"
      {...props}
    >
      {loading ? (
        <span
          className={classNames(
            'loading loading-spinner',
            size && `loading-${size}`,
          )}
        ></span>
      ) : null}
      {children}
    </button>
  ),
);

Button.displayName = 'Button';
