import classNames from 'classnames';
import { Form, Radio, RadioProps } from 'react-daisyui';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';

export interface RadioOption {
  id: string | number;
  label: string;
  value: string;
}

export interface FormRadioProps<Values extends FieldValues>
  extends UseControllerProps<Values> {
  className?: string;
  isRequired?: boolean;
  labelText?: string;
  options: RadioOption[];
  radioProps?: RadioProps;
}

export const FormRadio = <Values extends FieldValues>({
  className,
  isRequired,
  labelText,
  options,
  radioProps,
  ...props
}: FormRadioProps<Values>): JSX.Element => {
  const {
    field: { value, ...field },
    fieldState: { error },
  } = useController(props);
  return (
    <div className={classNames('form-control flex-1', className)}>
      {labelText !== undefined ? (
        <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
      ) : null}
      {options.map(({ id, label, value: optionValue }) => (
        <Form.Label key={id} title={label}>
          <Radio
            {...field}
            {...radioProps}
            checked={value === optionValue}
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
