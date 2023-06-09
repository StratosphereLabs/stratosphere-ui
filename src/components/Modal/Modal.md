# Modal

The `Modal` component is a customizable modal dialog box built using React and the `@headlessui/react` library. It provides a flexible and reusable way to display content in a modal window. It supports different positions, title, action buttons, and an onClose callback function.

## Props

The `Modal` component accepts the following props:

- `actionButtons`: An array of ButtonProps objects representing the action buttons to be displayed in the modal. Each ButtonProps object should have the properties defined in the Button component.
- `children`: The content to be displayed within the modal.
- `className`: Additional CSS classes to be applied to the modal container.
- `onClose`: A callback function that will be called when the modal is closed.
- `open`: A boolean value indicating whether the modal is open or closed. When open is true, the modal will be visible.
- `responsivePosition`: (Optional) A string indicating the position of the modal. Valid values are 'top', 'bottom', or 'middle'. The default position is 'middle'.
- `title`: (Optional) A string representing the title of the modal.

## Usage

To use the `Modal` component, import it from its file location and use it like a regular React component.

```tsx
import { Modal } from 'stratosphere-ui';

function App() {
  const handleCloseModal = () => {
    // Handle modal close logic here
  };

  const handleActionButtonClick = () => {
    // Handle action button click logic here
  };

  const actionButtons = [
    {
      label: 'Save',
      onClick: handleActionButtonClick,
    },
    {
      label: 'Cancel',
      onClick: handleCloseModal,
    },
  ];

  return (
    <div>
      {/* Your application content */}
      <Modal
        actionButtons={actionButtons}
        onClose={handleCloseModal}
        open={true}
        responsivePosition="bottom"
        title="Example Modal"
      >
        <p>This is an example modal.</p>
        <p>You can add any content here.</p>
      </Modal>
    </div>
  );
}
```

In the above example, a `Modal` component is rendered with the following configuration:

- The `actionButtons` prop is set to an array of two objects representing action buttons.
- The `onClose` prop is set to a callback function that will be called when the modal is closed.
- The `open` prop is set to true, indicating that the modal should be visible.
- The `responsivePosition` prop is set to 'middle', which will position the modal in the middle of the screen.
- The `title` prop is set to "Example Modal".
- The `className` prop is set to "custom-modal", which allows custom styling of the modal.

The `content` of the modal is specified as a child element of the `Modal` component. In this example, a paragraph element is used as the content of the modal.
