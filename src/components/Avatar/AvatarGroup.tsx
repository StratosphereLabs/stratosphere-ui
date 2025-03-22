import classNames from 'classnames';
import { HTMLAttributes } from 'react';

import { Avatar, AvatarSize } from './Avatar';

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  countSize?: AvatarSize;
  remainingCount?: number;
  space?: number;
};

export const AvatarGroup = ({
  children,
  className,
  countSize,
  remainingCount,
  space = 8,
  ...props
}: AvatarGroupProps) => (
  <div
    className={classNames('avatar-group', `-space-x-${space}`, className)}
    role="group"
    {...props}
  >
    {children}
    {remainingCount ? (
      <Avatar size={countSize ?? 'md'} placeholderText={`+${remainingCount}`} />
    ) : null}
  </div>
);
