import classNames from 'classnames';
import { HTMLProps, ReactNode, forwardRef } from 'react';

import { CheckIcon } from '../Icons';

export interface MenuItemProps extends HTMLProps<HTMLAnchorElement> {
  active?: boolean;
  bordered?: boolean;
  borderOnHover?: boolean;
  disabled?: boolean;
  focus?: boolean;
  selected?: boolean;
  subMenu?: ReactNode;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  (
    {
      active,
      bordered,
      borderOnHover,
      children,
      className,
      disabled,
      focus,
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
          focus && 'focus',
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

MenuItem.displayName = 'MenuItem';
