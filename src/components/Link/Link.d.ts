import { HTMLProps } from '../../../node_modules/react';
export declare const LINK_COLORS: readonly ["neutral", "primary", "secondary", "accent", "success", "info", "warning", "error"];
export type LinkColor = (typeof LINK_COLORS)[number];
export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    color?: LinkColor;
    hover?: boolean;
}
export declare const Link: ({ className, color, hover, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
