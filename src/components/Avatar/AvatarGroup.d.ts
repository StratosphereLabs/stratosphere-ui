import { HTMLAttributes } from '../../../node_modules/react';
import { AvatarSize } from './Avatar';
export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
    countSize?: AvatarSize;
    remainingCount?: number;
    space?: number;
};
export declare const AvatarGroup: ({ children, className, countSize, remainingCount, space, ...props }: AvatarGroupProps) => import("react/jsx-runtime").JSX.Element;
