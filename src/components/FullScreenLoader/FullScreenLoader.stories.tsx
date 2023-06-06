import { Story, Meta } from '@storybook/react';
import { FullScreenLoader } from './FullScreenLoader';

export default {
  title: 'FullScreenLoader',
  component: FullScreenLoader,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story = () => <FullScreenLoader />;
