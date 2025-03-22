import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

const WithButtonTemplate: Story = {
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal {...args} onClose={() => setOpen(false)} open={open} />
      </>
    );
  },
};

export const Default: Story = {
  ...WithButtonTemplate,
  args: {
    actionButtons: [],
    children: 'Modal Content',
    title: 'Title',
  },
};

export const WithActionButtons: Story = {
  ...WithButtonTemplate,
  args: {
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
  },
};
