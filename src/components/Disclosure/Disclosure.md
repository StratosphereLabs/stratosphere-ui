# Disclosure

The `Disclosure` component is a custom wrapper component built using React and the Headless UI library. It provides a collapsible content section with a toggle button that can be used to show or hide the content. It is designed to be flexible and customizable, allowing you to pass in your own button props and content.

## Props

The `Disclosure` component accepts the following props:

- `buttonProps?: ButtonProps`: An optional object that contains props to be passed to the toggle button component (`Button`). This allows you to customize the appearance and behavior of the button. See the `Button` documentation for more details.
- `children: ReactNode`: The content to be displayed when the disclosure is open.
- `className?: string`: An optional CSS class name to be applied to the root element of the disclosure component.
- `defaultOpen?: boolean`: An optional boolean value indicating whether the disclosure should be open by default. When true, the content is initially visible; when false, the content is initially hidden. Default value is false.
- `rounded?: boolean`: An optional boolean value indicating whether to apply rounded corners to the disclosure container. Default value is false.

## Usage

To use the `Disclosure` component, simply import it into your React component and render it with the appropriate props:

```tsx
import { Disclosure } from 'stratosphere-ui';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Disclosure
        buttonProps={{
          className: 'bg-blue-500 text-white',
        }}
        defaultOpen={true}
        rounded={true}
      >
        <h2>Toggle Content</h2>
        <p>This content is collapsible.</p>
      </Disclosure>
    </div>
  );
};

export default App;
```

In the above example, the `Disclosure` component is used to wrap a section of content that can be toggled. The disclosure is initially open (`defaultOpen={true}`), and the container has rounded corners (`rounded={true}`). The button that controls the toggle has a custom class name (`bg-blue-500 text-white`), which styles it with a blue background and white text. The content inside the disclosure container consists of an `<h2>` heading and a `<p>` paragraph.
