import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, ReactNode, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { GenericDataType, getGroupedDataItems } from '../../common';
import { useFieldColor } from '../../hooks';
import { Button, ButtonColor, ButtonProps } from '../Button';
import { FormFieldProps, FormLabelText, FormValueMode } from '../Form';
import { FormSelectMulti } from '../Form/FormSelectMulti';
import { FormSelectSingle } from '../Form/FormSelectSingle';
import { useSelectFormSync } from '../Form/useSelectFormSync';
import { ChevronDownIcon } from '../Icons';
import { Menu, MenuItem, MenuSize } from '../Menu';

export interface SelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Omit<
    FormFieldProps<Values>,
    'controllerProps' | 'placeholder' | 'showDirty'
  > {
  buttonColor?: ButtonColor;
  buttonProps?: ButtonProps;
  className?: string;
  disabled?: boolean;
  dropdownIcon?: ReactNode;
  formValueMode?: FormValueMode;
  getItemText: (data: DataItem) => string;
  hideDropdownIcon?: true;
  menuClassName?: string;
  menuSize?: MenuSize;
  multi?: true;
  options?: DataItem[];
  showDirty?: boolean;
}

export const Select = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  buttonColor,
  buttonProps: {
    className: buttonClassName,
    color: buttonPropsColor,
    ...buttonProps
  } = {},
  className,
  disabled,
  dropdownIcon,
  formValueMode,
  getItemText,
  hideDropdownIcon,
  isRequired,
  labelText,
  menuClassName,
  menuSize,
  multi,
  name,
  options: optionsArray,
  showDirty,
}: SelectProps<DataItem, Values>) => {
  const {
    field: { ref },
  } = useController({ name });
  const options = getGroupedDataItems(optionsArray ?? []);
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  useSelectFormSync({
    multi,
    name,
    options,
    selectedItems,
    setSelectedItems,
    valueMode: formValueMode,
  });
  const fieldColor = useFieldColor(name, showDirty);
  const Component = multi === true ? FormSelectMulti : FormSelectSingle;
  return (
    <Component
      className={classNames('relative', className)}
      disabled={disabled}
      name={name}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
    >
      <label className="form-control">
        {labelText !== undefined ? (
          <div className="label">
            <FormLabelText isRequired={isRequired}>{labelText}</FormLabelText>
          </div>
        ) : null}
        <Listbox.Button
          as={Button}
          className={classNames('w-full flex-nowrap', buttonClassName)}
          color={fieldColor ?? buttonPropsColor ?? buttonColor}
          loading={optionsArray === undefined}
          ref={ref}
          {...buttonProps}
        >
          {selectedItems.length > 0
            ? selectedItems.map(item => getItemText(item)).join(', ')
            : 'Select an item'}
          {hideDropdownIcon !== true
            ? (dropdownIcon ?? <ChevronDownIcon className="h-4 w-4" />)
            : null}
        </Listbox.Button>
      </label>
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
          as={Menu}
          size={menuSize}
          className={classNames(
            'rounded-box absolute z-50 bg-base-100 p-2 shadow-xl',
            menuClassName,
          )}
        >
          {optionsArray?.map(option => (
            <Listbox.Option as={Fragment} key={option.id} value={option}>
              {({ active, disabled, selected }) => (
                <MenuItem
                  disabled={disabled}
                  focus={active}
                  selected={selected}
                >
                  {getItemText(option)}
                </MenuItem>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Component>
  );
};
