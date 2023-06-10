import classNames from 'classnames';
import { ComponentProps, FC, HTMLProps, MouseEvent } from 'react';
import { Button } from '../Button';
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
  color,
  dismissable,
  icon: Icon,
  onDismiss,
  outline,
  size,
  ...props
}: BadgeProps) => (
  <div
    className={classNames(
      'badge gap-1',
      color && `badge-${color}`,
      size && `badge-${size}`,
      outline === true && 'badge-outline',
      dismissable === true && 'pr-0',
      className,
    )}
    {...props}
  >
    {Icon !== undefined ? <Icon /> : null}
    <div className="flex-1 truncate text-sm font-semibold">{children}</div>
    {dismissable === true ? (
      <Button
        color="ghost"
        size="xs"
        onClick={event => {
          event.stopPropagation();
          onDismiss?.(event);
        }}
        onKeyDown={event => {
          event.stopPropagation();
        }}
      >
        <CloseIcon className="h-4 w-4" />
        <span className="sr-only">Remove badge</span>
      </Button>
    ) : null}
  </div>
);
