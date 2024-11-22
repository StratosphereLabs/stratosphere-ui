import { Dispatch, SetStateAction } from '../../node_modules/react';
import { GenericDataType } from '../common';
export interface UseTypeaheadQueryOptions<DataItem> {
    debounceTime?: number;
    onDebouncedChange: (value: string) => void;
    options?: DataItem[];
}
export interface UseTypeaheadQueryResult {
    isLoading: boolean;
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}
export declare const useTypeaheadQuery: <DataItem extends GenericDataType>({ debounceTime, onDebouncedChange, options, }: UseTypeaheadQueryOptions<DataItem>) => UseTypeaheadQueryResult;
