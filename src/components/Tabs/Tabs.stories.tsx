import { Story, Meta } from '@storybook/react';
import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<TabsProps> = args => <Tabs {...args} />;

Default.args = {
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
};

export const Bordered: Story<TabsProps> = args => <Tabs {...args} />;

Bordered.args = {
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
};

export const Lifted: Story<TabsProps> = args => <Tabs {...args} />;

Lifted.args = {
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
};

export const Boxed: Story<TabsProps> = args => <Tabs {...args} />;

Boxed.args = {
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
};

export const Controlled: Story<TabsProps> = args => <Tabs {...args} />;

Controlled.args = {
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
};

export const Disabled: Story<TabsProps> = args => <Tabs {...args} />;

Disabled.args = {
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
};

export const Sizes: Story<TabsProps> = args => (
  <div className="flex flex-col gap-4">
    <Tabs size="xs" {...args} />
    <Tabs size="sm" {...args} />
    <Tabs {...args} />
    <Tabs size="lg" {...args} />
  </div>
);

Sizes.args = {
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
};
