import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { useFieldColor } from '../../hooks';
import { FormLabelText } from './FormLabelText';
import { FormFieldProps } from './types';

export const CHECKBOX_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'error',
] as const;

export const CHECKBOX_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export type CheckboxColor = (typeof CHECKBOX_COLORS)[number];

export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];

export interface FormCheckboxProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder'>,
    Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
  color?: CheckboxColor;
  inputClassName?: string;
  size?: CheckboxSize;
}

export const FormCheckbox = <Values extends FieldValues>({
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
}: FormCheckboxProps<Values>) => {
  const {
    field: { value, ...field },
  } = useController({ name, ...controllerProps });
  const fieldColor = useFieldColor(name, showDirty);
  const currentColor = fieldColor ?? color ?? undefined;
  return (
    <div className={classNames('form-control', className)}>
      <label className="label cursor-pointer gap-2">
        <input
          type="checkbox"
          checked={value}
          className={classNames(
            'checkbox',
            currentColor && `checkbox-${currentColor}`,
            size && `checkbox-${size}`,
            inputClassName,
          )}
          {...field}
          {...props}
        />
        {labelText !== undefined ? (
          <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
        ) : null}
        {children}
      </label>
    </div>
  );
};
