import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Button, ButtonProps } from '../Button';

export interface FormRadioGroupOptionProps extends ButtonProps {
  value: string;
}

export const FormRadioGroupOption = ({
  children,
  className,
  disabled,
  value,
  ...props
}: FormRadioGroupOptionProps) => (
  <RadioGroup.Option as={Fragment} disabled={disabled} value={value}>
    {({ checked, disabled: isDisabled }) => (
      <Button
        active={checked}
        className={classNames('join-item', className)}
        color={checked ? 'primary' : undefined}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </Button>
    )}
  </RadioGroup.Option>
);
