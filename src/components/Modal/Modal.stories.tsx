import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<ModalProps> = ({ ref, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal {...args} onClose={() => setOpen(false)} open={open} />
    </>
  );
};

Default.args = {
  actionButtons: [],
  children: 'Modal Content',
  title: 'Title',
};

export const WithActionButtons: Story<ModalProps> = ({ ref, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal {...args} onClose={() => setOpen(false)} open={open} />
    </>
  );
};

WithActionButtons.args = {
  actionButtons: [
    {
      color: 'error',
      children: 'Cancel',
    },
    {
      color: 'success',
      children: 'Okay',
    },
  ],
  children: 'Modal Content',
  title: 'Title',
};
