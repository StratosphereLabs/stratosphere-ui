import classNames from 'classnames';
import { ComponentProps, FC, HTMLProps, MouseEvent } from 'react';
import { CloseIcon } from '../Icons';

export const BADGE_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'ghost',
  'info',
  'success',
  'warning',
  'error',
] as const;

export const BADGE_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

export type BadgeColor = (typeof BADGE_COLORS)[number];

export type BadgeSize = (typeof BADGE_SIZES)[number];

export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  color?: BadgeColor;
  dismissable?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  size?: BadgeSize;
}

export const Badge = ({
  children,
  className,
  dismissable,
  icon: Icon,
  onDismiss,
  outline,
  size,
  ...props
}: BadgeProps): JSX.Element => (
  <div
    className={classNames(
      'badge gap-2',
      size !== undefined && `badge-${size}`,
      outline === true && 'badge-outline',
      dismissable === true && 'pr-0',
      className,
    )}
    {...props}
  >
    {Icon !== undefined ? <Icon /> : null}
    <div className="flex-1 truncate text-sm font-semibold">{children}</div>
    {dismissable === true ? (
      <button
        className="btn-ghost btn-xs btn"
        onClick={event => {
          event.stopPropagation();
          onDismiss?.(event);
        }}
        onKeyDown={event => {
          event.stopPropagation();
        }}
        type="button"
      >
        <CloseIcon className="h-4 w-4" />
        <span className="sr-only">Remove badge</span>
      </button>
    ) : null}
  </div>
);
