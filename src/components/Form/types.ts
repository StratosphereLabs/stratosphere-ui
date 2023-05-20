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
> extends Pick<
    TypeaheadSelectProps<DataItem, Values>,
    'className' | 'formValueMode' | 'name'
  > {
  children: ReactNode;
  disabled?: boolean;
  options: Dictionary<DataItem[]>;
  selectedItems: DataItem[];
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}

export interface ListboxProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends Pick<
    SelectProps<DataItem, Values>,
    'className' | 'formValueMode' | 'name'
  > {
  children?: ReactNode;
  disabled?: boolean;
  options: Dictionary<DataItem[]>;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
}

export type FormValueMode = 'item' | 'id';

export interface SelectSyncOptions<
  Values extends FieldValues,
  DataItem extends GenericDataType,
> {
  name: Path<Values>;
  onItemSelect?: (items: DataItem[]) => void;
  options: Dictionary<DataItem[]>;
  selectedItems: DataItem[];
  setSelectedItems: Dispatch<SetStateAction<DataItem[]>>;
  valueMode: FormValueMode;
}
