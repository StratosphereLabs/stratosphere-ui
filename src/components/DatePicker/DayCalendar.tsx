import classNames from 'classnames';
import { useMemo, useRef, useState } from 'react';
import {
  ChevronProps,
  DayPicker,
  FooterProps,
  Formatters,
  Labels,
  Matcher,
  PropsBase,
} from 'react-day-picker';

import { useMediaQuery, useValueChangeEffect } from '../../hooks';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { CalendarTimeInput } from './CalendarTimeInput';
import { DEFAULT_TIME_VALUE, TWO_MONTH_MEDIA_QUERY } from './constants';
import { CalendarDayModeProps, DateInput } from './types';
import {
  clampDate,
  formatDateLabel,
  formatISODate,
  formatISODateTime,
  formatMonthLabel,
  formatMonthName,
  formatTimeValue,
  formatWeekdayLabel,
  formatWeekdayName,
  getDropdownMonthRange,
  hasYearDropdown,
  isSameDay,
  parseDate,
  parseDateRange,
  parseDateTime,
  startOfDay,
  startOfMonth,
  withTimeValue,
} from './utils';

/**
 * The chevrons of the navigation buttons and the caption dropdowns. daisyUI
 * sizes and colors `.rdp-chevron` by filling it, which would paint the wedge
 * between the ends of a stroked path, so the fill is turned off again.
 */
const CalendarChevron = ({ orientation }: ChevronProps) => {
  const Icon =
    orientation === 'left'
      ? ChevronLeftIcon
      : orientation === 'right'
        ? ChevronRightIcon
        : ChevronDownIcon;
  return <Icon className="rdp-chevron" style={{ fill: 'none' }} />;
};

/**
 * The calendar footer. `react-day-picker` renders it as an `aria-live` region,
 * which is meant for announcements rather than for the time field and the
 * buttons that are rendered in it here.
 */
const CalendarFooter = ({ children, className }: FooterProps) => (
  <div className={className}>{children}</div>
);

/**
 * The calendar of every mode that renders a day grid, i.e. `single`, `datetime`
 * and `range`. It is a thin wrapper around `react-day-picker`, rendered with its
 * default class names so that daisyUI's calendar component styles it.
 *
 * Use `Calendar`, which renders this for the day modes and the month grid for
 * `month` mode.
 */
