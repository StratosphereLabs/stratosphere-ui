import { FieldPath, FieldValues, useController } from 'react-hook-form';

export const useFieldColor = <Values extends FieldValues>(
  name: FieldPath<Values>,
  showDirty?: boolean,
) => {
  const {
    fieldState: { error, isDirty },
  } = useController({ name });
  if (error !== undefined) return 'error';
  if (showDirty && isDirty) return 'success';
  return null;
};
