# Link

The `Link` component is a React component that renders an anchor element (`<a>`) with additional styling options. It provides a convenient way to create links with different colors and hover effects.

## Props

The `Link` component accepts the following props:

- `className (string, optional)`: Additional CSS class names to be applied to the anchor element.
- `color (string, optional)`: The color of the link. Must be one of the predefined values from the `LINK_COLORS` array.
- `hover (boolean, optional)`: Specifies whether the link should have a hover effect.
  In addition to the above props, the `Link` component also accepts all the standard HTML attributes that can be applied to an anchor element.

## Usage

```tsx
import { Link } from 'stratosphere-ui';

// Basic usage
<Link href="https://example.com">Example Link</Link>

// Link with custom color
<Link href="https://example.com" color="primary">Primary Link</Link>

// Link with hover effect
<Link href="https://example.com" hover>Hoverable Link</Link>

// Link with custom class names
<Link href="https://example.com" className="custom-link">Custom Link</Link>
```

In the example above, the `Link` component is imported from the specified file. It can be used just like any other React component. The href prop is required and specifies the URL that the link should navigate to. Additional props like `color`, `hover`, and `className` can be used to customize the appearance and behavior of the link.
