import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useTypeaheadQuery } from '../useTypeaheadQuery';

describe('useTypeaheadQuery', () => {
  it('should render the component correctly', () => {
    const { result } = renderHook(() =>
      useTypeaheadQuery({
        onDebouncedChange: vi.fn(),
      }),
    );

    expect(result.current.query).toBe('');
    expect(result.current.setQuery).toBeInstanceOf(Function);
  });
});
