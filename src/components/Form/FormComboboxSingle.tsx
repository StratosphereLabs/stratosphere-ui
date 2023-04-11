import { Combobox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { ComboboxProps } from './types';
import { GenericDataType } from '../../common';

export const ComboboxSingle = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  getItemValue,
  name,
  selectedItems,
  setShowDropdown,
  setSelectedItems,
}: ComboboxProps<DataItem, Values>): JSX.Element => {
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
    setValue<string>(name, itemValue, { shouldDirty: true, shouldTouch });
    setShowDropdown(false);
    setShouldTouch(true);
  }, [selectedItem]);
  return (
    <Combobox
      as="div"
      className={className}
      name={name}
      nullable
      onChange={value => value && setSelectedItems([value])}
      value={selectedItem}
    >
      {children}
    </Combobox>
  );
};
