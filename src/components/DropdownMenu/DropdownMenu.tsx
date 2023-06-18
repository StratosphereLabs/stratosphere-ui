import { Menu, MenuProps, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import {
  DropdownMenuItem,
  DropdownMenuItemProps,
  MenuSize,
} from './DropdownMenuItem';

export interface DropdownItem
  extends Omit<DropdownMenuItemProps, 'active' | 'disabled' | 'ref'> {
  id: string;
}

export interface DropdownMenuProps
  extends Omit<MenuProps<'div'>, 'as' | 'children' | 'className'> {
  buttonProps?: ButtonProps;
  className?: string;
  items: DropdownItem[];
  menuClassName?: string;
  menuSize?: MenuSize;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    { buttonProps, className, items, menuClassName, menuSize, ...props },
    ref,
  ) => (
    <Menu
      as="div"
      className={classNames('relative', className)}
      ref={ref}
      {...props}
    >
      <Menu.Button as={Button} {...buttonProps} />
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          as="ul"
          className={classNames(
            'menu absolute z-50 bg-base-100 shadow-xl',
            menuSize && `menu-${menuSize}`,
            menuClassName,
          )}
        >
          {items.map(({ id, ...itemProps }) => (
            <Menu.Item as={Fragment} key={id}>
              {({ active, disabled }) => (
                <DropdownMenuItem
                  disabled={disabled}
                  focus={active}
                  {...itemProps}
                />
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  ),
);

DropdownMenu.displayName = 'DropdownMenu';
