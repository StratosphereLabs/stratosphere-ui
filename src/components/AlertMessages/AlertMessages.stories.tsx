import { Story, Meta } from '@storybook/react';
import { AlertMessages, AlertMessagesProps } from './AlertMessages';
import {
  AlertMessagesProvider,
  AlertMessagesProviderProps,
} from './AlertMessagesProvider';

export default {
  title: 'AlertMessages',
  component: AlertMessages,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export interface StoryProps
  extends AlertMessagesProps,
    Pick<AlertMessagesProviderProps, 'initialData'> {}

export const Default: Story<StoryProps> = ({
  initialData,
  maxMessages,
}: StoryProps) => (
  <AlertMessagesProvider initialData={initialData}>
    <AlertMessages maxMessages={maxMessages} />
  </AlertMessagesProvider>
);

Default.args = {
  initialData: [
    { color: 'info', title: 'Info' },
    { color: 'warning', title: 'Warning' },
    { color: 'success', title: 'Success' },
    { color: 'error', title: 'Error' },
  ],
  maxMessages: 5,
};

export const SingleRow: Story<StoryProps> = ({
  initialData,
  maxMessages,
}: StoryProps) => (
  <AlertMessagesProvider initialData={initialData}>
    <AlertMessages maxMessages={maxMessages} />
  </AlertMessagesProvider>
);

SingleRow.args = {
  initialData: [
    { color: 'info', title: 'Info' },
    { color: 'warning', title: 'Warning' },
    { color: 'success', title: 'Success' },
    { color: 'error', title: 'Error' },
  ],
  maxMessages: 1,
};
