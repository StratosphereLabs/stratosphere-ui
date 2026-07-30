import classNames from 'classnames';

import { DEFAULT_TIME_LABEL } from './constants';

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
export const CalendarTimeInput = ({
  className,
  disabled,
  labelText = DEFAULT_TIME_LABEL,
  max,
  min,
  onChange,
  showSeconds,
  value,
}: CalendarTimeInputProps) => (
  <label
    className={classNames('flex items-center justify-between gap-3', className)}
  >
    <span className="opacity-60">{labelText}</span>
    <input
      className={classNames(
        'input input-sm',
        showSeconds === true ? 'w-32' : 'w-28',
      )}
      disabled={disabled}
      max={max}
      min={min}
      onChange={event => onChange(event.target.value)}
      step={showSeconds === true ? 1 : 60}
      type="time"
      value={value}
    />
  </label>
);
