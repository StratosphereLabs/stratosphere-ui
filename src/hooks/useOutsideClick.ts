import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  onClick: (event: DocumentEventMap['mousedown'] | TouchEvent) => void,
): void =>
  useEffect(() => {
    const handleClickOutside = (
      event: DocumentEventMap['mousedown'] | TouchEvent,
    ): void => {
      if (ref.current !== null && !ref.current.contains(event.target as Node)) {
        onClick(event);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClick, ref]);
