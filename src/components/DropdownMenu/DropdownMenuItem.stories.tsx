import { Story, Meta } from '@storybook/react';
import { DropdownMenuItem, DropdownMenuItemProps } from './DropdownMenuItem';

export default {
  title: 'DropdownMenuItem',
  component: DropdownMenuItem,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<DropdownMenuItemProps> = ({ ref, ...args }) => (
  <div className="flex flex-col gap-4">
    <ul className="menu rounded-box bg-base-100 p-2">
      <DropdownMenuItem {...args}>Default</DropdownMenuItem>
    </ul>
    <ul className="menu rounded-box bg-base-100 p-2">
      <DropdownMenuItem active {...args}>
        Active
      </DropdownMenuItem>
    </ul>
    <ul className="menu bg-base-100">
      <DropdownMenuItem bordered {...args}>
        Bordered
      </DropdownMenuItem>
    </ul>
    <ul className="menu bg-base-100">
      <DropdownMenuItem borderOnHover {...args}>
        Border on hover
      </DropdownMenuItem>
    </ul>
    <ul className="menu rounded-box bg-base-100 p-2">
      <DropdownMenuItem disabled {...args}>
        Disabled
      </DropdownMenuItem>
    </ul>
    <ul className="menu rounded-box bg-base-100 p-2">
      <DropdownMenuItem selected {...args}>
        Selected
      </DropdownMenuItem>
    </ul>
  </div>
);

Default.args = {};
