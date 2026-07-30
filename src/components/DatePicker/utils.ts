import { DROPDOWN_YEARS_FUTURE, DROPDOWN_YEARS_PAST } from './constants';
import {
  CalendarCaptionLayout,
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

/** A time of day inside typed text, e.g. `2:30 PM`, `14:30` or `9:15:30`. */
const TEXT_TIME_REGEX =
  /\b(\d{1,2}):([0-5]\d)(?::([0-5]\d))?\s*(a\.?m\.?|p\.?m\.?)?/i;

/** Separates the two dates of typed range text, e.g. `Aug 1 - Aug 8`. */
const TEXT_RANGE_SEPARATOR_REGEX = /\s*[–—]\s*|\s+(?:-|to)\s+/i;

/**
 * A range written around a hyphen with no space to set it apart, e.g.
 * `8/1/2013-8/8/2013`. A hyphen is also written inside a single date, in
 * `8-1-2013` as much as in ISO `2013-08-01`, so it only separates a range when
 * it is the only one in the text - which is what the two hyphen-free sides
 * require. Anything with more of them is left to be read as one date.
 */
const TEXT_TIGHT_RANGE_REGEX = /^([^-]+)-([^-]+)$/;

/** The words of typed text that could be a month name. */
const TEXT_WORD_REGEX = /[^\d\s.,/\\-]+/g;

/** The runs of digits of typed text, e.g. `8`, `12` and `2013`. */
const TEXT_NUMBER_REGEX = /\d+/g;

/** Two digit years up to this one are read as 20xx, and the rest as 19xx. */
const TWO_DIGIT_YEAR_PIVOT = 68;

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

/** True when the locale writes the month before the day, e.g. `8/12/2013`. */
export const isMonthBeforeDay = (locale?: string): boolean => {
  const parts = new Intl.DateTimeFormat(locale).formatToParts(
    new Date(REFERENCE_YEAR, 7, 12),
  );
  const monthIndex = parts.findIndex(({ type }) => type === 'month');
  const dayIndex = parts.findIndex(({ type }) => type === 'day');
  return monthIndex !== -1 && dayIndex !== -1 && monthIndex < dayIndex;
};

/** Lowercases text and strips the accents and dots of abbreviated names. */
const normalizeTextValue = (text: string): string =>
  text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f.]/g, '')
    .toLowerCase();

/**
 * Reads a localized month name from typed text and removes the word it was
 * matched by, so that only the day and the year are left to parse. Names are
 * matched by prefix, e.g. `sep`, `sept` and `september` all resolve to
 * September, and an ambiguous prefix such as `ju` is left unmatched.
 */
const matchMonthName = (
  text: string,
  locale?: string,
): { index: number; rest: string } | null => {
  const normalized = normalizeTextValue(text);
  const words = normalized.match(TEXT_WORD_REGEX);
  if (words === null) return null;
  const monthNames = getMonthLabels(locale).map(({ long, short }) =>
    [long, short].map(normalizeTextValue),
  );
  for (const word of words) {
    const matches = monthNames.flatMap((names, index) =>
      names.some(name => name.startsWith(word)) ? [index] : [],
    );
    if (matches.length === 1) {
      return { index: matches[0], rest: normalized.replace(word, ' ') };
    }
  }
  return null;
};

/** Reads a two digit year as the closest century, e.g. `13` as 2013. */
const parseYearNumber = (text: string): number => {
  const year = Number(text);
  if (text.length > 2) return year;
  return year + (year <= TWO_DIGIT_YEAR_PIVOT ? 2000 : 1900);
};

interface DateParts {
  day: number;
  month: number;
  year: number;
}

const buildDate = ({ day, month, year }: DateParts): Date | null => {
  const date = new Date(year, month, day);
  return date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
    ? date
    : null;
};

interface DatePartsOptions {
  isMonthMode: boolean;
  monthFirst: boolean;
  reference: Date;
}

