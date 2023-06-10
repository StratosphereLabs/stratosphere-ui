import { Story, Meta } from '@storybook/react';
import { RadialProgress, RadialProgressProps } from './RadialProgress';

export default {
  title: 'RadialProgress',
  component: RadialProgress,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<RadialProgressProps> = args => (
  <RadialProgress {...args} />
);

Default.args = {
  value: 10,
  children: 10,
};

export const CustomValue: Story<RadialProgressProps> = args => (
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
);

CustomValue.args = {};
