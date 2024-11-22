import { HTMLProps } from '../../../node_modules/react';
export interface LoadingCardProps extends HTMLProps<HTMLDivElement> {
    isLoading?: boolean;
}
export declare const LoadingCard: ({ children, className, isLoading, ...props }: LoadingCardProps) => import("react/jsx-runtime").JSX.Element;
