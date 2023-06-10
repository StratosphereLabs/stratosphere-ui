import { Story, Meta } from '@storybook/react';
import { Progress, ProgressProps } from './Progress';

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<ProgressProps> = args => <Progress {...args} />;

Default.args = {};

export const CustomColor: Story<ProgressProps> = args => (
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
);

CustomColor.args = {};
