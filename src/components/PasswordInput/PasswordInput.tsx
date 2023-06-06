import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { FormControl, FormControlProps } from '../Form';
import { EyeIcon, EyeSlashIcon } from '../Icons';

export interface PasswordInputProps<Values extends FieldValues, TOutput>
  extends Omit<FormControlProps<Values, TOutput>, 'elementRight' | 'type'> {
  iconShow?: ReactNode;
  iconHide?: ReactNode;
}

export const PasswordInput = <Values extends FieldValues, TOutput>({
  iconHide,
  iconShow,
  inputClassName,
  ...props
}: PasswordInputProps<Values, TOutput>): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const IconHide = iconHide ?? <EyeIcon className="h-5 w-5" />;
  const IconShow = iconShow ?? <EyeSlashIcon className="h-5 w-5" />;
  return (
    <FormControl
      elementRight={
        <button
          className="btn-ghost btn-sm btn-circle btn w-8"
          onClick={() => setShowPassword(show => !show)}
          type="button"
        >
          {showPassword ? IconShow : IconHide}
          <span className="sr-only">Toggle Password Visibility</span>
        </button>
      }
      inputClassName={classNames('pr-10', inputClassName)}
      type={!showPassword ? 'password' : 'text'}
      {...props}
    />
  );
};
