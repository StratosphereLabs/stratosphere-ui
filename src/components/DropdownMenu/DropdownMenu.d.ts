import { HTMLProps } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
import { MenuItemProps, MenuSize } from '../Menu';
export interface DropdownItemProps extends Omit<MenuItemProps, 'disabled' | 'focus' | 'ref'> {
    id: string;
}
export interface DropdownMenuProps extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'children' | 'className' | 'ref'> {
    buttonProps?: ButtonProps;
    className?: string;
    items: DropdownItemProps[];
    menuClassName?: string;
    menuSize?: MenuSize;
}
export declare const DropdownMenu: import('../../../node_modules/react').ForwardRefExoticComponent<DropdownMenuProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
