import { PopoverProps as HeadlessUIPopoverProps } from '@headlessui/react';
import { MutableRefObject } from '../../../node_modules/react';
import { PanelAnchor } from '../../common';
import { ButtonProps } from '../Button';
export interface PopoverPanelRenderProps {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
export interface PopoverProps extends Omit<HeadlessUIPopoverProps<'div'>, 'as' | 'className'> {
    anchor?: PanelAnchor;
    buttonProps: ButtonProps;
    className?: string;
    popoverClassName?: string;
    popoverComponent: ({ open, close }: PopoverPanelRenderProps) => JSX.Element;
    portal?: boolean;
}
export declare const Popover: import('../../../node_modules/react').ForwardRefExoticComponent<PopoverProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
