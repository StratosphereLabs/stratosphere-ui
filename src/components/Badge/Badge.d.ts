import { ComponentProps, FC, HTMLProps, MouseEvent } from '../../../node_modules/react';
export declare const BADGE_COLORS: readonly ["primary", "secondary", "accent", "neutral", "info", "success", "warning", "error", "ghost"];
export declare const BADGE_SIZES: readonly ["xl", "lg", "md", "sm", "xs"];
export type BadgeColor = (typeof BADGE_COLORS)[number];
export type BadgeSize = (typeof BADGE_SIZES)[number];
export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
    color?: BadgeColor;
    dash?: boolean;
    dismissable?: boolean;
    icon?: FC<ComponentProps<'svg'>>;
    onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    size?: BadgeSize;
    soft?: boolean;
}
export declare const Badge: ({ children, className, color, dash, dismissable, icon: Icon, onDismiss, outline, size, soft, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
