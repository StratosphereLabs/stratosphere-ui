import { HTMLAttributes } from '../../../node_modules/react';
export declare const PROGRESS_COLORS: readonly ["neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"];
export type ProgressColor = (typeof PROGRESS_COLORS)[number];
export interface ProgressProps extends HTMLAttributes<HTMLProgressElement> {
    color?: ProgressColor;
}
export declare const Progress: ({ className, color, ...props }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
