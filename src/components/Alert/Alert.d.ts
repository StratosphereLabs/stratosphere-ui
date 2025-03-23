import { ComponentProps, FC, HTMLAttributes } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
export declare const ALERT_COLORS: readonly ["info", "success", "warning", "error"];
export type AlertColor = (typeof ALERT_COLORS)[number];
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    actionButtons?: ({
        id: string;
        label: string;
    } & ButtonProps)[];
    color?: AlertColor;
    dash?: boolean;
    description?: string;
    icon?: FC<ComponentProps<'svg'>>;
    iconClassName?: string;
    onDismiss?: () => void;
    outline?: boolean;
    soft?: boolean;
    title: string;
}
export declare const Alert: ({ actionButtons, className, color, dash, description, icon: Icon, iconClassName, onDismiss, outline, soft, title, ...props }: AlertProps) => import("react/jsx-runtime").JSX.Element;
