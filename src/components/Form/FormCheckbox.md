# FormCheckbox

The `FormCheckbox` component is a custom form field component built with React. It provides a styled checkbox input that integrates with the DaisyUI library, and includes support for the `react-hook-form` library.

## Props

The `FormCheckbox` component accepts the following props:

- `children?: React.ReactNode`: Optional. Any additional content to be displayed alongside the checkbox.
- `className?: string`: Optional. Additional class names to be applied to the component.
- `color?: string`: Optional. The color of the checkbox. Defaults to 'ghost'.
- `controllerProps?: Omit<UseControllerProps<Values>, 'name'>`: Optional. Props to pass to the `useController` hook, which manages the form input's state.
- `inputRef?: RefObject<HTMLInputElement>`: Optional. A ref to the input element of the checkbox.
- `isRequired?: boolean`: Optional. Indicates whether the field is required.
- `labelText?: string`: Optional. The label text for the checkbox.
- `name: Path<Values>`: Required. The name of the field within the form.
- `showDirty?: boolean`: Optional. Indicates whether the field should be styled to indicate if it has been modified.

## Usage

To use the `FormCheckbox` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormCheckbox } from 'stratosphere-ui';

interface FormValues {
  exampleCheckbox: boolean;
}

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <FormCheckbox name="exampleCheckbox" labelText="Example Checkbox" />
    </Form>
  );
};
```
