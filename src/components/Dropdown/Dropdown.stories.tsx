import { Story, Meta } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import { DropdownOption, DropdownOptionProps } from './DropdownOption';

export default {
  title: 'Dropdown',
  component: DropdownOption,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<DropdownOptionProps> = ({ ref, ...args }) => (
  <DropdownMenu>
    <DropdownOption {...args}>Menu Item 1</DropdownOption>
    <DropdownOption {...args}>Menu Item 2</DropdownOption>
    <DropdownOption {...args}>Menu Item 3</DropdownOption>
  </DropdownMenu>
);

Default.args = {};

export const Active: Story<DropdownOptionProps> = ({ ref, ...args }) => (
  <DropdownMenu>
    <DropdownOption {...args}>Menu Item 1</DropdownOption>
    <DropdownOption {...args} active>
      Menu Item 2
    </DropdownOption>
    <DropdownOption {...args}>Menu Item 3</DropdownOption>
  </DropdownMenu>
);

Active.args = {};

export const Selected: Story<DropdownOptionProps> = ({ ref, ...args }) => (
  <DropdownMenu>
    <DropdownOption {...args} selected={false}>
      Menu Item 1
    </DropdownOption>
    <DropdownOption {...args} selected>
      Menu Item 2
    </DropdownOption>
    <DropdownOption {...args} selected={false}>
      Menu Item 3
    </DropdownOption>
  </DropdownMenu>
);

Selected.args = {};
