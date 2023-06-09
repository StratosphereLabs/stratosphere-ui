import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { useFieldColor } from '../../hooks';
import { FormLabel } from './FormLabel';
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

export const TOGGLE_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

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
    <div className={classNames('flex items-center gap-2', className)}>
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
      <div className="flex flex-col">
        {labelText ? (
          <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
        ) : null}
        {children}
      </div>
    </div>
  );
};
