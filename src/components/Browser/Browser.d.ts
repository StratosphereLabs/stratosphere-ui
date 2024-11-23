import { HTMLProps } from '../../../node_modules/react';
export interface BrowserProps extends HTMLProps<HTMLDivElement> {
    browserUrl?: string;
    contentClassName?: string;
    searchInputClassName?: string;
}
export declare const Browser: ({ browserUrl, children, className, contentClassName, searchInputClassName, ...props }: BrowserProps) => JSX.Element;
