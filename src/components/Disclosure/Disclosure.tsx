import {
  Disclosure as HeadlessUIDisclosure,
  Transition,
} from '@headlessui/react';
import classNames from 'classnames';
import { HTMLProps, ReactNode, forwardRef } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';

export interface DisclosureProps {
  buttonProps?: Omit<HTMLProps<HTMLButtonElement>, 'as' | 'ref' | 'type'>;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  rounded?: boolean;
}

export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (
    {
      buttonProps: {
        children: buttonChildren,
        className: buttonClassName,
        ...buttonProps
      } = {},
      children,
      className,
      defaultOpen,
      rounded,
    },
    ref,
  ) => (
    <HeadlessUIDisclosure
      as="div"
      className={classNames(
        'border border-base-300 bg-base-100',
        rounded && 'rounded-box',
        className,
      )}
      defaultOpen={defaultOpen}
      ref={ref}
    >
      {({ open }) => (
        <>
          <HeadlessUIDisclosure.Button
            className={classNames(
              'no-animation btn w-full justify-between capitalize hover:bg-inherit',
              rounded && 'rounded-box',
              buttonClassName,
            )}
            type="button"
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
  ),
);

Disclosure.displayName = 'Disclosure';
