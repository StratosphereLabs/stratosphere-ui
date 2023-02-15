import classNames from 'classnames';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormLabel } from './FormLabel';

export interface FormRangeSliderProps<Values> {
  barColor?: string;
  barInnerColor?: string;
  children?: ReactNode;
  className?: string;
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
      className,
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
      <div className={classNames('form-control flex-1', className)}>
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
          minValue={min}
          maxValue={max}
          onChange={onChange}
          onInput={event => {
            setValue(name, [event.minValue, event.maxValue] as never, {
              shouldDirty: true,
            });
            onInput?.(event);
          }}
        />
      </div>
    );
  },
);

FormRangeSlider.displayName = 'FormRangeSlider';
