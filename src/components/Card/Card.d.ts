import { HTMLAttributes } from '../../../node_modules/react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
    compact?: boolean;
    imageFull?: boolean;
    normal?: boolean;
    side?: boolean;
}
export declare const Card: ({ bordered, className, compact, imageFull, normal, side, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
