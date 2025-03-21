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
    className: 'w-full',
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
  },
};

export const WithColors: Story = {
  args: {},
  render: args => (
    <div className="flex flex-1 flex-col gap-2">
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
    className: 'w-full',
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.',
  },
};

export const WithActionButtons: Story = {
  args: {
    className: 'w-full',
    color: 'error',
    icon: ErrorIcon,
    onDismiss: () => {},
    title: 'Error',
    description: 'This is a description for this error.',
    actionButtons: [
      {
        id: 'retry',
        label: 'Retry',
        color: 'primary',
        onClick: () => null,
        size: 'sm',
        children: 'Retry',
      },
    ],
  },
};

export const Soft: Story = {
  args: {},
  render: args => (
    <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} soft title="Default" />
      <Alert {...args} soft color="info" icon={InfoIcon} title="Info" />
      <Alert
        {...args}
        soft
        color="success"
        icon={SuccessIcon}
        title="Success"
      />
      <Alert
        {...args}
        soft
        color="warning"
        icon={WarningIcon}
        title="Warning"
      />
      <Alert {...args} soft color="error" icon={ErrorIcon} title="Error" />
    </div>
  ),
};

export const Outline: Story = {
  args: {},
  render: args => (
    <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} outline title="Default" />
      <Alert {...args} outline color="info" icon={InfoIcon} title="Info" />
      <Alert
        {...args}
        outline
        color="success"
        icon={SuccessIcon}
        title="Success"
      />
      <Alert
        {...args}
        outline
        color="warning"
        icon={WarningIcon}
        title="Warning"
      />
      <Alert {...args} outline color="error" icon={ErrorIcon} title="Error" />
    </div>
  ),
};

export const Dash: Story = {
  args: {},
  render: args => (
    <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} dash title="Default" />
      <Alert {...args} dash color="info" icon={InfoIcon} title="Info" />
      <Alert
        {...args}
        dash
        color="success"
        icon={SuccessIcon}
        title="Success"
      />
      <Alert
        {...args}
        dash
        color="warning"
        icon={WarningIcon}
        title="Warning"
      />
      <Alert {...args} dash color="error" icon={ErrorIcon} title="Error" />
    </div>
  ),
};
