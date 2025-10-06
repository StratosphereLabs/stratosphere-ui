import { Dispatch, SetStateAction } from '../../node_modules/react';
export interface UseTypeaheadQueryOptions {
    debounceTime?: number;
    onDebouncedChange?: (value: string) => void;
}
export interface UseTypeaheadQueryResult {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}
export declare const useTypeaheadQuery: ({ debounceTime, onDebouncedChange, }: UseTypeaheadQueryOptions) => UseTypeaheadQueryResult;
