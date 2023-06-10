# FormRadioGroup

The `FormRadioGroup` component is a wrapper component for the `RadioGroup` component from the @headlessui/react library. It is designed to work with the `react-hook-form` library and provide an easy way to handle radio buttons in a form.

## Props

- `controllerProps?: Omit<UseControllerProps<Values>, 'name'>`:
  An object containing additional props to pass to the useController hook from `react-hook-form`. These props will be merged with the default props provided by the FormRadioGroup component. The name prop is already provided by the FormRadioGroup component and should not be included in controllerProps.

- `isRequired?: boolean`:
  A boolean indicating whether the radio group is required or not. If set to true, the FormLabel associated with the radio group will display an asterisk to indicate that the field is required.

- `labelText?: string`:
  A string representing the label text for the radio group. If provided, the RadioGroup.Label component from @headlessui/react will be used to display the label.

- `name: Path<Values>`:
  A string or string array representing the name of the field in the `react-hook-form` form object.

- `children: ReactNode`:
  A set of RadioGroup.Option or RadioGroup.Button components representing the individual radio buttons in the group.

- `className?: string`:
  An optional string representing additional CSS classes to apply to the RadioGroup component.

- `disabled?: boolean`:
  A boolean indicating whether the entire radio group should be disabled or not.

- `value?: string`:
  A string representing the currently selected radio button in the group. This value will be passed to the useController hook from `react-hook-form` as the initial value for the field.

- `onChange?: (value: string) => void`:
  A function that will be called whenever the selected radio button changes. The value of the newly selected radio button will be passed to this function.

## Usage

To use the `FormRadioGroup` component, simply import it and include it in your form component. Pass in the necessary props, including the name prop, which should match the corresponding key in the `react-hook-form` form object.

```tsx
import { useForm } from 'react-hook-form';
import { FormRadioGroup } from 'stratosphere-ui';

interface FormValues {
  gender: string;
}

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormRadioGroup name="gender" labelText="My Radio Group">
        <RadioGroup.Option value="male">Male</RadioGroup.Option>
        <RadioGroup.Option value="female">Female</RadioGroup.Option>
      </FormRadioGroup>
    </Form>
  );
};
```

In this example, the `FormRadioGroup` component is used to group together three `FormRadioGroupOption` components. The selected value will be stored in the `gender` field in the `react-hook-form` form object.
