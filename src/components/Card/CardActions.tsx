import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type CardActionsProps = HTMLAttributes<HTMLDivElement>;

export const CardActions = ({ className, ...props }: CardActionsProps) => (
  <div
    className={classNames('card-actions justify-end', className)}
    {...props}
  />
);
