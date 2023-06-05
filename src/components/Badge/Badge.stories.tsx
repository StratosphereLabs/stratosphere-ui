import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';
import { CheckIcon } from '../Icons';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<BadgeProps> = args => (
  <Badge {...args}>Badge</Badge>
);

export const WithIcon: Story<BadgeProps> = args => (
  <Badge {...args}>Badge</Badge>
);

WithIcon.args = {
  icon: () => <CheckIcon className="mr-1 h-4 w-4" />,
};

export const Dismissable: Story<BadgeProps> = args => (
  <Badge {...args}>Badge</Badge>
);

Dismissable.args = {
  dismissable: true,
};
