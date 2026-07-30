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
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { CalendarMonthGrid } from './CalendarMonthGrid';
import { MONTH_GRID_COLUMNS } from './constants';
import { CalendarMonthCell, CalendarMonthProps } from './types';
import {
  addMonths,
  addYears,
  clampDate,
  formatISOMonth,
  getMonthLabels,
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
  const min = useMemo(() => parseDate(minProp), [minProp]);
  const max = useMemo(() => parseDate(maxProp), [maxProp]);
  const today = startOfDay(new Date());
  const selectedDate = parseDate(value);
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
  // when the form is reset while the popover is closed.
  useValueChangeEffect(
    selectedDate !== null ? formatISOMonth(selectedDate) : '',
    () => {
      if (selectedDate !== null && !isSameMonth(selectedDate, displayedMonth)) {
        changeMonth(selectedDate);
      }
    },
  );
  const monthLabels = useMemo(() => getMonthLabels(locale), [locale]);
  // Timestamps are used as memo dependencies since a new Date instance is
  // created on every render.
  const displayedYear = displayedMonth.getFullYear();
  const maxTime = max?.getTime();
  const minTime = min?.getTime();
  const selectedTime = selectedDate?.getTime();
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [
      displayedYear,
      isDateDisabled,
      maxTime,
      minTime,
      monthLabels,
      selectedTime,
    ],
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
            <span className="rdp-caption_label" id={captionId}>
              {displayedYear}
            </span>
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
