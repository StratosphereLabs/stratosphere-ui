# Tooltip

The `Tooltip` component is a customizable tooltip that can be used to provide additional information or context to users when hovering or interacting with certain elements.

## Props

The `Tooltip` component accepts the following props:

- `className (optional)`: Additional CSS class name(s) to apply to the tooltip container.
- `color (optional)`: Specifies the color scheme of the tooltip. Must be one of the following values:
  'primary'
  'secondary'
  'accent'
  'info'
  'warning'
  'success'
  'error'
- `open (optional)`: Controls the visibility of the tooltip. Set it to true to show the tooltip, or false to hide it. By default, the tooltip is hidden.
- `position (optional)`: Specifies the position of the tooltip relative to the target element. Must be one of the following values:
  'top'
  'bottom'
  'left'
  'right'
- `text (required)`: The text content of the tooltip.
  In addition to these props, the `Tooltip` component also accepts all standard HTML attributes that can be applied to a `<div>` element.

## Usage

```tsx
import React from 'react';
import { Tooltip } from 'stratosphere-ui';

const App = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Hover over the button below to see a tooltip with more information.</p>
      <Tooltip text="Click this button to submit the form">
        <button>Submit</button>
      </Tooltip>
    </div>
  );
};

export default App;
```

In the example above, the `Tooltip` component is used to wrap a `<button>` element. When the user hovers over the button, a tooltip will appear with the text "Click this button to submit the form". The default position and color of the tooltip will be used.
