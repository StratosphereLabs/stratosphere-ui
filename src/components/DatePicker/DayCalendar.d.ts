import { CalendarDayModeProps } from './types';
/**
 * The calendar of every mode that renders a day grid, i.e. `single`, `datetime`
 * and `range`. It is a thin wrapper around `react-day-picker`, rendered with its
 * default class names so that daisyUI's calendar component styles it.
 *
 * Use `Calendar`, which renders this for the day modes and the month grid for
 * `month` mode.
 */
export declare const DayCalendar: (props: CalendarDayModeProps) => import("react/jsx-runtime").JSX.Element;
