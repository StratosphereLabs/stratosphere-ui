import { Menu as HeadlessUIMenu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, HTMLProps, forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import { Menu, MenuItem, MenuItemProps, MenuSize } from '../Menu';

export interface DropdownItemProps
  extends Omit<MenuItemProps, 'disabled' | 'focus' | 'ref'> {
  id: string;
}

export interface DropdownMenuProps
  extends Omit<
    HTMLProps<HTMLDivElement>,
    'as' | 'children' | 'className' | 'ref'
  > {
  buttonProps?: ButtonProps;
  className?: string;
  items: DropdownItemProps[];
  menuClassName?: string;
  menuSize?: MenuSize;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    { buttonProps, className, items, menuClassName, menuSize, ...props },
    ref,
  ) => (
    <HeadlessUIMenu
      as="div"
      className={classNames('relative', className)}
      ref={ref}
      {...props}
    >
      <HeadlessUIMenu.Button as={Button} {...buttonProps} />
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <HeadlessUIMenu.Items
          as={Menu}
          size={menuSize}
          className={classNames(
            'absolute z-50 bg-base-100 shadow-xl',
            menuClassName,
          )}
        >
          {items.map(({ id, ...itemProps }) => (
            <HeadlessUIMenu.Item as={Fragment} key={id}>
              {({ active, disabled }) => (
                <MenuItem disabled={disabled} focus={active} {...itemProps} />
              )}
            </HeadlessUIMenu.Item>
          ))}
        </HeadlessUIMenu.Items>
      </Transition>
    </HeadlessUIMenu>
  ),
);

DropdownMenu.displayName = 'DropdownMenu';
