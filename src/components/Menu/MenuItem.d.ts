import { HTMLProps, ReactNode } from '../../../node_modules/react';
export interface MenuItemProps extends Omit<HTMLProps<HTMLAnchorElement>, 'title'> {
    active?: boolean;
    disabled?: boolean;
    focus?: boolean;
    selected?: boolean;
    subMenu?: ReactNode;
    title?: boolean;
}
export declare const MenuItem: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLAnchorElement>>;
