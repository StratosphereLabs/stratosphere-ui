import { Label, RadioGroup, RadioGroupProps } from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';

import { FormLabelText } from './FormLabelText';
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
  const { setValue } = useFormContext();
  const {
    field: { value },
  } = useController({ name, ...controllerProps });
  return (
    <RadioGroup
      as="fieldset"
      className={classNames('fieldset py-0', className)}
      name={name}
      onChange={val => {
        setValue<string>(name, val);
      }}
      value={value}
      {...props}
    >
      {labelText !== undefined ? (
        <Label as={FormLabelText} isRequired={isRequired}>
          {labelText}
        </Label>
      ) : null}
      <div className="join">{children}</div>
    </RadioGroup>
  );
};
