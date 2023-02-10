import classNames from 'classnames';
import { forwardRef, HTMLProps, ReactNode } from 'react';
import { Menu } from 'react-daisyui';
import { CheckIcon } from '../Icons';

export interface DropdownOptionProps extends HTMLProps<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  selected?: boolean;
  subMenu?: ReactNode;
}

export const DropdownOption = forwardRef<HTMLLIElement, DropdownOptionProps>(
  (
    { active, children, className, disabled, selected, subMenu, ...props },
    ref,
  ): JSX.Element => (
    <Menu.Item className={className} disabled={disabled} ref={ref}>
      <a className={classNames(active === true && 'active')} {...props}>
        {selected !== undefined ? (
          <div className="flex w-6 justify-center">
            {selected ? <CheckIcon className="h-5 w-5" /> : null}
          </div>
        ) : null}
        {children}
      </a>
      {subMenu}
    </Menu.Item>
  ),
);

DropdownOption.displayName = 'DropdownOption';
