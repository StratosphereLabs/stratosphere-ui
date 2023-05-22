import { renderHook } from '@testing-library/react';
import { usePrevious } from '../usePrevious';

describe('usePrevious', () => {
  it('should return undefined for the initial value', () => {
    const { result } = renderHook(() => usePrevious<number>(42));
    expect(result.current).toBeUndefined();
  });

  it('should return the previous value after an update', () => {
    const { result, rerender } = renderHook(
      ({ value }) => usePrevious<number>(value),
      {
        initialProps: { value: 42 },
      },
    );
    expect(result.current).toBeUndefined();
    rerender({ value: 43 });
    expect(result.current).toBe(42);
    rerender({ value: 44 });
    expect(result.current).toBe(43);
  });
});
