import { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Default Link',
  },
};

export const WithHover: Story = {
  args: {
    children: 'With Hover',
    hover: true,
  },
};

export const WithColor: Story = {
  args: {
    children: 'With Hover',
    color: 'success',
    hover: true,
  },
};
