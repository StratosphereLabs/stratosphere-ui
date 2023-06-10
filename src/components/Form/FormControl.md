# FormControl

The `FormControl` component is a React component that provides a form control with built-in functionality for handling user input and displaying errors. It is designed to work with the `react-hook-form` library, and it wraps the `Input` component from the DaisyUI library to provide a styled input field.

## Props

The `FormControl` component accepts the following props:

- `className?: string`:
  A class name to apply to the wrapper element of the component.
- `color?: string`:
  The color variant to use for the input field. If not specified, the color will be set to 'ghost'.
- `controllerProps?: Omit<UseControllerProps<Values>, 'name'>`:
  Props to be passed to the `useController` hook from `react-hook-form`.
- `elementLeft?: ReactNode`:
  A React node to render to the left of the input field.
- `elementRight?: ReactNode`:
  A React node to render to the right of the input field.
- `hideErrorMessage?: boolean`:
  If true, the error message will not be displayed even if an error is present.
- `inputClassName?: string`:
  Additional class name to apply to the input field.
- `inputRef?: RefObject<HTMLInputElement>`:
  A ref object that can be used to access the underlying input element.
- `isRequired?: boolean`:
  If true, the label text will indicate that the field is required with an asterisk.
- `labelText?: string`:
  The text to display above the input.
- `name: Path<Values>`:
  The name of the field within the form. This prop is required.
- `placeholder?: string`:
  The placeholder text to display in the input field.
- `showDirty?: boolean`:
  If true, the field will be styled differently if it has been modified by the user.
- `transform?: Transform`:
  An object that provides transformation functions for the input value. The object has two properties: `input` and `output`. The `input` function is called with the output value and should return the input value. The `output` function is called with the input value and should return the output value.

## Usage

To use the `FormControl` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormControl } from 'stratosphere-ui';

interface FormValues {
  email: string;
}

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <FormControl name="email" labelText="Email Address" type="email" />
    </Form>
  );
};
```

In this example, the `FormControl` component will render an input field with a label that reads "Email Address". When the user enters text into the field, `react-hook-form` will handle updating the form state. If there is an error with the field (such as an invalid email address), the `FormError` component will display the error message.
