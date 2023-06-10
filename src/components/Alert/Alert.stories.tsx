import { Story, Meta } from '@storybook/react';
import { InfoIcon } from '../Icons';
import { Alert, AlertProps } from './Alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<AlertProps> = (args: AlertProps) => (
  <Alert {...args} />
);

Default.args = {
  color: 'info',
  icon: InfoIcon,
  title: 'Alert Title',
};

export const WithDescription: Story<AlertProps> = (args: AlertProps) => (
  <Alert {...args} />
);

WithDescription.args = {
  color: 'info',
  icon: InfoIcon,
  title: 'Alert Title',
  description: 'This is a description for this alert.',
};

export const WithCloseButton: Story<AlertProps> = (args: AlertProps) => (
  <Alert {...args} />
);

WithCloseButton.args = {
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
};
