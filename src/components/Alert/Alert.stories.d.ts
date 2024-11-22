import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const Default: Story;
export declare const WithDescription: Story;
export declare const WithCloseButton: Story;
