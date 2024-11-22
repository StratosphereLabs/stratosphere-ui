import { HTMLAttributes } from '../../../node_modules/react';
export declare const STEP_COLORS: readonly ["primary", "secondary", "accent", "info", "success", "warning", "error"];
export type StepColor = (typeof STEP_COLORS)[number];
export interface StepProps extends HTMLAttributes<HTMLLIElement> {
    color?: StepColor;
}
export declare const Step: ({ className, color, ...props }: StepProps) => import("react/jsx-runtime").JSX.Element;
