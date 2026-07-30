import { vi } from 'vitest';

type MediaQueryListener = (event: MediaQueryListEvent) => void;

export interface MockedMatchMedia {
  /** Notifies every listener that the query started or stopped matching. */
  change: (matches: boolean) => void;
  /** The registered listeners, to assert that a subject cleans them up. */
  listeners: Set<MediaQueryListener>;
}

/**
 * jsdom does not implement `matchMedia`, so components that read a media query
 * see the fallback until it is stubbed. Call `vi.unstubAllGlobals()` afterwards.
 *
 * The returned handle is only needed to simulate a change or to assert on the
 * listeners; a stub of a query that never changes can ignore it.
 */
export const mockMatchMedia = (
  initialMatches: boolean,
): MockedMatchMedia => {
  const listeners = new Set<MediaQueryListener>();
  let matches = initialMatches;
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      addEventListener: (_: string, listener: MediaQueryListener) =>
        listeners.add(listener),
      get matches() {
        return matches;
      },
      media: query,
      removeEventListener: (_: string, listener: MediaQueryListener) =>
        listeners.delete(listener),
    })),
  );
  return {
    change: nextMatches => {
      matches = nextMatches;
      listeners.forEach(listener =>
        listener({ matches: nextMatches } as MediaQueryListEvent),
      );
    },
    listeners,
  };
};
