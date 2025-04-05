import classNames from 'classnames';
import { RefObject, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { digitInputTransformer } from '../../utils';
import { FormControl } from '../Form';
import { getOnChangeHandler } from './utils';

export interface SecurityCodeInputProps<NextElement> {
  className?: string;
  inputRef: RefObject<HTMLInputElement>;
  inputClassName?: string;
  name: string;
  nextFocusRef?: RefObject<NextElement>;
}

export const SecurityCodeInput = <NextElement extends HTMLElement>({
  className,
  inputRef,
  inputClassName,
  name,
  nextFocusRef,
}: SecurityCodeInputProps<NextElement>) => {
  const { setValue } = useFormContext();
  const digit1Ref = useRef<HTMLInputElement>(null);
  const firstInputRef = inputRef ?? digit1Ref;
  const digit2Ref = useRef<HTMLInputElement>(null);
  const digit3Ref = useRef<HTMLInputElement>(null);
  const digit4Ref = useRef<HTMLInputElement>(null);
  const digit5Ref = useRef<HTMLInputElement>(null);
  const digit6Ref = useRef<HTMLInputElement>(null);
  return (
    <div className={classNames('flex gap-2', className)}>
      <FormControl
        hideErrorMessage
        inputRef={firstInputRef}
        onChange={getOnChangeHandler(digit2Ref)}
        onPaste={event => {
          const data = event.clipboardData.getData('text');
          const digits = data.split('');
          setValue(`${name}.digit1`, digits[0] ?? '');
          setValue(`${name}.digit2`, digits[1] ?? '');
          setValue(`${name}.digit3`, digits[2] ?? '');
          setValue(`${name}.digit4`, digits[3] ?? '');
          setValue(`${name}.digit5`, digits[4] ?? '');
          setValue(`${name}.digit6`, digits[5] ?? '');
          nextFocusRef?.current?.focus();
        }}
        inputClassName={inputClassName}
        inputMode="numeric"
        name={`${name}.digit1`}
        transform={digitInputTransformer}
      />
      <FormControl
        hideErrorMessage
        inputRef={digit2Ref}
        onChange={getOnChangeHandler(digit3Ref)}
        inputClassName={inputClassName}
        inputMode="numeric"
        name={`${name}.digit2`}
        transform={digitInputTransformer}
      />
      <FormControl
        hideErrorMessage
        inputRef={digit3Ref}
        onChange={getOnChangeHandler(digit4Ref)}
        inputClassName={inputClassName}
        inputMode="numeric"
        name={`${name}.digit3`}
        transform={digitInputTransformer}
      />
      <FormControl
        hideErrorMessage
        inputRef={digit4Ref}
        onChange={getOnChangeHandler(digit5Ref)}
        inputClassName={inputClassName}
        inputMode="numeric"
        name={`${name}.digit4`}
        transform={digitInputTransformer}
      />
      <FormControl
        hideErrorMessage
        inputRef={digit5Ref}
        onChange={getOnChangeHandler(digit6Ref)}
        inputClassName={inputClassName}
        inputMode="numeric"
        name={`${name}.digit5`}
        transform={digitInputTransformer}
      />
      <FormControl
        hideErrorMessage
        inputRef={digit6Ref}
        onChange={getOnChangeHandler(nextFocusRef)}
        inputClassName={inputClassName}
        inputMode="numeric"
        name={`${name}.digit6`}
        transform={digitInputTransformer}
      />
    </div>
  );
};
