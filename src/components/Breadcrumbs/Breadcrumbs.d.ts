import { ComponentProps, FC, HTMLProps, ReactNode } from '../../../node_modules/react';
export interface BreadcrumbsItem {
    children: ReactNode;
    className?: string;
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
    id: string;
    onClick?: () => void;
}
export interface BreadcrumbsProps extends HTMLProps<HTMLDivElement> {
    items: BreadcrumbsItem[];
}
export declare const Breadcrumbs: ({ className, items, ...props }: BreadcrumbsProps) => JSX.Element;
