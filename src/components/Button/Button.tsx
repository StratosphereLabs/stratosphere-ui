import classNames from 'classnames';
import {
  ButtonHTMLAttributes,
  createElement,
  forwardRef,
  useMemo,
} from 'react';

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

export const BUTTON_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export type ButtonColor = (typeof BUTTON_COLORS)[number];

export type ButtonShape = (typeof BUTTON_SHAPES)[number];

export type ButtonSize = (typeof BUTTON_SIZES)[number];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  as?: 'a' | 'button';
  block?: boolean;
  color?: ButtonColor;
  dash?: boolean;
  disabled?: boolean;
  glass?: boolean;
  link?: boolean;
  loading?: boolean;
  noAnimation?: boolean;
  outline?: boolean;
  shape?: ButtonShape;
  size?: ButtonSize;
  soft?: boolean;
  wide?: boolean;
}

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      active,
      as,
      block,
      children,
      className,
      color,
      dash,
      disabled,
      glass,
      link,
      loading,
      noAnimation,
      outline,
      shape,
      size,
      soft,
      wide,
      ...props
    },
    ref,
  ) => {
    const componentProps = useMemo(
      () => ({
        className: classNames(
          'btn',
          active && 'btn-active',
          block && 'btn-block',
          color && `btn-${color}`,
          dash && 'btn-dash',
          disabled && 'btn-disabled',
          glass && 'glass',
          link && 'btn-link',
          noAnimation && 'no-animation',
          outline && 'btn-outline',
          shape && `btn-${shape}`,
          size && `btn-${size}`,
          soft && 'btn-soft',
          wide && 'btn-wide',
          className,
        ),
        ref: ref,
        type: 'button',
        ...props,
      }),
      [
        active,
        block,
        className,
        color,
        dash,
        disabled,
        glass,
        link,
        noAnimation,
        outline,
        props,
        ref,
        shape,
        size,
        soft,
        wide,
      ],
    );
    return createElement(
      as ?? 'button',
      componentProps,
      <>
        {loading ? (
          <span
            className={classNames(
              'loading loading-spinner',
              size && `loading-${size}`,
            )}
          ></span>
        ) : null}
        {children}
      </>,
    );
  },
);

Button.displayName = 'Button';
