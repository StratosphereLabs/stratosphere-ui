# Badge

A customizable badge component with dismissible option and optional icon.

## Props

- `children?: React.ReactNode`: The content to be displayed inside the badge.
- `className?: string`: The CSS class to apply to the badge container.
- `dismissable?: string`: A boolean indicating whether the badge can be dismissed by clicking on a close button.
- `icon?: FC<ComponentProps<'svg'>>`: An SVG icon component to display on the left side of the badge content.
- `onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void`: A callback function to be called when the dismiss button is clicked.

## Usage

```tsx
import { Badge, BellIcon } from 'stratosphere-ui';

export const NotificationBadge = ({ count, onDismiss }) => (
  <Badge color="primary" dismissable onDismiss={onDismiss} icon={BellIcon}>
    {count} new notifications
  </Badge>
);
```

In the example above, the `NotificationBadge` component displays a badge with the number of new notifications and a bell icon. The badge can be dismissed by clicking on the close button, which calls the `onDismiss` callback function.
