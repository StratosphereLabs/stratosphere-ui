import { Story, Meta } from '@storybook/react';
import { Popover, PopoverProps } from './Popover';

export default {
  title: 'Popover',
  component: Popover,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<PopoverProps> = args => <Popover {...args} />;

Default.args = {
  buttonProps: {
    children: 'Open Popover',
  },
  className: 'mb-32',
  popoverComponent: () => <div>Test Lmao</div>,
};
