import {
  Popover as HeadlessUIPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import classNames from 'classnames';
import { KeyboardEvent, useMemo, useRef, useState } from 'react';
import {
  FieldValues,
  Path,
  useController,
  useFormContext,
  useWatch,
} from 'react-hook-form';

import { PanelAnchor } from '../../common';
import { useFieldColor, useValueChangeEffect } from '../../hooks';
import { Button } from '../Button';
import {
  FormError,
  FormFieldProps,
  FormLabelText,
  InputColor,
  InputSize,
} from '../Form';
import { CalendarIcon } from '../Icons';
import { Calendar } from './Calendar';
import {
  DEFAULT_ANCHOR,
  DEFAULT_CAPTION_LAYOUT,
  DEFAULT_DATE_TIME_PLACEHOLDER,
  DEFAULT_MONTH_PLACEHOLDER,
  DEFAULT_RANGE_PLACEHOLDER,
  DEFAULT_SINGLE_PLACEHOLDER,
  OPEN_CALENDAR_LABEL,
  RANGE_SEPARATOR,
} from './constants';
import {
  CalendarDayProps,
  DateRange,
  DateRangeInput,
  DateSelectionMode,
  DateValueMode,
} from './types';
import {
  ParseDateTextOptions,
  formatDateText,
  formatDateTimeText,
  formatMonthText,
  isDateUnavailable,
  isMonthUnavailable,
  parseDate,
  parseDateRange,
  parseDateRangeText,
  parseDateText,
  parseDateTime,
  serializeDateValue,
} from './utils';

const EMPTY_RANGE: DateRange = { from: null, to: null };

export interface DatePickerProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'controllerProps'>,
    Pick<
      CalendarDayProps,
      | 'captionLayout'
      | 'fixedWeeks'
      | 'isDateDisabled'
      | 'locale'
      | 'max'
      | 'min'
      | 'numberOfMonths'
      | 'showOutsideDays'
      | 'showWeekNumber'
      | 'weekStartsOn'
    > {
  anchor?: PanelAnchor;
  buttonClassName?: string;
  calendarClassName?: string;
  className?: string;
  color?: InputColor;
  disabled?: boolean;
  /**
   * Second form field used for the end of a range. When omitted, `range` mode
   * stores its value as a `{ from, to }` object on `name` instead.
   */
  endName?: Path<Values>;
  hideCalendarIcon?: true;
  hideErrorMessage?: boolean;
  inputClassName?: string;
  isClearable?: boolean;
  mode?: DateSelectionMode;
  onChange?: (value: Date | DateRange | null) => void;
  panelClassName?: string;
  portal?: boolean;
  /** Adds seconds to the time field of `datetime` mode. */
  showSeconds?: boolean;
  size?: InputSize;
  /** Label of the time field of `datetime` mode. Defaults to `Time`. */
  timeLabel?: string;
  /** Store the value as an ISO string (the default) or as a `Date`. */
  valueMode?: DateValueMode;
}

/**
 * A date picker field for react-hook-form, built on shadcn/ui's date picker
 * composition of an input, a popover and a calendar, and styled by daisyUI.
 * Supports selecting a single date, a date and a time, a date range or a single
 * month, either by typing the value or by picking it from the calendar.
 *
 * With the default `valueMode` of `iso`, `single` and `range` fields store
 * `yyyy-MM-dd` strings, `datetime` fields store `yyyy-MM-ddTHH:mm` strings and
 * `month` fields store `yyyy-MM` strings, matching the values of the native
 * `date`, `datetime-local` and `month` inputs.
 */
export const DatePicker = <Values extends FieldValues>({
  anchor,
  buttonClassName,
  calendarClassName,
  captionLayout = DEFAULT_CAPTION_LAYOUT,
  className,
  color,
  disabled,
  endName,
  fixedWeeks,
  hideCalendarIcon,
  hideErrorMessage,
  inputClassName,
  isClearable,
  isDateDisabled,
  isRequired,
  labelText,
  locale,
  max,
  min,
  mode = 'single',
  name,
  numberOfMonths,
  onChange,
  panelClassName,
  placeholder,
  portal,
  showDirty,
  showOutsideDays,
  showSeconds,
  showWeekNumber,
  size,
  timeLabel,
  valueMode = 'iso',
  weekStartsOn,
}: DatePickerProps<Values>) => {
  const {
    field: { ref, value: startValue },
    fieldState: { error },
  } = useController({ name });
  // The end of a range is only read, never registered, and the subscription is
  // disabled entirely when the range is stored as a single `{ from, to }` value.
  const endValue = useWatch({
    disabled: endName === undefined,
    name: endName ?? name,
  });
  const { setValue } = useFormContext();
  const fieldColor = useFieldColor(name, showDirty);
  const currentColor = fieldColor ?? color;
  const range =
    mode !== 'range'
      ? EMPTY_RANGE
      : endName !== undefined
        ? { from: parseDate(startValue), to: parseDate(endValue) }
        : parseDateRange(startValue as DateRangeInput | null);
  const selectedDate =
    mode === 'range'
      ? null
      : mode === 'datetime'
        ? parseDateTime(startValue)
        : parseDate(startValue);
  const formatRangeSelection = ({ from, to }: DateRange): string | null =>
    from !== null || to !== null
      ? [from, to]
          .map(date => (date !== null ? formatDateText(date, locale) : '…'))
          .join(RANGE_SEPARATOR)
      : null;
  const formatDateSelection = (date: Date | null): string | null =>
    date !== null
      ? mode === 'month'
        ? formatMonthText(date, locale)
        : mode === 'datetime'
          ? formatDateTimeText(date, locale)
          : formatDateText(date, locale)
      : null;
  const selectionText =
    mode === 'range'
      ? formatRangeSelection(range)
      : formatDateSelection(selectedDate);
  const setFieldValue = (
    fieldName: Path<Values>,
    fieldValue: string | Date | DateRangeInput | null,
  ): void => {
    setValue<string>(fieldName, fieldValue, {
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const serialize = (date: Date | null): string | Date | null =>
    serializeDateValue(date, mode, valueMode);
  const setRangeValue = ({ from, to }: DateRange): void => {
    if (endName !== undefined) {
      setFieldValue(name, serialize(from));
      setFieldValue(endName, serialize(to));
      return;
    }
    setFieldValue(name, { from: serialize(from), to: serialize(to) });
  };
  const handleRangeChange = (value: DateRange, close: () => void): void => {
    setRangeValue(value);
    onChange?.(value);
    if (value.from !== null && value.to !== null) close();
  };
  const handleDateChange = (value: Date, close?: () => void): void => {
    setFieldValue(name, serialize(value));
    onChange?.(value);
    close?.();
  };
  const clearValue = (): void => {
    if (mode === 'range') {
      setRangeValue(EMPTY_RANGE);
      onChange?.(EMPTY_RANGE);
      return;
    }
    setFieldValue(name, serialize(null));
    onChange?.(null);
  };
  const handleClear = (close: () => void): void => {
    clearValue();
    close();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  /** Whether the calendar was open when the input was last pointed at. */
  const wasOpenRef = useRef(false);
  /** Whether the value was last written by the input rather than from outside. */
  const isTypingRef = useRef(false);
  const [inputText, setInputText] = useState(() => selectionText ?? '');
  // Follow the value when it changes from outside the input, e.g. when a date
  // is picked from the calendar or the form is reset. The change the input made
  // itself is skipped, so that typing `8/1` is not reformatted mid-word.
  useValueChangeEffect(selectionText ?? '', () => {
    if (isTypingRef.current) {
      isTypingRef.current = false;
      return;
    }
    setInputText(selectionText ?? '');
  });
  const minDate = useMemo(() => parseDate(min), [min]);
  const maxDate = useMemo(() => parseDate(max), [max]);
  /** Whether the calendar would refuse a date, which the input follows. */
  const isUnavailable = (date: Date): boolean => {
    const bounds = { isDateDisabled, max: maxDate, min: minDate };
    return mode === 'month'
      ? isMonthUnavailable(date, bounds)
      : isDateUnavailable(date, bounds);
  };
  const parseOptions: ParseDateTextOptions = {
    locale,
    mode,
    referenceDate: mode === 'range' ? range.from : selectedDate,
  };
  const hasValue =
    mode === 'range'
      ? range.from !== null || range.to !== null
      : selectedDate !== null;
  /**
   * Writes typed text to the form, as long as it resolves to a date the
   * calendar would allow - anything else is left alone until the field is left,
   * so that a value halfway through being typed is not written or cleared.
   * `range` mode only writes a complete range while it is being typed, and
   * takes a lone start date once the field is left. Returns the text of the
   * value it wrote, so that the caller does not have to wait a render for the
   * new value to reach it, or `null` when the value was left alone.
   */
  const commitInputText = (text: string, isFinal: boolean): string | null => {
    if (text.trim() === '') {
      if (hasValue) clearValue();
      return '';
    }
    if (mode === 'range') {
      const parsed = parseDateRangeText(text, parseOptions);
      if (parsed === null || parsed.from === null) return null;
      if (parsed.to === null && !isFinal) return null;
      if (
        isUnavailable(parsed.from) ||
        (parsed.to !== null && isUnavailable(parsed.to))
      ) {
        return null;
      }
      setRangeValue(parsed);
      onChange?.(parsed);
      return formatRangeSelection(parsed);
    }
    const parsed = parseDateText(text, parseOptions);
    if (parsed === null || isUnavailable(parsed)) return null;
    handleDateChange(parsed);
    return formatDateSelection(parsed);
  };
  const isCalendarOpen = (): boolean =>
    buttonRef.current?.getAttribute('aria-expanded') === 'true';
  const openCalendar = (): void => {
    if (isCalendarOpen()) return;
    buttonRef.current?.click();
    // Headless UI focuses the button it was clicked on, which would take the
    // caret out of the field the value is being typed into.
    inputRef.current?.focus();
  };
  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openCalendar();
      return;
    }
    // While the calendar is open, Enter closes it instead of submitting the
    // form, which keeps a date being picked from sending it.
    if (event.key === 'Enter' && isCalendarOpen()) {
      event.preventDefault();
      buttonRef.current?.click();
    }
  };
  const placeholderText =
    placeholder ??
    (mode === 'range'
      ? DEFAULT_RANGE_PLACEHOLDER
      : mode === 'month'
        ? DEFAULT_MONTH_PLACEHOLDER
        : mode === 'datetime'
          ? DEFAULT_DATE_TIME_PLACEHOLDER
          : DEFAULT_SINGLE_PLACEHOLDER);
  const calendarProps = {
    captionLayout,
    className: calendarClassName,
    isDateDisabled,
    locale,
    max,
    min,
  };
  /** The day grid props, which `month` mode does not accept. */
  const dayCalendarProps = {
    ...calendarProps,
    fixedWeeks,
    numberOfMonths,
    showOutsideDays,
    showWeekNumber,
    weekStartsOn,
  };
  return (
    <fieldset className={classNames('fieldset py-0', className)}>
      {labelText !== undefined ? (
        <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
      ) : null}
      <HeadlessUIPopover className="relative w-full">
        <div
          className={classNames(
            'input w-full',
            currentColor && `input-${currentColor}`,
            size && `input-${size}`,
            buttonClassName,
          )}
        >
          <input
            // Announces the key that opens the calendar, which is the only way
            // into it from the keyboard when the calendar icon is hidden.
            aria-keyshortcuts="ArrowDown"
            autoComplete="off"
            className={classNames('font-normal', inputClassName)}
            disabled={disabled}
            onBlur={() => {
              isTypingRef.current = false;
              // Text that could not be read is dropped, so the field always
              // shows the value it holds once it is left.
              const committedText = commitInputText(inputText, true);
              setInputText(committedText ?? selectionText ?? '');
            }}
            onChange={event => {
              isTypingRef.current = true;
              setInputText(event.target.value);
              commitInputText(event.target.value, false);
            }}
            // The calendar opens on a click, and a click that closed it as an
            // outside click does not reopen it.
            onClick={() => {
              if (!wasOpenRef.current) openCalendar();
            }}
            onKeyDown={handleInputKeyDown}
            onPointerDown={() => {
              wasOpenRef.current = isCalendarOpen();
            }}
            placeholder={placeholderText}
            ref={element => {
              inputRef.current = element;
              ref(element);
            }}
            type="text"
            value={inputText}
          />
          {/* The button is what opens the panel and what the panel anchors to,
              so a hidden calendar icon keeps it rather than dropping it. It
              leaves the tab order with it, so that it is not an invisible stop
              for a sighted keyboard user, but stays readable by a screen
              reader, which has no other announcement that a calendar exists. */}
          <PopoverButton
            aria-label={OPEN_CALENDAR_LABEL}
            className={classNames(
              'cursor-pointer opacity-60',
              hideCalendarIcon === true && 'sr-only',
            )}
            disabled={disabled}
            ref={buttonRef}
            tabIndex={hideCalendarIcon === true ? -1 : undefined}
          >
            <CalendarIcon className="h-4 w-4 shrink-0" />
          </PopoverButton>
        </div>
        <PopoverPanel
          anchor={
            typeof anchor === 'object'
              ? { ...DEFAULT_ANCHOR, ...anchor }
              : (anchor ?? DEFAULT_ANCHOR)
          }
          portal={portal}
          transition
          className={classNames(
            'z-50 origin-top rounded-box shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
            panelClassName,
          )}
        >
          {({ close }) => {
            // `datetime` mode keeps the calendar open after a date is picked so
            // that the time can be set, and closes with **Done** instead.
            const footer =
              isClearable === true || mode === 'datetime' ? (
                <div className="flex justify-end gap-2">
                  {isClearable === true ? (
                    <Button
                      color="ghost"
                      onClick={() => handleClear(close)}
                      size="xs"
                    >
                      Clear
                    </Button>
                  ) : null}
                  {mode === 'datetime' ? (
                    <Button color="primary" onClick={() => close()} size="xs">
                      Done
                    </Button>
                  ) : null}
                </div>
              ) : undefined;
            if (mode === 'range') {
              return (
                <Calendar
                  {...dayCalendarProps}
                  footer={footer}
                  mode="range"
                  onChange={value => handleRangeChange(value, close)}
                  value={range}
                />
              );
            }
            if (mode === 'datetime') {
              return (
                <Calendar
                  {...dayCalendarProps}
                  footer={footer}
                  mode="datetime"
                  onChange={value => handleDateChange(value)}
                  showSeconds={showSeconds}
                  timeLabel={timeLabel}
                  value={selectedDate}
                />
              );
            }
            if (mode === 'month') {
              return (
                <Calendar
                  {...calendarProps}
                  footer={footer}
                  mode="month"
                  onChange={value => handleDateChange(value, close)}
                  value={selectedDate}
                />
              );
            }
            return (
              <Calendar
                {...dayCalendarProps}
                footer={footer}
                mode="single"
                onChange={value => handleDateChange(value, close)}
                value={selectedDate}
              />
            );
          }}
        </PopoverPanel>
      </HeadlessUIPopover>
      {hideErrorMessage !== true && error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </fieldset>
  );
};