/**
 * Resolves the numbers of typed text to a day, a month and a year. The month
 * is already known when the text named it, which only leaves the day and the
 * year to place; without it the numbers are ordered by the locale, so `8/12`
 * is August 12 in `en-US` and December 8 in `en-GB`. Four digit numbers are
 * always a year, and missing parts fall back to the reference date.
 */
const parseDateParts = (
  numbers: string[],
  monthIndex: number | null,
  { isMonthMode, monthFirst, reference }: DatePartsOptions,
): DateParts | null => {
  const year = reference.getFullYear();
  if (monthIndex !== null) {
    const [first, second] = numbers;
    if (numbers.length === 0) {
      return isMonthMode ? { day: 1, month: monthIndex, year } : null;
    }
    if (numbers.length === 1) {
      // The lone number of a month field is its year, e.g. `Aug 2013`, and in
      // the day fields it is the day unless it is written as a year.
      return isMonthMode || first.length === 4
        ? { day: 1, month: monthIndex, year: parseYearNumber(first) }
        : { day: Number(first), month: monthIndex, year };
    }
    if (numbers.length === 2) {
      return first.length === 4
        ? { day: Number(second), month: monthIndex, year: Number(first) }
        : {
            day: Number(first),
            month: monthIndex,
            year: parseYearNumber(second),
          };
    }
    return null;
  }
  if (numbers.length === 1) {
    const [value] = numbers;
    // The compact ISO forms, i.e. `20130812` and `201308`.
    if (value.length === 8 && !isMonthMode) {
      return {
        day: Number(value.slice(6)),
        month: Number(value.slice(4, 6)) - 1,
        year: Number(value.slice(0, 4)),
      };
    }
    if (value.length === 6 && isMonthMode) {
      return {
        day: 1,
        month: Number(value.slice(4)) - 1,
        year: Number(value.slice(0, 4)),
      };
    }
    // A single one or two digit number is a day of the reference month, which
    // is the month the field already holds.
    return !isMonthMode && value.length <= 2
      ? { day: Number(value), month: reference.getMonth(), year }
      : null;
  }
  if (numbers.length === 2) {
    const [first, second] = numbers;
    if (first.length === 4) {
      return { day: 1, month: Number(second) - 1, year: Number(first) };
    }
    if (isMonthMode || second.length === 4) {
      return {
        day: 1,
        month: Number(first) - 1,
        year: parseYearNumber(second),
      };
    }
    const [month, day] = monthFirst ? [first, second] : [second, first];
    return { day: Number(day), month: Number(month) - 1, year };
  }
  if (numbers.length === 3) {
    const [first, second, third] = numbers;
    if (first.length === 4) {
      return {
        day: Number(third),
        month: Number(second) - 1,
        year: Number(first),
      };
    }
    const [month, day] = monthFirst ? [first, second] : [second, first];
    return {
      day: Number(day),
      month: Number(month) - 1,
      year: parseYearNumber(third),
    };
  }
  return null;
};

export interface ParseDateTextOptions {
  /** BCP 47 locale tag deciding the month names and the day/month order. */
  locale?: string;
  mode?: DateSelectionMode;
  /** Fills in the parts the text leaves out. Defaults to today. */
  referenceDate?: Date | null;
}

/**
 * Resolves text a user typed into a date field to a `Date`, or to `null` when
 * it cannot be read as a date. ISO values are taken as they are, and everything
 * else is read leniently: the month can be named or numbered, the separators
 * are free, the year can be left out or written with two digits, and in
 * `datetime` mode a 12 or 24 hour time can follow the date. Parts the text
 * leaves out come from `referenceDate`, so editing the day of a `datetime`
 * value keeps its time of day.
 */
