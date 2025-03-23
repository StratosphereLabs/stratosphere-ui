import { HTMLAttributes } from '../../../node_modules/react';
export declare const TOOLTIP_POSITIONS: readonly ["top", "bottom", "left", "right"];
export type TooltipPosition = (typeof TOOLTIP_POSITIONS)[number];
export declare const TOOLTIP_COLORS: readonly ["neutral", "primary", "secondary", "accent", "info", "warning", "success", "error"];
export type TooltipColor = (typeof TOOLTIP_COLORS)[number];
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    color?: TooltipColor;
    open?: boolean;
    position?: TooltipPosition;
    text?: string;
}
export declare const Tooltip: ({ className, color, open, position, text, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
