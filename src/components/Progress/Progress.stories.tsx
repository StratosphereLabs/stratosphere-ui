import { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {},
};

export const CustomColor: Story = {
  args: {},
  render: args => (
    <div className="flex w-full flex-col gap-8">
      <Progress {...args} />
      <Progress color="accent" {...args} />
      <Progress color="error" {...args} />
      <Progress color="info" {...args} />
      <Progress color="primary" {...args} />
      <Progress color="secondary" {...args} />
      <Progress color="success" {...args} />
      <Progress color="warning" {...args} />
    </div>
  ),
};
