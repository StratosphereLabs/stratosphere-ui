import { HTMLProps, ReactNode } from '../../../node_modules/react';
export interface TabData {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    id: string;
    onClick?: () => void;
}
export declare const TAB_SIZES: readonly ["xs", "sm", "md", "lg"];
export type TabSize = (typeof TAB_SIZES)[number];
export interface TabsProps extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'onChange' | 'ref' | 'size'> {
    bordered?: boolean;
    boxed?: boolean;
    className?: string;
    lifted?: boolean;
    manual?: boolean;
    onChange: (tab: TabData) => void;
    selectedTabId: string;
    size?: TabSize;
    tabs: TabData[];
    vertical?: boolean;
}
export declare const Tabs: ({ bordered, boxed, children, className, manual, lifted, onChange, selectedTabId, size, tabs, vertical, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
