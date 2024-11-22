import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
declare const meta: Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof Select<{
    id: string;
    label: string;
}, {
    field1: string;
}>>;
export declare const Default: Story;
export declare const WithDefaultValue: Story;
export declare const SelectMultiple: Story;
export declare const WithMultipleDefaultValues: Story;
