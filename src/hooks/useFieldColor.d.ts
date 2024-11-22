import { FieldPath, FieldValues } from 'react-hook-form';
export declare const useFieldColor: <Values extends FieldValues>(name: FieldPath<Values>, showDirty?: boolean) => "success" | "error" | null;
