import { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
};

export default meta;

export const Default: Story = {
  args: {
    buttonProps: {
      children: 'Open Popover',
    },
    className: 'mb-24',
    popoverComponent: () => <div className="w-64">Test Lmao</div>,
  },
};

type Story = StoryObj<typeof Popover>;

export const WithBackdrop: Story = {
  args: {
    buttonProps: {
      children: 'Open Popover',
    },
    className: 'mb-24',
    popoverComponent: () => <div className="w-64">Test Lmao</div>,
    withBackdrop: true,
  },
};
