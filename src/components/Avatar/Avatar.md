# Avatar

The `Avatar` component is a reusable React component that displays an avatar image or icon. It supports various customization options such as offline and online status indicators, a placeholder state, and the ability to add additional CSS classes for styling.

## Props

The `Avatar` component accepts the following props:

- `children (ReactNode)`: The content to be rendered within the avatar. It can be an image, an icon, or any other valid React element.
- `className (string)`: Additional CSS class(es) to be applied to the outer `<div>` element of the avatar.
- `isOffline (boolean)`: If set to true, adds the "offline" class to the avatar. This can be used to indicate that the user is currently offline.
- `isOnline (boolean)`: If set to true, adds the "online" class to the avatar. This can be used to indicate that the user is currently online.
- `isPlaceholder (boolean)`: If set to true, adds the "placeholder" class to the avatar. This can be used to display a placeholder avatar image when the actual image is not available.
- `shapeClassName (string)`: Additional CSS class(es) to be applied to the inner `<div>` element that wraps the avatar content. This can be used to customize the shape or add specific styles to the avatar content.

All other props (`HTMLAttributes<HTMLDivElement>`): Any additional props supported by the HTML `<div>` element can be passed to the `Avatar` component and will be forwarded to the underlying `<div>` element.

## Usage

```tsx
import React from 'react';
import { Avatar } from 'stratosphere-ui';

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <Avatar
        className="user-avatar"
        isOffline={false}
        isOnline={true}
        isPlaceholder={false}
        shapeClassName="circle"
        alt="User Avatar"
        src="/path/to/avatar.png"
      />
    </div>
  );
};

export default UserProfile;
```

In the example above, the `Avatar` component is used within a `UserProfile` component. It sets the `className` prop to "user-avatar" to add custom styles to the avatar. The `isOnline` prop is set to true, indicating that the user is currently online. The `isOffline` and `isPlaceholder` props are set to false to disable the offline status indicator and placeholder image features. The `shapeClassName` prop is set to "circle" to apply additional styles to the avatar content. The `alt` and `src` props are standard HTML attributes that can be used to specify the alternative text and image source for the avatar.
