import { Transform } from '../common/types';

export const digitInputTransformer: Transform<string> = {
  input: value => value,
  output: value => {
    if (value.length === 0) return '';
    const num = parseInt(value.charAt(0));
    if (Number.isNaN(num)) return '';
    return num.toString();
  },
};

export const integerInputTransformer: Transform<number | null> = {
  input: value => (value !== null ? value.toString() : ''),
  output: value => {
    const num = parseInt(value);
    if (Number.isNaN(num)) return null;
    return num;
  },
};

export const nullEmptyStringTransformer: Transform<string | null> = {
  input: value => value ?? '',
  output: value => (value.length > 0 ? value : null),
};
