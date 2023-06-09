import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type StatValueProps = HTMLAttributes<HTMLDivElement>;

export const StatValue = ({ className, ...props }: StatValueProps) => (
  <div className={classNames('stat-value', className)} {...props} />
);
