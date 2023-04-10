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
  dropdownItems: [
    {
      id: '1',
      children: 'Menu Item 1',
    },
    {
      id: '2',
      children: 'Menu Item 2',
    },
  ],
  buttonProps: { children: 'Open Dropdown' },
  className: 'mb-40',
};
