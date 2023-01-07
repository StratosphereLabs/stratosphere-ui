import { useEffect, useState } from 'react';

import { STORAGE_KEY, DEFAULT_THEME } from './constants';

export const useGlobalTheme = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME,
  );
  useEffect(() => {
    const handleLocalStorageChange = () => {
      let storageTheme = window.localStorage.getItem(STORAGE_KEY);
      if (!storageTheme) {
        setTheme(DEFAULT_THEME);
      } else {
        setTheme(storageTheme);
      }
    };
    window.addEventListener('storage', handleLocalStorageChange);
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);
  return theme;
};
