import { Dialog } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Button, ButtonProps, Modal as DaisyUIModal } from 'react-daisyui';

export interface ModalProps {
  actionButtons: ButtonProps[];
  children: ReactNode;
  onClose: () => void;
  show: boolean;
  title: string;
}

export const Modal = ({
  actionButtons,
  children,
  onClose,
  show,
  title,
}: ModalProps): JSX.Element => (
  <Dialog as={Fragment} onClose={onClose} open={show} static>
    {({ open }) => (
      <Dialog.Panel as={DaisyUIModal} open={open} responsive>
        <Button
          color="ghost"
          size="sm"
          shape="circle"
          className="absolute right-0 top-0"
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
);
