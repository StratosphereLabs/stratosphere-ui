import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
};

export const Lifted: Story = {
  args: {
    lifted: true,
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
};

export const Boxed: Story = {
  args: {
    boxed: true,
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
};

export const Controlled: Story = {
  args: {
    boxed: true,
    selectedTabId: '2',
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    boxed: true,
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        disabled: true,
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
};

export const Sizes: Story = {
  args: {
    boxed: true,
    tabs: [
      {
        id: '1',
        children: 'Tab 1',
      },
      {
        id: '2',
        children: 'Tab 2',
      },
      {
        id: '3',
        children: 'Tab 3',
      },
    ],
  },
  render: args => (
    <div className="flex flex-col gap-4">
      <Tabs size="xs" {...args} />
      <Tabs size="sm" {...args} />
      <Tabs {...args} />
      <Tabs size="lg" {...args} />
    </div>
  ),
};
