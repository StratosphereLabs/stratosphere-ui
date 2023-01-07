import { FieldValues, Path, UseControllerProps } from 'react-hook-form';

export interface FormFieldProps<Values extends FieldValues> {
  controllerProps?: Omit<UseControllerProps<Values>, 'name'>;
  isRequired?: boolean;
  labelText?: string;
  name: Path<Values>;
  placeholder?: string;
}

export interface Transform<TOutput> {
  output: (val: string) => TOutput;
  input: (val: TOutput) => string;
}
