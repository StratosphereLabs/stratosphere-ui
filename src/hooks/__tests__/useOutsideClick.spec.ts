import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useOutsideClick } from '../useOutsideClick';

describe('useOutsideClick', () => {
  test('should call onClick when clicking outside the ref', () => {
    const onClick = vi.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOutsideClick(ref, onClick));

    const event = new MouseEvent('mousedown', { bubbles: true });
    document.dispatchEvent(event);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick when clicking inside the ref', () => {
    const onClick = vi.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOutsideClick(ref, onClick));

    const event = new MouseEvent('mousedown', { bubbles: true });
    ref.current.dispatchEvent(event);

    expect(onClick).not.toHaveBeenCalled();
  });
});
