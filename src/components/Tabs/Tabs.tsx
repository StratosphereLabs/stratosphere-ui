import { Tab, TabListProps } from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface TabData {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id: string;
}

export interface TabsProps
  extends Omit<TabListProps<'div'>, 'className' | 'onChange'> {
  bordered?: boolean;
  boxed?: boolean;
  className?: string;
  lifted?: boolean;
  onChange: (tab: TabData) => void;
  size?: 'xs' | 'sm' | 'lg';
  tabs: TabData[];
}

export const Tabs = ({
  bordered,
  boxed,
  children,
  className,
  lifted,
  onChange,
  size,
  tabs,
  ...props
}: TabsProps) => (
  <Tab.Group onChange={index => onChange(tabs[index])}>
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
