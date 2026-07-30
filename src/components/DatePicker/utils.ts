import {
  DateInput,
  DateRange,
  DateRangeInput,
  DateSelectionMode,
  DateValueMode,
} from './types';

export const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * The hours, minutes and seconds are bounded so that an out of range time is
 * rejected rather than overflowing into the next day when it is applied to a
 * `Date`.
 */
export const ISO_DATE_TIME_REGEX =
  /^(\d{4})-(\d{2})-(\d{2})[T ]([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/;

export const ISO_MONTH_REGEX = /^(\d{4})-(\d{2})$/;

/** An `HH:mm[:ss]` time, with an optional leading zero on the hours. */
export const TIME_REGEX = /^([01]?\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/;

/** An arbitrary non-leap year, used to generate localized month labels. */
const REFERENCE_YEAR = 2023;

export const startOfDay = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const startOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1);

export const addMonths = (date: Date, amount: number): Date =>
  new Date(date.getFullYear(), date.getMonth() + amount, 1);

export const addYears = (date: Date, amount: number): Date =>
  new Date(date.getFullYear() + amount, date.getMonth(), 1);

export const getDaysInMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const isSameMonth = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

/**
 * Resolves a date-like value to a local `Date` at midnight. ISO date and month
 * strings are parsed as local dates so that `2013-08-01` never shifts to the
 * previous day in negative UTC offsets.
 */
export const parseDate = (value?: DateInput | null): Date | null => {
  if (value === null || value === undefined || value === '') return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : startOfDay(value);
  }
  if (typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : startOfDay(date);
  }
  const isoDate = ISO_DATE_REGEX.exec(value);
  if (isoDate !== null) {
    return new Date(
      Number(isoDate[1]),
      Number(isoDate[2]) - 1,
      Number(isoDate[3]),
    );
  }
  const isoMonth = ISO_MONTH_REGEX.exec(value);
  if (isoMonth !== null) {
    return new Date(Number(isoMonth[1]), Number(isoMonth[2]) - 1, 1);
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : startOfDay(parsed);
};

/**
 * Resolves a date-like value to a local `Date`, keeping its time of day. ISO
 * date and time strings are parsed as local times, matching the value of a
 * native `datetime-local` input. ISO date and month strings have no time of day
 * and resolve to midnight, and every other string is left to the `Date`
 * constructor, which keeps the time of day of formats that carry one.
 */
export const parseDateTime = (value?: DateInput | null): Date | null => {
  if (value === null || value === undefined || value === '') return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : new Date(value.getTime());
  }
  if (typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  const isoDateTime = ISO_DATE_TIME_REGEX.exec(value);
  if (isoDateTime !== null) {
    return new Date(
      Number(isoDateTime[1]),
      Number(isoDateTime[2]) - 1,
      Number(isoDateTime[3]),
      Number(isoDateTime[4]),
      Number(isoDateTime[5]),
      isoDateTime[6] !== undefined ? Number(isoDateTime[6]) : 0,
    );
  }
  if (ISO_DATE_REGEX.test(value) || ISO_MONTH_REGEX.test(value)) {
    return parseDate(value);
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export const parseDateRange = (value?: DateRangeInput | null): DateRange => ({
  from: parseDate(value?.from),
  to: parseDate(value?.to),
});

const padNumber = (value: number, length: number): string =>
  value.toString().padStart(length, '0');

/** Formats a date as `yyyy-MM-dd` using its local calendar values. */
export const formatISODate = (date: Date): string =>
  `${padNumber(date.getFullYear(), 4)}-${padNumber(
    date.getMonth() + 1,
    2,
  )}-${padNumber(date.getDate(), 2)}`;

/** Formats a date as `yyyy-MM` using its local calendar values. */
export const formatISOMonth = (date: Date): string =>
  `${padNumber(date.getFullYear(), 4)}-${padNumber(date.getMonth() + 1, 2)}`;

/** Formats the time of a date as `HH:mm`, or as `HH:mm:ss` with `showSeconds`. */
export const formatTimeValue = (date: Date, showSeconds = false): string =>
  [
    date.getHours(),
    date.getMinutes(),
    ...(showSeconds ? [date.getSeconds()] : []),
  ]
    .map(value => padNumber(value, 2))
    .join(':');

/**
 * Formats a date as `yyyy-MM-ddTHH:mm`, matching the value of a native
 * `datetime-local` input. Seconds are only included when they are set.
 */
export const formatISODateTime = (date: Date): string =>
  `${formatISODate(date)}T${formatTimeValue(date, date.getSeconds() > 0)}`;

/**
 * Applies an `HH:mm` or `HH:mm:ss` time to a date. Values that are not a time
 * leave the date unchanged, since `time` inputs report an empty string while
 * they are being edited, and an out of range time is not a time - it would
 * otherwise overflow the date into the following day.
 */
export const withTimeValue = (date: Date, time: string): Date => {
  const parsed = TIME_REGEX.exec(time);
  if (parsed === null) return date;
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    Number(parsed[1]),
    Number(parsed[2]),
    parsed[3] !== undefined ? Number(parsed[3]) : 0,
  );
};

/** Long date, e.g. `August 12, 2013`. Used for accessible day labels. */
export const formatDateLabel = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/** Short date, e.g. `Aug 12, 2013`. Used for the date picker button text. */
export const formatDateText = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

/** Short date and time, e.g. `Aug 12, 2013, 2:30 PM`. */
export const formatDateTimeText = (date: Date, locale?: string): string =>
  date.toLocaleString(locale, {
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    year: 'numeric',
  });

/** Short month, e.g. `Aug 2013`. Used for the month picker button text. */
export const formatMonthText = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });

/** Long month, e.g. `August 2013`. Used for the calendar caption. */
export const formatMonthLabel = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });

