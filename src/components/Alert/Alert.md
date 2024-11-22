# Alert

The `Alert` component is a React component that renders an alert box with customizable content. It accepts various props to control its behavior and appearance. Here are the details of the props:

## Props

- `actionButtons?: ({ id: string } & ButtonProps)[]`:
  An optional array of button props to render action buttons within the alert. Each item should have a unique id property and can include any ButtonProps.
- `className?: string`: An optional additional CSS class name to be added to the root div element of the alert.
- `color?: AlertColor`: An optional color for the alert. The value should be one of the predefined `AlertColor` options: `info`, `success`, `warning`, or `error`.
- `description?: string`: An optional description text to be displayed below the title.
- `icon: FC<ComponentProps<'svg'>>`: A required React functional component that represents the icon to be displayed in the alert.
- `iconClassName?: string`: An optional additional CSS class anme to be passed into the `icon` component.
- `title: string`: A required title for the alert.

The `AlertProps` interface extends `Omit<HTMLAttributes<HTMLDivElement>, 'children'>`, which includes props that can be passed directly into the HTML `div` element.

## Usage

```tsx
import { Alert, SuccessIcon } from 'stratosphere-ui';

export const CustomAlert = () => {
  const handleButtonClick = () => {
    // Handle button click event
  };

  const actionButtons = [
    {
      id: 'button-1',
      label: 'Button 1',
      onClick: handleButtonClick,
    },
    {
      id: 'button-2',
      label: 'Button 2',
      onClick: handleButtonClick,
    },
  ];

  return (
    <div>
      <Alert
        actionButtons={actionButtons}
        color="success"
        description="This is a success alert."
        icon={SuccessIcon}
        iconClassName="stroke-info"
        title="Success Alert"
        className="my-alert"
      />
    </div>
  );
};
```

In the above example, we import the `Alert` and `Button` components from their respective locations. We define an array of actionButtons with unique IDs, labels, and click event handlers. Then, we render the `Alert` component with the desired props, including actionButtons, color, description, icon, title, and an additional className.

The `Alert` component will display the success alert with the provided title, description, icon, and action buttons. The my-alert class name will be added to the root div element of the alert, allowing you to style it as needed.
