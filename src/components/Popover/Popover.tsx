import {
  Popover as HeadlessUIPopover,
  PopoverProps as HeadlessUIPopoverProps,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import classNames from 'classnames';
import { MutableRefObject, forwardRef } from 'react';

import { Button, ButtonProps } from '../Button';

export interface PopoverPanelRenderProps {
  open: boolean;
  close: (
    focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>,
  ) => void;
}

export interface PopoverProps
  extends Omit<HeadlessUIPopoverProps<'div'>, 'as' | 'className'> {
  anchor?: AnchorProps;
  buttonProps: ButtonProps;
  className?: string;
  popoverClassName?: string;
  popoverComponent: ({ open, close }: PopoverPanelRenderProps) => JSX.Element;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      anchor,
      buttonProps,
      className,
      popoverClassName,
      popoverComponent,
    }: PopoverProps,
    ref,
  ) => (
    <HeadlessUIPopover ref={ref}>
      <PopoverButton
        as={Button}
        className={classNames(className, buttonProps.className)}
        {...buttonProps}
      />
      <PopoverPanel
        as="div"
        anchor={anchor ?? 'bottom start'}
        transition
        className={classNames(
          'flex origin-top flex-col p-2 shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
          popoverClassName,
        )}
      >
        {popoverComponent}
      </PopoverPanel>
    </HeadlessUIPopover>
  ),
);

Popover.displayName = 'Popover';
