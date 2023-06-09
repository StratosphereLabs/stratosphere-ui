import { Combobox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType, dataItemComparator } from '../../common';
import { ComboboxProps } from './types';

export const ComboboxMulti = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  disabled,
  name,
  selectedItems,
  setSelectedItems,
}: ComboboxProps<DataItem, Values>) => (
  <Combobox
    as="div"
    by={dataItemComparator}
    className={className}
    disabled={disabled}
    multiple
    name={name}
    onChange={(value: DataItem[]) => setSelectedItems(value)}
    value={selectedItems}
  >
    {children}
  </Combobox>
);
