import { Story, Meta } from '@storybook/react';
import { WindowMockup } from 'react-daisyui';
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

export const Default: Story = () => (
  <WindowMockup className="w-full h-72 flex bg-base-100">
    <FullScreenLoader />
  </WindowMockup>
);
