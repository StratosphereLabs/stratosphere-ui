import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

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
  render: args => (
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
  ),
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
    </div>
  ),
};
