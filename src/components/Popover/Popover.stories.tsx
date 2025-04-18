import { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
};

export default meta;

export const Default: Story = {
  args: {
    anchor: 'bottom start',
    buttonProps: {
      children: 'Open Popover',
    },
    className: 'mb-24',
    popoverComponent: () => <div className="w-64">Test Lmao</div>,
  },
};

type Story = StoryObj<typeof Popover>;
