import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { useFieldColor } from '../../hooks';
import { FormError } from './FormError';
import { FormLabelText } from './FormLabelText';
import { FormFieldProps } from './types';

export interface RadioOption {
  className?: string;
  id: string | number;
  label: string;
  value: string;
}

export const RADIO_COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'error',
] as const;

export const RADIO_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export type RadioColor = (typeof RADIO_COLORS)[number];

export type RadioSize = (typeof RADIO_SIZES)[number];

export interface FormRadioProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder'>,
    Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
  color?: RadioColor;
  inputClassName?: string;
  options: RadioOption[];
  size?: RadioSize;
}

export const FormRadio = <Values extends FieldValues>({
  className,
  color,
  controllerProps,
  inputClassName,
  isRequired,
  labelText,
  name,
  options,
  showDirty,
  size,
  ...props
}: FormRadioProps<Values>) => {
  const {
    field: { value, ...field },
    fieldState: { error },
  } = useController({
    name,
    ...controllerProps,
  });
  const fieldColor = useFieldColor(name, showDirty);
  const currentColor = fieldColor ?? color ?? undefined;
  return (
    <fieldset className={classNames('fieldset py-0', className)}>
      {labelText !== undefined ? (
        <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
      ) : null}
      {options.map(
        ({ className: optionClassName, id, label, value: optionValue }) => (
          <div
            key={id}
            className={classNames(
              'flex cursor-pointer items-center justify-between',
              optionClassName,
            )}
          >
            <span>{label}</span>
            <input
              {...field}
              {...props}
              checked={value === optionValue}
              className={classNames(
                'radio',
                currentColor && `radio-${currentColor}`,
                size && `radio-${size}`,
                inputClassName,
              )}
              type="radio"
              value={optionValue}
            />
          </div>
        ),
      )}
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </fieldset>
  );
};
