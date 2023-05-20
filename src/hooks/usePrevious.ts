import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const previousRef = useRef<T>();
  useEffect(() => {
    previousRef.current = value;
  }, [value]);
  return previousRef.current;
};
