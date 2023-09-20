import { useEffect, useState } from 'react';

export type UseDebouncedStateValue = string | number | boolean | null;

export type UseDebouncedValueResult<Value extends UseDebouncedStateValue> = {
  debouncedValue: Value;
  isDebouncing: boolean;
};

export const useDebouncedValue = <Value extends UseDebouncedStateValue>(
  value: Value,
  delay: number,
): UseDebouncedValueResult<Value> => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  const isDebouncing = !!value && value !== debouncedValue;
  return { debouncedValue, isDebouncing };
};
