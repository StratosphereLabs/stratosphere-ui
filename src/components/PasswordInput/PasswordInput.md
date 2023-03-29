# PasswordInput

The `PasswordInput` component is a reusable React component that provides an input field for passwords with an eye icon button that toggles the password visibility.

## Props

The `PasswordInput` component accepts the following props:

- `iconShow?: React.ReactNode`: Component for the eye icon when the password is hidden. Defaults to `<EyeIcon className="h-5 w-5" />`.
- `iconHide?: React.ReactNode`: Component for the eye icon when the password is visible. Defaults to `<EyeSlashIcon className="h-5 w-5" />`.
- `inputClassName?: string`: string that represents the CSS class for the input element.

All other props are passed down to the `FormControl` component that wraps the input element.

## Usage

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormControl } from 'stratosphere-ui';

interface FormValues {
  password: string;
}

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
    </Form>
  );
};
```
