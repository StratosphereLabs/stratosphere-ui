import classNames from 'classnames';
import { HTMLProps, forwardRef } from 'react';

export interface FormLabelTextProps extends HTMLProps<HTMLSpanElement> {
  isRequired?: boolean;
}

export const FormLabelText = forwardRef<HTMLLegendElement, FormLabelTextProps>(
  ({ children, className, isRequired, ...props }, ref) => (
    <legend
      className={classNames('fieldset-legend', className)}
      ref={ref}
      {...props}
    >
      {children}{' '}
      {isRequired === true ? <span className="font-normal">*</span> : null}
    </legend>
  ),
);

FormLabelText.displayName = 'FormLabelText';
