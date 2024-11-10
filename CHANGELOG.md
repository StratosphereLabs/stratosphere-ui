# CHANGELOG.md

## 1.8.6 (2024-08-08)

- Added `optionClassName` property to `options` object in `FormRadio` component.

## 1.8.5 (2024-08-08)

- Fixed `TypeaheadSelect` dropdown not opening when typing with input focused.

## 1.8.4 (2024-07-26)

- Changed return type of `getItemText` prop to `ReactNode` in `Select` and `TypeaheadSelect` components, allowing for custom menu items.
- Changed return type of `getBadgeText` prop to `ReactNode` in `TypeaheadSelect` component, allowing for custom badge content.

## 1.8.3 (2024-07-26)

- Added ability to override `children` prop of button in `Select` component.

## 1.8.2 (2024-06-26)

- Added `rowClassName` and `cellClassName` props to allow passing custom classname as either a string or a function that accepts the current row data object and returns a string.
- Fixed issue with `TypeaheadSelect` component not focusing on input consistently.

## 1.8.1 (2024-04-30)

- Fixed issue with `useFormWithQueryParams` and blank values.
- Added `navigationOptions` option to `useFormWithQueryParams` to allow customization of config object passed to `setSearchParams()`.

## 1.8.0 (2024-04-29)

- Added `bodyClassName` prop to `Table` component. This is a string that allows custom classnames to be passed directly to the `<tbody>` element.
- Added `headerClassName` prop to `Table` component. This is a string that allows custom classnames to be passed directly to the `<thead>` element.
- Added `activeColor` and `inactiveColor` props to `FormRadioGroupOption` component to allow customization of button colors.
- Changed `FullScreenLoader` component to use `Loading` component.

## 1.7.1 (2024-02-09)

- Fixed `Select` component truncating text inside button.

## 1.7.0 (2024-01-28)

- Added `hideHeader` prop to `Table` component.

## 1.6.4 (2024-01-12)

- Fixed query params update behavior in `useFormWithQueryParams` hook.

## 1.6.3 (2024-01-12)

- Fixed default font weight for form label.

## 1.6.2 (2024-01-12)

- Fixed accessibility issues with `FormCheckbox`.
- Refactored labels in other components.

## 1.6.1 (2024-01-01)

- Improved type safety for `useFormWithQueryParams` hook.

## 1.6.0 (2024-01-01)

- Added new wrapper hook around `useForm` to allow form data to be easily synced with URL params.

## 1.5.1 (2023-12-31)

- Made `onChange` and `selectedTabId` props required in `Tabs` component.

## 1.5.0 (2023-11-26)

- Removed `paths` and `pathname` options from `Tabs` component.
- Added `onClick` callback to tabs options in `Tabs` component.
- Made `onChange` prop in `Tabs` component optional.

## 1.4.1 (2023-11-20)

- Added props to `FormRangeSlider` allow user to pass default values.

## 1.4.0 (2023-11-12)

- Added DaisyUI 4 compatibility.

## 1.3.3 (2023-11-10)

- Fixed infinite loop in `FormRangeSlider` component.

## 1.3.2 (2023-10-29)

- Updated dependencies (no functionality changes)

## 1.3.1 (2023-10-10)

- Fixed null pointer issue in `Table` component.

## 1.3.0 (2023-09-19)

- Refactored `useDebouncedValue` to allow current value to be passed in, rather than controlling the current value and returning it.

## 1.2.0 (2023-08-30)

- Added `ButtonArray` component that renders an array of Buttons and can collapse into a Dropdown menu.
- Updated all dependencies.

## 1.1.1 (2023-08-21)

- Added back changes from versions 1.0.9 through 1.0.11.

## 1.1.0 (2023-08-12)

- Removed `div` surrounding `Modal` children.

## 1.0.11 (2023-08-01)

- Fixed `Badge` close button size.

## 1.0.10 (2023-08-01)

- Added `buttonProps` prop to `Select` component to allow customization of underlying button in `Select` component.

## 1.0.9 (2023-07-31)

- Fixed issue with default value not working in `FormCheckbox` component.

## 1.0.8 (2023-06-29)

- Added `bordered`, `color`, `dropdownInputClassName`, `inputClassName`, and `size` props to `TypeaheadSelect` component.

