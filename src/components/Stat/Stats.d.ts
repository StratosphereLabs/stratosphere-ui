import { HTMLAttributes } from '../../../node_modules/react';
export declare const STATS_LAYOUTS: readonly ["horizontal", "vertical"];
export type StatsLayout = (typeof STATS_LAYOUTS)[number];
export interface StatsProps extends HTMLAttributes<HTMLDivElement> {
    layout?: StatsLayout;
}
export declare const Stats: ({ className, layout, ...props }: StatsProps) => import("react/jsx-runtime").JSX.Element;
