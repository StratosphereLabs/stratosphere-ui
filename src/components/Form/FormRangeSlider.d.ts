import { ChangeResult } from 'multi-range-slider-react';
import { ReactNode } from '../../../node_modules/react';
import { FieldValues, Path } from 'react-hook-form';
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
export declare const FormRangeSlider: import('../../../node_modules/react').ForwardRefExoticComponent<FormRangeSliderProps<FieldValues> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
