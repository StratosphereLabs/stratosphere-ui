import {
  Popover as HeadlessUIPopover,
  PopoverProps as HeadlessUIPopoverProps,
  Transition,
} from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef, Fragment, MutableRefObject } from 'react';
import { Button, ButtonProps } from 'react-daisyui';

export interface PopoverPanelRenderProps {
  open: boolean;
  close: (
    focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>,
  ) => void;
}

export interface PopoverProps
  extends Omit<HeadlessUIPopoverProps<'div'>, 'className'> {
  buttonProps: ButtonProps;
  className?: string;
  popoverComponent: ({ open, close }: PopoverPanelRenderProps) => JSX.Element;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    { buttonProps, className, popoverComponent, ...props }: PopoverProps,
    ref,
  ): JSX.Element => (
    <HeadlessUIPopover
      as="div"
      className={classNames('relative inline-block', className)}
      ref={ref}
      {...props}
    >
      <HeadlessUIPopover.Button as={Button} {...buttonProps} />
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <HeadlessUIPopover.Panel
          as="div"
          className="rounded-box absolute bg-base-100 p-2 shadow"
        >
          {popoverComponent}
        </HeadlessUIPopover.Panel>
      </Transition>
    </HeadlessUIPopover>
  ),
);

Popover.displayName = 'Popover';
