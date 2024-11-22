export type UseDebouncedStateValue = string | number | boolean | null;
export type UseDebouncedValueResult<Value extends UseDebouncedStateValue> = {
    debouncedValue: Value;
    isDebouncing: boolean;
};
export declare const useDebouncedValue: <Value extends UseDebouncedStateValue>(value: Value, delay: number) => UseDebouncedValueResult<Value>;
