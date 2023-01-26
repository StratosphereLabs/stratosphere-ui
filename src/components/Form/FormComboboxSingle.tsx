import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { useEffect, useMemo } from 'react';
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
  setSelectedItems,
  value,
}: ComboboxProps<DataItem, Values>): JSX.Element => {
  const { setValue } = useFormContext();
  const selectedItem = useMemo(() => selectedItems[0], [selectedItems]);
  useEffect(() => {
    const itemValue =
      getItemValue !== undefined
        ? selectedItem !== undefined
          ? getItemValue(selectedItem)
          : ''
        : null;
    setValue<string>(name, itemValue, {
      shouldValidate: selectedItems.length > 0,
    });
  }, [selectedItem]);
  useEffect(() => {
    if (value === '') setSelectedItems([]);
  }, [value]);
  return (
    <Combobox
      as="div"
      className={classNames('form-control w-full', className)}
      name={name}
      nullable
      onChange={selectedItem =>
        selectedItem && setSelectedItems([selectedItem])
      }
      value={selectedItems[0] ?? null}
    >
      {children}
    </Combobox>
  );
};
