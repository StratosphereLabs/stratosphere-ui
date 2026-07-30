import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
export declare const SingleDate: Story;
export declare const DateAndTime: Story;
export declare const DateAndTimeWithSeconds: Story;
/** Two months are shown side by side from 40rem up, and one below it. */
export declare const DateRangeSelection: Story;
export declare const SingleMonth: Story;
export declare const WithMinAndMax: Story;
export declare const WithDisabledWeekends: Story;
export declare const WithDropdownNavigation: Story;
export declare const WithWeekNumbers: Story;
export declare const StartingOnMonday: Story;
export declare const WithFooter: Story;
