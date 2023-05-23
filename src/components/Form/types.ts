import { Dictionary } from 'lodash';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { SelectProps } from '../Select';
import { TypeaheadSelectProps } from '../TypeaheadSelect';

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
> extends Pick<TypeaheadSelectProps<DataItem, Values>, 'className' | 'name'> {
  children: ReactNode;
  disabled?: boolean;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}

export interface ListboxProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Pick<SelectProps<DataItem, Values>, 'className' | 'name'> {
  children?: ReactNode;
  disabled?: boolean;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}

export type FormValueMode = 'item' | 'id';

export interface SelectSyncOptions<
  Values extends FieldValues,
  DataItem extends GenericDataType,
> {
  multi?: true;
  name: Path<Values>;
  onItemSelect?: (items: DataItem[]) => void;
  options: Dictionary<DataItem[]>;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
  valueMode?: FormValueMode;
}
