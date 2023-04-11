import { Story, Meta } from '@storybook/react';
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<DropdownMenuProps> = args => (
  <DropdownMenu {...args} />
);

Default.args = {
  buttonProps: { children: 'Open Dropdown' },
  className: 'mb-40',
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
};

export const Rounded: Story<DropdownMenuProps> = args => (
  <DropdownMenu {...args} />
);

Rounded.args = {
  buttonProps: { children: 'Open Dropdown' },
  className: 'mb-40',
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
};

export const RoundedWithPadding: Story<DropdownMenuProps> = args => (
  <DropdownMenu {...args} />
);

RoundedWithPadding.args = {
  buttonProps: { children: 'Open Dropdown' },
  className: 'mb-40',
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
};
