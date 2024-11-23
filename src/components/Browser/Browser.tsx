import classNames from 'classnames';
import { HTMLProps } from 'react';

export interface BrowserProps extends HTMLProps<HTMLDivElement> {
  browserUrl?: string;
  contentClassName?: string;
  searchInputClassName?: string;
}

export const Browser = ({
  browserUrl,
  children,
  className,
  contentClassName,
  searchInputClassName,
  ...props
}: BrowserProps): JSX.Element => (
  <div className={classNames('mockup-browser', className)} {...props}>
    <div className="mockup-browser-toolbar">
      <div className={classNames('input', searchInputClassName)}>
        {browserUrl ?? 'https://ui.stratospherelabs.io'}
      </div>
    </div>
    <div
      className={classNames('flex justify-center px-4 py-16', contentClassName)}
    >
      {children}
    </div>
  </div>
);
