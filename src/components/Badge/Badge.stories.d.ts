import { StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
declare const meta: {
    title: string;
    component: ({ children, className, color, dash, dismissable, icon: Icon, onDismiss, outline, size, soft, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof Badge>;
export declare const Default: Story;
export declare const Colors: Story;
export declare const Sizes: Story;
export declare const Outline: Story;
export declare const Dash: Story;
export declare const Soft: Story;
export declare const WithIcon: Story;
export declare const Dismissable: Story;
