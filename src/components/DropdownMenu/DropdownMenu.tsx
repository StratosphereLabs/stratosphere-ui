import {
  Menu as HeadlessUIMenu,
  MenuItem as HeadlessUIMenuItem,
  MenuButton,
  MenuItems,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import classNames from 'classnames';
import { Fragment, forwardRef } from 'react';

import { Button, ButtonProps } from '../Button';
import { Menu, MenuItem, MenuItemProps, MenuSize } from '../Menu';

export interface DropdownItemProps
  extends Omit<MenuItemProps, 'disabled' | 'focus' | 'ref'> {
  id: string;
}

export interface DropdownMenuProps {
  anchor?: AnchorProps;
  buttonProps?: ButtonProps;
  items: DropdownItemProps[];
  menuClassName?: string;
  menuSize?: MenuSize;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ anchor, buttonProps, items, menuClassName, menuSize }, ref) => (
    <HeadlessUIMenu ref={ref}>
      <MenuButton as={Button} {...buttonProps} />
      <MenuItems
        anchor={anchor ?? 'bottom start'}
        as={Menu}
        size={menuSize}
        transition
        className={classNames(
          'origin-top shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
          menuClassName,
        )}
      >
        {items.map(({ id, ...itemProps }) => (
          <HeadlessUIMenuItem as={Fragment} key={id}>
            {({ disabled }) => <MenuItem disabled={disabled} {...itemProps} />}
          </HeadlessUIMenuItem>
        ))}
      </MenuItems>
    </HeadlessUIMenu>
  ),
);

DropdownMenu.displayName = 'DropdownMenu';
