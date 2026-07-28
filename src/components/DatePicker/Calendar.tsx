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
import { CalendarDayGrid } from './CalendarDayGrid';
import { CalendarMonthGrid } from './CalendarMonthGrid';
import { MONTH_GRID_COLUMNS } from './constants';
import { CalendarCell, CalendarProps, DateRange } from './types';
import {
  addDays,
  addMonths,
  addYears,
  clampDate,
  formatDateLabel,
  formatISODate,
  formatISOMonth,
  formatMonthLabel,
  getCalendarWeeks,
  getMonthLabels,
  getNextDateRange,
  getRangePosition,
  getWeekdayLabels,
  isDateUnavailable,
  isMonthUnavailable,
  isSameDay,
  isSameMonth,
  parseDate,
  parseDateRange,
  startOfDay,
  startOfMonth,
} from './utils';

const EMPTY_RANGE: DateRange = { from: null, to: null };

/**
 * A calendar that supports single date, date range and single month selection.
 * The day grid is rendered with the class names daisyUI's calendar component
 * styles (`react-day-picker`), so it inherits the active theme automatically.
 *
 * `Calendar` is fully controlled - use `DatePicker` for a form field with a
 * popover trigger.
 */
export const Calendar = (props: CalendarProps) => {
  const {
    className,
    defaultMonth,
    fixedWeeks = true,
    footer,
    isDateDisabled,
    locale,
    month: monthProp,
    onMonthChange,
    showOutsideDays = true,
    weekStartsOn = 0,
  } = props;
  const mode = props.mode ?? 'single';
  const captionId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldFocusRef = useRef(false);
  const min = useMemo(() => parseDate(props.min), [props.min]);
  const max = useMemo(() => parseDate(props.max), [props.max]);
  const today = startOfDay(new Date());
  const selectedRange =
    props.mode === 'range' ? parseDateRange(props.value) : EMPTY_RANGE;
  const selectedDate = props.mode !== 'range' ? parseDate(props.value) : null;
  const selectedMonthAnchor =
    props.mode === 'range' ? selectedRange.from : selectedDate;
  const controlledMonth = useMemo(() => parseDate(monthProp), [monthProp]);
  const [uncontrolledMonth, setUncontrolledMonth] = useState(() =>
    startOfMonth(
      controlledMonth ??
        parseDate(defaultMonth) ??
        selectedMonthAnchor ??
        clampDate(today, { max, min }),
    ),
  );
  const displayedMonth =
    controlledMonth !== null
      ? startOfMonth(controlledMonth)
      : uncontrolledMonth;
  const [focusedDate, setFocusedDate] = useState<Date | null>(null);
  const bounds = { isDateDisabled, max, min };
  const changeMonth = (month: Date): void => {
    const nextMonth = startOfMonth(month);
    if (controlledMonth === null) setUncontrolledMonth(nextMonth);
    onMonthChange?.(nextMonth);
  };
  // Follow the selected value when it changes from outside the calendar, e.g.
  // when the form is reset while the popover is closed.
  useValueChangeEffect(
    selectedMonthAnchor !== null ? formatISODate(selectedMonthAnchor) : '',
    () => {
      if (
        selectedMonthAnchor !== null &&
        !isSameMonth(selectedMonthAnchor, displayedMonth)
      ) {
        changeMonth(selectedMonthAnchor);
      }
    },
  );
  // Timestamps are used as memo dependencies since a new Date instance is
  // created on every render.
  const displayedMonthTime = displayedMonth.getTime();
  const displayedYear = displayedMonth.getFullYear();
  const maxTime = max?.getTime();
  const minTime = min?.getTime();
  const rangeFromTime = selectedRange.from?.getTime();
  const rangeToTime = selectedRange.to?.getTime();
  const selectedTime = selectedDate?.getTime();
  const weekdays = useMemo(
    () => getWeekdayLabels(weekStartsOn, locale),
    [locale, weekStartsOn],
  );
  const monthLabels = useMemo(() => getMonthLabels(locale), [locale]);
  const weeks = useMemo<CalendarCell[][]>(
    () =>
      mode === 'month'
        ? []
        : getCalendarWeeks(displayedMonth, weekStartsOn, fixedWeeks).map(week =>
            week.map(date => {
              const outside = !isSameMonth(date, displayedMonth);
              const rangePosition =
                mode === 'range' ? getRangePosition(date, selectedRange) : null;
              return {
                date,
                disabled: isDateUnavailable(date, bounds),
                hidden: outside && !showOutsideDays,
                isCurrent: isSameDay(date, today),
                key: formatISODate(date),
                label: formatDateLabel(date, locale),
                outside,
                rangePosition,
                selected:
                  mode === 'range'
                    ? rangePosition === 'start' || rangePosition === 'end'
                    : selectedDate !== null && isSameDay(date, selectedDate),
                text: date.getDate().toString(),
              };
            }),
          ),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [
      displayedMonthTime,
      fixedWeeks,
      isDateDisabled,
      locale,
      maxTime,
      minTime,
      mode,
      selectedTime,
      rangeFromTime,
      rangeToTime,
      showOutsideDays,
      weekStartsOn,
    ],
  );
  const months = useMemo<CalendarCell[]>(
    () =>
      mode !== 'month'
        ? []
        : monthLabels.map(({ long, short }, index) => {
            const date = new Date(displayedMonth.getFullYear(), index, 1);
            return {
              date,
              disabled: isMonthUnavailable(date, bounds),
              hidden: false,
              isCurrent: isSameMonth(date, today),
              key: formatISOMonth(date),
              label: `${long} ${date.getFullYear()}`,
              outside: false,
              rangePosition: null,
              selected:
                selectedDate !== null && isSameMonth(date, selectedDate),
              text: short,
            };
          }),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [
      displayedYear,
      isDateDisabled,
      maxTime,
      minTime,
      mode,
      monthLabels,
      selectedTime,
    ],
  );
  const cells = mode === 'month' ? months : weeks.flat();
  const isVisible = (date: Date): boolean =>
    mode === 'month'
      ? date.getFullYear() === displayedMonth.getFullYear()
      : cells.some(cell => isSameDay(cell.date, date) && !cell.hidden);
  const focusTarget =
    [focusedDate, selectedMonthAnchor, today].find(
      date => date !== null && isVisible(date),
    ) ??
    cells.find(cell => !cell.disabled && !cell.hidden)?.date ??
    displayedMonth;
  const focusedKey =
    mode === 'month' ? formatISOMonth(focusTarget) : formatISODate(focusTarget);
  useEffect(() => {
    if (!shouldFocusRef.current) return;
    shouldFocusRef.current = false;
    containerRef.current
      ?.querySelector<HTMLButtonElement>('td button[tabindex="0"]')
      ?.focus();
  }, [focusedKey]);
  const handleSelect = (date: Date): void => {
    setFocusedDate(date);
    if (props.mode === 'range') {
      props.onChange?.(getNextDateRange(selectedRange, date));
      return;
    }
    if (mode === 'single' && !isSameMonth(date, displayedMonth)) {
      changeMonth(date);
    }
    props.onChange?.(date);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLTableElement>): void => {
    const isMonthMode = mode === 'month';
    const nextDate = ((): Date | null => {
      switch (event.key) {
        case 'ArrowLeft':
          return isMonthMode
            ? addMonths(focusTarget, -1)
            : addDays(focusTarget, -1);
        case 'ArrowRight':
          return isMonthMode
            ? addMonths(focusTarget, 1)
            : addDays(focusTarget, 1);
        case 'ArrowUp':
          return isMonthMode
            ? addMonths(focusTarget, -MONTH_GRID_COLUMNS)
            : addDays(focusTarget, -7);
        case 'ArrowDown':
          return isMonthMode
            ? addMonths(focusTarget, MONTH_GRID_COLUMNS)
            : addDays(focusTarget, 7);
        case 'PageUp':
          return isMonthMode
            ? addYears(focusTarget, -1)
            : addMonths(focusTarget, -1);
        case 'PageDown':
          return isMonthMode
            ? addYears(focusTarget, 1)
            : addMonths(focusTarget, 1);
        case 'Home':
          return isMonthMode
            ? new Date(focusTarget.getFullYear(), 0, 1)
            : addDays(
                focusTarget,
                -((focusTarget.getDay() - weekStartsOn + 7) % 7),
              );
        case 'End':
          return isMonthMode
            ? new Date(focusTarget.getFullYear(), 11, 1)
            : addDays(
                focusTarget,
                6 - ((focusTarget.getDay() - weekStartsOn + 7) % 7),
              );
        default:
          return null;
      }
    })();
    if (nextDate === null) return;
    event.preventDefault();
    const clamped = clampDate(nextDate, { max, min });
    shouldFocusRef.current = true;
    setFocusedDate(clamped);
    if (
      isMonthMode
        ? clamped.getFullYear() !== displayedMonth.getFullYear()
        : !isSameMonth(clamped, displayedMonth)
    ) {
      changeMonth(clamped);
    }
  };
  const previousMonth =
    mode === 'month'
      ? addYears(displayedMonth, -1)
      : addMonths(displayedMonth, -1);
  const nextMonth =
    mode === 'month'
      ? addYears(displayedMonth, 1)
      : addMonths(displayedMonth, 1);
  const isPreviousDisabled = isMonthUnavailable(
    mode === 'month'
      ? new Date(previousMonth.getFullYear(), 11, 1)
      : previousMonth,
    { max, min },
  );
  const isNextDisabled = isMonthUnavailable(
    mode === 'month' ? new Date(nextMonth.getFullYear(), 0, 1) : nextMonth,
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
            aria-label={mode === 'month' ? 'Previous year' : 'Previous month'}
            className="rdp-button_previous"
            disabled={isPreviousDisabled}
            onClick={() => changeMonth(previousMonth)}
            type="button"
          >
            <ChevronLeftIcon className="rdp-chevron" />
          </button>
          <button
            aria-label={mode === 'month' ? 'Next year' : 'Next month'}
            className="rdp-button_next"
            disabled={isNextDisabled}
            onClick={() => changeMonth(nextMonth)}
            type="button"
          >
            <ChevronRightIcon className="rdp-chevron" />
          </button>
        </nav>
        <div className="rdp-month">
          <div className="rdp-month_caption">
            <span className="rdp-caption_label" id={captionId}>
              {mode === 'month'
                ? displayedMonth.getFullYear()
                : formatMonthLabel(displayedMonth, locale)}
            </span>
          </div>
          {mode === 'month' ? (
            <CalendarMonthGrid
              captionId={captionId}
              focusedKey={focusedKey}
              months={months}
              onKeyDown={handleKeyDown}
              onSelect={handleSelect}
            />
          ) : (
            <CalendarDayGrid
              captionId={captionId}
              focusedKey={focusedKey}
              onKeyDown={handleKeyDown}
              onSelect={handleSelect}
              weekdays={weekdays}
              weeks={weeks}
            />
          )}
        </div>
      </div>
      {footer !== undefined ? <div className="rdp-footer">{footer}</div> : null}
    </div>
  );
};
