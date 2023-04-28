import { Listbox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { ListboxProps } from './types';
import { GenericDataType } from '../../common';

export const FormSelectSingle = <
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
  const selectedItem = selectedItems[0] ?? null;
  useEffect(() => {
    const itemValue =
      getItemValue !== undefined
        ? selectedItem !== null
          ? getItemValue(selectedItem)
          : ''
        : selectedItem;
    setValue<string>(name, itemValue, { shouldTouch, shouldDirty: true });
    setShouldTouch(true);
  }, [selectedItem]);
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
