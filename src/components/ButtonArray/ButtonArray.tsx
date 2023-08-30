import classNames from 'classnames';
import {
  type Key,
  type ComponentProps,
  type FC,
  Fragment,
  HTMLProps,
  ReactNode,
} from 'react';
import { Breakpoint } from '../../common';
import { Button, ButtonProps } from '../Button';
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu';
import { EllipsisVerticalIcon } from '../Icons';
import { FLEX_BREAKPOINTS_MAP, HIDDEN_BREAKPOINTS_MAP } from './constants';

export type ButtonOptions = Omit<ButtonProps, 'onClick'> & {
  icon: FC<ComponentProps<'svg'>>;
  key: Key;
  menuText?: string;
  onClick: () => void;
  tooltipText?: string;
};

export interface ButtonArrayProps
  extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  buttonOptions: ButtonOptions[];
  collapseAt?: Breakpoint;
  dropdownMenuProps?: Omit<DropdownMenuProps, 'items'>;
  withTooltips?: boolean;
}

export interface ButtonWrapperProps {
  children: ReactNode;
  tooltipText?: string;
}

export const ButtonArray = ({
  buttonOptions,
  collapseAt,
  dropdownMenuProps: {
    buttonProps: dropdownButtonProps,
    ...dropdownMenuProps
  } = {},
  withTooltips,
  ...props
}: ButtonArrayProps): JSX.Element => {
  const ButtonWrapper = withTooltips
    ? ({ children, tooltipText }: ButtonWrapperProps) => (
        <div className="tooltip" data-tip={tooltipText}>
          {children}
        </div>
      )
    : Fragment;
  return (
    <div {...props}>
      <div
        className={classNames(
          'gap-1',
          collapseAt === undefined && 'flex',
          collapseAt !== undefined &&
            `hidden ${FLEX_BREAKPOINTS_MAP[collapseAt]}`,
        )}
      >
        {buttonOptions.map(
          ({
            children,
            className: buttonClassName,
            icon: Icon,
            key,
            menuText,
            onClick,
            tooltipText,
            ...buttonProps
          }) => (
            <ButtonWrapper tooltipText={tooltipText ?? menuText} key={key}>
              <Button
                className={classNames('px-1', buttonClassName)}
                onClick={onClick}
                {...buttonProps}
              >
                <Icon className="h-4 w-4" />
                {children ?? <span className="sr-only">{menuText}</span>}
              </Button>
            </ButtonWrapper>
          ),
        )}
      </div>
      <div
        className={classNames(
          collapseAt === undefined && 'hidden',
          collapseAt !== undefined &&
            `flex ${HIDDEN_BREAKPOINTS_MAP[collapseAt]}`,
        )}
      >
        <DropdownMenu
          buttonProps={{
            color: 'ghost',
            shape: 'circle',
            size: 'sm',
            children: (
              <>
                <EllipsisVerticalIcon className="h-5 w-5" />
                <span className="sr-only">Actions Menu</span>
              </>
            ),
            ...dropdownButtonProps,
          }}
          items={buttonOptions.map(
            ({ icon: Icon, key, menuText, onClick }) => ({
              id: typeof key === 'number' ? key.toString() : key,
              onClick,
              children: (
                <>
                  <Icon className="h-4 w-4" />
                  {menuText}
                </>
              ),
            }),
          )}
          {...dropdownMenuProps}
        />
      </div>
    </div>
  );
};
