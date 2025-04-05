import classNames from 'classnames';
import { HTMLProps, ReactNode, RefObject, useMemo } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';

import { Transform } from '../../common';
import { useFieldColor } from '../../hooks';
import { FormError } from './FormError';
import { FormLabelText } from './FormLabelText';
import { FormFieldProps } from './types';

export const INPUT_COLORS = [
  'ghost',
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export const INPUT_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

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
  inputRef?: RefObject<HTMLInputElement>;
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
  inputRef,
  isRequired,
  labelText,
  name,
  onChange,
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
    <fieldset className={classNames('fieldset py-0', className)}>
      {labelText !== undefined ? (
        <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
      ) : null}
      <div className="relative inline-flex w-full">
        {elementLeft ? (
          <div className="absolute left-0 top-0 z-20 flex h-full items-center pl-2">
            {elementLeft}
          </div>
        ) : null}
        <input
          {...field}
          className={classNames(
            'input w-full',
            bordered && `input-bordered`,
            currentColor && `input-${currentColor}`,
            size && `input-${size}`,
            inputClassName,
          )}
          onChange={event => {
            const output =
              transform === undefined
                ? event.target.value
                : transform.output(event.target.value);
            if (output !== undefined) {
              setValue<string>(name, output, {
                shouldDirty: true,
                shouldTouch: true,
              });
            }
            onChange?.(event);
          }}
          ref={inputRef}
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
    </fieldset>
  );
};
