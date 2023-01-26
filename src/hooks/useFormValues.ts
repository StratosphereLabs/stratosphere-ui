import { FieldValues, useFormContext, useWatch } from 'react-hook-form';

export const useFormValues = <Values extends FieldValues>(): Values => {
  const { getValues } = useFormContext<Values>();
  return {
    ...useWatch(),
    ...getValues(),
  };
};
