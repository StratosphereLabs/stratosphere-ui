import classNames from 'classnames';
import { FileInput, FileInputProps } from 'react-daisyui';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';
import { useFieldColor } from '../../hooks';

export interface FormFileInputProps<Values extends FieldValues>
  extends FormFieldProps<Values>,
    Omit<FileInputProps, 'name'> {
  hideErrorMessage?: boolean;
  inputClassName?: string;
}

export const FormFileInput = <Values extends FieldValues>({
  className,
  color,
  controllerProps,
  hideErrorMessage,
  inputClassName,
  isRequired,
  labelText,
  name,
  showDirty,
  ...props
}: FormFileInputProps<Values>) => {
  const {
    field: { onBlur, ref },
    fieldState: { error },
  } = useController({
    ...controllerProps,
    name,
  });
  const fieldColor = useFieldColor(name, showDirty);
  const { setValue } = useFormContext();
  return (
    <div className={classNames('form-control', className)}>
      {labelText !== undefined ? (
        <FormLabel id={`label-${name}`} isRequired={isRequired}>
          {labelText}
        </FormLabel>
      ) : null}
      <FileInput
        className={inputClassName}
        color={fieldColor ?? color ?? 'ghost'}
        name={name}
        onBlur={onBlur}
        onChange={event => {
          setValue<string>(name, event.target.files?.[0] ?? null, {
            shouldDirty: true,
            shouldTouch: true,
          });
        }}
        ref={ref}
        {...props}
      />
      {hideErrorMessage !== true && error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </div>
  );
};
