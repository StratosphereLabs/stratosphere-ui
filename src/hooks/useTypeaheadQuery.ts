import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDebouncedValue } from './useDebouncedValue';
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

export const useTypeaheadQuery = <DataItem extends GenericDataType>({
  debounceTime,
  onDebouncedChange,
  options,
}: UseTypeaheadQueryOptions<DataItem>): UseTypeaheadQueryResult => {
  const onDebouncedChangeFn = useRef(onDebouncedChange);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const { debouncedValue } = useDebouncedValue<string>(
    query,
    debounceTime ?? 400,
  );
  const currentQuery = useMemo(() => {
    const formattedQuery = query.trim();
    return formattedQuery === '' ? formattedQuery : debouncedValue.trim();
  }, [query, debouncedValue]);
  useEffect(() => {
    onDebouncedChangeFn.current(currentQuery);
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
