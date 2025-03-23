import { HTMLProps, ReactNode } from '../../../node_modules/react';
export interface TabData {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    id: string;
    onClick?: () => void;
}
export declare const TAB_SIZES: readonly ["xs", "sm", "md", "lg", "xl"];
export type TabSize = (typeof TAB_SIZES)[number];
export interface TabsProps extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'onChange' | 'ref' | 'size'> {
    border?: boolean;
    box?: boolean;
    className?: string;
    lift?: boolean;
    manual?: boolean;
    onChange: (tab: TabData) => void;
    selectedTabId: string;
    size?: TabSize;
    tabs: TabData[];
    vertical?: boolean;
}
export declare const Tabs: ({ border, box, children, className, lift, manual, onChange, selectedTabId, size, tabs, vertical, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
