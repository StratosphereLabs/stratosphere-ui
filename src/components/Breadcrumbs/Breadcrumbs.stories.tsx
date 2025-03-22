import { Meta, StoryObj } from '@storybook/react';

import { HomeIcon, InfoIcon } from '../Icons';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { id: 'home', children: 'Home' },
      { id: 'about', children: 'About' },
      { id: 'contact', children: 'Contact' },
    ],
  },
};

export const WithLinks: Story = {
  args: {
    items: [
      { id: 'home', children: 'Home', onClick: () => {} },
      { id: 'about', children: 'About', onClick: () => {} },
      { id: 'contact', children: 'Contact', onClick: () => {} },
    ],
  },
};

export const WithIconsAndLinks: Story = {
  args: {
    items: [
      { id: 'home', children: 'Home', icon: HomeIcon, onClick: () => {} },
      { id: 'about', children: 'About', icon: InfoIcon, onClick: () => {} },
      { id: 'contact', children: 'Contact', onClick: () => {} },
    ],
  },
};

export const WithSizes: Story = {
  args: {
    items: [
      { id: 'home', children: 'Home', icon: HomeIcon, onClick: () => {} },
      { id: 'about', children: 'About', icon: InfoIcon, onClick: () => {} },
      { id: 'contact', children: 'Contact', onClick: () => {} },
    ],
  },
  render: args => (
    <div className="flex flex-col gap-2">
      <Breadcrumbs {...args} className="text-xs" />
      <Breadcrumbs {...args} className="text-sm" />
      <Breadcrumbs {...args} className="text-md" />
      <Breadcrumbs {...args} className="text-lg" />
      <Breadcrumbs {...args} className="text-xl" />
    </div>
  ),
};
