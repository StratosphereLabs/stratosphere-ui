import { isEqual } from 'lodash';
import { EffectCallback, useEffect, useState } from 'react';

export const useValueChangeEffect = <Value>(
  value: Value,
  effect: EffectCallback,
): void => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    if (!isEqual(currentValue, value)) {
      setCurrentValue(value);
    }
  }, [currentValue, value]);
  useEffect(effect, [currentValue]);
};
