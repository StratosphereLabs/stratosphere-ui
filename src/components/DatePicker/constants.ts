import { PanelAnchor } from '../../common';
import { CalendarCaptionLayout } from './types';

export const MONTH_GRID_COLUMNS = 4;

/**
 * Where the calendar popover opens. It is anchored to the calendar button at
 * the end of the field, so the cross axis offset lines the panel up with the
 * edge of the field rather than with the button inside it, and the gap clears
 * the rest of the field.
 */
export const DEFAULT_ANCHOR: Exclude<PanelAnchor, boolean | string> = {
  gap: 8,
  offset: 12,
  to: 'bottom end',
};

/** Both caption dropdowns are on, so a month is one click away in the field. */
export const DEFAULT_CAPTION_LAYOUT: CalendarCaptionLayout = 'dropdown';

export const OPEN_CALENDAR_LABEL = 'Open calendar';

export const DEFAULT_SINGLE_PLACEHOLDER = 'Select date';

export const DEFAULT_DATE_TIME_PLACEHOLDER = 'Select date and time';

export const DEFAULT_RANGE_PLACEHOLDER = 'Select date range';

export const DEFAULT_MONTH_PLACEHOLDER = 'Select month';

export const RANGE_SEPARATOR = ' – ';

export const DEFAULT_TIME_LABEL = 'Time';

/** The time a `datetime` selection starts at while no time has been picked. */
export const DEFAULT_TIME_VALUE = '00:00';

/**
 * How far the caption dropdowns reach when the calendar is not bounded by
 * `min` and `max`. `react-day-picker` falls back to the hundred years up to
 * the current one, which cannot reach a date in the future, so both ends are
 * filled in instead.
 */
export const DROPDOWN_YEARS_PAST = 100;

export const DROPDOWN_YEARS_FUTURE = 10;

/**
 * Two day grids are 34.5rem wide together (two 15.75rem grids, the 2rem gap
 * daisyUI puts between them and the 1rem of padding), so `range` mode shows a
 * second month from 40rem up and falls back to a single month below it.
 */
export const TWO_MONTH_MEDIA_QUERY = '(min-width: 40rem)';
