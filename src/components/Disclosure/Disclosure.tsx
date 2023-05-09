import {
  Disclosure as HeadlessUIDisclosure,
  Transition,
} from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { Button, ButtonProps } from 'react-daisyui';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';

export interface DisclosureProps {
  buttonProps?: ButtonProps;
  children: ReactNode;
  className?: string;
  rounded?: boolean;
}

export const Disclosure = ({
  buttonProps: {
    children: buttonChildren,
    className: buttonClassName,
    ...buttonProps
  } = {},
  children,
  className,
  rounded,
}: DisclosureProps) => {
  return (
    <HeadlessUIDisclosure
      as="div"
      className={classNames(
        'border border-base-300 bg-base-100',
        rounded && 'rounded-box',
        className,
      )}
    >
      {({ open }) => (
        <>
          <HeadlessUIDisclosure.Button
            as={Button}
            animation={false}
            className={classNames(
              'w-full justify-between capitalize hover:bg-inherit',
              rounded && 'rounded-box',
              buttonClassName,
            )}
            {...buttonProps}
          >
            {buttonChildren}
            {open ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </HeadlessUIDisclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <HeadlessUIDisclosure.Panel className="p-2">
              {children}
            </HeadlessUIDisclosure.Panel>
          </Transition>
        </>
      )}
    </HeadlessUIDisclosure>
  );
};
