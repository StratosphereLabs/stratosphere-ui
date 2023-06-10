import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  children: 'Default',
};

export const Loading: Story<ButtonProps> = args => <Button {...args} />;

Loading.args = {
  children: 'Loading',
  loading: true,
};

export const CustomColor: Story<ButtonProps> = args => (
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
);

CustomColor.args = {
  size: 'md',
};

export const CustomSize: Story<ButtonProps> = args => (
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
);

CustomSize.args = {};
