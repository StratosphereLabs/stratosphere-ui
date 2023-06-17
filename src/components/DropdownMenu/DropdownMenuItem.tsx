import classNames from 'classnames';
import { HTMLProps, ReactNode, forwardRef } from 'react';
import { CheckIcon } from '../Icons';

export const MENU_SIZES = ['xs', 'sm', 'md', 'lg'] as const;

export type MenuSize = (typeof MENU_SIZES)[number];

export interface DropdownMenuItemProps extends HTMLProps<HTMLAnchorElement> {
  active?: boolean;
  bordered?: boolean;
  borderOnHover?: boolean;
  disabled?: boolean;
  selected?: boolean;
  subMenu?: ReactNode;
}

export const DropdownMenuItem = forwardRef<
  HTMLAnchorElement,
  DropdownMenuItemProps
>(
  (
    {
      active,
      bordered,
      borderOnHover,
      children,
      className,
      disabled,
      selected,
      subMenu,
      ...props
    },
    ref,
  ) => (
    <li
      className={classNames(
        bordered && 'bordered',
        borderOnHover && 'hover-bordered',
        disabled && 'disabled',
        className,
      )}
    >
      <a
        className={classNames(
          active && 'active',
          !disabled && 'cursor-pointer',
        )}
        ref={ref}
        {...props}
      >
        {selected !== undefined ? (
          <div className="flex w-4 justify-center">
            {selected ? <CheckIcon className="h-4 w-4" /> : null}
          </div>
        ) : null}
        {children}
      </a>
      {subMenu}
    </li>
  ),
);

DropdownMenuItem.displayName = 'DropdownMenuItem';
