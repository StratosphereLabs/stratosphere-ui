import { KeyboardEventHandler } from '../../../node_modules/react';
import { CalendarCell } from './types';
export interface CalendarDayGridProps {
    captionId: string;
    focusedKey: string;
    onKeyDown: KeyboardEventHandler<HTMLTableElement>;
    onSelect: (date: Date) => void;
    weekdays: Array<{
        long: string;
        short: string;
    }>;
    weeks: CalendarCell[][];
}
/**
 * Renders the day grid using the markup daisyUI's `react-day-picker` calendar
 * styles expect, so that every color, radius and size comes from the theme.
 */
export declare const CalendarDayGrid: ({ captionId, focusedKey, onKeyDown, onSelect, weekdays, weeks, }: CalendarDayGridProps) => import("react/jsx-runtime").JSX.Element;
