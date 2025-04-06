import {
  Label,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
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
  anchor?: AnchorProps;
  buttonColor?: ButtonColor;
  buttonProps?: ButtonProps;
  className?: string;
  disabled?: boolean;
  dropdownIcon?: ReactNode;
  formValueMode?: FormValueMode;
  getItemText: (data: DataItem) => ReactNode;
  hideDropdownIcon?: true;
  menuClassName?: string;
  menuSize?: MenuSize;
  multi?: true;
  options?: DataItem[];
  portal?: boolean;
  showDirty?: boolean;
}

export const Select = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  anchor,
  buttonColor,
  buttonProps: {
    children: buttonChildren,
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
  portal,
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
      className={className}
      disabled={disabled}
      name={name}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
    >
      <fieldset className="fieldset py-0">
        {labelText !== undefined ? (
          <Label as={FormLabelText} isRequired={isRequired}>
            {labelText}
          </Label>
        ) : null}
        <ListboxButton
          as={Button}
          className={classNames('w-full flex-nowrap', buttonClassName)}
          color={fieldColor ?? buttonPropsColor ?? buttonColor}
          loading={optionsArray === undefined}
          ref={ref}
          {...buttonProps}
        >
          {buttonChildren ??
            (selectedItems.length > 0
              ? selectedItems.map(item => getItemText(item)).join(', ')
              : 'Select an item')}
          {hideDropdownIcon !== true
            ? (dropdownIcon ?? <ChevronDownIcon className="h-4 w-4" />)
            : null}
        </ListboxButton>
      </fieldset>
      <ListboxOptions
        as={Menu}
        anchor={anchor}
        portal={portal}
        size={menuSize}
        transition
        className={classNames(
          'origin-top rounded-box p-2 shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
          menuClassName,
        )}
      >
        {optionsArray?.map(option => (
          <ListboxOption as={Fragment} key={option.id} value={option}>
            {({ disabled, selected }) => (
              <MenuItem disabled={disabled} selected={selected}>
                {getItemText(option)}
              </MenuItem>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Component>
  );
};
