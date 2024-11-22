import { HTMLProps } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
import { PaginationMetadata } from './types';
export interface PaginationProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
    metadata?: PaginationMetadata;
    onPaginationChange: (page: number) => void;
    size?: ButtonProps['size'];
}
export declare const Pagination: ({ className, metadata, onPaginationChange, size, ...props }: PaginationProps) => import("react/jsx-runtime").JSX.Element | null;
