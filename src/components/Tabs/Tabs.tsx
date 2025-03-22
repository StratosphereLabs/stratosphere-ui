import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, useMemo } from 'react';

export interface TabData {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id: string;
  onClick?: () => void;
}

export const TAB_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type TabSize = (typeof TAB_SIZES)[number];

export interface TabsProps
  extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'onChange' | 'ref' | 'size'> {
  border?: boolean;
  box?: boolean;
  className?: string;
  lift?: boolean;
  manual?: boolean;
  onChange: (tab: TabData) => void;
  selectedTabId: string;
  size?: TabSize;
  tabs: TabData[];
  vertical?: boolean;
}

export const Tabs = ({
  border,
  box,
  children,
  className,
  lift,
  manual,
  onChange,
  selectedTabId,
  size,
  tabs,
  vertical,
  ...props
}: TabsProps) => {
  const selectedIndex = useMemo(
    () => tabs.findIndex(({ id }) => selectedTabId === id),
    [selectedTabId, tabs],
  );
  return (
    <TabGroup
      manual={manual}
      onChange={index => onChange(tabs[index])}
      selectedIndex={selectedIndex > -1 ? selectedIndex : undefined}
      vertical={vertical}
    >
      <TabList
        className={classNames(
          'tabs',
          border && 'tabs-border',
          box && 'tabs-box',
          lift && 'tabs-lift',
          size && `tabs-${size}`,
          className,
        )}
        {...props}
      >
        {tabs.map(({ children, className, disabled, id }) => (
          <Tab
            key={id}
            disabled={disabled}
            className={({ selected }) =>
              classNames(
                'tab',
                disabled && 'tab-disabled',
                selected && 'tab-active',
                className,
              )
            }
          >
            {children}
          </Tab>
        ))}
      </TabList>
      <TabPanels>{children}</TabPanels>
    </TabGroup>
  );
};
