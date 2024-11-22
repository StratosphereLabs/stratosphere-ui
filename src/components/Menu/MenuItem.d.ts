import { HTMLProps, ReactNode } from '../../../node_modules/react';
export interface MenuItemProps extends HTMLProps<HTMLAnchorElement> {
    active?: boolean;
    bordered?: boolean;
    borderOnHover?: boolean;
    disabled?: boolean;
    focus?: boolean;
    selected?: boolean;
    subMenu?: ReactNode;
}
export declare const MenuItem: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLAnchorElement>>;
