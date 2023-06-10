import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type StatTitleProps = HTMLAttributes<HTMLDivElement>;

export const StatTitle = ({ className, ...props }: StatTitleProps) => (
  <div className={classNames('stat-title', className)} {...props} />
);
