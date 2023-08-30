# ButtonArray

The `ButtonArray` component is a reusable React component that renders an array of Buttons and can collapse into a Dropdown menu. It accepts various props to modify its appearance and behavior.

## Props

The `ButtonArray` component accepts the following props:

- `buttonOptions (required)`: An array of objects representing the individual buttons and their properties. Each object should have the following properties:
  - `children`: (ReactNode) The content of the button.
  - `className`: (string) Additional CSS class for the button.
  - `icon`: (React Component) The icon component to be displayed.
  - `key`: (Key) A unique key for the button.
  - `menuText`: (string) Text to be displayed in the button's dropdown menu.
  - `onClick`: (function) Callback function to be executed when the button is clicked.
    Additional props from `ButtonProps` are also accepted (excluding `onClick`).
  - `tooltipText`: (string) An optional string that customizes the text for the tooltip. Defaults to `menuText`.
- `className`: (string) Additional CSS class for the component.
- `collapseAt`: (string) Screen size breakpoint at which buttons collapse into a dropdown menu ('sm', 'md', 'lg', 'xl').
- `dropdownMenuProps`: (object) Props to customize the dropdown menu:
- `withTooltips`: (boolean) An optional boolean that enables tooltips when hovering over buttons.

## Usage

```tsx
import { ButtonArray } from 'stratosphere-ui';

const MyComponent = () => {
  const buttonOptions = [
    {
      icon: MyIconComponent,
      key: 'button1',
      menuText: 'Button 1 Menu',
      onClick: () => {
        /* Handle button 1 click */
      },
    },
    {
      icon: AnotherIconComponent,
      key: 'button2',
      menuText: 'Button 2 Menu',
      onClick: () => {
        /* Handle button 2 click */
      },
    },
    // ... more button options
  ];

  return (
    <ButtonArray
      buttonOptions={buttonOptions}
      className="my-button-array"
      collapseAt="md"
      dropdownMenuProps={{
        menuSize: 'lg',
        // ... other dropdown menu props
      }}
    />
  );
};
```

## Notes

- When `collapseAt` is provided, the buttons will collapse into a dropdown menu when the screen width is below the specified breakpoint.
- The `buttonOptions` array defines the buttons and their behaviors. Each button can have an optional dropdown menu.
- The `icon` property in each `buttonOptions` object should be a valid React component representing an SVG icon.
