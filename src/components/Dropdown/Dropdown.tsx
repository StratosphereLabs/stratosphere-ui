import classNames from 'classnames';
import { forwardRef, HTMLProps } from 'react';

export type DropdownProps = HTMLProps<HTMLDivElement>;

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className, ...props }: DropdownProps, ref): JSX.Element => (
    <div
      className={classNames('relative z-10', className)}
      ref={ref}
      {...props}
    >
      <div className="absolute mt-[1px] w-full min-w-[200px]">{children}</div>
    </div>
  ),
);

Dropdown.displayName = 'Dropdown';
