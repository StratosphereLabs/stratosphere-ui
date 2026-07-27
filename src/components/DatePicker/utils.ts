import {
  DateInput,
  DateRange,
  DateRangeInput,
  DateSelectionMode,
  DateValueMode,
  WeekDay,
} from './types';

export const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;

export const ISO_MONTH_REGEX = /^(\d{4})-(\d{2})$/;

/** Sunday of an arbitrary week, used to generate localized weekday labels. */
const REFERENCE_SUNDAY = new Date(2024, 0, 7);

/** An arbitrary non-leap year, used to generate localized month labels. */
const REFERENCE_YEAR = 2023;

export const startOfDay = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const startOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1);

export const addDays = (date: Date, amount: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);

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

/** Short month, e.g. `Aug 2013`. Used for the month picker button text. */
export const formatMonthText = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });

/** Long month, e.g. `August 2013`. Used for the calendar caption. */
export const formatMonthLabel = (date: Date, locale?: string): string =>
  date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });

export const getWeekdayLabels = (
  weekStartsOn: WeekDay = 0,
  locale?: string,
): Array<{ long: string; short: string }> =>
  [...Array(7).keys()].map(index => {
    const date = addDays(REFERENCE_SUNDAY, (weekStartsOn + index) % 7);
    return {
      long: date.toLocaleDateString(locale, { weekday: 'long' }),
      short: date.toLocaleDateString(locale, { weekday: 'short' }),
    };
  });

export const getMonthLabels = (
  locale?: string,
): Array<{ long: string; short: string }> =>
  [...Array(12).keys()].map(month => {
    const date = new Date(REFERENCE_YEAR, month, 1);
    return {
      long: date.toLocaleDateString(locale, { month: 'long' }),
      short: date.toLocaleDateString(locale, { month: 'short' }),
    };
  });

/**
 * Returns the weeks of the month that `month` belongs to, including the
 * outside days needed to fill the first and last week.
 */
export const getCalendarWeeks = (
  month: Date,
  weekStartsOn: WeekDay = 0,
  fixedWeeks = false,
): Date[][] => {
  const firstOfMonth = startOfMonth(month);
  const offset = (firstOfMonth.getDay() - weekStartsOn + 7) % 7;
  const firstDay = addDays(firstOfMonth, -offset);
  const numWeeks = fixedWeeks
    ? 6
    : Math.ceil((offset + getDaysInMonth(month)) / 7);
  return [...Array(numWeeks).keys()].map(week =>
    [...Array(7).keys()].map(day => addDays(firstDay, week * 7 + day)),
  );
};

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
 * Applies a day click to the current range. Selecting a day while a complete
 * range is selected starts a new range, and selecting a day before the current
 * start date flips the range around.
 */
export const getNextDateRange = (
  { from, to }: DateRange,
  date: Date,
): DateRange => {
  if (from === null || to !== null) return { from: date, to: null };
  if (date.getTime() < from.getTime()) return { from: date, to: from };
  return { from, to: date };
};

export const getRangePosition = (
  date: Date,
  { from, to }: DateRange,
): 'start' | 'middle' | 'end' | null => {
  if (from !== null && isSameDay(date, from)) return 'start';
  if (to !== null && isSameDay(date, to)) return 'end';
  if (
    from !== null &&
    to !== null &&
    date.getTime() > from.getTime() &&
    date.getTime() < to.getTime()
  ) {
    return 'middle';
  }
  return null;
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
    return mode === 'month' ? startOfMonth(date) : startOfDay(date);
  }
  return mode === 'month' ? formatISOMonth(date) : formatISODate(date);
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
