import { HTMLAttributes } from '../../../node_modules/react';
export interface RadialProgressProps extends HTMLAttributes<HTMLDivElement> {
    size?: string;
    thickness?: string;
    value: string | number;
}
export declare const RadialProgress: ({ className, size, style, thickness, value, ...props }: RadialProgressProps) => import("react/jsx-runtime").JSX.Element;
