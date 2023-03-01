import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider as RHFProvider,
  useForm,
  UseFormProps,
} from 'react-hook-form';

export interface FormProviderProps<Values extends FieldValues>
  extends UseFormProps<Values> {
  children: ReactNode;
}

export const FormProvider = <Values extends FieldValues>({
  children,
  ...rest
}: FormProviderProps<Values>) => {
  const methods = useForm({
    mode: 'onChange',
    ...rest,
  });
  return <RHFProvider {...methods}>{children}</RHFProvider>;
};

export default FormProvider;
