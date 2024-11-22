import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ComboboxProps } from './types';
export declare const ComboboxMulti: <DataItem extends GenericDataType, Values extends FieldValues>({ children, className, disabled, name, selectedItems, setSelectedItems, }: ComboboxProps<DataItem, Values>) => import("react/jsx-runtime").JSX.Element;
