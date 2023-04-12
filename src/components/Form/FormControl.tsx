import classNames from 'classnames';
import { ReactNode, RefObject, useMemo } from 'react';
import { Input, InputProps } from 'react-daisyui';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { Transform } from '../../common';
import { useFieldColor } from '../../hooks';

export interface FormControlProps<Values extends FieldValues, TOutput>
  extends FormFieldProps<Values>,
    Omit<InputProps, 'name'> {
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  hideErrorMessage?: boolean;
  inputClassName?: string;
  inputRef?: RefObject<HTMLInputElement>;
  transform?: Transform<TOutput>;
}

export const FormControl = <Values extends FieldValues, TOutput>({
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
  showDirty,
  transform,
  ...props
}: FormControlProps<Values, TOutput>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({
    ...controllerProps,
    name,
  });
  const { setValue } = useFormContext();
  const fieldColor = useFieldColor(name, showDirty);
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
        <Input
          {...field}
          aria-labelledby={labelText ? `label-${name}` : undefined}
          className={classNames('w-full', inputClassName)}
          color={fieldColor ?? color ?? 'ghost'}
          name={name}
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
    </div>
  );
};
