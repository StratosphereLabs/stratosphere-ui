import { Story, Meta } from '@storybook/react';
import { AlertMessages, AlertMessagesProps } from './AlertMessages';

export default {
  title: 'AlertMessages',
  component: AlertMessages,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<AlertMessagesProps> = args => (
  <AlertMessages {...args} />
);

Default.args = {
  initialData: [
    { status: 'info', message: 'Info' },
    { status: 'warning', message: 'Warning' },
    { status: 'success', message: 'Success' },
    { status: 'error', message: 'Error' },
  ],
  maxMessages: 5,
};

export const SingleRow: Story<AlertMessagesProps> = args => (
  <AlertMessages {...args} />
);

SingleRow.args = {
  initialData: [
    { status: 'info', message: 'Info' },
    { status: 'warning', message: 'Warning' },
    { status: 'success', message: 'Success' },
    { status: 'error', message: 'Error' },
  ],
  maxMessages: 1,
};
