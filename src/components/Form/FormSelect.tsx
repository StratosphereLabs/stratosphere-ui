import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ComponentProps, FC, Fragment, useEffect, useState } from 'react';
import { ComponentColor } from 'react-daisyui/dist/types';
import { Button } from 'react-daisyui';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { DropdownMenuItem } from '../DropdownMenu';
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
  className?: string;
  defaultOptionId?: string;
  dropdownIcon?: FC<ComponentProps<'svg'>>;
  getItemText: (data: DataItem) => string;
  getItemValue?: (data: DataItem) => string;
  menuClassName?: string;
  options: DataItem[];
  showDirty?: boolean;
}

export const FormSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  buttonColor,
  className,
  defaultOptionId,
  dropdownIcon,
  getItemText,
  getItemValue,
  isRequired,
  labelText,
  menuClassName,
  name,
  options,
  showDirty,
}: FormSelectProps<DataItem, Values>): JSX.Element => {
  const [shouldTouch, setShouldTouch] = useState(false);
  const { setValue } = useFormContext();
  const {
    field: { ref },
  } = useController({ name });
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
      className={classNames('relative', className)}
      name={name}
      onChange={setSelectedItem}
      value={selectedItem}
    >
      <div className="form-control">
        {labelText !== undefined ? (
          <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
        ) : null}
        <Listbox.Button
          as={Button}
          className="w-full"
          color={fieldColor ?? buttonColor}
          ref={ref}
        >
          <>
            {selectedItem !== null
              ? getItemText(selectedItem)
              : 'Select an item'}
            {dropdownIcon}
          </>
        </Listbox.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options
          as="ul"
          className={classNames(
            'menu rounded-box absolute z-50 bg-base-100 p-2 shadow-xl',
            menuClassName,
          )}
        >
          {options?.map(option => (
            <Listbox.Option as={Fragment} key={option.id} value={option}>
              {({ active, disabled, selected }) => (
                <DropdownMenuItem
                  active={active}
                  disabled={disabled}
                  selected={selected}
                >
                  {getItemText(option)}
                </DropdownMenuItem>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};
