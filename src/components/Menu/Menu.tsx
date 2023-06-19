import classNames from 'classnames';
import { HTMLProps, forwardRef } from 'react';

export const MENU_SIZES = ['xs', 'sm', 'md', 'lg'] as const;

export const MENU_LAYOUTS = ['horizontal', 'vertical'] as const;

export type MenuSize = (typeof MENU_SIZES)[number];

export type MenuLayout = (typeof MENU_LAYOUTS)[number];

export interface MenuProps extends Omit<HTMLProps<HTMLUListElement>, 'size'> {
  layout?: MenuLayout;
  size?: MenuSize;
}

export const Menu = forwardRef<HTMLUListElement, MenuProps>(
  ({ className, layout, size, ...props }, ref) => (
    <ul
      className={classNames(
        'menu',
        layout && `menu-${layout}`,
        size && `menu-${size}`,
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Menu.displayName = 'Menu';
