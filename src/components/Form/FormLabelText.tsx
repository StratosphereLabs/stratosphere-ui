import classNames from 'classnames';
import { HTMLProps, forwardRef } from 'react';

export interface FormLabelTextProps extends HTMLProps<HTMLSpanElement> {
  isRequired?: boolean;
}

export const FormLabelText = forwardRef<HTMLSpanElement, FormLabelTextProps>(
  ({ children, className, isRequired, ...props }, ref) => (
    <span
      className={classNames('label-text font-semibold', className)}
      ref={ref}
      {...props}
    >
      {children}{' '}
      {isRequired === true ? <span className="font-normal">*</span> : null}
    </span>
  ),
);

FormLabelText.displayName = 'FormLabelText';
