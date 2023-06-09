import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type StatActionsProps = HTMLAttributes<HTMLDivElement>;

export const StatActions = ({ className, ...props }: StatActionsProps) => (
  <div className={classNames('stat-actions', className)} {...props} />
);
