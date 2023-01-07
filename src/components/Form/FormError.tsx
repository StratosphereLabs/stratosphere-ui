import classNames from 'classnames';
import { forwardRef, HTMLProps } from 'react';

export interface FormErrorProps extends HTMLProps<HTMLLabelElement> {}

export const FormError = forwardRef<HTMLLabelElement, FormErrorProps>(
  ({ children, className, ...props }, ref): JSX.Element => (
    <label className={classNames('label', className)} ref={ref} {...props}>
      <span className="label-text-alt text-error">{children}</span>
    </label>
  ),
);

FormError.displayName = 'FormError';
