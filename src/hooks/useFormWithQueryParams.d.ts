import { DefaultValues, FieldPath, FieldPathValues, FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';
import { NavigateOptions } from 'react-router-dom';
export type QueryParamValues<FormValues extends FieldValues> = Partial<Record<keyof FormValues, string | null>>;
export interface UseFormWithQueryParamsOptions<FormValues extends FieldValues = FieldValues, FieldNames extends readonly FieldPath<FormValues>[] = readonly FieldPath<FormValues>[], FormContext = any> extends Omit<UseFormProps<FormValues, FormContext>, 'defaultValues'> {
    getDefaultValues: (searchParamValues: QueryParamValues<FormValues>) => DefaultValues<FormValues>;
    getSearchParams: (formValues: FieldPathValues<FormValues, FieldNames>) => Record<string, string> | ((prev: URLSearchParams) => Record<string, string>);
    includeKeys: readonly [...FieldNames];
    navigateOptions?: NavigateOptions;
}
export declare const useFormWithQueryParams: <FormValues extends FieldValues = FieldValues, FieldNames extends readonly FieldPath<FormValues>[] = readonly FieldPath<FormValues>[], FormContext = any, TransformedValues extends FieldValues | undefined = undefined>({ getDefaultValues, getSearchParams, includeKeys, navigateOptions, ...useFormOptions }: UseFormWithQueryParamsOptions<FormValues, FieldNames, FormContext>) => UseFormReturn<FormValues, FormContext, TransformedValues>;
