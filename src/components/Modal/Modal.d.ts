import { HTMLProps } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
export declare const MODAL_POSITIONS: readonly ["top", "bottom", "middle"];
export type ModalPosition = (typeof MODAL_POSITIONS)[number];
export interface ModalProps extends HTMLProps<HTMLDialogElement> {
    actionButtons: ButtonProps[];
    onClose: () => void;
    open?: boolean;
    responsivePosition?: ModalPosition;
    title?: string;
}
export declare const Modal: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ModalProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
