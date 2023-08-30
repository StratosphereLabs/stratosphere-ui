export type GenericDataType = { id: string | number } & Record<string, unknown>;

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export interface Transform<TOutput> {
  output: (val: string) => TOutput | undefined;
  input: (val: TOutput) => string;
}
