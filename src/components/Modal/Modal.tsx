import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef, HTMLProps } from 'react';
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
  ): JSX.Element => (
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
      <Dialog.Panel
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
        <Dialog.Title as="h3" className="text-lg font-bold">
          {title}
        </Dialog.Title>
        <div className="py-4">{children}</div>
        {actionButtons.length > 0 ? (
          <div className="modal-action">
            {actionButtons.map((buttonProps, index) => (
              <Button key={index} {...buttonProps} />
            ))}
          </div>
        ) : null}
      </Dialog.Panel>
    </Dialog>
  ),
);

Modal.displayName = 'Modal';
