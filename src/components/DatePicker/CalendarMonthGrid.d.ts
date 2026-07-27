import { KeyboardEventHandler } from '../../../node_modules/react';
import { CalendarCell } from './types';
export interface CalendarMonthGridProps {
    captionId: string;
    focusedKey: string;
    onKeyDown: KeyboardEventHandler<HTMLTableElement>;
    onSelect: (date: Date) => void;
    months: CalendarCell[];
}
/**
 * Renders the twelve months of the displayed year. daisyUI only styles day
 * cells, which are too narrow for month names, so the cells are styled with
 * the same theme tokens the day cells use (`base-content` for the selection,
 * `primary` for the current month and `base-200` on hover).
 */
export declare const CalendarMonthGrid: ({ captionId, focusedKey, months, onKeyDown, onSelect, }: CalendarMonthGridProps) => import("react/jsx-runtime").JSX.Element;
