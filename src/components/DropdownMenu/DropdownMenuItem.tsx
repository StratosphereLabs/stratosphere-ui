import classNames from 'classnames';
import { HTMLProps, ReactNode, forwardRef } from 'react';
import { CheckIcon } from '../Icons';

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
  ): JSX.Element => (
    <li
      className={classNames(
        bordered && 'bordered',
        borderOnHover && 'hover-bordered',
        disabled && 'disabled',
        className,
      )}
    >
      <a className={classNames(active && 'active')} ref={ref} {...props}>
        {selected !== undefined ? (
          <div className="flex w-6 justify-center">
            {selected ? <CheckIcon className="h-5 w-5" /> : null}
          </div>
        ) : null}
        {children}
      </a>
      {subMenu}
    </li>
  ),
);

DropdownMenuItem.displayName = 'DropdownMenuItem';
