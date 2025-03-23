import { HTMLAttributes } from '../../../node_modules/react';
export declare const LOADING_SHAPES: readonly ["spinner", "dots", "ring", "ball", "bars", "infinity"];
export type LoadingShape = (typeof LOADING_SHAPES)[number];
export declare const LOADING_SIZES: readonly ["xs", "sm", "md", "lg", "xl"];
export type LoadingSize = (typeof LOADING_SIZES)[number];
export interface LoadingProps extends HTMLAttributes<HTMLSpanElement> {
    shape?: LoadingShape;
    size?: LoadingSize;
}
export declare const Loading: ({ className, shape, size, ...props }: LoadingProps) => import("react/jsx-runtime").JSX.Element;
