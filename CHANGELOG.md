# CHANGELOG.md

## 0.3.2 (2023-05-15)

- Added `enableRowSelection` and `enableSelectAll` props to `Table` component to add support for row selection.
- Passed `getRowId` option to `useReactTable` which maps the `id` property in the data object to the unique identifier.

## 0.3.1 (2023-05-09)

- Added `defaultOpen` prop to `Disclosure` component.

## 0.3.0 (2023-05-08)

- Added `Disclosure` component which integrates HeadlessUI's `Disclosure` component with DaisyUI's `Collapse` component.

## 0.2.9 (2023-05-07)

- Added `FormRadioGroup` component which integrates HeadlessUI and react-hook-form with DaisyUI's `RadioGroup` component.

## 0.2.8 (2023-04-27)

- Added `shouldDirty` and `shouldTouch` to `setValue` call in `FormFileInput` component so form state is updated correctly when file is selected.
- Added `FormTextarea` component which integrates DaisyUI's `Textarea` with react-hook-form.
- Renamed `FormSelect` component to `Select`.
- Added `disabled` prop to `Select` component.
- Added `multi` prop to `Select` component to allow selection of multiple values.

## 0.2.7 (2023-04-26)

- Added `FormFileInput` component that adds React Hook Form integration to DaisyUI's `FileInput`.

## 0.2.6 (2023-04-25)

- Fixed issue with `TypeaheadSelect` component not clearing badges when field value is reset to `null`.

## 0.2.5 (2023-04-13)

- Removed `inputRef` prop from all Form components in favor of the `setFocus()` function provided by React Hook Form.
- Added `formRef` prop to `Form` component to allow passing ref to form element.
- Added `onKeyDown` prop to `TypeaheadSelect` to allow passing down to search input element.
- Various accessibility improvements.

## 0.2.4 (2023-04-11)

- Fixed `FormControl` component failing to use `labelText` text as accessible name for input.

## 0.2.3 (2023-04-11)

- Added `pathname` prop to `Tabs` component to allow client-side routing integration.
- Added `paths` option to `TabData` object to allow path matching in `Tabs` component.

## 0.2.2 (2023-04-11)

- Passed props down to correct element in `Tabs` component.
- Added `defaultTabId`, `manual`, `selectedTabId`, and `vertical` props to `Tabs` component.
- Passed `ref` to correct element in `DropdownMenuItem` component.

## 0.2.1 (2023-04-11)

- Added `undefined` as possible return type of `output` function in the `FormControl` `transform` if value is invalid.
- Added commonly used transformers for number and null empty value inputs.

## 0.2.0 (2023-04-11)

- Added new `DropdownMenu` component which integrates the HeadlessUI `Dropdown` component.
- Added new `Popover` component which integrates the HeadlessUI `Popover` component.
- Tweaked styling for `FormSelect` and `TypeaheadSelect` components.

## 0.1.29 (2023-03-24)

- Passed `responsive` prop to underlying DaisyUI component in `Modal` component.

## 0.1.28 (2023-03-23)

- Added `hideErrorMessage` prop to `FormControl` component.
- Added `PasswordInput` component.
- Increased the `strokeWidth` of all `Icon` components from 1.5 to 2.

## 0.1.27 (2023-02-27)

- Added `elementLeft` and `elementRight` props to `FormControl` component.

## 0.1.26 (2023-02-26)

- Updated `Form` components to show correct color based on form state.

## 0.1.25 (2023-02-26)

- Changed `defaultOption` prop to `defaultOptionId` in `FormSelect` component.

## 0.1.24 (2023-02-26)

- Added `defaultOption` prop to `FormSelect` component.

## 0.1.23 (2023-02-25)

- Added function to calculate page numbers for `Pagination` component.

## 0.1.22 (2023-02-24)

- Fixed default value not appearing in `TypeaheadSelect` component.

## 0.1.20 (2023-02-15)

- Added ref to `Modal` component.

## 0.1.19 (2023-02-15)

- Fixed close button positioning in `Modal` component.
- Removed scrollbar from `Modal` component by default
- Added `className` prop to `Modal` component.
- Added `showDirty` prop to all form components.

## 0.1.18 (2023-02-15)

- Fixed bug with default value in `TypeaheadSelect` component.
- Made `onFormSubmit` prop in `Form` component optional.

## 0.1.17 (2023-02-12)

- Added new `Table` component.
- Added new `Pagination` component.

## 0.1.16 (2023-02-11)

- Removed scrollbar from `TypeaheadSelect` component.
- Fixed infinite loop in `FormRangeSlider` component.

## 0.1.15 (2023-02-11)

- Removed `onItemSelect` prop from `TypeaheadSelect` component.
- Minor styling fixes for `TypeaheadSelect` component.

## 0.1.14 (2023-02-10)

- Added `disableSingleSelectBadge` prop to `TypeaheadSelect` that allows a combined
  form field and query input.
- Added `onItemClick` prop to `TypeaheadSelect` that allows passing a callback to the
  onClick handler for each option.
- Improved styling for `Badge` component.

## 0.1.13 (2023-02-09)

- Fixed Typeahead reset when form is reset.
- Added `subMenu` prop to DropdownOption.

## 0.1.12 (2023-02-01)

- Improved styling for form component containers.

## 0.1.11 (2023-01-29)

- Fixed issue with Typeahead badges clearing when pressing enter while inside
  another input.
- Fixed issue with Typeahead component validating on mount.

## 0.1.10 (2023-01-26)

- Fixed issues with TypeaheadSelect in single mode
- Fixed error message display in TypeaheadSelect

## 0.1.9 (2023-01-25)

- Fixed infinite loop in FormRangeSlider component
- Added custom `useFormValues` hook

## 0.1.8 (2023-01-18)

- Made getItemValue prop optional in TypeaheadSelect and FormSelect components.
  Default behavior will be setting the form value to the entire data object.

## 0.1.7 (2023-01-18)

- Added react-hook-form as external dependency

## 0.1.6 (2023-01-17)

- Added required 'id' option to FormRadio item
- Fixed incorrect Badge labels in Typeahead Multi-Select

## 0.1.5 (2023-01-15)

- Changed FormControl container to flex box

## 0.1.4 (2023-01-15)

- Added inputRef prop to FormControl component
- Added animation to Modal component
- Temporarily removed initial focus functionality from Modal component

## 0.1.3 (2023-01-14)

- Add ability to disable dropdown menu option
- Add DropdownNavLink component

## 0.1.2 (2023-01-07)

- Fixed issue with missing typings

## 0.1.1 (2023-01-07)

- Added Checkbox, Range slider, Select, and Switch components
- Fixed issue with missing typings

## 0.1.0 (2023-01-07)

- Added Form components
- Added Typeahead components
- Added Modal
- Added Loading Card

## 0.0.4 (2023-01-01)

- Added types to Form component export

## 0.0.3 (2023-01-01)

- Added Typescript typings

## 0.0.2 (2023-01-01)

- Added React to global variables in bundle

## 0.0.1 (2023-01-01)

- Initial Release
