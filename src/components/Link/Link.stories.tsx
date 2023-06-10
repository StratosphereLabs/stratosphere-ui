import { Story, Meta } from '@storybook/react';
import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story = args => <Link {...args} />;

Default.args = {
  children: 'Default Link',
};

export const WithHover: Story = args => <Link {...args} />;

WithHover.args = {
  children: 'With Hover',
  hover: true,
};

export const WithColor: Story = args => <Link {...args} />;

WithColor.args = {
  children: 'With Hover',
  color: 'success',
  hover: true,
};
