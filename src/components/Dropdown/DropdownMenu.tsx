import classNames from 'classnames';
import { Children, forwardRef } from 'react';
import { Menu, MenuProps } from 'react-daisyui';

export type DropdownMenuProps = MenuProps;

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ children, className, ...props }, ref): JSX.Element => (
    <Menu
      className={classNames(
        'p-2',
        'rounded-box',
        Children.toArray(children).length === 0 && 'hidden',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Menu>
  ),
);

DropdownMenu.displayName = 'DropdownMenu';
