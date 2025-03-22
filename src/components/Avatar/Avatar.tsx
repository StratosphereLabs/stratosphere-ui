import classNames from 'classnames';
import { HTMLAttributes } from 'react';

import { Color } from '../../common';

export const AvatarSizes = ['sm', 'md', 'lg', 'xl'] as const;

export type AvatarSize = (typeof AvatarSizes)[number];

export const AVATAR_SIZE_MAP: Record<AvatarSize, string> = {
  sm: 'w-8',
  md: 'w-16',
  lg: 'w-20',
  xl: 'w-32',
};

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  alt?: string;
  isOffline?: boolean;
  isOnline?: boolean;
  placeholderClassName?: string;
  placeholderText?: string;
  ringColor?: Color;
  shapeClassName?: string;
  size?: AvatarSize;
  src?: string;
}

export const Avatar = ({
  alt,
  className,
  isOffline,
  isOnline,
  placeholderClassName,
  placeholderText,
  ringColor,
  shapeClassName,
  size = 'md',
  src,
  ...props
}: AvatarProps) => (
  <div
    className={classNames(
      'avatar',
      isOffline && 'avatar-offline',
      isOnline && 'avatar-online',
      placeholderText !== undefined && 'avatar-placeholder',
      className,
    )}
    {...props}
  >
    <div
      className={classNames(
        AVATAR_SIZE_MAP[size],
        ringColor &&
          `rounded-full ring ring-offset-2 ring-offset-base-100 ring-${ringColor}`,
        placeholderText && 'bg-neutral text-neutral-content',
        shapeClassName,
      )}
    >
      {src !== undefined ? <img src={src} alt={alt} /> : null}
      {placeholderText !== undefined ? (
        <span className={placeholderClassName}>{placeholderText}</span>
      ) : null}
    </div>
  </div>
);
