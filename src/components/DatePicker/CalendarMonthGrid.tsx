import classNames from 'classnames';
import { KeyboardEventHandler } from 'react';

import { MONTH_GRID_COLUMNS } from './constants';
import { CalendarCell } from './types';

export interface CalendarMonthGridProps {
  captionId: string;
  focusedKey: string;
  onKeyDown: KeyboardEventHandler<HTMLTableElement>;
  onSelect: (date: Date) => void;
  months: CalendarCell[];
}

/**
 * The colors of a month cell. Exactly one background utility is returned, since
 * Tailwind emits `bg-transparent` after the theme colors and it would win over
 * the selected background, hiding the label.
 */
const getColorClass = ({ disabled, isCurrent, selected }: CalendarCell) => {
  if (selected) return 'bg-base-content text-base-100';
  if (isCurrent) return 'bg-primary text-primary-content';
  return disabled ? 'bg-transparent' : 'bg-transparent hover:bg-base-200';
};

/**
 * Renders the twelve months of the displayed year. daisyUI only styles day
 * cells, which are too narrow for month names, so the cells are styled with
 * the same theme tokens the day cells use (`base-content` for the selection,
 * `primary` for the current month and `base-200` on hover).
 */
export const CalendarMonthGrid = ({
  captionId,
  focusedKey,
  months,
  onKeyDown,
  onSelect,
}: CalendarMonthGridProps) => {
  const rows = [...Array(months.length / MONTH_GRID_COLUMNS).keys()].map(row =>
    months.slice(row * MONTH_GRID_COLUMNS, (row + 1) * MONTH_GRID_COLUMNS),
  );
  return (
    <table
      aria-labelledby={captionId}
      className="rdp-month_grid"
      onKeyDown={onKeyDown}
      role="grid"
    >
      <tbody className="rdp-weeks">
        {rows.map(row => (
          <tr className="rdp-week" key={row[0].key}>
            {row.map(cell => (
              <td
                aria-selected={cell.selected}
                className="p-px text-center"
                key={cell.key}
                role="gridcell"
              >
                <button
                  aria-label={cell.label}
                  className={classNames(
                    'flex h-9 w-16 items-center justify-center rounded-field border-none',
                    cell.disabled
                      ? 'cursor-not-allowed opacity-50'
                      : 'cursor-pointer',
                    getColorClass(cell),
                  )}
                  disabled={cell.disabled}
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
};
