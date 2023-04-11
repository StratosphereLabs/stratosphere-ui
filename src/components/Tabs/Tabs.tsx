import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, useMemo } from 'react';

export interface TabData {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id: string;
}

export interface TabsProps
  extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'onChange' | 'ref' | 'size'> {
  bordered?: boolean;
  boxed?: boolean;
  className?: string;
  defaultTabId?: string;
  lifted?: boolean;
  manual?: boolean;
  onChange: (tabId: string) => void;
  selectedTabId?: string;
  size?: 'xs' | 'sm' | 'lg';
  tabs: TabData[];
  vertical?: boolean;
}

export const Tabs = ({
  bordered,
  boxed,
  children,
  className,
  defaultTabId,
  manual,
  lifted,
  onChange,
  selectedTabId,
  size,
  tabs,
  vertical,
  ...props
}: TabsProps) => {
  const defaultIndex = useMemo(
    () => tabs.findIndex(({ id }) => defaultTabId === id),
    [defaultTabId, tabs],
  );
  const selectedIndex = useMemo(
    () => tabs.findIndex(({ id }) => selectedTabId === id),
    [selectedTabId, tabs],
  );
  return (
    <Tab.Group
      defaultIndex={defaultIndex > -1 ? defaultIndex : 0}
      manual={manual}
      onChange={index => onChange(tabs[index].id)}
      selectedIndex={selectedIndex > -1 ? selectedIndex : 0}
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
