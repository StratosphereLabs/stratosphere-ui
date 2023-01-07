import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';

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
