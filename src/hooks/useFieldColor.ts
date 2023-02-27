import { FieldPath, FieldValues, useController } from 'react-hook-form';

export const useFieldColor = <Values extends FieldValues>(
  name: FieldPath<Values>,
  showDirty?: boolean,
) => {
  const {
    fieldState: { error, isDirty },
  } = useController({ name });
  return error === undefined
    ? isDirty && showDirty
      ? 'success'
      : null
    : 'error';
};
