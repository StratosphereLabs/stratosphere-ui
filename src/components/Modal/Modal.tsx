import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import classNames from 'classnames';
import { HTMLProps, forwardRef } from 'react';

import { Button, ButtonProps } from '../Button';

export const MODAL_POSITIONS = ['top', 'bottom', 'middle'] as const;

export type ModalPosition = (typeof MODAL_POSITIONS)[number];

export interface ModalProps extends HTMLProps<HTMLDialogElement> {
  actionButtons: ButtonProps[];
  onClose: () => void;
  open?: boolean;
  responsivePosition?: ModalPosition;
  title?: string;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      actionButtons,
      children,
      className,
      onClose,
      open,
      responsivePosition,
      title,
    },
    ref,
  ) => (
    <Dialog
      as="dialog"
      className={classNames(
        'modal',
        open && 'modal-open',
        responsivePosition && `modal-${responsivePosition}`,
      )}
      onClose={onClose}
      open={open}
      static
    >
      <DialogPanel
        as="div"
        className={classNames('modal-box', className)}
        ref={ref}
      >
        <Button
          aria-label="Close Modal"
          color="ghost"
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </Button>
        <DialogTitle as="h3" className="text-lg font-bold">
          {title}
        </DialogTitle>
        {children}
        {actionButtons.length > 0 ? (
          <div className="modal-action">
            {actionButtons.map((buttonProps, index) => (
              <Button key={index} {...buttonProps} />
            ))}
          </div>
        ) : null}
      </DialogPanel>
    </Dialog>
  ),
);

Modal.displayName = 'Modal';
