import { ReactNode } from '../../../node_modules/react';
/**
 * Any value that can be resolved to a calendar date. Strings must be either an
 * ISO date (`yyyy-MM-dd`), an ISO date and time (`yyyy-MM-ddTHH:mm`), an ISO
 * month (`yyyy-MM`), or a value that the `Date` constructor understands.
 */
export type DateInput = Date | string | number;
export type DateSelectionMode = 'single' | 'datetime' | 'range' | 'month';
/**
 * How a `DatePicker` stores its value in form state. `iso` uses `yyyy-MM-dd`
 * strings (`yyyy-MM-ddTHH:mm` in `datetime` mode and `yyyy-MM` in `month` mode)
 * and `date` uses `Date` objects.
 */
export type DateValueMode = 'iso' | 'date';
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/** How the month and year of a day grid are navigated. */
export type CalendarCaptionLayout = 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
export interface DateRange {
    from: Date | null;
    to: Date | null;
}
export interface DateRangeInput {
    from?: DateInput | null;
    to?: DateInput | null;
}
/** A single month cell of the `month` mode grid, with its state resolved. */
export interface CalendarMonthCell {
    date: Date;
    disabled: boolean;
    isCurrent: boolean;
    key: string;
    label: string;
    selected: boolean;
    text: string;
}
export interface CalendarBaseProps {
    className?: string;
    /** The month shown on the first render. Ignored when `month` is passed. */
    defaultMonth?: DateInput | null;
    footer?: ReactNode;
    /** Disables individual dates. In `month` mode it receives the first of the month. */
    isDateDisabled?: (date: Date) => boolean;
    /** BCP 47 locale tag used for all month, weekday and date formatting. */
    locale?: string;
    max?: DateInput | null;
    min?: DateInput | null;
    /** Controls the visible month. Pass `defaultMonth` instead to leave it uncontrolled. */
    month?: DateInput | null;
    onMonthChange?: (month: Date) => void;
}
/** Props of the modes that render a day grid, i.e. every mode but `month`. */
export interface CalendarDayProps extends CalendarBaseProps {
    /** Moves focus into the day grid once the calendar has mounted. */
    autoFocus?: boolean;
    /** Navigates the caption with dropdowns instead of the arrows. */
    captionLayout?: CalendarCaptionLayout;
    /** Always render six weeks so the calendar height does not change. */
    fixedWeeks?: boolean;
    /**
     * How many months are rendered side by side. Defaults to two in `range` mode
     * on screens wide enough to fit them, and to one everywhere else.
     */
    numberOfMonths?: number;
    showOutsideDays?: boolean;
    showWeekNumber?: boolean;
    weekStartsOn?: WeekDay;
}
export interface CalendarSingleProps extends CalendarDayProps {
    mode?: 'single';
    onChange?: (value: Date) => void;
    value?: DateInput | null;
}
export interface CalendarDateTimeProps extends CalendarDayProps {
    mode: 'datetime';
    onChange?: (value: Date) => void;
    /** Adds seconds to the time field. */
    showSeconds?: boolean;
    /** Label of the time field. Defaults to `Time`. */
    timeLabel?: string;
    value?: DateInput | null;
}
export interface CalendarRangeProps extends CalendarDayProps {
    mode: 'range';
    onChange?: (value: DateRange) => void;
    value?: DateRangeInput | null;
}
export interface CalendarMonthProps extends CalendarBaseProps {
    mode: 'month';
    onChange?: (value: Date) => void;
    value?: DateInput | null;
}
/** The modes rendered as a day grid, i.e. every mode but `month`. */
export type CalendarDayModeProps = CalendarSingleProps | CalendarDateTimeProps | CalendarRangeProps;
export type CalendarProps = CalendarDayModeProps | CalendarMonthProps;
