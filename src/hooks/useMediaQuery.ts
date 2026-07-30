import { useEffect, useState } from 'react';

const getMatches = (query: string): boolean =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(query).matches
    : false;

/**
 * Tracks whether a CSS media query currently matches. Returns `false` while
 * `matchMedia` is unavailable, e.g. during server rendering, so that the
 * narrowest layout is always the fallback.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => getMatches(query));
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      return;
    }
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent): void =>
      setMatches(event.matches);
    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);
  return matches;
};
