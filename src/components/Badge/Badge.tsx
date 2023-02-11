import classNames from 'classnames';
import { ComponentProps, FC, MouseEvent } from 'react';
import {
  Badge as DaisyUIBadge,
  BadgeProps as DaisyUIBadgeProps,
  Button,
} from 'react-daisyui';
import { CloseIcon } from '../Icons';

export interface BadgeProps extends DaisyUIBadgeProps {
  dismissable?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Badge = ({
  children,
  className,
  dismissable,
  icon: Icon,
  onDismiss,
  ...props
}: BadgeProps): JSX.Element => (
  <DaisyUIBadge
    className={classNames(dismissable === true && 'pr-0', className)}
    size="lg"
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
        type="button"
      >
        <CloseIcon className="h-4 w-4" />
        <span className="sr-only">Remove badge</span>
      </Button>
    ) : null}
  </DaisyUIBadge>
);
