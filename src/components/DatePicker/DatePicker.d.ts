import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { FieldValues, Path } from 'react-hook-form';
import { FormFieldProps, InputColor, InputSize } from '../Form';
import { CalendarBaseProps, DateRange, DateSelectionMode, DateValueMode } from './types';
export interface DatePickerProps<Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'controllerProps'>, Pick<CalendarBaseProps, 'fixedWeeks' | 'isDateDisabled' | 'locale' | 'max' | 'min' | 'showOutsideDays' | 'weekStartsOn'> {
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
    size?: InputSize;
    /** Store the value as an ISO string (the default) or as a `Date`. */
    valueMode?: DateValueMode;
}
/**
 * A date picker field for react-hook-form, built on the daisyUI calendar
 * styles. Supports selecting a single date, a date range or a single month.
 *
 * With the default `valueMode` of `iso`, `single` and `range` fields store
 * `yyyy-MM-dd` strings and `month` fields store `yyyy-MM` strings, matching the
 * values of native `date` and `month` inputs.
 */
export declare const DatePicker: <Values extends FieldValues>({ anchor, buttonClassName, calendarClassName, className, color, disabled, endName, fixedWeeks, hideCalendarIcon, hideErrorMessage, isClearable, isDateDisabled, isRequired, labelText, locale, max, min, mode, name, onChange, panelClassName, placeholder, portal, showDirty, showOutsideDays, size, valueMode, weekStartsOn, }: DatePickerProps<Values>) => import("react/jsx-runtime").JSX.Element;
