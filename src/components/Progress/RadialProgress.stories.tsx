import { Meta, StoryObj } from '@storybook/react';

import { RadialProgress } from './RadialProgress';

const meta: Meta<typeof RadialProgress> = {
  title: 'RadialProgress',
  component: RadialProgress,
};

export default meta;

type Story = StoryObj<typeof RadialProgress>;

export const Default: Story = {
  args: {
    value: 10,
    children: 10,
  },
};

export const CustomValue: Story = {
  args: {},
  render: args => (
    <div className="flex w-full gap-2">
      <RadialProgress {...args}>0</RadialProgress>
      <RadialProgress {...args} value={20}>
        20
      </RadialProgress>
      <RadialProgress {...args} value={50}>
        50
      </RadialProgress>
      <RadialProgress {...args} value={70}>
        70
      </RadialProgress>
    </div>
  ),
};
