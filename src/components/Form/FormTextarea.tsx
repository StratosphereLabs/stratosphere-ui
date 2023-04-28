import classNames from 'classnames';
import { useMemo } from 'react';
import { Textarea, TextareaProps } from 'react-daisyui';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { Transform } from '../../common';
import { useFieldColor } from '../../hooks';

export interface FormTextareaProps<Values extends FieldValues, TOutput>
  extends FormFieldProps<Values>,
    Omit<TextareaProps, 'name'> {
  hideErrorMessage?: boolean;
  inputClassName?: string;
  transform?: Transform<TOutput>;
}

export const FormTextarea = <Values extends FieldValues, TOutput>({
  className,
  color,
  controllerProps,
  hideErrorMessage,
  inputClassName,
  isRequired,
  labelText,
  name,
  showDirty,
  transform,
  ...props
}: FormTextareaProps<Values, TOutput>): JSX.Element => {
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
      <Textarea
        {...field}
        aria-labelledby={labelText ? `label-${name}` : undefined}
        className={classNames('w-full', inputClassName)}
        color={fieldColor ?? color ?? 'ghost'}
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
    </div>
  );
};
