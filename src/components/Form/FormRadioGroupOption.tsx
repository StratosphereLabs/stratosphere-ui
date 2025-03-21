import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

import { Button, ButtonProps } from '../Button';

export interface FormRadioGroupOptionProps extends Omit<ButtonProps, 'color'> {
  activeColor?: ButtonProps['color'];
  inactiveColor?: ButtonProps['color'];
  value: string;
}

export const FormRadioGroupOption = ({
  activeColor,
  children,
  className,
  disabled,
  inactiveColor,
  value,
  ...props
}: FormRadioGroupOptionProps) => (
  <RadioGroup.Option as={Fragment} disabled={disabled} value={value}>
    {({ checked, disabled: isDisabled }) => (
      <Button
        active={checked}
        className={classNames('join-item', className)}
        color={checked ? (activeColor ?? 'primary') : inactiveColor}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </Button>
    )}
  </RadioGroup.Option>
);
