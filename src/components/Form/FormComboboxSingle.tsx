import { Combobox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ComboboxProps } from './types';
import { useSingleSelectFormSync } from './useSingleSelectFormSync';

export const ComboboxSingle = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  disabled,
  formValueMode,
  name,
  options,
  selectedItems,
  setShowDropdown,
  setSelectedItems,
}: ComboboxProps<DataItem, Values>): JSX.Element => {
  useSingleSelectFormSync({
    name,
    onItemSelect: () => setShowDropdown(false),
    options,
    selectedItems,
    setSelectedItems,
    valueMode: formValueMode,
  });
  const selectedItem = selectedItems[0] ?? null;
  return (
    <Combobox
      as="div"
      className={className}
      disabled={disabled}
      name={name}
      nullable
      onChange={value => value && setSelectedItems([value])}
      value={selectedItem}
    >
      {children}
    </Combobox>
  );
};
