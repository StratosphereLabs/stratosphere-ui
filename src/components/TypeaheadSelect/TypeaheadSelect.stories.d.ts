import { Meta, StoryObj } from '@storybook/react';
import { TypeaheadSelect } from '.';
interface DataItem {
    [x: string]: string;
    id: string;
    label: string;
}
interface FormValues {
    field1: string;
}
declare const meta: Meta<typeof TypeaheadSelect<DataItem, FormValues>>;
export default meta;
type Story = StoryObj<typeof TypeaheadSelect<DataItem, FormValues>>;
export declare const SingleSelect: Story;
export declare const SingleSelectWithoutBadge: Story;
export declare const SingleSelectWithDefaultValue: Story;
export declare const MultiSelect: Story;
export declare const MultiSelectWithDefaultValues: Story;
