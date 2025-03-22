import { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'DropdownMenu',
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    buttonProps: { children: 'Open Dropdown', className: 'mb-40' },
    items: [
      {
        id: '1',
        children: 'Menu Item 1',
      },
      {
        id: '2',
        children: 'Menu Item 2',
      },
    ],
  },
};

export const Rounded: Story = {
  args: {
    buttonProps: { children: 'Open Dropdown', className: 'mb-40' },
    items: [
      {
        id: '1',
        children: 'Menu Item 1',
      },
      {
        id: '2',
        children: 'Menu Item 2',
      },
    ],
    menuClassName: 'rounded-box',
  },
};

export const RoundedWithPadding: Story = {
  args: {
    buttonProps: { children: 'Open Dropdown', className: 'mb-40' },
    items: [
      {
        id: '1',
        children: 'Menu Item 1',
      },
      {
        id: '2',
        children: 'Menu Item 2',
      },
    ],
    menuClassName: 'rounded-box p-2',
  },
};
