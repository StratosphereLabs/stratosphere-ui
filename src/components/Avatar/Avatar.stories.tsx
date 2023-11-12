import { Story, Meta } from '@storybook/react';
import classNames from 'classnames';
import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<AvatarProps> = args => <Avatar {...args} />;

Default.args = {
  shapeClassName: 'w-24',
  children: (
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  ),
};

export const Rounded: Story<AvatarProps> = args => <Avatar {...args} />;

Rounded.args = {
  shapeClassName: 'w-24 rounded-full',
  children: (
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  ),
};

export const WithOnlineStatus: Story<AvatarProps> = args => (
  <Avatar {...args} />
);

WithOnlineStatus.args = {
  isOnline: true,
  shapeClassName: 'w-12 rounded-full',
  children: (
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  ),
};

export const WithOfflineStatus: Story<AvatarProps> = args => (
  <Avatar {...args} />
);

WithOfflineStatus.args = {
  isOffline: true,
  shapeClassName: 'w-12 rounded-full',
  children: (
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  ),
};

export const AvatarGroup: Story<AvatarProps> = args => (
  <div className="avatar-group -space-x-3">
    <Avatar {...args} />
    <Avatar {...args} />
    <Avatar {...args} />
    <Avatar {...args} />
    <Avatar
      isPlaceholder
      shapeClassName={classNames(
        'bg-neutral text-neutral-content',
        args.shapeClassName,
      )}
    >
      <span>+99</span>
    </Avatar>
  </div>
);

AvatarGroup.args = {
  shapeClassName: 'w-12',
  children: (
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  ),
};