/** Short month name, e.g. `Aug`. Used for the month dropdown of a day grid. */
export const formatMonthName = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { month: 'short' });

/** Long month name, e.g. `August`. */
export const formatMonthLongName = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { month: 'long' });

/** Short weekday name, e.g. `Sun`. Used for the weekday headers. */
export const formatWeekdayName = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { weekday: 'short' });

/** Long weekday name, e.g. `Sunday`. Used for accessible weekday labels. */
export const formatWeekdayLabel = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { weekday: 'long' });

export const getMonthLabels = (
  locale?: string,
): Array<{ long: string; short: string }> =>
  [...Array(12).keys()].map(month => {
    const date = new Date(REFERENCE_YEAR, month, 1);
    return {
      long: formatMonthLongName(date, locale),
      short: formatMonthName(date, locale),
    };
  });

export interface DateBoundsOptions {
  isDateDisabled?: (date: Date) => boolean;
  max?: Date | null;
  min?: Date | null;
}

export const isDateOutOfBounds = (
  date: Date,
  { max, min }: Pick<DateBoundsOptions, 'max' | 'min'>,
): boolean => {
  if (min != null && date.getTime() < startOfDay(min).getTime()) return true;
  if (max != null && date.getTime() > startOfDay(max).getTime()) return true;
  return false;
};

export const isDateUnavailable = (
  date: Date,
  { isDateDisabled, max, min }: DateBoundsOptions,
): boolean =>
  isDateOutOfBounds(date, { max, min }) || isDateDisabled?.(date) === true;

/** True when every day of `month` falls outside of the min/max bounds. */
export const isMonthUnavailable = (
  month: Date,
  { isDateDisabled, max, min }: DateBoundsOptions,
): boolean => {
  const firstOfMonth = startOfMonth(month);
  if (isDateDisabled?.(firstOfMonth) === true) return true;
  const lastOfMonth = new Date(
    firstOfMonth.getFullYear(),
    firstOfMonth.getMonth(),
    getDaysInMonth(firstOfMonth),
  );
  if (min != null && lastOfMonth.getTime() < startOfDay(min).getTime()) {
    return true;
  }
  if (max != null && firstOfMonth.getTime() > startOfDay(max).getTime()) {
    return true;
  }
  return false;
};

/**
 * Converts a selected date to the value stored in form state. Empty selections
 * are stored as an empty string in `iso` mode so that they stay compatible with
 * string schemas, and as `null` in `date` mode.
 */
export const serializeDateValue = (
  date: Date | null,
  mode: DateSelectionMode,
  valueMode: DateValueMode,
): string | Date | null => {
  if (date === null) return valueMode === 'iso' ? '' : null;
  if (valueMode === 'date') {
    if (mode === 'month') return startOfMonth(date);
    return mode === 'datetime' ? new Date(date.getTime()) : startOfDay(date);
  }
  if (mode === 'month') return formatISOMonth(date);
  return mode === 'datetime' ? formatISODateTime(date) : formatISODate(date);
};

/** Restricts a date to the min/max bounds, keeping keyboard navigation valid. */
export const clampDate = (
  date: Date,
  { max, min }: Pick<DateBoundsOptions, 'max' | 'min'>,
): Date => {
  if (min != null && date.getTime() < startOfDay(min).getTime()) {
    return startOfDay(min);
  }
  if (max != null && date.getTime() > startOfDay(max).getTime()) {
    return startOfDay(max);
  }
  return date;
};
