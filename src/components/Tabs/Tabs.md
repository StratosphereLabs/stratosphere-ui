# Tabs

The `Tabs` component is a reusable component in React that provides a tabbed interface. It allows users to switch between different sections of content by clicking on the corresponding tab.

## Props

The `Tabs` component accepts the following props:

- `bordered (optional)`: A boolean indicating whether the tabs should have a border. Default: false.
- `boxed (optional)`: A boolean indicating whether the tabs should have a boxed style. Default: false.
- `className (optional)`: Additional CSS classes to be applied to the component.
- `lifted (optional)`: A boolean indicating whether the active tab should have a lifted effect. Default: false.
- `manual (optional)`: A boolean indicating whether the tab switching should be controlled manually. Default: false.
- `onChange (required)`: A callback function invoked when a tab is changed. It receives the selected tab data as a parameter.
- `pathname (optional)`: The current pathname used for determining the selected tab based on the paths property of each tab data object.
- `selectedTabId (optional)`: The ID of the selected tab. If provided, it overrides the selected tab based on the pathname.
- `size (optional)`: The size of the tabs. Must be one of the following: 'xs', 'sm', 'md', 'lg'. Default: undefined.
- `tabs (required)`: An array of tab data objects. Each tab data object should have the following properties:
  - `children (optional)`: The content to be displayed in the tab panel.
  - `className (optional)`: Additional CSS classes to be applied to the tab.
  - `disabled (optional)`: A boolean indicating whether the tab is disabled. Default: false.
  - `id (required)`: The ID of the tab.
  - `paths (optional)`: An array of path strings. If the pathname prop is provided, the tab will be selected if its paths array includes the pathname.

## Usage

```tsx
import { Tabs } from 'stratosphere-ui';

const MyComponent = () => {
  const handleTabChange = tab => {
    console.log('Selected Tab:', tab);
    // Perform additional actions based on the selected tab
  };

  const tabs = [
    {
      id: 'tab1',
      children: 'Tab 1 Content',
      className: 'custom-tab',
    },
    {
      id: 'tab2',
      children: 'Tab 2 Content',
      disabled: true,
    },
    {
      id: 'tab3',
      children: 'Tab 3 Content',
      paths: ['/path1', '/path2'],
    },
  ];

  return (
    <Tabs
      bordered
      boxed
      className="my-tabs"
      lifted
      onChange={handleTabChange}
      pathname="/path1"
      selectedTabId="tab1"
      size="md"
      tabs={tabs}
    />
  );
};
```

In the above example, the `Tabs` component is used with various props. It renders three tabs, each with its own content. The `onChange` prop specifies a callback function that will be called when a tab is changed, and the selected tab data will be logged to the console. The `pathname` and `selectedTabId` props are used to set the initially selected tab. The `size` prop is set to 'md' to specify the size of the tabs. The `bordered`, `boxed`, and `lifted` props are set to true to apply corresponding styles to the tabs.
