# FormToggleSwitch

The `FormToggleSwitch` component is a React component that wraps the `Toggle` component from the DaisyUI library and provides additional functionality for working with forms. This component is used for rendering a toggle switch input field in a form.

## Props

The following props can be passed to the `FormToggleSwitch` component:

- `children?: React.ReactNode`:
  This prop is used to pass children components to the FormToggleSwitch component.
- `className?: string`:
  This prop is used to add additional class names to the `FormToggleSwitch` component.
- `controllerProps?: Omit<UseControllerProps<Values>, 'name'>`: This prop is an object that contains additional props that can be passed to the `useController` hook from the `react-hook-form` library.
- `isRequired?: boolean`: This prop is a boolean that determines whether the input field is required or not.
- `labelText?: string`: This prop is a string that is used as the label text for the input field.
- `name: Path<Values>`: This prop is a string that is used as the name of the input field.

## Usage

To use the `FormToggleSwitch` component, simply import it and use it like any other React component, passing in the required props as necessary.

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormToggleSwitch } from 'stratosphere-ui';

interface FormValues {
  exampleSwitch: boolean;
}

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <FormToggleSwitch name="exampleSwitch" labelText="Example Checkbox" />
    </Form>
  );
};
```
