import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, useMemo } from 'react';

export interface TabData {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id: string;
  paths?: string[];
}

export const TAB_SIZES = ['xs', 'sm', 'md', 'lg'];

export type TabSize = (typeof TAB_SIZES)[number];

export interface TabsProps
  extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'onChange' | 'ref' | 'size'> {
  bordered?: boolean;
  boxed?: boolean;
  className?: string;
  lifted?: boolean;
  manual?: boolean;
  onChange: (tab: TabData) => void;
  pathname?: string;
  selectedTabId?: string;
  size?: TabSize;
  tabs: TabData[];
  vertical?: boolean;
}

export const Tabs = ({
  bordered,
  boxed,
  children,
  className,
  manual,
  lifted,
  onChange,
  pathname,
  selectedTabId,
  size,
  tabs,
  vertical,
  ...props
}: TabsProps) => {
  const selectedIndex = useMemo(
    () =>
      tabs.findIndex(({ id, paths }) =>
        pathname ? paths?.includes(pathname) : selectedTabId === id,
      ),
    [pathname, selectedTabId, tabs],
  );
  return (
    <Tab.Group
      manual={manual}
      onChange={index => onChange(tabs[index])}
      selectedIndex={selectedIndex > -1 ? selectedIndex : undefined}
      vertical={vertical}
    >
      <Tab.List
        className={classNames('tabs', boxed && 'tabs-boxed', className)}
        {...props}
      >
        {tabs.map(({ className, disabled, id, ...tabProps }) => (
          <Tab
            key={id}
            disabled={disabled}
            className={({ selected }) =>
              classNames(
                'tab',
                bordered && 'tab-bordered',
                disabled && 'tab-disabled',
                lifted && 'tab-lifted',
                selected && 'tab-active',
                size && `tab-${size}`,
                className,
              )
            }
            {...tabProps}
          />
        ))}
      </Tab.List>
      <Tab.Panels>{children}</Tab.Panels>
    </Tab.Group>
  );
};
