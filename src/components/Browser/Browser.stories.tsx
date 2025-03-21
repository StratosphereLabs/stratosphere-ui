import { Meta, StoryObj } from '@storybook/react';

import { Browser } from './Browser';

const meta: Meta<typeof Browser> = {
  title: 'Browser',
  component: Browser,
};

export default meta;

type Story = StoryObj<typeof Browser>;

export const Default: Story = {
  args: {
    children: 'Browser Content',
  },
};

export const WithBorder: Story = {
  args: {
    children: 'Browser Content',
    className: 'border border-base-300',
    contentClassName: 'border-t border-base-300',
    searchInputClassName: 'border border-base-300',
  },
};

export const WithBackgroundColor: Story = {
  args: {
    children: 'Browser Content',
    className: 'border bg-base-300',
    contentClassName: 'bg-base-200',
  },
};
