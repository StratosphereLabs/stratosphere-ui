import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { ComboboxProps } from './types';
import { GenericDataType } from '../../common';

export const ComboboxMulti = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  children,
  className,
  getItemValue,
  name,
  selectedItems,
  setSelectedItems,
}: ComboboxProps<DataItem, Values>): JSX.Element => {
  const [shouldTouch, setShouldTouch] = useState(false);
  const { setValue } = useFormContext();
  useEffect(() => {
    const itemValues = getItemValue
      ? selectedItems.map(getItemValue)
      : selectedItems;
    setValue<string>(name, itemValues, { shouldDirty: true, shouldTouch });
    setShouldTouch(true);
  }, [selectedItems]);
  return (
    <Combobox
      as="div"
      className={classNames('form-control flex-1', className)}
      multiple
      name={name}
      onChange={value => setSelectedItems(value)}
      value={selectedItems}
    >
      {children}
    </Combobox>
  );
};
