import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { TypeaheadSelectProps } from './TypeaheadSelect';
export type UseTypeaheadSelectOptions<DataItem extends GenericDataType, Values extends FieldValues> = Pick<TypeaheadSelectProps<DataItem, Values>, 'debounceTime' | 'onDebouncedChange' | 'options'>;
export declare const useTypeaheadSelect: <DropdownElement extends HTMLElement, DataItem extends GenericDataType, Values extends FieldValues>({ debounceTime, onDebouncedChange, options, }: UseTypeaheadSelectOptions<DataItem, Values>) => {
    clearSelectedItem: (index: number) => void;
    dropdownRef: import('../../../node_modules/react').RefObject<DropdownElement>;
    isLoading: boolean;
    query: string;
    showDropdown: boolean;
    searchInputRef: import('../../../node_modules/react').MutableRefObject<HTMLInputElement | null>;
    selectedItems: DataItem[];
    setShowDropdown: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<boolean>>;
    setSelectedItems: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<DataItem[]>>;
    setQuery: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<string>>;
};
