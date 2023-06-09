import classNames from 'classnames';
import { HTMLProps, ReactNode, useMemo } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { Transform } from '../../common';
import { useFieldColor } from '../../hooks';

export const INPUT_COLORS = [
  'ghost',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export const INPUT_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

export type InputColor = (typeof INPUT_COLORS)[number];

export type InputSize = (typeof INPUT_SIZES)[number];

export interface FormControlProps<Values extends FieldValues, TOutput>
  extends FormFieldProps<Values>,
    Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
  bordered?: boolean;
  color?: InputColor;
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  hideErrorMessage?: boolean;
  inputClassName?: string;
  size?: InputSize;
  transform?: Transform<TOutput>;
}

export const FormControl = <Values extends FieldValues, TOutput>({
  bordered,
  className,
  color,
  controllerProps,
  elementLeft,
  elementRight,
  hideErrorMessage,
  inputClassName,
  isRequired,
  labelText,
  name,
  showDirty,
  size,
  transform,
  ...props
}: FormControlProps<Values, TOutput>) => {
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
    <div className={classNames('form-control', className)}>
      {labelText !== undefined ? (
        <FormLabel id={`label-${name}`} isRequired={isRequired}>
          {labelText}
        </FormLabel>
      ) : null}
      <div className="relative inline-flex">
        {elementLeft ? (
          <div className="absolute left-0 top-0 z-20 flex h-full items-center pl-2">
            {elementLeft}
          </div>
        ) : null}
        <input
          {...field}
          aria-labelledby={labelText ? `label-${name}` : undefined}
          className={classNames(
            'input w-full',
            bordered !== false && `input-bordered`,
            currentColor && `input-${currentColor}`,
            size && `input-${size}`,
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
        {elementRight ? (
          <div className="absolute right-0 top-0 z-20 flex h-full items-center pr-2">
            {elementRight}
          </div>
        ) : null}
      </div>
      {hideErrorMessage !== true && error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </div>
  );
};
