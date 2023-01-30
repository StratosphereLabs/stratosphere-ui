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
  const [isTouched, setIsTouched] = useState(false);
  const { setValue } = useFormContext();
  useEffect(() => {
    const itemValues = getItemValue
      ? selectedItems.map(getItemValue)
      : selectedItems;
    setValue<string>(name, itemValues, { shouldValidate: isTouched });
    setIsTouched(true);
  }, [selectedItems]);
  return (
    <Combobox
      as="div"
      className={classNames('form-control w-full', className)}
      multiple
      name={name}
      onChange={value => setSelectedItems(value)}
      value={selectedItems}
    >
      {children}
    </Combobox>
  );
};
