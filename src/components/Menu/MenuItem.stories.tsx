import { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'MenuItem',
  component: MenuItem,
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {},
  render: args => (
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
  ),
};
