import { ComponentProps, FC, HTMLAttributes } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
export declare const ALERT_COLORS: readonly ["info", "success", "warning", "error"];
export type AlertColor = (typeof ALERT_COLORS)[number];
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    actionButtons?: ({
        id: string;
    } & ButtonProps)[];
    color?: AlertColor;
    description?: string;
    icon: FC<ComponentProps<'svg'>>;
    title: string;
}
export declare const Alert: ({ actionButtons, className, color, description, icon: Icon, title, ...props }: AlertProps) => import("react/jsx-runtime").JSX.Element;
