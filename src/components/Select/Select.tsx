import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { ComponentColor } from 'react-daisyui/dist/types';
import { Button } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { DropdownMenuItem } from '../DropdownMenu';
import { FormFieldProps, FormLabel } from '../Form';
import { FormSelectSingle } from '../Form/FormSelectSingle';
import { FormSelectMulti } from '../Form/FormSelectMulti';
import { GenericDataType } from '../../common';
import { useFieldColor } from '../../hooks';

export interface SelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Omit<
    FormFieldProps<Values>,
    'controllerProps' | 'placeholder' | 'showDirty'
  > {
  buttonColor?: ComponentColor;
  className?: string;
  defaultOptionId?: string;
  disabled?: boolean;
  dropdownIcon?: ReactNode;
  getItemText: (data: DataItem) => string;
  getItemValue?: (data: DataItem) => string;
  menuClassName?: string;
  multi?: true;
  options: DataItem[];
  showDirty?: boolean;
}

export const Select = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  buttonColor,
  className,
  defaultOptionId,
  disabled,
  dropdownIcon,
  getItemText,
  getItemValue,
  isRequired,
  labelText,
  menuClassName,
  multi,
  name,
  options,
  showDirty,
}: SelectProps<DataItem, Values>): JSX.Element => {
  const {
    field: { ref },
  } = useController({ name });
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const fieldColor = useFieldColor(name, showDirty);
  useEffect(() => {
    if (defaultOptionId !== '') {
      const option =
        options.find(({ id }) => id === defaultOptionId) ?? options[0];
      setSelectedItems([option]);
    }
  }, [defaultOptionId]);
  const Component = multi === true ? FormSelectMulti : FormSelectSingle;
  return (
    <Component
      className={classNames('relative', className)}
      disabled={disabled}
      getItemValue={getItemValue}
      name={name}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
    >
      <div className="form-control">
        {labelText !== undefined ? (
          <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
        ) : null}
        <Listbox.Button
          as={Button}
          className="w-full"
          color={fieldColor ?? buttonColor}
          endIcon={dropdownIcon}
          ref={ref}
        >
          <span className="truncate">
            {selectedItems.length > 0
              ? selectedItems.map(item => getItemText(item)).join(', ')
              : 'Select an item'}
          </span>
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
    </Component>
  );
};
