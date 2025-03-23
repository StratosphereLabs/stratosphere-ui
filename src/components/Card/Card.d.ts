import { HTMLAttributes } from '../../../node_modules/react';
export declare const CARD_SIZES: readonly ["xs", "sm", "md", "lg", "xl"];
export type CardSize = (typeof CARD_SIZES)[number];
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    border?: boolean;
    dash?: boolean;
    imageFull?: boolean;
    side?: boolean;
    size?: CardSize;
}
export declare const Card: ({ border, className, dash, imageFull, side, size, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
