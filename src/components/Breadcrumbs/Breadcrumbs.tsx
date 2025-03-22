import classNames from 'classnames';
import { ComponentProps, FC, HTMLProps, ReactNode } from 'react';

export interface BreadcrumbsItem {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  id: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends HTMLProps<HTMLDivElement> {
  items: BreadcrumbsItem[];
}

export const Breadcrumbs = ({
  className,
  items,
  ...props
}: BreadcrumbsProps): JSX.Element => (
  <div className={classNames('breadcrumbs', className)} {...props}>
    <ul>
      {items.map(
        ({
          children,
          className: itemClassName,
          href,
          icon: Icon,
          id,
          onClick,
        }) => {
          const childElements = (
            <>
              {Icon !== undefined ? <Icon className="h-4 w-4" /> : null}
              {children}
            </>
          );
          return (
            <li className={itemClassName} key={id}>
              {href !== undefined || onClick !== undefined ? (
                <a
                  className="inline-flex items-center gap-2"
                  href={href}
                  onClick={onClick}
                >
                  {childElements}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2">
                  {childElements}
                </span>
              )}
            </li>
          );
        },
      )}
    </ul>
  </div>
);
