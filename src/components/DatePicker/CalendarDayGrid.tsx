import classNames from 'classnames';
import { KeyboardEventHandler } from 'react';

import { CalendarCell } from './types';

export interface CalendarDayGridProps {
  captionId: string;
  focusedKey: string;
  onKeyDown: KeyboardEventHandler<HTMLTableElement>;
  onSelect: (date: Date) => void;
  weekdays: Array<{ long: string; short: string }>;
  weeks: CalendarCell[][];
}

/**
 * Renders the day grid using the markup daisyUI's `react-day-picker` calendar
 * styles expect, so that every color, radius and size comes from the theme.
 */
export const CalendarDayGrid = ({
  captionId,
  focusedKey,
  onKeyDown,
  onSelect,
  weekdays,
  weeks,
}: CalendarDayGridProps) => (
  <table
    aria-labelledby={captionId}
    className="rdp-month_grid"
    onKeyDown={onKeyDown}
    role="grid"
  >
    <thead className="rdp-weekdays">
      <tr>
        {weekdays.map(({ long, short }) => (
          <th aria-label={long} className="rdp-weekday" key={long} scope="col">
            <span aria-hidden="true">{short}</span>
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="rdp-weeks">
      {weeks.map(week => (
        <tr className="rdp-week" key={week[0].key}>
          {week.map(cell => (
            <td
              aria-selected={cell.selected || cell.rangePosition !== null}
              className={classNames(
                'rdp-day',
                cell.isCurrent && 'rdp-today',
                cell.outside && 'rdp-outside',
                cell.hidden && 'rdp-hidden',
                cell.selected && 'rdp-selected',
                cell.rangePosition === 'start' && 'rdp-range_start',
                cell.rangePosition === 'middle' && 'rdp-range_middle',
                cell.rangePosition === 'end' && 'rdp-range_end',
                cell.disabled ? 'rdp-disabled' : 'rdp-focusable',
              )}
              key={cell.key}
              role="gridcell"
            >
              <button
                aria-label={cell.label}
                className="rdp-day_button"
                disabled={cell.disabled || cell.hidden}
                onClick={() => onSelect(cell.date)}
                tabIndex={cell.key === focusedKey ? 0 : -1}
                type="button"
              >
                {cell.text}
              </button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
