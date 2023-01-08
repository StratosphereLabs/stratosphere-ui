import { Listbox } from '@headlessui/react';
import {
  ComponentProps,
  FC,
  Fragment,
  RefObject,
  useEffect,
  useState,
} from 'react';
import { ComponentColor } from 'react-daisyui/dist/types';
import { Button } from 'react-daisyui';
import { FieldValues, useFormContext } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { Dropdown, DropdownMenu, DropdownOption } from '../Dropdown';
import { GenericDataType } from '../../common';

export interface FormSelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Omit<FormFieldProps<Values>, 'controllerProps' | 'isRequired'> {
  buttonRef?: RefObject<HTMLButtonElement>;
  className?: string;
  buttonColor?: ComponentColor;
  dropdownIcon?: FC<ComponentProps<'svg'>>;
  getItemText: (data: DataItem) => string;
  getItemValue: (data: DataItem) => string;
  options: DataItem[];
}

export const FormSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  buttonRef,
  className,
  dropdownIcon,
  getItemText,
  getItemValue,
  labelText,
  buttonColor,
  name,
  options,
}: FormSelectProps<DataItem, Values>): JSX.Element => {
  const { setValue } = useFormContext();
  const [selectedItem, setSelectedItem] = useState<DataItem>(options[0]);
  useEffect(() => {
    setValue<string>(name, getItemValue(selectedItem), {
      shouldValidate: true,
    });
  }, [selectedItem]);
  return (
    <Listbox
      as="div"
      className={className}
      name={name}
      value={selectedItem}
      onChange={setSelectedItem}
    >
      {labelText !== undefined ? <FormLabel>{labelText}</FormLabel> : null}
      <Listbox.Button
        as={Button}
        className="w-full"
        color={buttonColor}
        ref={buttonRef}
      >
        <>
          {selectedItem !== null ? getItemText(selectedItem) : 'Select an item'}
          {dropdownIcon}
        </>
      </Listbox.Button>
      <Dropdown>
        <Listbox.Options as={DropdownMenu}>
          {options?.map(option => (
            <Listbox.Option
              as={Fragment}
              key={getItemValue(option)}
              value={option}
            >
              {({ active, disabled, selected }) => (
                <DropdownOption
                  active={active}
                  disabled={disabled}
                  selected={selected}
                >
                  {getItemText(option)}
                </DropdownOption>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Dropdown>
    </Listbox>
  );
};
