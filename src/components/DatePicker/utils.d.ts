import { DateInput, DateRange, DateRangeInput, DateSelectionMode, DateValueMode } from './types';
export declare const ISO_DATE_REGEX: RegExp;
/**
 * The hours, minutes and seconds are bounded so that an out of range time is
 * rejected rather than overflowing into the next day when it is applied to a
 * `Date`.
 */
export declare const ISO_DATE_TIME_REGEX: RegExp;
export declare const ISO_MONTH_REGEX: RegExp;
/** An `HH:mm[:ss]` time, with an optional leading zero on the hours. */
export declare const TIME_REGEX: RegExp;
export declare const startOfDay: (date: Date) => Date;
export declare const startOfMonth: (date: Date) => Date;
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
/**
 * Resolves a date-like value to a local `Date`, keeping its time of day. ISO
 * date and time strings are parsed as local times, matching the value of a
 * native `datetime-local` input. ISO date and month strings have no time of day
 * and resolve to midnight, and every other string is left to the `Date`
 * constructor, which keeps the time of day of formats that carry one.
 */
export declare const parseDateTime: (value?: DateInput | null) => Date | null;
export declare const parseDateRange: (value?: DateRangeInput | null) => DateRange;
/** Formats a date as `yyyy-MM-dd` using its local calendar values. */
export declare const formatISODate: (date: Date) => string;
/** Formats a date as `yyyy-MM` using its local calendar values. */
export declare const formatISOMonth: (date: Date) => string;
/** Formats the time of a date as `HH:mm`, or as `HH:mm:ss` with `showSeconds`. */
export declare const formatTimeValue: (date: Date, showSeconds?: boolean) => string;
/**
 * Formats a date as `yyyy-MM-ddTHH:mm`, matching the value of a native
 * `datetime-local` input. Seconds are only included when they are set.
 */
export declare const formatISODateTime: (date: Date) => string;
/**
 * Applies an `HH:mm` or `HH:mm:ss` time to a date. Values that are not a time
 * leave the date unchanged, since `time` inputs report an empty string while
 * they are being edited, and an out of range time is not a time - it would
 * otherwise overflow the date into the following day.
 */
export declare const withTimeValue: (date: Date, time: string) => Date;
/** Long date, e.g. `August 12, 2013`. Used for accessible day labels. */
export declare const formatDateLabel: (date: Date, locale?: string) => string;
/** Short date, e.g. `Aug 12, 2013`. Used for the date picker button text. */
export declare const formatDateText: (date: Date, locale?: string) => string;
/** Short date and time, e.g. `Aug 12, 2013, 2:30 PM`. */
export declare const formatDateTimeText: (date: Date, locale?: string) => string;
/** Short month, e.g. `Aug 2013`. Used for the month picker button text. */
export declare const formatMonthText: (date: Date, locale?: string) => string;
/** Long month, e.g. `August 2013`. Used for the calendar caption. */
export declare const formatMonthLabel: (date: Date, locale?: string) => string;
/** Short month name, e.g. `Aug`. Used for the month dropdown of a day grid. */
export declare const formatMonthName: (date: Date, locale?: string) => string;
/** Long month name, e.g. `August`. */
export declare const formatMonthLongName: (date: Date, locale?: string) => string;
/** Short weekday name, e.g. `Sun`. Used for the weekday headers. */
export declare const formatWeekdayName: (date: Date, locale?: string) => string;
/** Long weekday name, e.g. `Sunday`. Used for accessible weekday labels. */
export declare const formatWeekdayLabel: (date: Date, locale?: string) => string;
export declare const getMonthLabels: (locale?: string) => Array<{
    long: string;
    short: string;
}>;
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
 * Converts a selected date to the value stored in form state. Empty selections
 * are stored as an empty string in `iso` mode so that they stay compatible with
 * string schemas, and as `null` in `date` mode.
 */
export declare const serializeDateValue: (date: Date | null, mode: DateSelectionMode, valueMode: DateValueMode) => string | Date | null;
/** Restricts a date to the min/max bounds, keeping keyboard navigation valid. */
export declare const clampDate: (date: Date, { max, min }: Pick<DateBoundsOptions, "max" | "min">) => Date;
