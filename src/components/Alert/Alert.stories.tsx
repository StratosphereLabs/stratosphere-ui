import { Meta, StoryObj } from '@storybook/react';
import { InfoIcon } from '../Icons';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
  },
};

export const WithDescription: Story = {
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.',
  },
};

export const WithCloseButton: Story = {
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.',
    actionButtons: [
      {
        id: 'close',
        'aria-label': 'Close Alert',
        color: 'ghost',
        onClick: () => null,
        shape: 'circle',
        size: 'xs',
        children: '✕',
      },
    ],
  },
};
