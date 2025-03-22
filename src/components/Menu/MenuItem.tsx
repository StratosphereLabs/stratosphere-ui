import classNames from 'classnames';
import { HTMLProps, ReactNode, forwardRef } from 'react';

import { CheckIcon } from '../Icons';

export interface MenuItemProps
  extends Omit<HTMLProps<HTMLAnchorElement>, 'title'> {
  active?: boolean;
  disabled?: boolean;
  focus?: boolean;
  selected?: boolean;
  subMenu?: ReactNode;
  title?: boolean;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  (
    {
      active,
      children,
      className,
      disabled,
      focus,
      selected,
      subMenu,
      title,
      ...props
    },
    ref,
  ) => (
    <li
      className={classNames(
        disabled && 'menu-disabled',
        title && 'menu-title',
        className,
      )}
    >
      <a
        className={classNames(
          active && 'menu-active',
          focus && 'menu-focus',
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
