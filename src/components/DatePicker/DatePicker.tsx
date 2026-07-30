import {
  Popover as HeadlessUIPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import classNames from 'classnames';
import {
  FieldValues,
  Path,
  useController,
  useFormContext,
  useWatch,
} from 'react-hook-form';

import { useFieldColor } from '../../hooks';
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
  DEFAULT_DATE_TIME_PLACEHOLDER,
  DEFAULT_MONTH_PLACEHOLDER,
  DEFAULT_RANGE_PLACEHOLDER,
  DEFAULT_SINGLE_PLACEHOLDER,
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
  formatDateText,
  formatDateTimeText,
  formatMonthText,
  parseDate,
  parseDateRange,
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
  anchor?: AnchorProps;
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
 * composition of a popover and a calendar, and styled by daisyUI. Supports
 * selecting a single date, a date and a time, a date range or a single month.
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
  captionLayout,
  className,
  color,
  disabled,
  endName,
  fixedWeeks,
  hideCalendarIcon,
  hideErrorMessage,
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
  const selectionText =
    mode === 'range'
      ? range.from !== null || range.to !== null
        ? [range.from, range.to]
            .map(date => (date !== null ? formatDateText(date, locale) : '…'))
            .join(RANGE_SEPARATOR)
        : null
      : selectedDate !== null
        ? mode === 'month'
          ? formatMonthText(selectedDate, locale)
          : mode === 'datetime'
            ? formatDateTimeText(selectedDate, locale)
            : formatDateText(selectedDate, locale)
        : null;
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
  const handleClear = (close: () => void): void => {
    if (mode === 'range') {
      setRangeValue(EMPTY_RANGE);
      onChange?.(EMPTY_RANGE);
    } else {
      setFieldValue(name, serialize(null));
      onChange?.(null);
    }
    close();
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
    className: calendarClassName,
    isDateDisabled,
    locale,
    max,
    min,
  };
  /** The day grid props, which `month` mode does not accept. */
  const dayCalendarProps = {
    ...calendarProps,
    captionLayout,
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
        <PopoverButton
          className={classNames(
            'input w-full cursor-pointer justify-between',
            currentColor && `input-${currentColor}`,
            size && `input-${size}`,
            buttonClassName,
          )}
          disabled={disabled}
          ref={ref}
        >
          <span
            className={classNames(
              'truncate font-normal',
              selectionText === null && 'opacity-50',
            )}
          >
            {selectionText ?? placeholderText}
          </span>
          {hideCalendarIcon !== true ? (
            <CalendarIcon className="h-4 w-4 shrink-0 opacity-60" />
          ) : null}
        </PopoverButton>
        <PopoverPanel
          anchor={anchor ?? { gap: 4, to: 'bottom start' }}
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