export const parseDateText = (
  text: string,
  { locale, mode = 'single', referenceDate }: ParseDateTextOptions = {},
): Date | null => {
  const trimmed = text.trim();
  if (trimmed === '') return null;
  const isMonthMode = mode === 'month';
  const isDateTimeMode = mode === 'datetime';
  if (isDateTimeMode && ISO_DATE_TIME_REGEX.test(trimmed)) {
    return parseDateTime(trimmed);
  }
  if (ISO_DATE_REGEX.test(trimmed) || ISO_MONTH_REGEX.test(trimmed)) {
    return parseDate(trimmed);
  }
  const reference = referenceDate ?? new Date();
  const time = isDateTimeMode ? TEXT_TIME_REGEX.exec(trimmed) : null;
  const dateText = time !== null ? trimmed.replace(time[0], ' ') : trimmed;
  const monthMatch = matchMonthName(dateText, locale);
  const numbers = (monthMatch?.rest ?? dateText).match(TEXT_NUMBER_REGEX) ?? [];
  const parts = parseDateParts(numbers, monthMatch?.index ?? null, {
    isMonthMode,
    monthFirst: isMonthBeforeDay(locale),
    reference,
  });
  const date = parts !== null ? buildDate(parts) : null;
  if (date === null || !isDateTimeMode) return date;
  if (time === null) {
    // A `datetime` value keeps the time it already has while its date is typed,
    // and starts at midnight while the field is still empty.
    return referenceDate != null
      ? withTimeValue(date, formatTimeValue(referenceDate, true))
      : date;
  }
  const meridiem = time[4]?.toLowerCase().charAt(0);
  const typedHours = Number(time[1]);
  if (
    meridiem === undefined ? typedHours > 23 : typedHours < 1 || typedHours > 12
  ) {
    return null;
  }
  const hours =
    meridiem === undefined
      ? typedHours
      : (typedHours % 12) + (meridiem === 'p' ? 12 : 0);
  return withTimeValue(
    date,
    [hours, Number(time[2]), Number(time[3] ?? 0)]
      .map(value => padNumber(value, 2))
      .join(':'),
  );
};

/**
 * Splits typed range text into its two dates. A dash or a `to` set apart by
 * spaces is unambiguous and is taken first, and a hyphen written tight against
 * the dates is only read as a separator when nothing else has separated them.
 */
const splitDateRangeText = (text: string): string[] => {
  const parts = text.split(TEXT_RANGE_SEPARATOR_REGEX);
  if (parts.length > 1) return parts;
  const tight = TEXT_TIGHT_RANGE_REGEX.exec(text);
  return tight !== null ? [tight[1], tight[2]] : parts;
};

/**
 * Resolves text a user typed into a range field to a `{ from, to }` range, or
 * to `null` when it cannot be read as one. The two dates are separated by a
 * dash or by `to`, each of them is read by `parseDateText`, and a range typed
 * backwards is flipped around. `to` is `null` while only the start is typed.
 */
export const parseDateRangeText = (
  text: string,
  options: ParseDateTextOptions = {},
): DateRange | null => {
  const trimmed = text.trim();
  if (trimmed === '') return null;
  const [fromText, toText, ...rest] = splitDateRangeText(trimmed);
  if (rest.length > 0) return null;
  const from = parseDateText(fromText, options);
  if (from === null) return null;
  // The end of an incomplete range is rendered as an ellipsis, which is left
  // in the field while its start is edited.
  const endText = (toText ?? '').replace(/…|\.\.\./g, '').trim();
  if (endText === '') return { from, to: null };
  const to = parseDateText(endText, { ...options, referenceDate: from });
  if (to === null) return null;
  return to.getTime() < from.getTime() ? { from: to, to: from } : { from, to };
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

/** True when the caption layout navigates the years with a dropdown. */
export const hasYearDropdown = (
  captionLayout?: CalendarCaptionLayout,
): boolean =>
  captionLayout === 'dropdown' || captionLayout === 'dropdown-years';

/**
 * The first and last month the caption dropdowns can navigate to. The bounds
 * of the calendar are used when it has them, and the years around today
 * otherwise, so that a date in the future stays reachable.
 */
export const getDropdownMonthRange = (
  { max, min }: Pick<DateBoundsOptions, 'max' | 'min'>,
  today: Date = new Date(),
): { end: Date; start: Date } => ({
  end: max ?? new Date(today.getFullYear() + DROPDOWN_YEARS_FUTURE, 11, 31),
  start: min ?? new Date(today.getFullYear() - DROPDOWN_YEARS_PAST, 0, 1),
});

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
