import classNames from 'classnames';
import { RefObject, useMemo } from 'react';
import { Input, InputProps } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps, Transform } from './types';
import { useFieldColor } from '../../hooks';

export interface FormControlProps<Values extends FieldValues, TOutput>
  extends FormFieldProps<Values>,
    Omit<InputProps, 'name'> {
  inputRef?: RefObject<HTMLInputElement>;
  transform?: Transform<TOutput>;
}

export const FormControl = <Values extends FieldValues, TOutput>({
  className,
  controllerProps,
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
  const color = useFieldColor(name, showDirty);
  const inputValue = useMemo(
    () =>
      transform !== undefined ? transform.input(field.value) : field.value,
    [field.value, transform],
  );
  return (
    <div className={classNames('form-control flex-1', className)}>
      {labelText !== undefined ? (
        <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
      ) : null}
      <Input
        {...field}
        className="w-full"
        color={color}
        name={name}
        onChange={({ target: { value } }) =>
          field.onChange(
            transform !== undefined ? transform.output(value) : value,
          )
        }
        ref={inputRef}
        value={inputValue}
        {...props}
      />
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </div>
  );
};
