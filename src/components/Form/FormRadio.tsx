import classNames from 'classnames';
import { RefObject } from 'react';
import { Form, Radio, RadioProps } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { useFieldColor } from '../../hooks';

export interface RadioOption {
  id: string | number;
  label: string;
  value: string;
}

export interface FormRadioProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder'>,
    Omit<RadioProps, 'name'> {
  inputRef?: RefObject<HTMLInputElement>;
  options: RadioOption[];
}

export const FormRadio = <Values extends FieldValues>({
  className,
  color,
  controllerProps,
  inputRef,
  isRequired,
  labelText,
  name,
  options,
  showDirty,
  ...props
}: FormRadioProps<Values>): JSX.Element => {
  const {
    field: { value, ...field },
    fieldState: { error },
  } = useController({
    name,
    ...controllerProps,
  });
  const fieldColor = useFieldColor(name, showDirty);
  return (
    <div className={classNames('form-control flex-1', className)}>
      {labelText !== undefined ? (
        <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
      ) : null}
      {options.map(({ id, label, value: optionValue }) => (
        <Form.Label key={id} title={label}>
          <Radio
            {...field}
            {...props}
            checked={value === optionValue}
            color={fieldColor ?? color ?? 'ghost'}
            ref={inputRef}
            value={optionValue}
          />
        </Form.Label>
      ))}
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </div>
  );
};
