import { Listbox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ListboxProps } from './types';
import { useMultiSelectFormSync } from './useMultiSelectFormSync';

export const FormSelectMulti = <
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
}: ListboxProps<DataItem, Values>): JSX.Element => {
  useMultiSelectFormSync({
    name,
    options,
    selectedItems,
    setSelectedItems,
    valueMode: formValueMode ?? 'id',
  });
  return (
    <Listbox
      as="div"
      by="id"
      className={className}
      disabled={disabled}
      multiple
      name={name}
      onChange={setSelectedItems}
      value={selectedItems}
    >
      {children}
    </Listbox>
  );
};
