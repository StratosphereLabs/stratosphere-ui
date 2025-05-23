import { StoryObj } from '@storybook/react';

import { CheckIcon } from '../Icons';
import { Badge, BadgeProps } from './Badge';

const meta = {
  title: 'Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

const renderColors = (args: BadgeProps) => (
  <div className="flex flex-col items-center gap-8">
    <div className="flex gap-2">
      <Badge {...args}>default</Badge>
      <Badge {...args} color="neutral">
        neutral
      </Badge>
      <Badge {...args} color="primary">
        primary
      </Badge>
      <Badge {...args} color="secondary">
        secondary
      </Badge>
      <Badge {...args} color="accent">
        accent
      </Badge>
      <Badge {...args} color="ghost">
        ghost
      </Badge>
    </div>
    <div className="flex gap-2">
      <Badge {...args} color="info">
        info
      </Badge>
      <Badge {...args} color="success">
        success
      </Badge>
      <Badge {...args} color="warning">
        warning
      </Badge>
      <Badge {...args} color="error">
        error
      </Badge>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Colors: Story = {
  args: {},
  render: renderColors,
};

export const Sizes: Story = {
  args: {
    color: 'neutral',
  },
  render: args => (
    <div className="flex items-center gap-2">
      <Badge {...args} size="xs">
        Extra Small
      </Badge>
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
      <Badge {...args} size="xl">
        Extra Large
      </Badge>
    </div>
  ),
};

export const Outline: Story = {
  args: {
    outline: true,
  },
  render: renderColors,
};

export const Dash: Story = {
  args: {
    dash: true,
  },
  render: renderColors,
};

export const Soft: Story = {
  args: {
    soft: true,
  },
  render: renderColors,
};

export const WithIcon: Story = {
  args: {
    children: 'With icon',
    color: 'neutral',
    icon: () => <CheckIcon className="mr-1 h-4 w-4" />,
  },
};

export const Dismissable: Story = {
  args: {
    children: 'Dismissible',
    color: 'neutral',
    dismissable: true,
  },
};
