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
  portal?: boolean;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      anchor,
      buttonProps,
      className,
      popoverClassName,
      popoverComponent,
      portal,
    }: PopoverProps,
    ref,
  ) => (
    <HeadlessUIPopover className={className} ref={ref}>
      <PopoverButton as={Button} {...buttonProps} />
      <PopoverPanel
        as="div"
        anchor={anchor}
        portal={portal}
        transition
        className={classNames(
          'flex origin-top flex-col rounded-box p-2 shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
          popoverClassName,
        )}
      >
        {popoverComponent}
      </PopoverPanel>
    </HeadlessUIPopover>
  ),
);

Popover.displayName = 'Popover';
