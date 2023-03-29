# Form

The `Form` component is a reusable React component built using the react-hook-form library that provides a way to handle form submission and form input validation.

## Props

- `methods: UseFormReturn<Values>`:
  A required prop that provides the methods to control the form. This prop is used internally by the Form component to control the form's state.

- `onFormSubmit?: SubmitHandler<Values>`:
  An optional prop that is a callback function that is called when the form is submitted. The onFormSubmit function receives the form data as its argument.

- `children?: ReactNode`:
  An optional prop that can contain the form elements that the Form component should render.

## Usage

To use the `Form` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { useForm } from 'react-hook-form';
import { Form } from 'stratosphere-ui';

interface FormValues {
  firstName: string;
  lastName: string;
}

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <input type="text" {...methods.register('firstName')} />
      <input type="text" {...methods.register('lastName')} />
      <button type="submit">Submit</button>
    </Form>
  );
};
```

In the example above, the `Form` component is used to control a form with two input fields and a submit button. The methods prop is passed to the `Form` component, which is created using the `useForm` hook provided by the react-hook-form library. The `onFormSubmit` prop is also passed to the `Form` component, which is a callback function that logs the form data when the form is submitted. The input fields are registered using the `methods.register` function provided by the `useForm` hook.
