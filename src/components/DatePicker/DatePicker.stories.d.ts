import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
interface FormValues {
    fromDate: string;
    month: string;
    singleDate: string;
    toDate: string;
}
declare const meta: Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof DatePicker<FormValues>>;
export declare const SingleDate: Story;
export declare const WithDefaultValue: Story;
export declare const DateRangeWithTwoFields: Story;
export declare const DateRangeAsObject: Story;
export declare const SingleMonth: Story;
export declare const Clearable: Story;
export declare const WithMinAndMax: Story;
export declare const Small: Story;
export declare const WithError: Story;
