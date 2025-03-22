import { Meta, StoryObj } from '@storybook/react';

import { Disclosure } from './Disclosure';

const meta: Meta<typeof Disclosure> = {
  title: 'Disclosure',
  component: Disclosure,
};

export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label',
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
  },
};

export const Rounded: Story = {
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label',
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
    rounded: true,
  },
};

export const Large: Story = {
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label',
      size: 'lg',
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
    rounded: true,
  },
};

export const Open: Story = {
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label',
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
    defaultOpen: true,
    rounded: true,
  },
};
