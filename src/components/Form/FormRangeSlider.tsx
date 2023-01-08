import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormLabel } from './FormLabel';

export interface FormRangeSliderProps<Values> {
  barColor?: string;
  barInnerColor?: string;
  children?: ReactNode;
  defaultMin?: number;
  defaultMax?: number;
  labelText?: string;
  min: number;
  max: number;
  name: Path<Values>;
  onChange?: (e: ChangeResult) => void;
  onInput?: (e: ChangeResult) => void;
  ruler?: boolean;
  showLabels?: boolean;
  step?: number;
  stepOnly?: boolean;
  thumbLeftColor?: string;
  thumbRightColor?: string;
}

export const FormRangeSlider = forwardRef(
  <Values extends FieldValues>(
    {
      barColor,
      barInnerColor,
      children,
      defaultMin,
      defaultMax,
      labelText,
      min,
      max,
      name,
      onChange,
      onInput,
      ruler,
      showLabels,
      step,
      stepOnly,
      thumbLeftColor,
      thumbRightColor,
    }: FormRangeSliderProps<Values>,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const { setValue } = useFormContext<Values>();
    return (
      <div className="w-full max-w-lg">
        <div className="flex justify-between">
          <FormLabel>{labelText}</FormLabel>
          {children}
        </div>
        <MultiRangeSlider
          ref={ref}
          label={showLabels}
          barInnerColor={barInnerColor}
          barLeftColor={barColor}
          barRightColor={barColor}
          thumbLeftColor={thumbLeftColor}
          thumbRightColor={thumbRightColor}
          min={min}
          max={max}
          ruler={ruler}
          step={step}
          stepOnly={stepOnly}
          minValue={defaultMin}
          maxValue={defaultMax}
          onChange={onChange}
          onInput={event => {
            setValue(name, [event.minValue, event.maxValue] as never);
            onInput?.(event);
          }}
        />
      </div>
    );
  },
);

FormRangeSlider.displayName = 'FormRangeSlider';
