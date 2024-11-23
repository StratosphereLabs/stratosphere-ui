import { Meta, StoryObj } from '@storybook/react';
import { Browser } from './Browser';
declare const meta: Meta<typeof Browser>;
export default meta;
type Story = StoryObj<typeof Browser>;
export declare const Default: Story;
export declare const WithBorder: Story;
export declare const WithBackgroundColor: Story;
