import { FieldValues, Path } from 'react-hook-form';
import { PanelAnchor } from '../../common';
import { FormFieldProps, InputColor, InputSize } from '../Form';
import { CalendarDayProps, DateRange, DateSelectionMode, DateValueMode } from './types';
export interface DatePickerProps<Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'controllerProps'>, Pick<CalendarDayProps, 'captionLayout' | 'fixedWeeks' | 'isDateDisabled' | 'locale' | 'max' | 'min' | 'numberOfMonths' | 'showOutsideDays' | 'showWeekNumber' | 'weekStartsOn'> {
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
export declare const DatePicker: <Values extends FieldValues>({ anchor, buttonClassName, calendarClassName, captionLayout, className, color, disabled, endName, fixedWeeks, hideCalendarIcon, hideErrorMessage, inputClassName, isClearable, isDateDisabled, isRequired, labelText, locale, max, min, mode, name, numberOfMonths, onChange, panelClassName, placeholder, portal, showDirty, showOutsideDays, showSeconds, showWeekNumber, size, timeLabel, valueMode, weekStartsOn, }: DatePickerProps<Values>) => import("react/jsx-runtime").JSX.Element;
