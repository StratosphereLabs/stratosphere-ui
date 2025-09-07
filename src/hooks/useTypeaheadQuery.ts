import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useDebouncedValue } from './useDebouncedValue';

export interface UseTypeaheadQueryOptions {
  debounceTime?: number;
  isQueryLoading?: boolean;
  onDebouncedChange?: (value: string) => void;
}

export interface UseTypeaheadQueryResult {
  isLoading: boolean;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const useTypeaheadQuery = ({
  debounceTime,
  isQueryLoading,
  onDebouncedChange,
}: UseTypeaheadQueryOptions): UseTypeaheadQueryResult => {
  const onDebouncedChangeFn = useRef(onDebouncedChange);
  const [query, setQuery] = useState('');
  const { debouncedValue, isDebouncing } = useDebouncedValue<string>(
    query,
    debounceTime ?? 400,
  );
  const currentQuery = useMemo(() => {
    const formattedQuery = query.trim();
    return formattedQuery === '' ? formattedQuery : debouncedValue.trim();
  }, [query, debouncedValue]);
  useEffect(() => {
    onDebouncedChangeFn.current?.(currentQuery);
  }, [currentQuery]);
  return {
    isLoading: isQueryLoading || isDebouncing,
    query,
    setQuery,
  };
};
