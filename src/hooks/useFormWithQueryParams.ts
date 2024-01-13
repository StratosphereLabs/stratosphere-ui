import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

export type URLSearchParamsOptions =
  | string
  | string[][]
  | Record<string, string>
  | URLSearchParams
  | undefined;

export interface UseFormWithQueryParamsOptions<
  FormValues extends FieldValues = FieldValues,
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
  ) =>
    | URLSearchParamsOptions
    | ((prev: URLSearchParams) => URLSearchParamsOptions);
  includeKeys: readonly [...FieldNames];
}

export const useFormWithQueryParams = <
  FormValues extends FieldValues = FieldValues,
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
  const formValues = useWatch<FormValues, FieldNames>({
    control: methods.control,
    name: includeKeys,
  });
  useEffect(() => {
    setSearchParams(oldSearchParams => {
      const newSearchParams = getSearchParamsFn.current(formValues);
      return {
        ...Object.fromEntries(oldSearchParams),
        ...Object.fromEntries(
          new URLSearchParams(
            typeof newSearchParams === 'function'
              ? newSearchParams(oldSearchParams)
              : newSearchParams,
          ),
        ),
      };
    });
  }, [formValues, setSearchParams]);
  return methods;
};
