import { ButtonHTMLAttributes } from '../../../node_modules/react';
export declare const BUTTON_COLORS: readonly ["neutral", "primary", "secondary", "accent", "info", "success", "warning", "error", "ghost"];
export declare const BUTTON_SHAPES: readonly ["circle", "square"];
export declare const BUTTON_SIZES: readonly ["lg", "md", "sm", "xs"];
export type ButtonColor = (typeof BUTTON_COLORS)[number];
export type ButtonShape = (typeof BUTTON_SHAPES)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    as?: 'a' | 'button';
    block?: boolean;
    color?: ButtonColor;
    disabled?: boolean;
    glass?: boolean;
    link?: boolean;
    loading?: boolean;
    noAnimation?: boolean;
    outline?: boolean;
    shape?: ButtonShape;
    size?: ButtonSize;
    wide?: boolean;
}
export declare const Button: import('../../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
