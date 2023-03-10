import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef, Fragment } from 'react';
import {
  Button,
  ButtonProps,
  Modal as DaisyUIModal,
  ModalProps as DaisyUIModalProps,
} from 'react-daisyui';

export interface ModalProps extends DaisyUIModalProps {
  actionButtons: ButtonProps[];
  onClose: () => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    { actionButtons, children, className, onClose, open, title },
    ref,
  ): JSX.Element => (
    <Dialog as={Fragment} onClose={onClose} open={open} static>
      {({ open: isDialogOpen }) => (
        <Dialog.Panel
          as={DaisyUIModal}
          className={classNames('overflow-y-scroll scrollbar-none', className)}
          open={isDialogOpen}
          responsive
          ref={ref}
        >
          <Button
            color="ghost"
            size="sm"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={onClose}
            type="button"
          >
            ✕
          </Button>
          <Dialog.Title as={DaisyUIModal.Header} className="font-bold">
            {title}
          </Dialog.Title>
          <DaisyUIModal.Body>{children}</DaisyUIModal.Body>
          {actionButtons.length > 0 ? (
            <DaisyUIModal.Actions>
              {actionButtons.map((buttonProps, index) => (
                <Button key={index} {...buttonProps} />
              ))}
            </DaisyUIModal.Actions>
          ) : null}
        </Dialog.Panel>
      )}
    </Dialog>
  ),
);

Modal.displayName = 'Modal';
