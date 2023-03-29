# TypeaheadSelect

The `TypeaheadSelect` component is a React component that provides a typeahead selection input with a dropdown. It is based on the `Combobox` component from the @headlessui/react package.

## Props

The `TypeaheadSelect` component accepts the following props:

- `controllerProps?: Omit<UseControllerProps<Values>, 'name'>`:
  An object containing additional props that are passed to the `useController` hook from the react-hook-form package. The name prop is not included in this object, as it is provided separately.
- `debounceTime?: number`:
  The number of milliseconds to debounce the input before making a query. Defaults to 300.
- `defaultOptions?: DataItem[]`:
  An array of default options to show when the input is focused. This is useful when the typeahead input is used in a form that has an initial value. If multi is true, this should be an array of items; otherwise, it should be a single item.
- `disableSingleSelectBadge?: true`:
  A boolean indicating whether to disable the single select badge. This should only be used when multi is not undefined.
- `getBadgeText?: (data: DataItem) => string`:
  A function that takes an item and returns the text to be displayed in the badge. If not provided, the text returned by `getItemText` is used.
- `getItemText: (data: DataItem) => string`:
  A function that takes an item and returns the text to be displayed in the dropdown and in the badge. This function is required.
- `getItemValue?: (data: DataItem) => string`:
  A function that takes an item and returns its value. If not provided, the item itself is used as the value.
- `inputPlaceholder?: string`:
  The placeholder text to show in the input.
- `inputRef?: RefObject<HTMLInputElement>`:
  A ref to the input element.
- `isRequired?: boolean`:
  A boolean indicating whether the field is required.
- `labelText?: string`:
  The label text to show above the input.
- `multi?: boolean`:
  A boolean indicating whether multiple items can be selected.
- `name: Path<Values>`:
  The name of the field. This is used as the key when registering the field with react-hook-form.
- `onDebouncedChange: (value: string) => void`:
  A function that is called when the input value changes after the debounce time. This function is passed the current input value.
- `options?: DataItem[]`:
  An array of options to show in the dropdown.
- `placeholder?: string`:
  The placeholder text to show in the badge when no items are selected.
- `showDirty?: boolean`:
  A boolean indicating whether the input should be styled as dirty. This is useful when showing validation errors.

## Usage

```tsx
import { useForm } from 'react-hook-form';
import { Form, TypeaheadSelect } from 'stratosphere-ui';

interface FormValues {
  typeaheadValue: string;
}

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

export const MyForm = () => {
  const methods = useForm<FormValues>();
  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };
  return (
    <Form methods={methods} onFormSubmit={onSubmit}>
      <TypeaheadSelect
        defaultOptions={options}
        getItemText={item => item.name}
        inputPlaceholder="Select an option..."
        labelText="My Field"
        multi={true}
        name="typeaheadValue"
        options={options}
        placeholder="No options selected"
        showDirty={true}
      />
    </Form>
  );
};
```
