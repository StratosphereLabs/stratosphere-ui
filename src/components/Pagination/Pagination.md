# Pagination

The `Pagination` component is a React component that displays a set of buttons representing pages for navigating through a collection of data. It provides an intuitive user interface for pagination functionality.

## Props

The `Pagination` component accepts the following props:

- `className (optional)`: Additional CSS classes to be applied to the root div element.
- `metadata (optional)`: `PaginationMetadata` object that contains information about the current page and the total number of pages. It has the following properties:
  - `page: number`: the current page.
  - `pageCount: number`: the total number of pages.
  - `limit: number`: the maximum number of items per page.
  - `itemCount: number`: the total number of items.
- `onPaginationChange (required)`: Callback function invoked when a page button is clicked. It receives the selected page number as a parameter.
- `size (optional)`: Size of the pagination buttons. It accepts the same values as the `Button` component's `size` prop.

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
