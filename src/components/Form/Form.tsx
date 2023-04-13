import { HTMLProps, ReactNode, RefObject } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export interface FormProps<Values extends FieldValues>
  extends Omit<HTMLProps<HTMLFormElement>, 'ref'> {
  children?: ReactNode;
  formRef?: RefObject<HTMLFormElement>;
  methods: UseFormReturn<Values>;
  onFormSubmit?: SubmitHandler<Values>;
}

export const Form = <Values extends FieldValues>({
  children,
  formRef,
  methods,
  onFormSubmit,
  ...props
}: FormProps<Values>): JSX.Element => (
  <FormProvider {...methods}>
    <form
      noValidate
      onSubmit={onFormSubmit ? methods.handleSubmit(onFormSubmit) : undefined}
      ref={formRef}
      {...props}
    >
      {children}
    </form>
  </FormProvider>
);
