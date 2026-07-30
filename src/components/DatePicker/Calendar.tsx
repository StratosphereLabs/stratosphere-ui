import { DayCalendar } from './DayCalendar';
import { MonthCalendar } from './MonthCalendar';
import { CalendarProps } from './types';

/**
 * A calendar that supports selecting a single date, a date and a time, a date
 * range or a single month.
 *
 * The day modes are rendered with `react-day-picker`, following shadcn/ui's
 * calendar composition, and keep its default class names so that daisyUI's
 * calendar component styles them - every color, radius and size comes from the
 * active daisyUI theme. `month` mode renders its own grid of twelve months in
 * the same shell.
 *
 * `Calendar` is fully controlled - use `DatePicker` for a form field with a
 * popover trigger.
 */
export const Calendar = (props: CalendarProps) =>
  props.mode === 'month' ? (
    <MonthCalendar {...props} />
  ) : (
    <DayCalendar {...props} />
  );
