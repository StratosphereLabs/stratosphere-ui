import { useEffect, useMemo, useRef, useState } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import {
  DefaultValues,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
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
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  FormContext = any,
> extends Omit<UseFormProps<FormValues, FormContext>, 'defaultValues'> {
  getDefaultValues: (
    searchParamValues: QueryParamValues<FormValues>,
  ) => DefaultValues<FormValues>;
  getSearchParams: (
    formValues: PathValue<FormValues, Path<FormValues>>[],
  ) => URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit);
  includeKeys: readonly FieldPath<FormValues>[];
}

export const useFormWithQueryParams = <
  FormValues extends FieldValues,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  FormContext = any,
  TransformedValues extends FieldValues | undefined = undefined,
>({
  getDefaultValues,
  getSearchParams,
  includeKeys,
  ...useFormOptions
}: UseFormWithQueryParamsOptions<FormValues, FormContext>): UseFormReturn<
  FormValues,
  FormContext,
  TransformedValues
> => {
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
