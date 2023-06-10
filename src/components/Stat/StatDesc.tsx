import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type StatDescProps = HTMLAttributes<HTMLDivElement>;

export const StatDesc = ({ className, ...props }: StatDescProps) => (
  <div className={classNames('stat-desc', className)} {...props} />
);
