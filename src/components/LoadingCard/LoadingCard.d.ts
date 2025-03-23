import { CardProps } from '../Card';
export interface LoadingCardProps extends CardProps {
    isLoading?: boolean;
}
export declare const LoadingCard: ({ children, isLoading, ...props }: LoadingCardProps) => import("react/jsx-runtime").JSX.Element;
