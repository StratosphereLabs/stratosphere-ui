# Modal

The `Modal` component is a custom modal component built using React and DaisyUI. It allows the user to display content in a modal overlay with customizable action buttons and a close button.

## Props

- `actionButtons: ButtonProps[]`: An array of ButtonProps objects that define the action buttons for the modal.
- `onClose: () => void`: A function that is called when the modal is closed.
- `className?: string`: A string that defines the CSS classes to be applied to the modal.
- `open?: boolean`: A boolean that indicates whether the modal is open or closed.
- `responsive?: boolean`: A boolean that indicates whether the modal should be responsive.
- `title?: string`: A string that defines the title of the modal.

## Usage

To use the `Modal` component, import it from its file location and use it like a regular React component.

```tsx
import { Modal } from 'stratosphere-ui';

export const MyModal = () => {
  const actionButtons = [
    { label: 'Save', color: 'primary', onClick: () => console.log('Saved!') },
    {
      label: 'Cancel',
      color: 'secondary',
      onClick: () => console.log('Cancelled!'),
    },
  ];

  const handleClose = () => console.log('Modal closed!');

  return (
    <Modal actionButtons={actionButtons} onClose={handleClose} title="My Modal">
      <p>My modal content goes here!</p>
    </Modal>
  );
};
```

## Notes

- The `Modal` component is built using @headlessui/react and react-daisyui for the modal functionality and styling, respectively.
- The `Modal` component uses the `forwardRef` function to allow for the ref to be passed through to the underlying `Dialog.Panel` component. This is necessary for proper functionality of the modal.
