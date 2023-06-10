import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type StatProps = HTMLAttributes<HTMLDivElement>;

export const Stat = ({ className, ...props }: StatProps) => (
  <div className={classNames('stat', className)} {...props} />
);
