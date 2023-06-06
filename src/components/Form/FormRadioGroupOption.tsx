import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, HTMLProps } from 'react';

export interface FormRadioGroupOptionProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
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
        <button
          className={classNames('btn', checked && 'btn-active')}
          disabled={isDisabled}
          type="button"
          {...props}
        >
          {children}
        </button>
      )}
    </RadioGroup.Option>
  );
};
