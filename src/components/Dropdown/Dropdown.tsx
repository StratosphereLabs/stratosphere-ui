import classNames from 'classnames';
import { forwardRef, HTMLProps } from 'react';

export type DropdownProps = HTMLProps<HTMLDivElement>;

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className, ...props }: DropdownProps, ref): JSX.Element => (
    <div
      className={classNames('relative', 'z-10', className)}
      ref={ref}
      {...props}
    >
      <div className="absolute min-w-[200px] mt-[1px] w-full">{children}</div>
    </div>
  ),
);

Dropdown.displayName = 'Dropdown';
