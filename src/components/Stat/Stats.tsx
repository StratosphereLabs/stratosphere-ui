import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const STATS_LAYOUTS = ['horizontal', 'vertical'] as const;

export type StatsLayout = (typeof STATS_LAYOUTS)[number];

export interface StatsProps extends HTMLAttributes<HTMLDivElement> {
  layout?: StatsLayout;
}

export const Stats = ({ className, layout, ...props }: StatsProps) => (
  <div
    className={classNames('stats', layout && `stats-${layout}`, className)}
    {...props}
  />
);
