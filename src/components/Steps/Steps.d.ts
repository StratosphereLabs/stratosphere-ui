import { HTMLAttributes } from '../../../node_modules/react';
export declare const STEPS_DIRECTIONS: readonly ["horizontal", "vertical"];
export type StepsDirection = (typeof STEPS_DIRECTIONS)[number];
export interface StepsProps extends HTMLAttributes<HTMLUListElement> {
    direction?: StepsDirection;
}
export declare const Steps: ({ className, direction, ...props }: StepsProps) => import("react/jsx-runtime").JSX.Element;
