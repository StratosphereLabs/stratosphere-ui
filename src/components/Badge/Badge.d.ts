import { ComponentProps, FC, HTMLProps, MouseEvent } from '../../../node_modules/react';
export declare const BADGE_COLORS: readonly ["neutral", "primary", "secondary", "accent", "ghost", "info", "success", "warning", "error"];
export declare const BADGE_SIZES: readonly ["lg", "md", "sm", "xs"];
export type BadgeColor = (typeof BADGE_COLORS)[number];
export type BadgeSize = (typeof BADGE_SIZES)[number];
export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
    color?: BadgeColor;
    dismissable?: boolean;
    icon?: FC<ComponentProps<'svg'>>;
    onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    size?: BadgeSize;
}
export declare const Badge: ({ children, className, color, dismissable, icon: Icon, onDismiss, outline, size, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
