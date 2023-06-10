import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  isOffline?: boolean;
  isOnline?: boolean;
  isPlaceholder?: boolean;
  shapeClassName?: string;
}

export const Avatar = ({
  children,
  className,
  isOffline,
  isOnline,
  isPlaceholder,
  shapeClassName,
  ...props
}: AvatarProps) => (
  <div
    className={classNames(
      'avatar',
      isOffline && 'offline',
      isOnline && 'online',
      isPlaceholder && 'placeholder',
      className,
    )}
    {...props}
  >
    <div className={shapeClassName}>{children}</div>
  </div>
);
