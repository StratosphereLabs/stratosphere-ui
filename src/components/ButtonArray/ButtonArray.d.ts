import { ComponentProps, FC, HTMLProps, Key, ReactNode } from '../../../node_modules/react';
import { Breakpoint } from '../../common';
import { ButtonProps } from '../Button';
import { DropdownMenuProps } from '../DropdownMenu';
export type ButtonOptions = Omit<ButtonProps, 'onClick'> & {
    icon: FC<ComponentProps<'svg'>>;
    key: Key;
    menuText?: string;
    onClick: () => void;
    tooltipText?: string;
};
export interface ButtonArrayProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
    buttonOptions: ButtonOptions[];
    collapseAt?: Breakpoint;
    dropdownMenuProps?: Omit<DropdownMenuProps, 'items'>;
    withTooltips?: boolean;
}
export interface ButtonWrapperProps {
    children: ReactNode;
    tooltipText?: string;
}
export declare const ButtonArray: ({ buttonOptions, collapseAt, dropdownMenuProps: { buttonProps: dropdownButtonProps, ...dropdownMenuProps }, withTooltips, ...props }: ButtonArrayProps) => JSX.Element;
