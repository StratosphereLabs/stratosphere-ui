import { Toggle, ToggleProps } from 'react-daisyui';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { FormLabel } from './FormLabel';

export interface FormToggleSwitchProps<Values extends FieldValues>
  extends UseControllerProps<Values> {
  color?: ToggleProps['color'];
  label: string;
  className?: string;
}

export const FormToggleSwitch = <Values extends FieldValues>({
  color,
  label,
  className,
  ...props
}: FormToggleSwitchProps<Values>): JSX.Element => {
  const {
    field: { value, ...field },
  } = useController(props);
  return (
    <>
      <Toggle {...field} className={className} checked={value} color={color} />
      <FormLabel>{label}</FormLabel>
    </>
  );
};