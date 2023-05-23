import { useEffect, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { useOutsideClick, useTypeaheadQuery } from '../../hooks';
import { TypeaheadSelectProps } from './TypeaheadSelect';

export type UseTypeaheadSelectOptions<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> = Pick<
  TypeaheadSelectProps<DataItem, Values>,
  'debounceTime' | 'onDebouncedChange' | 'options'
>;

export const useTypeaheadSelect = <
  DropdownElement extends HTMLElement,
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  debounceTime,
  onDebouncedChange,
  options,
}: UseTypeaheadSelectOptions<DataItem, Values>) => {
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<DropdownElement>(null);
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
    if (showDropdown) searchInputRef.current?.focus();
    else setQuery('');
  }, [showDropdown]);
  return {
    clearSelectedItem,
    dropdownRef,
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
