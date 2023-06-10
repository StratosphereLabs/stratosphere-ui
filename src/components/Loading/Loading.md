# Loading

The `Loading` component is a reusable component in React that displays a loading indicator. It provides different shapes and sizes for customization and can be easily integrated into your React applications.

## Props

The `Loading` component accepts the following props:

- `className (optional)`: Additional CSS classes to be applied to the component.
- `shape (optional)`: Specifies the shape of the loading indicator. It accepts one of the predefined shapes: 'spinner', 'dots', 'ring', 'ball', 'bars', or 'infinity'.
- `size (optional)`: Specifies the size of the loading indicator. It accepts one of the predefined sizes: 'xs', 'sm', 'md', or 'lg'.

Additionally, the component accepts all the standard HTML attributes that can be applied to a `<span>` element.

## Usage

```tsx
import React from 'react';
import { Loading } from 'stratosphere-ui';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>Loading content...</p>
      <Loading shape="spinner" size="md" className="loading-custom" />
    </div>
  );
};

export default App;
```

In the example above, the `Loading` component is used to display a loading indicator while the content is being loaded. It is customized with the shape set to 'spinner' and size set to 'md'. The `className` prop is used to apply a custom CSS class for additional styling if needed.
