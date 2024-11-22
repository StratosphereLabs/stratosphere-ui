import { HTMLAttributes } from '../../../node_modules/react';
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    isOffline?: boolean;
    isOnline?: boolean;
    isPlaceholder?: boolean;
    shapeClassName?: string;
}
export declare const Avatar: ({ children, className, isOffline, isOnline, isPlaceholder, shapeClassName, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
