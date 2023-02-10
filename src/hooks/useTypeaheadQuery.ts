import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useDebouncedValue } from './useDebouncedValue';
import { GenericDataType } from '../common';

export interface UseTypeaheadQueryOptions<DataItem> {
  debounceTime?: number;
  defaultOptions?: DataItem[];
  onDebouncedChange: (value: string) => void;
  options?: DataItem[];
}

export interface UseTypeaheadQueryResult {
  isLoading: boolean;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const useTypeaheadQuery = <DataItem extends GenericDataType>({
  debounceTime,
  onDebouncedChange,
  options,
}: UseTypeaheadQueryOptions<DataItem>): UseTypeaheadQueryResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery, debouncedQuery] = useDebouncedValue<string>(
    '',
    debounceTime ?? 400,
  );
  const currentQuery = useMemo(() => {
    const formattedQuery = query.trim();
    return formattedQuery === '' ? formattedQuery : debouncedQuery.trim();
  }, [query, debouncedQuery]);
  useEffect(() => {
    onDebouncedChange?.(currentQuery);
  }, [currentQuery]);
  useEffect(() => {
    if (options !== undefined) setIsLoading(false);
  }, [options]);
  useEffect(() => {
    setIsLoading(query !== '');
  }, [query]);
  return {
    isLoading,
    query,
    setQuery,
  };
};
