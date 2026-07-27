import { ReactNode } from 'react';

/**
 * Any value that can be resolved to a calendar date. Strings must be either an
 * ISO date (`yyyy-MM-dd`), an ISO month (`yyyy-MM`), or a value that the
 * `Date` constructor understands.
 */
export type DateInput = Date | string | number;

export type DateSelectionMode = 'single' | 'range' | 'month';

/**
 * How a `DatePicker` stores its value in form state. `iso` uses `yyyy-MM-dd`
 * strings (`yyyy-MM` in `month` mode) and `date` uses `Date` objects.
 */
export type DateValueMode = 'iso' | 'date';

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

export interface DateRangeInput {
  from?: DateInput | null;
  to?: DateInput | null;
}

export type RangePosition = 'start' | 'middle' | 'end';

/** A single day or month cell, with all of its display state resolved. */
export interface CalendarCell {
  date: Date;
  disabled: boolean;
  hidden: boolean;
  isCurrent: boolean;
  key: string;
  label: string;
  outside: boolean;
  rangePosition: RangePosition | null;
  selected: boolean;
  text: string;
}

export interface CalendarBaseProps {
  className?: string;
  /** Always render six weeks so the calendar height does not change. */
  fixedWeeks?: boolean;
  footer?: ReactNode;
  /** Disables individual dates. In `month` mode it receives the first of the month. */
  isDateDisabled?: (date: Date) => boolean;
  /** BCP 47 locale tag used for all month, weekday and date formatting. */
  locale?: string;
  max?: DateInput | null;
  min?: DateInput | null;
  /** Controls the visible month. Pass `defaultMonth` instead to leave it uncontrolled. */
  month?: DateInput | null;
  defaultMonth?: DateInput | null;
  onMonthChange?: (month: Date) => void;
  showOutsideDays?: boolean;
  weekStartsOn?: WeekDay;
}

export interface CalendarSingleProps extends CalendarBaseProps {
  mode?: 'single';
  onChange?: (value: Date) => void;
  value?: DateInput | null;
}

export interface CalendarRangeProps extends CalendarBaseProps {
  mode: 'range';
  onChange?: (value: DateRange) => void;
  value?: DateRangeInput | null;
}

export interface CalendarMonthProps extends CalendarBaseProps {
  mode: 'month';
  onChange?: (value: Date) => void;
  value?: DateInput | null;
}

export type CalendarProps =
  | CalendarSingleProps
  | CalendarRangeProps
  | CalendarMonthProps;
