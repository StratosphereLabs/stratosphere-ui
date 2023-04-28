import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { SelectProps } from '../Select';
import { TypeaheadSelectProps } from '../TypeaheadSelect';
import { GenericDataType } from '../../common';

export interface FormFieldProps<Values extends FieldValues> {
  controllerProps?: Omit<UseControllerProps<Values>, 'name'>;
  isRequired?: boolean;
  labelText?: string;
  name: Path<Values>;
  placeholder?: string;
  showDirty?: boolean;
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
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}

export interface ListboxProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Pick<
    SelectProps<DataItem, Values>,
    'className' | 'getItemValue' | 'name'
  > {
  children?: ReactNode;
  disabled?: boolean;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}
