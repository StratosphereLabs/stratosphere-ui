import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type StatFigureProps = HTMLAttributes<HTMLDivElement>;

export const StatFigure = ({ className, ...props }: StatFigureProps) => (
  <div className={classNames('stat-figure', className)} {...props} />
);
