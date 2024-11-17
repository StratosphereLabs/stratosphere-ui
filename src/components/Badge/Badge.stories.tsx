import { StoryObj } from '@storybook/react';
import { CheckIcon } from '../Icons';
import { Badge } from './Badge';

const meta = {
  title: 'Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    icon: () => <CheckIcon className="mr-1 h-4 w-4" />,
  },
};

export const Dismissable: Story = {
  args: {
    dismissable: true,
  },
};
