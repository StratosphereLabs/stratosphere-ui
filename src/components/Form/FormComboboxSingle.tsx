import { Combobox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';

import { GenericDataType } from '../../common';
import { ComboboxProps } from './types';

export const ComboboxSingle = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  disabled,
  name,
  selectedItems,
  setSelectedItems,
}: ComboboxProps<DataItem, Values>) => {
  const selectedItem = selectedItems[0] ?? null;
  return (
    <Combobox
      as="div"
      by="id"
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
