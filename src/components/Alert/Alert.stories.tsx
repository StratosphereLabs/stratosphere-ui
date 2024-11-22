import { Meta, StoryObj } from '@storybook/react';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../Icons';
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

export const WithColors: Story = {
  args: {},
  render: args => (
    <div className="flex flex-col gap-2">
      <Alert {...args} title="Default" />
      <Alert {...args} color="info" icon={InfoIcon} title="Info" />
      <Alert {...args} color="success" icon={SuccessIcon} title="Success" />
      <Alert {...args} color="warning" icon={WarningIcon} title="Warning" />
      <Alert {...args} color="error" icon={ErrorIcon} title="Error" />
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.',
  },
};

export const WithActionButtons: Story = {
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.',
    actionButtons: [
      {
        id: 'close',
        'aria-label': 'Close Alert',
        className: 'mt-[-10px] mr-[-10px]',
        color: 'ghost',
        onClick: () => null,
        shape: 'circle',
        size: 'xs',
        children: '✕',
      },
      {
        id: 'info',
        'aria-label': 'More Info',
        color: 'neutral',
        onClick: () => null,
        size: 'xs',
        children: 'More Info',
      },
    ],
  },
};
