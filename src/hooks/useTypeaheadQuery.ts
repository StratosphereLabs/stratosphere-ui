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
  onDebouncedChange?: (value: string) => void;
}

export interface UseTypeaheadQueryResult {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const useTypeaheadQuery = ({
  debounceTime,
  onDebouncedChange,
}: UseTypeaheadQueryOptions): UseTypeaheadQueryResult => {
  const onDebouncedChangeFn = useRef(onDebouncedChange);
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
    onDebouncedChangeFn.current?.(currentQuery);
  }, [currentQuery]);
  return {
    query,
    setQuery,
  };
};
