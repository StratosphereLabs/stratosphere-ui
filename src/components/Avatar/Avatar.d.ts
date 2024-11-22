import { HTMLAttributes } from '../../../node_modules/react';
export declare const AvatarSizes: readonly ["sm", "md", "lg", "xl"];
export type AvatarSize = (typeof AvatarSizes)[number];
export declare const AVATAR_SIZE_MAP: Record<AvatarSize, string>;
export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
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
export declare const Avatar: ({ alt, className, hasRing, isOffline, isOnline, placeholderClassName, placeholderText, shapeClassName, size, src, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
