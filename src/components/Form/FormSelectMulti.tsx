import { Listbox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { ListboxProps } from './types';
import { GenericDataType } from '../../common';

export const FormSelectMulti = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  disabled,
  getItemValue,
  name,
  selectedItems,
  setSelectedItems,
}: ListboxProps<DataItem, Values>): JSX.Element => {
  const [shouldTouch, setShouldTouch] = useState(false);
  const { setValue } = useFormContext();
  useEffect(() => {
    const itemValues = getItemValue
      ? selectedItems.map(getItemValue)
      : selectedItems;
    setValue<string>(name, itemValues, { shouldTouch, shouldDirty: true });
    setShouldTouch(true);
  }, [selectedItems]);
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
