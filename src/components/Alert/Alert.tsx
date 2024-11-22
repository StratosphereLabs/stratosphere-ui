import classNames from 'classnames';
import { ComponentProps, FC, HTMLAttributes } from 'react';
import { Button, ButtonProps } from '../Button';

export const ALERT_COLORS = ['info', 'success', 'warning', 'error'] as const;

export type AlertColor = (typeof ALERT_COLORS)[number];

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  actionButtons?: ({ id: string } & ButtonProps)[];
  color?: AlertColor;
  description?: string;
  icon?: FC<ComponentProps<'svg'>>;
  iconClassName?: string;
  title: string;
}

export const Alert = ({
  actionButtons,
  className,
  color,
  description,
  icon: Icon,
  iconClassName,
  title,
  ...props
}: AlertProps) => (
  <div
    className={classNames('alert', color && `alert-${color}`, className)}
    role="alert"
    {...props}
  >
    {Icon !== undefined ? (
      <Icon className={classNames('h-6 w-6 shrink-0', iconClassName)} />
    ) : null}
    <div className="flex-1">
      <h3 className={description?.length ? 'font-bold' : undefined}>{title}</h3>
      {description?.length ? (
        <div className="text-xs">{description}</div>
      ) : null}
    </div>
    {actionButtons ? (
      <div className="flex flex-col items-end gap-1">
        {actionButtons.map(({ id, ...buttonProps }) => (
          <Button key={id} {...buttonProps} />
        ))}
      </div>
    ) : null}
  </div>
);
