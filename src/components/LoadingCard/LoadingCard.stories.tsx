import { Meta, StoryObj } from '@storybook/react';
import { LoadingCard } from './LoadingCard';

const meta: Meta<typeof LoadingCard> = {
  title: 'LoadingCard',
  component: LoadingCard,
};

export default meta;

type Story = StoryObj<typeof LoadingCard>;

export const Default: Story = {
  args: {
    className: 'w-60 h-48 bg-base-100',
    isLoading: true,
  },
};
