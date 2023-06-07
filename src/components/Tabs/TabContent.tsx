import { Tab } from '@headlessui/react';
import { HTMLProps } from 'react';

export type TabContentProps = Omit<HTMLProps<HTMLDivElement>, 'as' | 'ref'>;

export const TabContent = (props: TabContentProps) => <Tab.Panel {...props} />;
