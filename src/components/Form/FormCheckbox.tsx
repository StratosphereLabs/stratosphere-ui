import classNames from 'classnames';
import { RefObject } from 'react';
import { Checkbox, CheckboxProps } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { useFieldColor } from '../../hooks';

export interface FormCheckboxProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder'>,
    Omit<CheckboxProps, 'name'> {
  inputRef?: RefObject<HTMLInputElement>;
}

export const FormCheckbox = <Values extends FieldValues>({
  children,
  className,
  color,
  controllerProps,
  inputRef,
  isRequired,
  labelText,
  name,
  showDirty,
  ...props
}: FormCheckboxProps<Values>): JSX.Element => {
  const { field } = useController({ name, ...controllerProps });
  const fieldColor = useFieldColor(name, showDirty);
  return (
    <div className={classNames('flex items-center gap-2', className)}>
      <Checkbox
        {...field}
        {...props}
        color={fieldColor ?? color ?? 'ghost'}
        ref={inputRef}
      />
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
