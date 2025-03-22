import classNames from 'classnames';
import { ComponentProps, FC, HTMLAttributes } from 'react';

import { Button, ButtonProps } from '../Button';

export const ALERT_COLORS = ['info', 'success', 'warning', 'error'] as const;

export type AlertColor = (typeof ALERT_COLORS)[number];

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  actionButtons?: ({ id: string; label: string } & ButtonProps)[];
  color?: AlertColor;
  dash?: boolean;
  description?: string;
  icon?: FC<ComponentProps<'svg'>>;
  iconClassName?: string;
  onDismiss?: () => void;
  outline?: boolean;
  soft?: boolean;
  title: string;
}

export const Alert = ({
  actionButtons,
  className,
  color,
  dash,
  description,
  icon: Icon,
  iconClassName,
  onDismiss,
  outline,
  soft,
  title,
  ...props
}: AlertProps) => (
  <div
    className={classNames(
      'alert relative',
      color && `alert-${color}`,
      soft && 'alert-soft',
      outline && 'alert-outline',
      dash && 'alert-dash',
      className,
    )}
    role="alert"
    {...props}
  >
    {Icon !== undefined ? (
      <Icon
        className={classNames('h-6 w-6 shrink-0 stroke-current', iconClassName)}
      />
    ) : null}
    <span>
      <h3 className={description?.length ? 'font-bold' : undefined}>{title}</h3>
      {description?.length ? (
        <div className="text-xs">{description}</div>
      ) : null}
    </span>
    {actionButtons ? (
      <div className="flex flex-wrap gap-1">
        {actionButtons.map(({ id, label, ...buttonProps }) => (
          <Button key={id} aria-label={label} {...buttonProps} />
        ))}
      </div>
    ) : null}
    {onDismiss ? (
      <Button
        className="absolute right-0 top-0 mr-[-2px] mt-[-2px] font-bold"
        color="ghost"
        onClick={onDismiss}
        shape="circle"
        size="xs"
      >
        ✕
      </Button>
    ) : null}
  </div>
);
