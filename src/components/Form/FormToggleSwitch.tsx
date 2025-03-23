import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { useFieldColor } from '../../hooks';
import { FormLabelText } from './FormLabelText';
import { FormFieldProps } from './types';

export const TOGGLE_COLORS = [
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'error',
] as const;

export const TOGGLE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export type ToggleColor = (typeof TOGGLE_COLORS)[number];

export type ToggleSize = (typeof TOGGLE_SIZES)[number];

export interface FormToggleSwitchProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder'>,
    Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
  color?: ToggleColor;
  inputClassName?: string;
  size?: ToggleSize;
}

export const FormToggleSwitch = <Values extends FieldValues>({
  children,
  className,
  color,
  controllerProps,
  inputClassName,
  isRequired,
  labelText,
  name,
  showDirty,
  size,
  ...props
}: FormToggleSwitchProps<Values>) => {
  const {
    field: { value, ...field },
  } = useController({ name, ...controllerProps });
  const fieldColor = useFieldColor(name, showDirty);
  const currentColor = fieldColor ?? color ?? undefined;
  return (
    <fieldset className={classNames('fieldset py-0', className)}>
      {labelText ? (
        <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
      ) : null}
      <label className="fieldset-label">
        <input
          type="checkbox"
          checked={value}
          className={classNames(
            'toggle',
            currentColor && `toggle-${currentColor}`,
            size && `toggle-${size}`,
            inputClassName,
          )}
          {...field}
          {...props}
        />
        {children}
      </label>
    </fieldset>
  );
};
