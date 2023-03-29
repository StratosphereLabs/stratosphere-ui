# FullScreenLoader

The `FullScreenLoader` component is a React component that displays a full-screen loader with a progress bar using the `Progress` component from the react-daisyui library.

## Props

This component does not accept any props.

## Usage

```tsx
import { useState } from 'react';
import { FullScreenLoader } from 'stratosphere-ui';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <div>
          <h1>Welcome to My App!</h1>
          {/* Your app content goes here */}
        </div>
      )}
    </div>
  );
};
```

In this example, the `FullScreenLoader` component is shown when the `isLoading` state is true, and the app content is shown when the `isLoading` state is false. The `isLoading` state is set to false after a delay of 3 seconds using the `useEffect` hook.
