import { Story, Meta } from '@storybook/react';
import { LoadingCard, LoadingCardProps } from './LoadingCard';

export default {
  title: 'LoadingCard',
  component: LoadingCard,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<LoadingCardProps> = args => (
  <LoadingCard {...args} />
);

Default.args = {
  className: 'w-60 h-48 bg-base-100',
  isLoading: true,
};
