import { HTMLAttributes } from '../../../node_modules/react';
import { Color } from '../../common';
export declare const AvatarSizes: readonly ["sm", "md", "lg", "xl"];
export type AvatarSize = (typeof AvatarSizes)[number];
export declare const AVATAR_SIZE_MAP: Record<AvatarSize, string>;
export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
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
export declare const Avatar: ({ alt, className, isOffline, isOnline, placeholderClassName, placeholderText, ringColor, shapeClassName, size, src, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
