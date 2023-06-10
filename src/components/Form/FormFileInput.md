# FormFileInput

The `FormFileInput` component is a React component that provides a custom file input with built-in functionality for handling user input and displaying errors. It is designed to work with the `react-hook-form` library, and it wraps the `FileInput` component from the DaisyUI library to provide a styled input field.

## Props

The `FormFileInput` component accepts the following props:

- `className: string`
  A CSS class name to apply to the outermost element of the component.
- `color: string`
  A string representing the color of the input. Defaults to 'ghost'.
- `controllerProps: Omit<UseControllerProps<Values>, 'name'>`
  An object containing additional props to pass to the useController hook.
- `hideErrorMessage: boolean`
  A boolean indicating whether to hide the error message. Defaults to false.
- `inputClassName: string`
  A CSS class name to apply to the file input element.
- `isRequired: boolean`
  A boolean indicating whether the input is required.
- `labelText: string`
  The label text to display for the input.
- `name: Path<Values>`
  The name of the field, as defined in `react-hook-form`.
- `placeholder: string`
  The placeholder text to display in the input.
- `showDirty: boolean`
  A boolean indicating whether to show the input as "dirty" (i.e. whether it has been modified).

## Usage

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormFileInput } from 'stratosphere-ui';

interface FormValues {
  file: File | null;
}

export const MyForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      file: null,
    },
  });
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <FormFileInput name="file" labelText="File Upload" />
    </Form>
  );
};
```

In this example, the `FormFileInput` component will render an input field with a label that reads "File". When the user chooses a file, `react-hook-form` will handle updating the form state. If there is an error with the file upload, the `FormError` component will display the error message.
