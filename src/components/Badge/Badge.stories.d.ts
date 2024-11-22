import { StoryObj } from '@storybook/react';
import { Badge } from './Badge';
declare const meta: {
    title: string;
    component: ({ children, className, color, dismissable, icon: Icon, onDismiss, outline, size, ...props }: import('./Badge').BadgeProps) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof Badge>;
export declare const Default: Story;
export declare const Colors: Story;
export declare const Sizes: Story;
export declare const WithOutline: Story;
export declare const WithIcon: Story;
export declare const Dismissable: Story;
