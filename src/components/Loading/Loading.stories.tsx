import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};

export const AllSizesTemplate: Story = {
  args: {
    shape: 'spinner',
  },
  render: args => (
    <div className="flex gap-2">
      <Loading size="xs" {...args} />
      <Loading size="sm" {...args} />
      <Loading size="md" {...args} />
      <Loading size="lg" {...args} />
    </div>
  ),
};

export const CustomShape: Story = {
  args: {},
  render: args => (
    <div className="flex gap-2">
      <Loading shape="spinner" {...args} />
      <Loading shape="dots" {...args} />
      <Loading shape="ball" {...args} />
      <Loading shape="bars" {...args} />
      <Loading shape="infinity" {...args} />
      <Loading shape="ring" {...args} />
    </div>
  ),
};
