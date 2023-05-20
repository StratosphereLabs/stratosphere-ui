# Select

The `Select` component is a custom dropdown component that uses the `Listbox` and `Dropdown` components from the @headlessui/react and stratosphere-ui packages respectively. It allows users to select an option from a list of options.

## Props

The `Select` component accepts the following props:

- `buttonColor?: ComponentColor`: An optional prop representing the color of the button.
- `buttonRef?: RefObject<HTMLButtonElement>`: An optional prop representing a ref to the button element.
- `className?: string`: An optional prop representing the class name of the component.
- `dropdownIcon?: FC<ComponentProps<'svg'>>`: An optional prop representing the icon to be displayed in the dropdown.
- `formValueMode?: FormValueMode`:
  Determines the value that is set in React Hook Form's state. If the default value of 'id' is passed, the component will use the data item's ID for the value in the form state. If 'item' is passed, the component will use the data item itself as the form value.
- `getItemText: (data: DataItem) => string`: A required prop representing the function used to get the text of an option.
- `getItemValue?: (data: DataItem) => string`: An optional prop representing the function used to get the value of an option.
- `isRequired?: boolean`: An optional prop representing whether the field is required or not.
- `labelText?: string`: An optional prop representing the label text of the component.
- `name: Path<Values>`: A required prop representing the name of the field in the form.
- `options: DataItem[]`: A required prop representing the array of options.
- `showDirty?: boolean`: An optional prop representing whether to show the dirty state or not.

## Usage

To use the `Select` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormSelect } from 'stratosphere-ui';

interface FormValues {
  selectField: string;
}

const options = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
];

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <Select
        getItemText={option => option.name}
        name="selectField"
        options={options}
        labelText="Select an option"
        isRequired
      />
    </Form>
  );
};
```
