import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement>;

export const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => (
  <div className={classNames('avatar-group', className)} {...props} />
);
