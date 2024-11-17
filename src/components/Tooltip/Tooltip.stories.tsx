import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    className: 'my-8',
    text: 'Tooltip text',
  },
  render: args => (
    <Tooltip {...args}>
      <Button color="info">Toggle Tooltip</Button>
    </Tooltip>
  ),
};

export const CustomColor: Story = {
  args: {
    position: 'right',
    text: 'Tooltip text',
  },
  render: args => (
    <div className="flex flex-col gap-4">
      <Tooltip {...args}>
        <Button>Default</Button>
      </Tooltip>
      <Tooltip color="primary" {...args}>
        <Button color="primary">Primary</Button>
      </Tooltip>
      <Tooltip color="secondary" {...args}>
        <Button color="secondary">Secondary</Button>
      </Tooltip>
      <Tooltip color="accent" {...args}>
        <Button color="accent">Accent</Button>
      </Tooltip>
      <Tooltip color="info" {...args}>
        <Button color="info">Info</Button>
      </Tooltip>
      <Tooltip color="warning" {...args}>
        <Button color="warning">Warning</Button>
      </Tooltip>
      <Tooltip color="success" {...args}>
        <Button color="success">Success</Button>
      </Tooltip>
      <Tooltip color="error" {...args}>
        <Button color="error">Error</Button>
      </Tooltip>
    </div>
  ),
};

export const CustomPosition: Story = {
  args: {
    text: 'Tooltip text',
  },
  render: args => (
    <div className="flex flex-col gap-4 p-8">
      <Tooltip position="top" {...args}>
        <Button color="info">Top</Button>
      </Tooltip>
      <Tooltip position="right" {...args}>
        <Button color="info">Right</Button>
      </Tooltip>
      <Tooltip position="bottom" {...args}>
        <Button color="info">Bottom</Button>
      </Tooltip>
      <Tooltip position="left" {...args}>
        <Button color="info">Left</Button>
      </Tooltip>
    </div>
  ),
};
