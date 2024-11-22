import { Meta, StoryObj } from '@storybook/react';
import { FullScreenLoader } from './FullScreenLoader';

const meta: Meta<typeof FullScreenLoader> = {
  title: 'FullScreenLoader',
  component: FullScreenLoader,
};

export default meta;

type Story = StoryObj<typeof FullScreenLoader>;

export const Default: Story = {
  args: {},
};
