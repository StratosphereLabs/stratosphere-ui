import { Listbox } from '@headlessui/react';
import { FieldValues } from 'react-hook-form';

import { GenericDataType, dataItemComparator } from '../../common';
import { ListboxProps } from './types';

export const FormSelectMulti = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  disabled,
  name,
  selectedItems,
  setSelectedItems,
}: ListboxProps<DataItem, Values>) => (
  <Listbox
    as="div"
    by={dataItemComparator}
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
