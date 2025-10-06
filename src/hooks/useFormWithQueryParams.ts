import isEqual from 'lodash.isequal';
import pickBy from 'lodash.pickby';
import { useEffect, useMemo, useRef, useState } from 'react';
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
import { NavigateOptions, useSearchParams } from 'react-router-dom';

export type QueryParamValues<FormValues extends FieldValues> = Partial<
  Record<keyof FormValues, string | null>
>;

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
    | Record<string, string>
    | ((prev: URLSearchParams) => Record<string, string>);
  includeKeys: readonly [...FieldNames];
  navigateOptions?: NavigateOptions;
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
  navigateOptions,
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
  const prevFormValuesRef = useRef(formValues);
  useEffect(() => {
    const prevFormValues = prevFormValuesRef.current;
    if (isEqual(prevFormValues, formValues)) {
      return;
    }
    prevFormValuesRef.current = formValues;
    setSearchParams(oldSearchParams => {
      const getNewSearchParams = getSearchParamsFn.current(formValues);
      const newSearchParamsOptions =
        typeof getNewSearchParams === 'function'
          ? getNewSearchParams(oldSearchParams)
          : getNewSearchParams;
      return pickBy(
        {
          ...Object.fromEntries(oldSearchParams),
          ...newSearchParamsOptions,
        },
        value => value.length > 0,
      );
    }, navigateOptions);
  }, [formValues, navigateOptions, setSearchParams]);
  return methods;
};
