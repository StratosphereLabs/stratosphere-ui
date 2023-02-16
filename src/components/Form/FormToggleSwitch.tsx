import classNames from 'classnames';
import { Toggle, ToggleProps } from 'react-daisyui';
import { FieldValues, useController } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';

export interface FormToggleSwitchProps<Values extends FieldValues>
  extends Omit<FormFieldProps<Values>, 'placeholder' | 'showDirty'>,
    Omit<ToggleProps, 'name'> {}

export const FormToggleSwitch = <Values extends FieldValues>({
  children,
  className,
  controllerProps,
  isRequired,
  labelText,
  name,
  ...props
}: FormToggleSwitchProps<Values>): JSX.Element => {
  const {
    field: { value, ...field },
  } = useController({ name, ...controllerProps });
  return (
    <div className={classNames('flex items-center gap-2', className)}>
      <Toggle {...field} {...props} checked={value} />
      <div className="flex flex-col">
        {labelText ? (
          <FormLabel isRequired={isRequired}>{labelText}</FormLabel>
        ) : null}
        {children}
      </div>
    </div>
  );
};
