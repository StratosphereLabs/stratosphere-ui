# Popover

The `Popover` component is a wrapper around the `Popover` component from the `@headlessui/react` library. It provides a popover UI element that can be triggered by a button and displays a custom component as its content. The `Popover` component offers additional features such as backdrop support and customizable styling.

## Props

The `Popover` component accepts the following props:

- `buttonProps: ButtonProps`: Props to be passed to the underlying `Button` component that triggers the popover.
- `className?: string`: Additional CSS classes to be applied to the root element of the popover.
- `popoverClassName?: string`: Additional CSS classes to be applied to the popover panel element.
- `popoverComponent: ({ open, close }: PopoverPanelRenderProps) => JSX.Element`: A function that receives an object containing the open and close functions and returns the JSX element to be rendered within the popover panel.
- `withBackdrop?: boolean`: Determines whether to show a backdrop behind the popover.

## Usage

```tsx
import { Popover } from 'stratosphere-ui';

// Example usage of the Popover component
export const MyPopover = () => {
  const openPopover = () => {
    // logic to open the popover
  };

  const closePopover = () => {
    // logic to close the popover
  };

  const popoverContent = ({ open, close }) => (
    <div>
      <p>This is the content of the popover.</p>
      <button onClick={close}>Close</button>
    </div>
  );

  return (
    <Popover
      buttonProps={{ onClick: openPopover }}
      popoverComponent={popoverContent}
      withBackdrop={true}
    />
  );
};
```

In the above example, when the button within the `Popover` component is clicked, the popover is opened, displaying the content returned by the `popoverComponent` function. The `withBackdrop` prop is set to true, which adds a backdrop behind the popover. The `openPopover` and `closePopover` functions are used to control the visibility of the popover.
