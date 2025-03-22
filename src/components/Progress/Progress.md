# Progress

The `Progress` component is a reusable React component that renders an HTML progress element. It provides a way to visually represent the progress of a task or an operation.

## Props

The `Progress` component accepts various props to customize its appearance and behavior. It supports all the standard HTML attributes available for the progress element.

The following props can be passed to the `Progress` component:

- `className (optional)`: A string representing additional CSS classes to be applied to the progress element.
- `color (optional)`: A string representing the color of the progress bar. It should be one of the predefined values from the `PROGRESS_COLORS` array.

## Usage

```tsx
import classNames from 'classnames';
import React from 'react';
import { PROGRESS_COLORS, Progress } from 'stratosphere-ui';

const App = () => {
  const randomColor =
    PROGRESS_COLORS[Math.floor(Math.random() * PROGRESS_COLORS.length)];

  return (
    <div>
      <h1>Task Progress</h1>
      <Progress value={50} color={randomColor} className="custom-progress" />
    </div>
  );
};

export default App;
```

In the above example, the `Progress` component is imported and used within the `App` component. It renders a progress bar with a randomly selected color from the predefined `PROGRESS_COLORS` array. The value prop determines the progress value to be displayed. Additional CSS classes can be applied using the `className` prop.
