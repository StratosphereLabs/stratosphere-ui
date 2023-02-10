import { useEffect, useRef, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TypeaheadSelectProps } from './TypeaheadSelect';
import { GenericDataType } from '../../common';
import { useOutsideClick, useTypeaheadQuery } from '../../hooks';

export type UseTypeaheadSelectOptions<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> = Pick<
  TypeaheadSelectProps<DataItem, Values>,
  'controllerProps' | 'debounceTime' | 'name' | 'onDebouncedChange' | 'options'
>;

export const useTypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  controllerProps,
  debounceTime,
  name,
  onDebouncedChange,
  options,
}: UseTypeaheadSelectOptions<DataItem, Values>) => {
  const {
    fieldState: { error },
    field: { value },
  } = useController({
    ...controllerProps,
    name,
  });
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { isLoading, query, setQuery } = useTypeaheadQuery<DataItem>({
    debounceTime,
    onDebouncedChange,
    options,
  });
  const clearSelectedItem = (index: number) =>
    setSelectedItems(items =>
      items.filter((_, itemIndex) => index !== itemIndex),
    );
  useOutsideClick(dropdownRef, () => setShowDropdown(false));
  useEffect(() => {
    setQuery('');
    if (showDropdown) searchInputRef.current?.focus();
  }, [showDropdown]);
  useEffect(() => {
    if (value === '') setSelectedItems([]);
  }, [value]);
  return {
    clearSelectedItem,
    dropdownRef,
    error,
    isLoading,
    query,
    showDropdown,
    searchInputRef,
    selectedItems,
    setShowDropdown,
    setSelectedItems,
    setQuery,
  };
};
