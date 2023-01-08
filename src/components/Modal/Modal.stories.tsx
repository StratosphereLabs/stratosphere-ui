import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Button } from 'react-daisyui';
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

export const Default: Story<ModalProps> = args => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Open</Button>
      <Modal {...args} onClose={() => setShow(false)} show={show} />
    </>
  );
};

Default.args = {
  actionButtons: [],
  children: 'Modal Content',
  title: 'Title',
};

export const WithActionButtons: Story<ModalProps> = args => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Open</Button>
      <Modal {...args} onClose={() => setShow(false)} show={show} />
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
