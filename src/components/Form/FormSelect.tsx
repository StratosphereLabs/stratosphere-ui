import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
import {
  ComponentProps,
  FC,
  Fragment,
  RefObject,
  useEffect,
  useMemo,
  useRef,
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
}: FormSelectProps<DataItem, Values>): JSX.Element => {
  const currentDefaultOption = useRef<DataItem>();
  const [shouldTouch, setShouldTouch] = useState(false);
  const { setValue } = useFormContext();
  const defaultOption = useMemo(
    () => options.find(({ id }) => id === defaultOptionId),
    [defaultOptionId, options],
  );
  const [selectedItem, setSelectedItem] = useState<DataItem>(
    defaultOption ?? options[0],
  );
  useEffect(() => {
    const itemValue =
      getItemValue !== undefined ? getItemValue(selectedItem) : selectedItem;
    setValue<string>(name, itemValue, { shouldTouch, shouldDirty: true });
    setShouldTouch(true);
  }, [selectedItem]);
  useEffect(() => {
    if (defaultOption) {
      setSelectedItem(defaultOption);
      currentDefaultOption.current = defaultOption;
    }
  }, [defaultOption]);
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
        color={buttonColor}
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
