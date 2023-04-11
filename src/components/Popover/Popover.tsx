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
  extends Omit<HeadlessUIPopoverProps<'div'>, 'as' | 'className'> {
  buttonProps: Omit<ButtonProps, 'as'>;
  className?: string;
  popoverClassName?: string;
  popoverComponent: ({ open, close }: PopoverPanelRenderProps) => JSX.Element;
  withBackdrop?: boolean;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      buttonProps,
      className,
      popoverClassName,
      popoverComponent,
      withBackdrop,
      ...props
    }: PopoverProps,
    ref,
  ): JSX.Element => (
    <HeadlessUIPopover
      as="div"
      className={classNames('relative', className)}
      ref={ref}
      {...props}
    >
      <HeadlessUIPopover.Button as={Button} {...buttonProps} />
      {withBackdrop ? (
        <HeadlessUIPopover.Overlay className="fixed inset-0 bg-black opacity-30" />
      ) : null}
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
          className={classNames(
            'absolute z-50 bg-base-100 p-2 shadow',
            popoverClassName,
          )}
        >
          {popoverComponent}
        </HeadlessUIPopover.Panel>
      </Transition>
    </HeadlessUIPopover>
  ),
);

Popover.displayName = 'Popover';
