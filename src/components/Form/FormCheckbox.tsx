import { ReactNode } from 'react';
import { Checkbox, CheckboxProps } from 'react-daisyui';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { FormLabel } from './FormLabel';

export interface FormCheckboxProps<Values extends FieldValues>
  extends UseControllerProps<Values> {
  children?: ReactNode;
  inputProps?: CheckboxProps;
}

export const FormCheckbox = <Values extends FieldValues>({
  children,
  inputProps,
  ...props
}: FormCheckboxProps<Values>): JSX.Element => {
  const { field } = useController(props);
  return (
    <div className="flex items-center gap-2">
      <Checkbox {...field} {...inputProps} />
      {children !== undefined ? (
        <FormLabel htmlFor={inputProps?.id}>{children}</FormLabel>
      ) : null}
    </div>
  );
};
