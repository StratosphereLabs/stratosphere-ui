import { KeyboardEvent, RefObject } from 'react';

import { DIGIT_REGEX } from '../../common/constants';

export const getKeyUpHandler =
  (nextElement: RefObject<HTMLElement>) =>
  ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key.match(DIGIT_REGEX) !== null) {
      nextElement.current?.focus();
    }
  };
