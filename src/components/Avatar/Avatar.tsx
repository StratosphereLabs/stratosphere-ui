import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export const AvatarSizes = ['sm', 'md', 'lg', 'xl'] as const;

export type AvatarSize = (typeof AvatarSizes)[number];

export const AVATAR_SIZE_MAP: Record<AvatarSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-16 w-16',
  lg: 'h-20 w-20',
  xl: 'h-32 w-32',
};

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  alt?: string;
  hasRing?: boolean;
  isOffline?: boolean;
  isOnline?: boolean;
  placeholderClassName?: string;
  placeholderText?: string;
  shapeClassName?: string;
  size?: AvatarSize;
  src?: string;
}

export const Avatar = ({
  alt,
  className,
  hasRing,
  isOffline,
  isOnline,
  placeholderClassName,
  placeholderText,
  shapeClassName,
  size,
  src,
  ...props
}: AvatarProps) => (
  <div
    className={classNames(
      'avatar',
      isOffline && 'offline',
      isOnline && 'online',
      placeholderText !== undefined && 'placeholder',
      className,
    )}
    {...props}
  >
    <div
      className={classNames(
        AVATAR_SIZE_MAP[size ?? 'md'],
        hasRing && 'ring-offset-base-100 rounded-full ring ring-offset-2',
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
