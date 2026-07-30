/**
 * Tracks whether a CSS media query currently matches. Returns `false` while
 * `matchMedia` is unavailable, e.g. during server rendering, so that the
 * narrowest layout is always the fallback.
 */
export declare const useMediaQuery: (query: string) => boolean;
