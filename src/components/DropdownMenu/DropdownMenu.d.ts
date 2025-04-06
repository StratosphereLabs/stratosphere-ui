import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { ButtonProps } from '../Button';
import { MenuItemProps, MenuSize } from '../Menu';
export interface DropdownItemProps extends Omit<MenuItemProps, 'disabled' | 'focus' | 'ref'> {
    id: string;
}
export interface DropdownMenuProps {
    anchor?: AnchorProps;
    buttonProps?: ButtonProps;
    className?: string;
    items: DropdownItemProps[];
    menuClassName?: string;
    menuSize?: MenuSize;
    portal?: boolean;
}
export declare const DropdownMenu: import('../../../node_modules/react').ForwardRefExoticComponent<DropdownMenuProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
