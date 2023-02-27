import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
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
import { useFieldColor } from '../../hooks';

export interface FormSelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Omit<
    FormFieldProps<Values>,
    'controllerProps' | 'placeholder' | 'showDirty'
  > {
  buttonColor?: ComponentColor;
  buttonRef?: RefObject<HTMLButtonElement>;
  className?: string;
  defaultOptionId?: string;
  dropdownIcon?: FC<ComponentProps<'svg'>>;
  getItemText: (data: DataItem) => string;
  getItemValue?: (data: DataItem) => string;
  options: DataItem[];
  showDirty?: boolean;
}

export const FormSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  buttonColor,
  buttonRef,
  className,
  defaultOptionId,
  dropdownIcon,
  getItemText,
  getItemValue,
  isRequired,
  labelText,
  name,
  options,
  showDirty,
}: FormSelectProps<DataItem, Values>): JSX.Element => {
  const [shouldTouch, setShouldTouch] = useState(false);
  const { setValue } = useFormContext();
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const fieldColor = useFieldColor(name, showDirty);
  useEffect(() => {
    const itemValue =
      selectedItem && getItemValue ? getItemValue(selectedItem) : selectedItem;
    setValue<string>(name, itemValue, { shouldTouch, shouldDirty: true });
    setShouldTouch(true);
  }, [selectedItem]);
  useEffect(() => {
    if (defaultOptionId !== '') {
      const option =
        options.find(({ id }) => id === defaultOptionId) ?? options[0];
      setSelectedItem(option);
    }
  }, [defaultOptionId]);
  return (
    <Listbox
      as="div"
      by="id"
      className={classNames('form-control flex-1', className)}
      name={name}
      onChange={setSelectedItem}
      value={selectedItem}
    >
      {labelText !== undefined ? (
        <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
      ) : null}
      <Listbox.Button
        as={Button}
        className="w-full"
        color={fieldColor ?? buttonColor}
        ref={buttonRef}
      >
        <>
          {selectedItem !== null ? getItemText(selectedItem) : 'Select an item'}
          {dropdownIcon}
        </>
      </Listbox.Button>
      <Dropdown>
        <Listbox.Options as={DropdownMenu} className="bg-base-100 shadow-xl">
          {options?.map(option => (
            <Listbox.Option as={Fragment} key={option.id} value={option}>
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
