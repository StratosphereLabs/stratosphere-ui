import { Menu, MenuProps, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, forwardRef } from 'react';
import { Button, ButtonProps } from 'react-daisyui';
import { DropdownMenuItem, DropdownMenuItemProps } from './DropdownMenuItem';

export interface DropdownItem
  extends Omit<DropdownMenuItemProps, 'active' | 'disabled' | 'ref'> {
  id: string;
}

export interface DropdownMenuProps
  extends Omit<MenuProps<'div'>, 'children' | 'className'> {
  buttonProps?: ButtonProps;
  className?: string;
  dropdownItems: DropdownItem[];
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ buttonProps, className, dropdownItems, ...props }, ref): JSX.Element => (
    <Menu
      as="div"
      className={classNames('relative inline-block', className)}
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
          className="menu rounded-box absolute bg-base-100 p-2"
        >
          {dropdownItems.map(({ id, ...itemProps }) => (
            <Menu.Item as={Fragment} key={id}>
              {({ active, disabled }) => (
                <DropdownMenuItem
                  active={active}
                  disabled={disabled}
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