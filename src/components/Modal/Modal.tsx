import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef, Fragment, HTMLProps } from 'react';

export const MODAL_POSITIONS = ['top', 'bottom', 'middle'] as const;

export type ModalPosition = (typeof MODAL_POSITIONS)[number];

export interface ModalProps extends HTMLProps<HTMLDialogElement> {
  actionButtons: Omit<HTMLProps<HTMLButtonElement>, 'type'>[];
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
  ): JSX.Element => (
    <Dialog as={Fragment} onClose={onClose} open={open} static>
      {({ open: isDialogOpen }) => (
        <Dialog.Panel
          as="dialog"
          className={classNames(
            'modal overflow-y-scroll scrollbar-none',
            isDialogOpen && 'modal-open',
            responsivePosition && `modal-${responsivePosition}`,
            className,
          )}
          ref={ref}
        >
          <div className="modal-box">
            <button
              aria-label="Close Modal"
              className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2"
              onClick={onClose}
              type="button"
            >
              ✕
            </button>
            <Dialog.Title as="h3" className="text-lg font-bold">
              {title}
            </Dialog.Title>
            {children}
            {actionButtons.length > 0 ? (
              <div className="modal-action">
                {actionButtons.map((buttonProps, index) => (
                  <button key={index} type="button" {...buttonProps} />
                ))}
              </div>
            ) : null}
          </div>
        </Dialog.Panel>
      )}
    </Dialog>
  ),
);

Modal.displayName = 'Modal';
