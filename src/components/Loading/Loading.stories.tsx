import { Story, Meta } from '@storybook/react';
import { Loading } from './Loading';

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story = args => <Loading {...args} />;

Default.args = {};

export const CustomSize: Story = args => (
  <div className="flex gap-2">
    <Loading size="xs" {...args} />
    <Loading size="sm" {...args} />
    <Loading size="md" {...args} />
    <Loading size="lg" {...args} />
  </div>
);

CustomSize.args = {
  shape: 'spinner',
};

export const CustomShape: Story = args => (
  <div className="flex gap-2">
    <Loading shape="spinner" {...args} />
    <Loading shape="dots" {...args} />
    <Loading shape="ball" {...args} />
    <Loading shape="bars" {...args} />
    <Loading shape="infinity" {...args} />
    <Loading shape="ring" {...args} />
  </div>
);

CustomShape.args = {};
