import { act, renderHook } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

import { mockMatchMedia } from '../../../vitest/mockMatchMedia';
import { useMediaQuery } from '../useMediaQuery';

const QUERY = '(min-width: 40rem)';

describe('useMediaQuery', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns whether the query matches', () => {
    mockMatchMedia(true);
    expect(renderHook(() => useMediaQuery(QUERY)).result.current).toBe(true);
    mockMatchMedia(false);
    expect(renderHook(() => useMediaQuery(QUERY)).result.current).toBe(false);
  });

  it('updates when the query starts matching', () => {
    const { change } = mockMatchMedia(false);
    const { result } = renderHook(() => useMediaQuery(QUERY));
    expect(result.current).toBe(false);
    act(() => change(true));
    expect(result.current).toBe(true);
  });

  it('stops listening once unmounted', () => {
    const { listeners } = mockMatchMedia(false);
    const { unmount } = renderHook(() => useMediaQuery(QUERY));
    expect(listeners.size).toBe(1);
    unmount();
    expect(listeners.size).toBe(0);
  });

  it('returns false while matchMedia is unavailable', () => {
    vi.stubGlobal('matchMedia', undefined);
    expect(renderHook(() => useMediaQuery(QUERY)).result.current).toBe(false);
  });
});
