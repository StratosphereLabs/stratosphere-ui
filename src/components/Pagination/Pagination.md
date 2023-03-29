# Pagination

The `Pagination` component is a React component that renders a pagination control for navigating through a list of items. It is based on the `Pagination` component from the react-daisyui library.

## Props

The component accepts the following props:

- `metadata?: PaginationMetadata`:
  An object that contains metadata about the pagination. It has the following properties:
  - `page: number`: the current page.
  - `pageCount: number`: the total number of pages.
  - `limit: number`: the maximum number of items per page.
  - `itemCount: number`: the total number of items.
- `onPaginationChange?: boolean`:
  A function that is called when the user changes the page. It receives the new page number as an argument.
- `size?: string`:
  The size of the buttons. Can be one of 'sm', 'md', or 'lg'. Defaults to 'md'.

## Usage

```tsx
import { useState } from 'react';
import { Pagination, PaginationMetadata } from 'stratosphere-ui';

export const MyComponent = () => {
  const [metadata, setMetadata] = useState<PaginationMetadata>({
    page: 1,
    pageCount: 10,
    limit: 20,
    itemCount: 200,
  });
  const handlePaginationChange = (page: number) => {
    setMetadata(prevMetadata => ({
      ...prevMetadata,
      page,
    }));
  };
  return (
    <div>
      <ul>{/* render items for the current page */}</ul>
      <Pagination
        metadata={metadata}
        onPaginationChange={handlePaginationChange}
        size="lg"
      />
    </div>
  );
};
```

In the example above, the `Pagination` component is used to render a pagination control for a list of items. The current page is stored in the component's state, and the `handlePaginationChange` function is called when the user changes the page. The `size` prop is also passed to the component to control the size of the buttons.
