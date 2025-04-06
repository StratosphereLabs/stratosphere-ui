import { PopoverProps as HeadlessUIPopoverProps } from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { MutableRefObject } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
export interface PopoverPanelRenderProps {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
export interface PopoverProps extends Omit<HeadlessUIPopoverProps<'div'>, 'as' | 'className'> {
    anchor?: AnchorProps;
    buttonProps: ButtonProps;
    className?: string;
    popoverClassName?: string;
    popoverComponent: ({ open, close }: PopoverPanelRenderProps) => JSX.Element;
    portal?: boolean;
}
export declare const Popover: import('../../../node_modules/react').ForwardRefExoticComponent<PopoverProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
