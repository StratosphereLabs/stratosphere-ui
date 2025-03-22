import classNames from 'classnames';
import { ComponentProps, FC, HTMLProps, MouseEvent } from 'react';

import { Button } from '../Button';
import { CloseIcon } from '../Icons';

export const BADGE_COLORS = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
  'ghost',
] as const;

export const BADGE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export type BadgeColor = (typeof BADGE_COLORS)[number];

export type BadgeSize = (typeof BADGE_SIZES)[number];

export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  color?: BadgeColor;
  dash?: boolean;
  dismissable?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  size?: BadgeSize;
  soft?: boolean;
}

export const Badge = ({
  children,
  className,
  color,
  dash,
  dismissable,
  icon: Icon,
  onDismiss,
  outline,
  size,
  soft,
  ...props
}: BadgeProps) => (
  <div
    className={classNames(
      'badge gap-1',
      color && `badge-${color}`,
      dash === true && 'badge-dash',
      size && `badge-${size}`,
      outline === true && 'badge-outline',
      soft === true && 'badge-soft',
      dismissable === true && 'pr-0',
      className,
    )}
    {...props}
  >
    {Icon !== undefined ? <Icon /> : null}
    <div className="flex-1 truncate font-semibold">{children}</div>
    {dismissable === true ? (
      <Button
        as="a"
        color="ghost"
        shape="circle"
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
