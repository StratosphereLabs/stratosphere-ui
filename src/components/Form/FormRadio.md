# FormRadio

The `FormRadio` component is a wrapper around the `Radio` component from DaisyUI. It is used to render a group of radio buttons that are part of a form, and integrates with `react-hook-form` for managing form state.

## Props

The `FormRadio` component accepts the following props:

- `className?: string`:
  Optional class name to be applied to the outermost container div element.
- `color?: string`:
  The color of the radio buttons. If not provided, the default is 'ghost'.
- `controllerProps?: Omit<UseControllerProps<Values>, 'name'>`:
  Optional props for the `useController` hook from `react-hook-form`, which is used to integrate the radio buttons with the form state.
- `inputRef?: RefObject<HTMLInputElement>`:
  Optional ref object to be passed to the underlying input component.
- `isRequired?: boolean`:
  Whether the field is required. If true, an asterisk will be added to the label text.
- `labelText?: string`:
  Optional text to be used for the label of the radio button group.
- `name: Path<Values>`:
  The name of the field, used as the key for the form state object in `react-hook-form`.
- `options: RadioOption[]`:
  An array of objects containing the id, label, and value of each radio button option.
- `showDirty?: boolean`:
  If true, the field will be styled differently if it has been modified by the user.

## Usage

To use the `FormRadio` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormRadio, RadioOption } from 'stratosphere-ui';

interface FormValues {
  gender: string;
}

const genderOptions: RadioOption[] = [
  { id: 'male', label: 'Male', value: 'male' },
  { id: 'female', label: 'Female', value: 'female' },
];

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormRadio
        name="gender"
        options={genderOptions}
        controllerProps={{ control }}
        labelText="Gender"
      />
    </Form>
  );
};
```