## 1.0.7 (2023-06-18)

- Added `Menu` component.
- Fixed text size in `Badge` component.

## 1.0.6 (2023-06-18)

- Fixed menu item focus color for `DropdownMenu`, `Select`, and `TypeaheadSelect` components.

## 1.0.5 (2023-06-16)

- Fixed default color of `TypeaheadSelect` input field.
- Added `menuSize` prop to `Select`, `TypeaheadSelect`, and `DropdownMenu` components.
- Added dropdown icon to `Select` component along with a `hideDropdown` prop to hide the icon.

## 1.0.4 (2023-06-13)

- Fixed props for `Link` component.

## 1.0.3 (2023-06-09)

- Added `Avatar` component.

## 1.0.2 (2023-06-09)

- Added `Alert` component.
- Added `Button` component.
- Added `Card` component along with `CardBody`, `CardActions`, and `CardTitle` sub components.
- Added `Link` component.
- Added `Loading` component.
- Added `Progress` and `RadialProgress` components.
- Added `Stats` component along with `Stat`, `StatActions`, `StatDesc`, `StatFigure`, `StatTitle`, and `StatValue` sub-components.
- Added `Steps` component along with `Step` sub-component.
- Fixed `TAB_SIZES` constant typing.
- Added `Tooltip` component.

## 1.0.1 (2023-06-08)

- Bugfix for disabled typeahead input on mobile version of Chrome.

## 1.0.0 (2023-06-06)

- Migrated to DaisyUI 3.0.0. Detailed changelog coming...

## 0.4.1 (2023-05-25)

- Added ability to forward a `ref` to `Disclosure` component.

## 0.4.0 (2023-05-23)

- Release for `TypeaheadSelect` improvements.

## 0.4.0-beta3 (2023-05-22)

- Fixed default value issue in `TypeaheadSelect` component.

## 0.4.0-beta2 (2023-05-21)

- Changed default value of `formValueMode` prop from 'id' to 'item' for `Select` and `TypeaheadSelect` components.
- Fixed infinite loop when `formValueMode` is 'id' for `Select` and `TypeaheadSelect` components.

## 0.4.0-beta1 (2023-05-20)

- Removed `defaultOptionId` prop from `Select` component. Please use `defaultValues` in the `react-hook-form` `useForm` config.
- Removed `getItemValue` prop from `Select` and `Typeahead` components.
- Added `formValueMode` prop to `Select` and `Typeahead` components. If the default value of 'id' is passed, the component will use the data item's ID for the value in the form state. If 'item' is passed, the component will use the data item itself as the form value.
- Added `disabled` prop to `TypeaheadSelect` component.

## 0.3.4-gio-2 (2023-05-17)

- Allow `number` as a possible type to `defaultOptionId` prop in `Select` component.

## 0.3.4-gio (2023-05-17)

- Allow `getItemValue` method in `TypeaheadSelect` and `Select` component props to return a `number`.

## 0.3.4 (2023-05-17)

- Allow passing function to `enableRowHover` prop to `Table` component to determine whether row hover is enabled given the row's data.

## 0.3.3 (2023-05-16)

- Added `highlightWhenSelected` prop for row highlighting when row is selected to `Table` component.

## 0.3.2 (2023-05-15)

- Added `enableRowSelection` and `enableSelectAll` props to `Table` component to add support for row selection.
- Passed `getRowId` option to `useReactTable` which maps the `id` property in the data object to the unique identifier.

## 0.3.1 (2023-05-09)

- Added `defaultOpen` prop to `Disclosure` component.

## 0.3.0 (2023-05-08)

- Added `Disclosure` component which integrates HeadlessUI's `Disclosure` component with DaisyUI's `Collapse` component.

## 0.2.9 (2023-05-07)

- Added `FormRadioGroup` component which integrates HeadlessUI and `react-hook-form` with DaisyUI's `RadioGroup` component.

## 0.2.8 (2023-04-27)

- Added `shouldDirty` and `shouldTouch` to `setValue` call in `FormFileInput` component so form state is updated correctly when file is selected.
- Added `FormTextarea` component which integrates DaisyUI's `Textarea` with `react-hook-form`.
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

- Added `react-hook-form` as external dependency

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
