import classNames from 'classnames';
import { HTMLProps } from 'react';

export interface TooltipContentProps extends HTMLProps<HTMLDivElement> {}

export const TooltipContent = ({
  className,
  ...props
}: TooltipContentProps) => (
  <div className={classNames('tooltip-content', className)} {...props} />
);
