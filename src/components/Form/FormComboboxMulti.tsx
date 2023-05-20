import { Combobox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ComboboxProps } from './types';
import { useMultiSelectFormSync } from './useMultiSelectFormSync';

export const ComboboxMulti = <
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
  setSelectedItems,
}: ComboboxProps<DataItem, Values>): JSX.Element => {
  useMultiSelectFormSync({
    name,
    options,
    selectedItems,
    setSelectedItems,
    valueMode: formValueMode ?? 'id',
  });
  return (
    <Combobox
      as="div"
      className={className}
      disabled={disabled}
      multiple
      name={name}
      onChange={value => setSelectedItems(value)}
      value={selectedItems}
    >
      {children}
    </Combobox>
  );
};
