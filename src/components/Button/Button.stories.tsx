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

export const Large: Story<ButtonProps> = args => <Button {...args} />;

Large.args = {
  children: 'Large',
  size: 'lg',
};
