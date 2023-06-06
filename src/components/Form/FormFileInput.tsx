import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { useFieldColor } from '../../hooks';
import { FormError } from './FormError';
import { FormLabel } from './FormLabel';
import { FormFieldProps } from './types';

export const FILE_INPUT_COLORS = [
  'ghost',
  'primary',
  'secondary',
  'accent',
  'info',
  'warning',
  'success',
  'error',
] as const;

export const FILE_INPUT_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

export type FileInputColor = (typeof FILE_INPUT_COLORS)[number];

export type FileInputSize = (typeof FILE_INPUT_SIZES)[number];

export interface FormFileInputProps<Values extends FieldValues>
  extends FormFieldProps<Values>,
    Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
  bordered?: boolean;
  color?: FileInputColor;
  hideErrorMessage?: boolean;
  inputClassName?: string;
  size?: FileInputSize;
}

export const FormFileInput = <Values extends FieldValues>({
  bordered,
  className,
  color,
  controllerProps,
  hideErrorMessage,
  inputClassName,
  isRequired,
  labelText,
  name,
  showDirty,
  size,
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
  const currentColor = fieldColor ?? color ?? undefined;
  return (
    <div className={classNames('form-control', className)}>
      {labelText !== undefined ? (
        <FormLabel id={`label-${name}`} isRequired={isRequired}>
          {labelText}
        </FormLabel>
      ) : null}
      <input
        className={classNames(
          'file-input',
          bordered && 'file-input-bordered',
          currentColor && `file-input-${currentColor}`,
          size && `file-input-${size}`,
          inputClassName,
        )}
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
