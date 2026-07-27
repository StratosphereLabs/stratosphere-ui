import { DateInput, DateRange, DateRangeInput, DateSelectionMode, DateValueMode, WeekDay } from './types';
export declare const ISO_DATE_REGEX: RegExp;
export declare const ISO_MONTH_REGEX: RegExp;
export declare const startOfDay: (date: Date) => Date;
export declare const startOfMonth: (date: Date) => Date;
export declare const addDays: (date: Date, amount: number) => Date;
export declare const addMonths: (date: Date, amount: number) => Date;
export declare const addYears: (date: Date, amount: number) => Date;
export declare const getDaysInMonth: (date: Date) => number;
export declare const isSameDay: (a: Date, b: Date) => boolean;
export declare const isSameMonth: (a: Date, b: Date) => boolean;
/**
 * Resolves a date-like value to a local `Date` at midnight. ISO date and month
 * strings are parsed as local dates so that `2013-08-01` never shifts to the
 * previous day in negative UTC offsets.
 */
export declare const parseDate: (value?: DateInput | null) => Date | null;
export declare const parseDateRange: (value?: DateRangeInput | null) => DateRange;
/** Formats a date as `yyyy-MM-dd` using its local calendar values. */
export declare const formatISODate: (date: Date) => string;
/** Formats a date as `yyyy-MM` using its local calendar values. */
export declare const formatISOMonth: (date: Date) => string;
/** Long date, e.g. `August 12, 2013`. Used for accessible day labels. */
export declare const formatDateLabel: (date: Date, locale?: string) => string;
/** Short date, e.g. `Aug 12, 2013`. Used for the date picker button text. */
export declare const formatDateText: (date: Date, locale?: string) => string;
/** Short month, e.g. `Aug 2013`. Used for the month picker button text. */
export declare const formatMonthText: (date: Date, locale?: string) => string;
/** Long month, e.g. `August 2013`. Used for the calendar caption. */
export declare const formatMonthLabel: (date: Date, locale?: string) => string;
export declare const getWeekdayLabels: (weekStartsOn?: WeekDay, locale?: string) => Array<{
    long: string;
    short: string;
}>;
export declare const getMonthLabels: (locale?: string) => Array<{
    long: string;
    short: string;
}>;
/**
 * Returns the weeks of the month that `month` belongs to, including the
 * outside days needed to fill the first and last week.
 */
export declare const getCalendarWeeks: (month: Date, weekStartsOn?: WeekDay, fixedWeeks?: boolean) => Date[][];
export interface DateBoundsOptions {
    isDateDisabled?: (date: Date) => boolean;
    max?: Date | null;
    min?: Date | null;
}
export declare const isDateOutOfBounds: (date: Date, { max, min }: Pick<DateBoundsOptions, "max" | "min">) => boolean;
export declare const isDateUnavailable: (date: Date, { isDateDisabled, max, min }: DateBoundsOptions) => boolean;
/** True when every day of `month` falls outside of the min/max bounds. */
export declare const isMonthUnavailable: (month: Date, { isDateDisabled, max, min }: DateBoundsOptions) => boolean;
/**
 * Applies a day click to the current range. Selecting a day while a complete
 * range is selected starts a new range, and selecting a day before the current
 * start date flips the range around.
 */
export declare const getNextDateRange: ({ from, to }: DateRange, date: Date) => DateRange;
export declare const getRangePosition: (date: Date, { from, to }: DateRange) => "start" | "middle" | "end" | null;
/**
 * Converts a selected date to the value stored in form state. Empty selections
 * are stored as an empty string in `iso` mode so that they stay compatible with
 * string schemas, and as `null` in `date` mode.
 */
export declare const serializeDateValue: (date: Date | null, mode: DateSelectionMode, valueMode: DateValueMode) => string | Date | null;
/** Restricts a date to the min/max bounds, keeping keyboard navigation valid. */
export declare const clampDate: (date: Date, { max, min }: Pick<DateBoundsOptions, "max" | "min">) => Date;
