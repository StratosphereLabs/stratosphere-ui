import { useEffect, useMemo, useRef, useState } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import {
  DefaultValues,
  FieldPath,
  FieldPathValues,
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm,
  useWatch,
} from 'react-hook-form';

export type QueryParamValues<FormValues extends FieldValues> = Partial<
  Record<keyof FormValues, string | null>
>;

export interface UseFormWithQueryParamsOptions<
  FormValues extends FieldValues,
  FieldNames extends
    readonly FieldPath<FormValues>[] = readonly FieldPath<FormValues>[],
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  FormContext = any,
> extends Omit<UseFormProps<FormValues, FormContext>, 'defaultValues'> {
  getDefaultValues: (
    searchParamValues: QueryParamValues<FormValues>,
  ) => DefaultValues<FormValues>;
  getSearchParams: (
    formValues: FieldPathValues<FormValues, FieldNames>,
  ) => URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit);
  includeKeys: readonly [...FieldNames];
}

export const useFormWithQueryParams = <
  FormValues extends FieldValues,
  FieldNames extends
    readonly FieldPath<FormValues>[] = readonly FieldPath<FormValues>[],
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  FormContext = any,
  TransformedValues extends FieldValues | undefined = undefined,
>({
  getDefaultValues,
  getSearchParams,
  includeKeys,
  ...useFormOptions
}: UseFormWithQueryParamsOptions<
  FormValues,
  FieldNames,
  FormContext
>): UseFormReturn<FormValues, FormContext, TransformedValues> => {
  const getDefaultValuesFn = useRef(getDefaultValues);
  const getSearchParamsFn = useRef(getSearchParams);
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialParams] = useState(searchParams);
  const queryParamValues = useMemo(
    () =>
      includeKeys.reduce<QueryParamValues<FormValues>>(
        (acc, key) => ({
          ...acc,
          [key]: initialParams.get(key.toString()),
        }),
        {},
      ),
    [includeKeys, initialParams],
  );
  const defaultValues = useMemo(
    () => getDefaultValuesFn.current(queryParamValues),
    [queryParamValues],
  );
  const methods = useForm<FormValues, FormContext, TransformedValues>({
    ...useFormOptions,
    defaultValues,
  });
  const formValues = useWatch({
    control: methods.control,
    name: includeKeys,
  });
  useEffect(() => {
    setSearchParams(getSearchParamsFn.current(formValues));
  }, [formValues, setSearchParams]);
  return methods;
};
