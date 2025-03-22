import classNames from 'classnames';
import { HTMLProps, forwardRef } from 'react';

export type FormErrorProps = HTMLProps<HTMLLabelElement>;

export const FormError = forwardRef<HTMLLabelElement, FormErrorProps>(
  ({ children, className, ...props }, ref) => (
    <label className={classNames('label', className)} ref={ref} {...props}>
      <span className="label-text-alt text-error">{children}</span>
    </label>
  ),
);

FormError.displayName = 'FormError';
