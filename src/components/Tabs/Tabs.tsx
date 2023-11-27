import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, useMemo } from 'react';

export interface TabData {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id: string;
  onClick?: () => void;
}

export const TAB_SIZES = ['xs', 'sm', 'md', 'lg'] as const;

export type TabSize = (typeof TAB_SIZES)[number];

export interface TabsProps
  extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'onChange' | 'ref' | 'size'> {
  bordered?: boolean;
  boxed?: boolean;
  className?: string;
  lifted?: boolean;
  manual?: boolean;
  onChange?: (tab: TabData) => void;
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
    <Tab.Group
      manual={manual}
      onChange={index => onChange?.(tabs[index])}
      selectedIndex={selectedIndex > -1 ? selectedIndex : undefined}
      vertical={vertical}
    >
      <Tab.List
        className={classNames(
          'tabs',
          bordered && 'tabs-bordered',
          boxed && 'tabs-boxed',
          lifted && 'tabs-lifted',
          size && `tabs-${size}`,
          className,
        )}
        {...props}
      >
        {tabs.map(({ className, disabled, id, onClick, ...tabProps }) => (
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
            onClick={onClick}
            {...tabProps}
          />
        ))}
      </Tab.List>
      <Tab.Panels>{children}</Tab.Panels>
    </Tab.Group>
  );
};
