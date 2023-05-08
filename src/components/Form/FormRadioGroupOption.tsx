import { RadioGroup } from '@headlessui/react';
import { Fragment } from 'react';
import { Button, ButtonProps } from 'react-daisyui';

export interface FormRadioGroupOptionProps extends ButtonProps {
  value: string;
}

export const FormRadioGroupOption = ({
  children,
  disabled,
  value,
  ...props
}: FormRadioGroupOptionProps) => {
  return (
    <RadioGroup.Option as={Fragment} disabled={disabled} value={value}>
      {({ checked, disabled: isDisabled }) => (
        <Button active={checked} disabled={isDisabled} type="button" {...props}>
          {children}
        </Button>
      )}
    </RadioGroup.Option>
  );
};
