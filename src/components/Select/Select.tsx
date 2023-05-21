import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, ReactNode, useState } from 'react';
import { ComponentColor } from 'react-daisyui/dist/types';
import { Button } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { GenericDataType, getGroupedDataItems } from '../../common';
import { useFieldColor } from '../../hooks';
import { DropdownMenuItem } from '../DropdownMenu';
import { FormFieldProps, FormLabel, FormValueMode } from '../Form';
import { FormSelectMulti } from '../Form/FormSelectMulti';
import { FormSelectSingle } from '../Form/FormSelectSingle';

export interface SelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Omit<
    FormFieldProps<Values>,
    'controllerProps' | 'placeholder' | 'showDirty'
  > {
  buttonColor?: ComponentColor;
  className?: string;
  disabled?: boolean;
  dropdownIcon?: ReactNode;
  formValueMode?: FormValueMode;
  getItemText: (data: DataItem) => string;
  menuClassName?: string;
  multi?: true;
  options?: DataItem[];
  showDirty?: boolean;
}

export const Select = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  buttonColor,
  className,
  disabled,
  dropdownIcon,
  formValueMode,
  getItemText,
  isRequired,
  labelText,
  menuClassName,
  multi,
  name,
  options: optionsArray,
  showDirty,
}: SelectProps<DataItem, Values>): JSX.Element => {
  const {
    field: { ref },
  } = useController({ name });
  const options = getGroupedDataItems(optionsArray ?? []);
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const fieldColor = useFieldColor(name, showDirty);
  const Component = multi === true ? FormSelectMulti : FormSelectSingle;
  return (
    <Component
      className={classNames('relative', className)}
      disabled={disabled}
      formValueMode={formValueMode}
      name={name}
      options={options}
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
          loading={optionsArray === undefined}
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
          {optionsArray?.map(option => (
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
