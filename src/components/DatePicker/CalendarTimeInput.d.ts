export interface CalendarTimeInputProps {
    className?: string;
    disabled?: boolean;
    labelText?: string;
    /** Latest selectable time, as `HH:mm[:ss]`. */
    max?: string;
    /** Earliest selectable time, as `HH:mm[:ss]`. */
    min?: string;
    /** Called with the `HH:mm` value of the field, or `''` while it is empty. */
    onChange: (value: string) => void;
    showSeconds?: boolean;
    value: string;
}
/**
 * The time field of a `datetime` calendar, rendered in the calendar footer. It
 * is a native `time` input styled by daisyUI, so it keeps the platform time
 * keyboard and locale-specific 12 or 24 hour display.
 */
export declare const CalendarTimeInput: ({ className, disabled, labelText, max, min, onChange, showSeconds, value, }: CalendarTimeInputProps) => import("react/jsx-runtime").JSX.Element;
