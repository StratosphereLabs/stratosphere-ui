# Button

The `Button` component is a customizable button element that can be used in React applications. It accepts various props to modify its appearance and behavior.

## Props

The following props can be passed to the `Button` component:

- `active (boolean, optional)`: Determines whether the button should be in an active state.
- `as ('a' | 'button', optional)`: Specifies the element type to be rendered. It can be either an anchor ('a') or a button ('button'). The default value is 'button'.
- `block (boolean, optional)`: Makes the button expand to fill its container's width.
- `children (ReactNode, optional)`: The content to be rendered within the button.
- `className (string, optional)`: Additional CSS class names to apply to the button element.
- `color (ButtonColor, optional)`: Sets the color of the button. Possible values are defined in `BUTTON_COLORS` constant.
- `disabled (boolean, optional)`: Disables the button if set to true.
- `glass (boolean, optional)`: Applies a glass effect to the button.
- `link (boolean, optional)`: Renders the button as a link.
- `loading (boolean, optional)`: Displays a loading spinner inside the button.
- `noAnimation (boolean, optional)`: Disables animations for the button.
- `outline (boolean, optional)`: Renders the button with an outline.
- `shape (ButtonShape, optional)`: Sets the shape of the button. Possible values are defined in `BUTTON_SHAPES` constant.
- `size (ButtonSize, optional)`: Sets the size of the button. Possible values are defined in `BUTTON_SIZES` constant.
- `wide (boolean, optional)`: Makes the button occupy more horizontal space.
  Additionally, all other standard button HTML attributes can be used.

## Usage

```tsx
import { Button } from 'stratosphere-ui';

function App() {
  return (
    <div>
      <Button color="primary" size="md" disabled>
        Click me
      </Button>
      <Button outline shape="circle" wide>
        <span>+</span>
      </Button>
      <Button as="a" href="#" link>
        Go to website
      </Button>
      <Button block glass>
        Submit
      </Button>
      <Button loading>Loading</Button>
    </div>
  );
}
```

In the example above, we import the Button component and use it multiple times with different props. The buttons are customized with various colors, sizes, shapes, and additional features like disabled state, outline style, wide width, link behavior, glass effect, and loading spinner.

Feel free to modify the props and content according to your specific requirements.
