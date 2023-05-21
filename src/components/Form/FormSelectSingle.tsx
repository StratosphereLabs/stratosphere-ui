import { Listbox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ListboxProps } from './types';
import { useSingleSelectFormSync } from './useSingleSelectFormSync';

export const FormSelectSingle = <
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
  useSingleSelectFormSync({
    name,
    options,
    selectedItems,
    setSelectedItems,
    valueMode: formValueMode,
  });
  const selectedItem = selectedItems[0] ?? null;
  return (
    <Listbox
      as="div"
      by="id"
      className={className}
      disabled={disabled}
      name={name}
      onChange={value => value && setSelectedItems([value])}
      value={selectedItem}
    >
      {children}
    </Listbox>
  );
};
