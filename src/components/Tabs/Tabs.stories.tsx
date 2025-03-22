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

export const Border: Story = {
  args: {
    border: true,
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

export const Lift: Story = {
  args: {
    lift: true,
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

export const Box: Story = {
  args: {
    box: true,
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
    box: true,
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
    box: true,
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
    box: true,
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
