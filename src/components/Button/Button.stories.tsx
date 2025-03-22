import { Meta, StoryObj } from '@storybook/react';

import { InfoIcon } from '../Icons';
import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

const renderColors = (args: ButtonProps) => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex gap-2">
      <Button {...args}>Default</Button>
      <Button color="neutral" {...args}>
        Neutral
      </Button>
      <Button color="ghost" {...args}>
        Ghost
      </Button>
      <Button color="primary" {...args}>
        Primary
      </Button>
      <Button color="secondary" {...args}>
        Secondary
      </Button>
      <Button color="accent" {...args}>
        Accent
      </Button>
    </div>
    <div className="flex gap-2">
      <Button color="info" {...args}>
        Info
      </Button>
      <Button color="success" {...args}>
        Success
      </Button>
      <Button color="warning" {...args}>
        Warning
      </Button>
      <Button color="error" {...args}>
        Error
      </Button>
    </div>
  </div>
);

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
  },
};

export const CustomColor: Story = {
  args: {
    size: 'md',
  },
  render: renderColors,
};

export const CustomSize: Story = {
  args: {},
  render: args => (
    <div className="flex items-center gap-2">
      <Button size="xs" {...args}>
        Extra Small
      </Button>
      <Button size="sm" {...args}>
        Small
      </Button>
      <Button size="md" {...args}>
        Medium
      </Button>
      <Button size="lg" {...args}>
        Large
      </Button>
      <Button size="xl" {...args}>
        Extra Large
      </Button>
    </div>
  ),
};

export const Outline: Story = {
  args: {
    outline: true,
    size: 'md',
  },
  render: renderColors,
};

export const Soft: Story = {
  args: {
    size: 'md',
    soft: true,
  },
  render: renderColors,
};

export const Dash: Story = {
  args: {
    dash: true,
    size: 'md',
  },
  render: renderColors,
};

export const Shapes: Story = {
  args: {
    color: 'primary',
    size: 'md',
  },
  render: args => (
    <>
      <Button {...args} shape="square">
        <InfoIcon className="h-6 w-6" />
      </Button>
      <Button {...args} shape="circle">
        <InfoIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};
