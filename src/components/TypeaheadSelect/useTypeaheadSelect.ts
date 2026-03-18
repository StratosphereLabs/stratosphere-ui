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
  | 'debounceTime'
  | 'defaultShowDropdown'
  | 'onDebouncedChange'
  | 'onShowDropdown'
>;

export const useTypeaheadSelect = <
  DropdownElement extends HTMLElement,
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  debounceTime,
  defaultShowDropdown,
  onDebouncedChange,
  onShowDropdown,
}: UseTypeaheadSelectOptions<DataItem, Values>) => {
  const onShowDropdownFn = useRef(onShowDropdown);
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(
    defaultShowDropdown ?? false,
  );
  const dropdownRef = useRef<DropdownElement>(null);
  const dummyInputRef = useRef<HTMLInputElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { query, setQuery } = useTypeaheadQuery({
    debounceTime,
    onDebouncedChange,
  });
  const clearSelectedItem = (index: number) =>
    setSelectedItems(items =>
      items.filter((_, itemIndex) => index !== itemIndex),
    );
  useOutsideClick(dropdownRef, () => setShowDropdown(false));
  useEffect(() => {
    onShowDropdownFn.current?.(showDropdown);
    if (showDropdown) setTimeout(() => searchInputRef.current?.focus(), 50);
    else setQuery('');
  }, [showDropdown, setQuery]);
  return {
    clearSelectedItem,
    dropdownRef,
    dummyInputRef,
    query,
    showDropdown,
    searchInputRef,
    selectedItems,
    setShowDropdown,
    setSelectedItems,
    setQuery,
  };
};
