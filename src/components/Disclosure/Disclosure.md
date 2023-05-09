# Disclosure

The `Disclosure` component is a React component that provides an accessible implementation of a disclosure UI element. The component uses the `@headlessui/react` and `react-daisyui` libraries to implement the disclosure functionality and styling.

## Props

The `Disclosure` component accepts the following props:

- `buttonProps: ButtonProps`:
  An object containing props to pass down to the Button component.
- `children: ReactNode`:
  The content to be revealed when the disclosure is expanded.
- `className: string`:
  A string of CSS classes to apply to the container component.
- `rounded: boolean`:
  A boolean indicating whether to apply rounded corners to the Disclosure component.

## Usage

To use the `Disclosure` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { Disclosure } from 'stratosphere-ui';

export const MyDisclosure = () => {
  return (
    <Disclosure buttonProps={{ color: 'ghost' }}>
      <div className="flex-1">Disclosure Content</div>
    </Disclosure>
  );
};
```
