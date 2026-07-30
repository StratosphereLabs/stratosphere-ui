import { CalendarMonthProps } from './types';
/**
 * A calendar that selects a single month of a year, e.g. `Aug 2013`.
 * `react-day-picker` only selects days, so the twelve month cells are rendered
 * here, inside the same shell (root, nav and caption) that daisyUI styles for
 * the day grid.
 *
 * Use `Calendar` with `mode="month"`, which renders this.
 */
export declare const MonthCalendar: ({ captionLayout, className, defaultMonth, footer, isDateDisabled, locale, max: maxProp, min: minProp, month: monthProp, onChange, onMonthChange, value, }: CalendarMonthProps) => import("react/jsx-runtime").JSX.Element;
