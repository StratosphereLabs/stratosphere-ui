import { Meta, StoryObj } from '@storybook/react';
import { AlertMessages } from './AlertMessages';
import { AlertMessagesProvider } from './AlertMessagesProvider';

const meta: Meta<typeof AlertMessages> = {
  title: 'AlertMessages',
  component: AlertMessages,
  decorators: [
    Story => (
      <AlertMessagesProvider>
        <Story />
      </AlertMessagesProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AlertMessages>;

export const Default: Story = {
  args: {
    maxMessages: 5,
  },
};

// [
//   { color: 'info', title: 'Info' },
//   { color: 'warning', title: 'Warning' },
//   { color: 'success', title: 'Success' },
//   { color: 'error', title: 'Error' },
// ]

export const SingleRow: Story = {
  args: {
    maxMessages: 1,
  },
};
