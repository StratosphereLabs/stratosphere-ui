import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ListboxProps } from './types';
export declare const FormSelectSingle: <DataItem extends GenericDataType, Values extends FieldValues>({ children, className, disabled, name, selectedItems, setSelectedItems, }: ListboxProps<DataItem, Values>) => import("react/jsx-runtime").JSX.Element;
