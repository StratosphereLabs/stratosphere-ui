import { RadioGroup, RadioGroupProps } from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';

export interface FormRadioGroupProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder' | 'showDirty'>,
    Omit<
      RadioGroupProps<'button', string>,
      'children' | 'className' | 'name' | 'onChange' | 'value'
    > {
  children: ReactNode;
  className?: string;
}

export const FormRadioGroup = <Values extends FieldValues>({
  children,
  className,
  controllerProps,
  isRequired,
  labelText,
  name,
  ...props
}: FormRadioGroupProps<Values>) => {
  const {
    field: { onChange, value },
  } = useController({ name, ...controllerProps });
  return (
    <RadioGroup
      className={classNames('join', className)}
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    >
      {labelText !== undefined ? (
        <RadioGroup.Label as={FormLabel} isRequired={isRequired}>
          {labelText}
        </RadioGroup.Label>
      ) : null}
      {children}
    </RadioGroup>
  );
};
