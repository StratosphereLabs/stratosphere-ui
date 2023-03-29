# LoadingCard

The `LoadingCard` component is a React component that wraps around the `Card` component from the react-daisyui library. It provides an optional loading state where a full-screen loader is displayed while the component is loading.

## Props

The `LoadingCardProps` interface extends the `CardProps` interface from react-daisyui and adds an optional `isLoading` prop.

- `isLoading?: boolean`: Determines whether the component should display a loading state or not. Defaults to false.

## Usage

```tsx
import { useState } from 'react';
import { LoadingCard } from 'stratosphere-ui';

export const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    // perform some asynchronous operation here
    setIsLoading(false);
  };
  return (
    <LoadingCard isLoading={isLoading}>
      <button onClick={handleClick}>Load Data</button>
      <div>Your data here</div>
    </LoadingCard>
  );
};
```

In this example, we use the `LoadingCard` component to display some data that is loaded asynchronously. When the user clicks the "Load Data" button, the isLoading state is set to true, which displays the loading state. Once the data has been loaded, the isLoading state is set back to false, which displays the data.
