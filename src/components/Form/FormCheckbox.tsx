import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useFieldColor } from '../../hooks';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';

export const CHECKBOX_COLORS = [
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'error',
] as const;

export const CHECKBOX_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

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
}: FormCheckboxProps<Values>): JSX.Element => {
  const { field } = useController({ name, ...controllerProps });
  const fieldColor = useFieldColor(name, showDirty);
  const currentColor = fieldColor ?? color ?? undefined;
  return (
    <div className={classNames('flex items-center gap-2', className)}>
      <input
        type="checkbox"
        className={classNames(
          'checkbox',
          currentColor && `checkbox-${currentColor}`,
          size && `checkbox-${size}`,
          inputClassName,
        )}
        {...field}
        {...props}
      />
      <div className="flex flex-col">
        {labelText !== undefined ? (
          <FormLabel htmlFor={props.id} isRequired={isRequired}>
            {labelText}
          </FormLabel>
        ) : null}
        {children}
      </div>
    </div>
  );
};
