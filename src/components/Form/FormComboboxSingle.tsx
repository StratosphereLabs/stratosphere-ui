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
}: ComboboxProps<DataItem, Values>): JSX.Element => {
  const { setValue } = useFormContext();
  const selectedItem = useMemo(() => selectedItems[0] ?? null, [selectedItems]);
  useEffect(() => {
    const itemValue =
      getItemValue !== undefined
        ? selectedItem !== undefined
          ? getItemValue(selectedItem)
          : ''
        : selectedItem;
    setValue<string>(name, itemValue, { shouldValidate: true });
  }, [selectedItem]);
  return (
    <Combobox
      as="div"
      className={classNames('form-control w-full', className)}
      name={name}
      nullable
      onChange={value => value && setSelectedItems([value])}
      value={selectedItem}
    >
      {children}
    </Combobox>
  );
};
