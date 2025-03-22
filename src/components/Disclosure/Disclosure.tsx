import {
  DisclosureButton,
  DisclosurePanel,
  Disclosure as HeadlessUIDisclosure,
} from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode, forwardRef } from 'react';

import { Button, ButtonProps } from '../Button';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';

export interface DisclosureProps {
  buttonProps?: ButtonProps;
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
        'border border-base-300',
        rounded ? 'rounded-box' : 'rounded-md',
        className,
      )}
      defaultOpen={defaultOpen}
      ref={ref}
    >
      {({ open }) => (
        <>
          <DisclosureButton
            as={Button}
            className={classNames(
              'w-full justify-between capitalize hover:bg-inherit',
              rounded ? 'rounded-box' : 'rounded-md',
              buttonClassName,
            )}
            noAnimation
            {...buttonProps}
          >
            {buttonChildren}
            {open ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </DisclosureButton>
          {open ? (
            <div className="overflow-hidden py-2">
              <DisclosurePanel
                transition
                className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                {children}
              </DisclosurePanel>
            </div>
          ) : null}
        </>
      )}
    </HeadlessUIDisclosure>
  ),
);

Disclosure.displayName = 'Disclosure';
