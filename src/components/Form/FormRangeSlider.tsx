import classNames from 'classnames';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormLabel } from './FormLabel';

export interface FormRangeSliderProps<Values> {
  barColor?: string;
  barInnerColor?: string;
  children?: ReactNode;
  className?: string;
  defaultMinValue?: number;
  defaultMaxValue?: number;
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
      defaultMinValue,
      defaultMaxValue,
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
  ) => {
    const [minValue, setMinValue] = useState(defaultMinValue ?? min);
    const [maxValue, setMaxValue] = useState(defaultMaxValue ?? max);
    const { setValue } = useFormContext<Values>();
    useEffect(() => {
      setValue(name, [minValue, maxValue] as never, {
        shouldDirty: true,
      });
    }, [minValue, maxValue, name, setValue]);
    return (
      <div className={classNames('form-control', className)}>
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
          minValue={minValue}
          maxValue={maxValue}
          onChange={onChange}
          onInput={event => {
            setMinValue(event.minValue);
            setMaxValue(event.maxValue);
            onInput?.(event);
          }}
        />
      </div>
    );
  },
);

FormRangeSlider.displayName = 'FormRangeSlider';
