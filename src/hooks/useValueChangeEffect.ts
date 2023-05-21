import { isEqual } from 'lodash';
import { DependencyList, EffectCallback, useEffect } from 'react';
import { usePrevious } from './usePrevious';

export const useValueChangeEffect = <Value>(
  value: Value,
  effect: EffectCallback,
  deps?: DependencyList,
): void => {
  const prevValue = usePrevious<Value>(value);
  useEffect(() => {
    if (!isEqual(value, prevValue)) {
      effect();
    }
  }, [...(deps ?? []), value]);
};
