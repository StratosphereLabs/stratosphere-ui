import classNames from 'classnames';
import {
  KeyboardEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useValueChangeEffect } from '../../hooks';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { CalendarMonthGrid } from './CalendarMonthGrid';
import { MONTH_GRID_COLUMNS } from './constants';
import { CalendarMonthCell, CalendarMonthProps } from './types';
import {
  addMonths,
  addYears,
  clampDate,
  formatISOMonth,
  getDropdownMonthRange,
  getMonthLabels,
  hasYearDropdown,
  isMonthUnavailable,
  isSameMonth,
  parseDate,
  startOfDay,
  startOfMonth,
} from './utils';

/**
 * A calendar that selects a single month of a year, e.g. `Aug 2013`.
 * `react-day-picker` only selects days, so the twelve month cells are rendered
 * here, inside the same shell (root, nav and caption) that daisyUI styles for
 * the day grid.
 *
 * Use `Calendar` with `mode="month"`, which renders this.
 */
export const MonthCalendar = ({
  captionLayout,
  className,
  defaultMonth,
  footer,
  isDateDisabled,
  locale,
  max: maxProp,
  min: minProp,
  month: monthProp,
  onChange,
  onMonthChange,
  value,
}: CalendarMonthProps) => {
  const captionId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldFocusRef = useRef(false);
  // The dates below are memoized on their timestamps rather than on the props
  // they are parsed from, since a `Date` prop built inline gives them a new
  // identity on every render. Keeping the identity to the value lets the memos
  // further down depend on the dates themselves instead of on a stand-in.
  const minTime = parseDate(minProp)?.getTime();
  const maxTime = parseDate(maxProp)?.getTime();
  const selectedTime = parseDate(value)?.getTime();
  const min = useMemo(
    () => (minTime !== undefined ? new Date(minTime) : null),
    [minTime],
  );
  const max = useMemo(
    () => (maxTime !== undefined ? new Date(maxTime) : null),
    [maxTime],
  );
  const selectedDate = useMemo(
    () => (selectedTime !== undefined ? new Date(selectedTime) : null),
    [selectedTime],
  );
  // Held for the lifetime of the calendar, which is mounted for as long as the
  // popover is open, so that the current month cell does not depend on when the
  // calendar happened to render.
  const today = useMemo(() => startOfDay(new Date()), []);
  const controlledMonth = useMemo(() => parseDate(monthProp), [monthProp]);
  const [uncontrolledMonth, setUncontrolledMonth] = useState(() =>
    startOfMonth(
      controlledMonth ??
        parseDate(defaultMonth) ??
        selectedDate ??
        clampDate(today, { max, min }),
    ),
  );
  const displayedMonth =
    controlledMonth !== null
      ? startOfMonth(controlledMonth)
      : uncontrolledMonth;
  const [focusedMonth, setFocusedMonth] = useState<Date | null>(null);
  const changeMonth = (month: Date): void => {
    const nextMonth = startOfMonth(month);
    if (controlledMonth === null) setUncontrolledMonth(nextMonth);
    onMonthChange?.(nextMonth);
  };
  // Follow the selected value when it changes from outside the calendar, e.g.
  // when the form is reset while the popover is closed. The first render is
  // skipped so that it stays a reaction to a change, leaving `defaultMonth` the
  // say over the year the calendar opens on.
  const hasRenderedRef = useRef(false);
  useValueChangeEffect(
    selectedDate !== null ? formatISOMonth(selectedDate) : '',
    () => {
      const hasRendered = hasRenderedRef.current;
      hasRenderedRef.current = true;
      if (
        hasRendered &&
        selectedDate !== null &&
        !isSameMonth(selectedDate, displayedMonth)
      ) {
        changeMonth(selectedDate);
      }
    },
  );
  const monthLabels = useMemo(() => getMonthLabels(locale), [locale]);
  const displayedYear = displayedMonth.getFullYear();
  const months = useMemo<CalendarMonthCell[]>(
    () =>
      monthLabels.map(({ long, short }, index) => {
        const date = new Date(displayedYear, index, 1);
        return {
          date,
          disabled: isMonthUnavailable(date, { isDateDisabled, max, min }),
          isCurrent: isSameMonth(date, today),
          key: formatISOMonth(date),
          label: `${long} ${date.getFullYear()}`,
          selected: selectedDate !== null && isSameMonth(date, selectedDate),
          text: short,
        };
      }),
    [displayedYear, isDateDisabled, max, min, monthLabels, selectedDate, today],
  );
  const isVisible = (date: Date): boolean =>
    date.getFullYear() === displayedYear;
  const focusTarget =
    [focusedMonth, selectedDate, today].find(
      date => date !== null && isVisible(date),
    ) ??
    months.find(month => !month.disabled)?.date ??
    displayedMonth;
  const focusedKey = formatISOMonth(focusTarget);
  useEffect(() => {
    if (!shouldFocusRef.current) return;
    shouldFocusRef.current = false;
    containerRef.current
      ?.querySelector<HTMLButtonElement>('td button[tabindex="0"]')
      ?.focus();
  }, [focusedKey]);
  const handleSelect = (date: Date): void => {
    setFocusedMonth(date);
    onChange?.(date);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLTableElement>): void => {
    const nextMonth = ((): Date | null => {
      switch (event.key) {
        case 'ArrowLeft':
          return addMonths(focusTarget, -1);
        case 'ArrowRight':
          return addMonths(focusTarget, 1);
        case 'ArrowUp':
          return addMonths(focusTarget, -MONTH_GRID_COLUMNS);
        case 'ArrowDown':
          return addMonths(focusTarget, MONTH_GRID_COLUMNS);
        case 'PageUp':
          return addYears(focusTarget, -1);
        case 'PageDown':
          return addYears(focusTarget, 1);
        case 'Home':
          return new Date(focusTarget.getFullYear(), 0, 1);
        case 'End':
          return new Date(focusTarget.getFullYear(), 11, 1);
        default:
          return null;
      }
    })();
    if (nextMonth === null) return;
    event.preventDefault();
    const clamped = startOfMonth(clampDate(nextMonth, { max, min }));
    shouldFocusRef.current = true;
    setFocusedMonth(clamped);
    if (clamped.getFullYear() !== displayedYear) changeMonth(clamped);
  };
  // `react-day-picker` renders the caption dropdowns of the day grid, so the
  // year dropdown of the month grid is rendered here with its markup, which is
  // what daisyUI styles (an invisible select over the label and its chevron).
  const showYearDropdown = hasYearDropdown(captionLayout);
  const yearOptions = useMemo(() => {
    if (!showYearDropdown) return [];
    const { end, start } = getDropdownMonthRange({ max, min });
    const firstYear = Math.min(start.getFullYear(), displayedYear);
    const lastYear = Math.max(end.getFullYear(), displayedYear);
    return [...Array(lastYear - firstYear + 1).keys()].map(
      offset => firstYear + offset,
    );
  }, [displayedYear, max, min, showYearDropdown]);
  const previousYear = addYears(displayedMonth, -1);
  const nextYear = addYears(displayedMonth, 1);
  const isPreviousDisabled = isMonthUnavailable(
    new Date(previousYear.getFullYear(), 11, 1),
    { max, min },
  );
  const isNextDisabled = isMonthUnavailable(
    new Date(nextYear.getFullYear(), 0, 1),
    { max, min },
  );
  return (
    <div
      className={classNames('react-day-picker', className)}
      ref={containerRef}
    >
      <div className="rdp-months">
        {/* daisyUI positions the nav absolutely against `.rdp-months`, so it has
            to be a child of it - as a sibling it renders underneath the months
            and its buttons stop receiving clicks. */}
        <nav className="rdp-nav">
          <button
            aria-label="Previous year"
            className="rdp-button_previous"
            disabled={isPreviousDisabled}
            onClick={() => changeMonth(previousYear)}
            type="button"
          >
            <ChevronLeftIcon className="rdp-chevron" style={{ fill: 'none' }} />
          </button>
          <button
            aria-label="Next year"
            className="rdp-button_next"
            disabled={isNextDisabled}
            onClick={() => changeMonth(nextYear)}
            type="button"
          >
            <ChevronRightIcon
              className="rdp-chevron"
              style={{ fill: 'none' }}
            />
          </button>
        </nav>
        <div className="rdp-month">
          <div className="rdp-month_caption">
            {showYearDropdown ? (
              <div className="rdp-dropdowns">
                <span className="rdp-dropdown_root">
                  <select
                    aria-label="Choose the Year"
                    className="rdp-dropdown rdp-years_dropdown"
                    onChange={event =>
                      changeMonth(
                        new Date(
                          Number(event.target.value),
                          displayedMonth.getMonth(),
                          1,
                        ),
                      )
                    }
                    value={displayedYear}
                  >
                    {yearOptions.map(year => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden
                    className="rdp-caption_label"
                    id={captionId}
                  >
                    {displayedYear}
                    <ChevronDownIcon
                      className="rdp-chevron"
                      style={{ fill: 'none' }}
                    />
                  </span>
                </span>
              </div>
            ) : (
              <span className="rdp-caption_label" id={captionId}>
                {displayedYear}
              </span>
            )}
          </div>
          <CalendarMonthGrid
            captionId={captionId}
            focusedKey={focusedKey}
            months={months}
            onKeyDown={handleKeyDown}
            onSelect={handleSelect}
          />
        </div>
      </div>
      {footer !== undefined ? <div className="rdp-footer">{footer}</div> : null}
    </div>
  );
};
