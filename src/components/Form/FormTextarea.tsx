import classNames from 'classnames';
import { HTMLProps, useMemo } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { Transform } from '../../common';
import { useFieldColor } from '../../hooks';
import { FormError } from './FormError';
import { FormLabelText } from './FormLabelText';
import { FormFieldProps } from './types';

export const TEXTAREA_COLORS = [
  'ghost',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export const TEXTAREA_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

export type TextareaColor = (typeof TEXTAREA_COLORS)[number];

export type TextareaSize = (typeof TEXTAREA_SIZES)[number];

export interface FormTextareaProps<Values extends FieldValues, TOutput>
  extends FormFieldProps<Values>,
    Omit<HTMLProps<HTMLTextAreaElement>, 'name' | 'size'> {
  bordered?: boolean;
  color?: TextareaColor;
  hideErrorMessage?: boolean;
  inputClassName?: string;
  size?: TextareaSize;
  transform?: Transform<TOutput>;
}

export const FormTextarea = <Values extends FieldValues, TOutput>({
  bordered,
  className,
  color,
  controllerProps,
  hideErrorMessage,
  inputClassName,
  isRequired,
  labelText,
  name,
  showDirty,
  size,
  transform,
  ...props
}: FormTextareaProps<Values, TOutput>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    ...controllerProps,
    name,
  });
  const { setValue } = useFormContext();
  const fieldColor = useFieldColor(name, showDirty);
  const currentColor = fieldColor ?? color ?? undefined;
  const inputValue = useMemo(
    () =>
      transform !== undefined ? transform.input(field.value) : field.value,
    [field.value, transform],
  );
  return (
    <label className={classNames('form-control', className)}>
      {labelText !== undefined ? (
        <div className="label">
          <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
        </div>
      ) : null}
      <textarea
        {...field}
        className={classNames(
          'textarea w-full',
          bordered !== false && 'textarea-bordered',
          currentColor && `textarea-${currentColor}`,
          size && `textarea-${size}`,
          inputClassName,
        )}
        onChange={({ target: { value } }) => {
          const output =
            transform === undefined ? value : transform.output(value);
          if (output !== undefined) {
            setValue<string>(name, output, {
              shouldDirty: true,
              shouldTouch: true,
            });
          }
        }}
        value={inputValue}
        {...props}
      />
      {hideErrorMessage !== true && error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </label>
  );
};
