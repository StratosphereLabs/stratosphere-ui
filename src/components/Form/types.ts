import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { TypeaheadSelectProps } from '../TypeaheadSelect';
import { GenericDataType } from '../../common';

export interface FormFieldProps<Values extends FieldValues> {
  controllerProps?: Omit<UseControllerProps<Values>, 'name'>;
  isRequired?: boolean;
  labelText?: string;
  name: Path<Values>;
  placeholder?: string;
}

export interface ComboboxProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Pick<
    TypeaheadSelectProps<DataItem, Values>,
    'className' | 'getItemValue' | 'name'
  > {
  children: ReactNode;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}

export interface Transform<TOutput> {
  output: (val: string) => TOutput;
  input: (val: TOutput) => string;
}
