import { HTMLProps } from '../../../node_modules/react';
export declare const MENU_SIZES: readonly ["xs", "sm", "md", "lg"];
export declare const MENU_LAYOUTS: readonly ["horizontal", "vertical"];
export type MenuSize = (typeof MENU_SIZES)[number];
export type MenuLayout = (typeof MENU_LAYOUTS)[number];
export interface MenuProps extends Omit<HTMLProps<HTMLUListElement>, 'size'> {
    layout?: MenuLayout;
    size?: MenuSize;
}
export declare const Menu: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<MenuProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLUListElement>>;
