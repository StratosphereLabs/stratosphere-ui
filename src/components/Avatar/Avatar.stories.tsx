import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    shapeClassName: 'w-24',
    children: (
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    ),
  },
};

export const Rounded: Story = {
  args: {
    shapeClassName: 'w-24 rounded-full',
    children: (
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    ),
  },
};

export const WithOnlineStatus: Story = {
  args: {
    isOnline: true,
    shapeClassName: 'w-12 rounded-full',
    children: (
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    ),
  },
};

export const WithOfflineStatus: Story = {
  args: {
    isOffline: true,
    shapeClassName: 'w-12 rounded-full',
    children: (
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    ),
  },
};

// export const AvatarGroup: Story<AvatarProps> = args => (
//   <div className="avatar-group -space-x-3">
//     <Avatar {...args} />
//     <Avatar {...args} />
//     <Avatar {...args} />
//     <Avatar {...args} />
//     <Avatar
//       isPlaceholder
//       shapeClassName={classNames(
//         'bg-neutral text-neutral-content',
//         args.shapeClassName,
//       )}
//     >
//       <span>+99</span>
//     </Avatar>
//   </div>
// );

// AvatarGroup.args = {
//   shapeClassName: 'w-12',
//   children: (
//     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//   ),
// };
