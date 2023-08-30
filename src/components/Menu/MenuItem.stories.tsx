import { Story, Meta } from '@storybook/react';
import { Menu } from './Menu';
import { MenuItem, MenuItemProps } from './MenuItem';

export default {
  title: 'MenuItem',
  component: MenuItem,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<MenuItemProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  ref,
  ...args
}: MenuItemProps) => (
  <div className="flex flex-col gap-4">
    <Menu className="rounded-box bg-base-100 p-2">
      <MenuItem {...args}>Default</MenuItem>
    </Menu>
    <Menu className="rounded-box bg-base-100 p-2">
      <MenuItem active {...args}>
        Active
      </MenuItem>
    </Menu>
    <Menu className="bg-base-100">
      <MenuItem bordered {...args}>
        Bordered
      </MenuItem>
    </Menu>
    <Menu className="bg-base-100">
      <MenuItem borderOnHover {...args}>
        Border on hover
      </MenuItem>
    </Menu>
    <Menu className="rounded-box bg-base-100 p-2">
      <MenuItem disabled {...args}>
        Disabled
      </MenuItem>
    </Menu>
    <Menu className="rounded-box bg-base-100 p-2">
      <MenuItem selected {...args}>
        Selected
      </MenuItem>
    </Menu>
  </div>
);

Default.args = {};
