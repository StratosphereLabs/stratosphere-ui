import { ChangeEvent, RefObject } from 'react';

import { DIGIT_REGEX } from '../../common/constants';

export const getKeyUpHandler =
  (nextElement?: RefObject<HTMLElement>) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value.match(DIGIT_REGEX) !== null) {
      nextElement?.current?.focus();
    }
  };
