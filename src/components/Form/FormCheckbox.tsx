import classNames from 'classnames';
import { RefObject } from 'react';
import { Checkbox, CheckboxProps } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { useFieldColor } from '../../hooks';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';

export interface FormCheckboxProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder'>,
    Omit<CheckboxProps, 'color' | 'name'> {
  inputRef?: RefObject<HTMLInputElement>;
}

export const FormCheckbox = <Values extends FieldValues>({
  children,
  className,
  controllerProps,
  inputRef,
  isRequired,
  labelText,
  name,
  showDirty,
  ...props
}: FormCheckboxProps<Values>): JSX.Element => {
  const { field } = useController({ name, ...controllerProps });
  const color = useFieldColor(name, showDirty);
  return (
    <div className={classNames('flex flex-1 items-center gap-2', className)}>
      <Checkbox {...field} {...props} color={color} ref={inputRef} />
      <div className="flex flex-col">
        {labelText !== undefined ? (
          <FormLabel htmlFor={props.id} isRequired={isRequired}>
            {labelText}
          </FormLabel>
        ) : null}
        {children}
      </div>
    </div>
  );
};