export const DayCalendar = (props: CalendarDayModeProps) => {
  const {
    autoFocus,
    captionLayout,
    className,
    defaultMonth,
    fixedWeeks = true,
    footer,
    isDateDisabled,
    locale,
    month,
    numberOfMonths,
    onMonthChange,
    showOutsideDays = true,
    showWeekNumber,
    weekStartsOn = 0,
  } = props;
  const mode = props.mode ?? 'single';
  const isWideScreen = useMediaQuery(TWO_MONTH_MEDIA_QUERY);
  const min = useMemo(() => parseDate(props.min), [props.min]);
  const max = useMemo(() => parseDate(props.max), [props.max]);
  const range =
    props.mode === 'range'
      ? parseDateRange(props.value)
      : { from: null, to: null };
  const selectedDate =
    props.mode === 'range'
      ? null
      : props.mode === 'datetime'
        ? parseDateTime(props.value)
        : parseDate(props.value);
  const showSeconds = props.mode === 'datetime' && props.showSeconds === true;
  const monthCount =
    numberOfMonths ?? (mode === 'range' && isWideScreen ? 2 : 1);
  /**
   * The month the grid opens on when the caller has not asked for one. A
   * selection anchors it, so a value outside the current month is on screen as
   * soon as the calendar is mounted rather than a month's navigation away.
   * `react-day-picker` only falls back to today, so the month is tracked here.
   */
  const selectedMonthAnchor =
    props.mode === 'range' ? range.from : selectedDate;
  const controlledMonth = useMemo(() => parseDate(month), [month]);
  const [uncontrolledMonth, setUncontrolledMonth] = useState(() =>
    startOfMonth(
      controlledMonth ??
        parseDate(defaultMonth) ??
        selectedMonthAnchor ??
        clampDate(startOfDay(new Date()), { max, min }),
    ),
  );
  const displayedMonth =
    controlledMonth !== null
      ? startOfMonth(controlledMonth)
      : uncontrolledMonth;
  const changeMonth = (nextMonth: Date): void => {
    const nextStartOfMonth = startOfMonth(nextMonth);
    if (controlledMonth === null) setUncontrolledMonth(nextStartOfMonth);
    onMonthChange?.(nextStartOfMonth);
  };
  /** Whether a date falls in one of the months that are currently on screen. */
  const isMonthDisplayed = (date: Date): boolean => {
    const offset =
      (date.getFullYear() - displayedMonth.getFullYear()) * 12 +
      date.getMonth() -
      displayedMonth.getMonth();
    return offset >= 0 && offset < monthCount;
  };
  // Follow the selected value when it changes from outside the calendar, e.g.
  // when the form is reset while the popover is closed. A selection that is
  // already on screen leaves the grid where it is, so completing a range in the
  // second of two months does not scroll it away. The first render is skipped so
  // that it stays a reaction to a change, leaving `defaultMonth` the say over
  // the month the calendar opens on.
  const hasRenderedRef = useRef(false);
  useValueChangeEffect(
    selectedMonthAnchor !== null ? formatISODate(selectedMonthAnchor) : '',
    () => {
      const hasRendered = hasRenderedRef.current;
      hasRenderedRef.current = true;
      if (
        hasRendered &&
        selectedMonthAnchor !== null &&
        !isMonthDisplayed(selectedMonthAnchor)
      ) {
        changeMonth(selectedMonthAnchor);
      }
    },
  );
  /**
   * In `datetime` mode a bound can carry a time of day, which restricts the
   * boundary day itself - the day grid stays bounded by the date alone, so the
   * boundary day is still selectable. Midnight is read as a date-only bound,
   * since that is what a `yyyy-MM-dd` value and a `Date` at midnight resolve
   * to, and it keeps `max={new Date(2013, 7, 20)}` meaning the whole day.
   */
  const parseBoundTime = (value?: DateInput | null): Date | null => {
    if (props.mode !== 'datetime') return null;
    const parsed = parseDateTime(value);
    return parsed === null || formatTimeValue(parsed, true) === '00:00:00'
      ? null
      : parsed;
  };
  const minTimeBound = parseBoundTime(props.min);
  const maxTimeBound = parseBoundTime(props.max);
  /** The bound's time, but only while its own day is the selected one. */
  const boundTimeValue = (bound: Date | null): string | undefined =>
    bound !== null && selectedDate !== null && isSameDay(selectedDate, bound)
      ? formatTimeValue(bound, showSeconds)
      : undefined;
  /**
   * Keeps a time that was picked on another day inside the bounds of the day it
   * is applied to. The time field is bounded by the browser instead, which
   * reports an invalid value rather than overwriting what is being typed.
   */
  const clampToTimeBounds = (date: Date): Date => {
    if (
      minTimeBound !== null &&
      isSameDay(date, minTimeBound) &&
      date.getTime() < minTimeBound.getTime()
    ) {
      return minTimeBound;
    }
    if (
      maxTimeBound !== null &&
      isSameDay(date, maxTimeBound) &&
      date.getTime() > maxTimeBound.getTime()
    ) {
      return maxTimeBound;
    }
    return date;
  };
  const [timeValue, setTimeValue] = useState(() =>
    selectedDate !== null
      ? formatTimeValue(selectedDate, showSeconds)
      : DEFAULT_TIME_VALUE,
  );
  // Follow the time of the selected value when it changes from outside the
  // calendar, e.g. when the form is reset while the popover is closed.
  useValueChangeEffect(
    selectedDate !== null ? formatISODateTime(selectedDate) : '',
    () => {
      if (selectedDate !== null) {
        setTimeValue(formatTimeValue(selectedDate, showSeconds));
      }
    },
  );
  // Timestamps are used as memo dependencies since a new Date instance is
  // created on every render.
  const maxTime = max?.getTime();
  const minTime = min?.getTime();
  const disabled = useMemo<Matcher[]>(() => {
    const matchers: Matcher[] = [];
    if (min !== null) matchers.push({ before: min });
    if (max !== null) matchers.push({ after: max });
    if (isDateDisabled !== undefined) {
      matchers.push((date: Date) => isDateDisabled(date));
    }
    return matchers;
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isDateDisabled, maxTime, minTime]);
  const formatters = useMemo<Partial<Formatters>>(
    () => ({
      formatCaption: date => formatMonthLabel(date, locale),
      formatMonthDropdown: date => formatMonthName(date, locale),
      formatWeekdayName: date => formatWeekdayName(date, locale),
    }),
    [locale],
  );
  const labels = useMemo<Partial<Labels>>(
    () => ({
      labelDayButton: date => formatDateLabel(date, locale),
      labelGrid: date => formatMonthLabel(date, locale),
      labelNext: () => 'Next month',
      labelPrevious: () => 'Previous month',
      labelWeekday: date => formatWeekdayLabel(date, locale),
    }),
    [locale],
  );
  const handleTimeChange = (value: string): void => {
    setTimeValue(value);
    if (props.mode !== 'datetime' || selectedDate === null) return;
    props.onChange?.(withTimeValue(selectedDate, value));
  };
  const timeMax = boundTimeValue(maxTimeBound);
  const timeMin = boundTimeValue(minTimeBound);
  const footerContent =
    props.mode === 'datetime' || footer !== undefined ? (
      <div className="flex flex-col gap-2">
        {props.mode === 'datetime' ? (
          <CalendarTimeInput
            labelText={props.timeLabel}
            max={timeMax}
            min={timeMin}
            onChange={handleTimeChange}
            showSeconds={showSeconds}
            value={timeValue}
          />
        ) : null}
        {footer}
      </div>
    ) : undefined;
  // The year dropdown can only reach the months the calendar navigates to, so
  // the bounds are widened around today while `min` and `max` leave them open.
  const dropdownRange = hasYearDropdown(captionLayout)
    ? getDropdownMonthRange({ max, min })
    : null;
  const dayPickerProps: PropsBase = {
    autoFocus,
    captionLayout,
    className: classNames('react-day-picker', className),
    components: { Chevron: CalendarChevron, Footer: CalendarFooter },
    disabled,
    endMonth: dropdownRange?.end ?? max ?? undefined,
    fixedWeeks,
    footer: footerContent,
    formatters,
    labels,
    lang: locale,
    month: displayedMonth,
    numberOfMonths: monthCount,
    onMonthChange: changeMonth,
    showOutsideDays,
    showWeekNumber,
    startMonth: dropdownRange?.start ?? min ?? undefined,
    weekStartsOn,
  };
  if (props.mode === 'range') {
    return (
      <DayPicker
        {...dayPickerProps}
        // `min` is the smallest number of days in a range, not the earliest
        // selectable date. One day keeps the range incomplete after the first
        // click, instead of completing it as a range of that single day.
        min={1}
        mode="range"
        onSelect={(value, triggerDate) =>
          // A click on a complete range starts a new one rather than moving the
          // end that was clicked nearest to, so that a range takes the same two
          // clicks whether or not the calendar opened with one selected.
          props.onChange?.(
            range.from !== null && range.to !== null
              ? { from: triggerDate, to: null }
              : { from: value?.from ?? null, to: value?.to ?? null },
          )
        }
        selected={{ from: range.from ?? undefined, to: range.to ?? undefined }}
      />
    );
  }
  return (
    <DayPicker
      {...dayPickerProps}
      mode="single"
      // The clicked date is used instead of the new selection so that clicking
      // the selected day reports it again rather than clearing the field.
      onSelect={(_, triggerDate) =>
        props.onChange?.(
          props.mode === 'datetime'
            ? clampToTimeBounds(withTimeValue(triggerDate, timeValue))
            : triggerDate,
        )
      }
      selected={selectedDate ?? undefined}
    />
  );
};
