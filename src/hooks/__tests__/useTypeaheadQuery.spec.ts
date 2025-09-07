import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useTypeaheadQuery } from '../useTypeaheadQuery';

describe('useTypeaheadQuery', () => {
  it('should render the component correctly', () => {
    const { result } = renderHook(() =>
      useTypeaheadQuery({
        onDebouncedChange: vi.fn(),
      }),
    );

    expect(result.current.isLoading).toBe(false);
    expect(result.current.query).toBe('');
    expect(result.current.setQuery).toBeInstanceOf(Function);
  });

  it('should set isLoading to true when isLoading prop is passed', () => {
    const { result } = renderHook(() =>
      useTypeaheadQuery({
        onDebouncedChange: vi.fn(),
        isQueryLoading: true,
      }),
    );

    act(() => {
      result.current.setQuery('foo');
    });

    expect(result.current.isLoading).toBe(true);
  });

  it('should set isLoading to false when options is set', () => {
    const { result } = renderHook(() =>
      useTypeaheadQuery({
        onDebouncedChange: vi.fn(),
      }),
    );

    expect(result.current.isLoading).toBe(false);
  });
});
