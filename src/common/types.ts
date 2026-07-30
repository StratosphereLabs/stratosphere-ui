import { COLORS } from './constants';

export type GenericDataType = { id: string | number } & Record<string, unknown>;

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export type Color = (typeof COLORS)[number];

type AnchorPlacement = 'top' | 'right' | 'bottom' | 'left';

type AnchorAlign = 'start' | 'end';

/** The side of a trigger a panel opens on, with the edge it lines up with. */
export type PanelAnchorTo =
  | AnchorPlacement
  | `${AnchorPlacement} ${AnchorAlign}`;

/**
 * Where a floating panel opens against the control that owns it, which is
 * passed through to the Headless UI component underneath.
 *
 * This mirrors Headless UI's own `AnchorProps` rather than importing it, since
 * that type is only reachable through a deep path into its `dist` that its
 * package exports do not expose. Importing it writes that path into this
 * package's own declarations, where it fails to resolve for anyone whose module
 * resolution honors package exports, which is every modern setting.
 */
export type PanelAnchor =
  | false
  | PanelAnchorTo
  | Partial<{
      /** The space between the control and the panel. */
      gap: number | string;
      /** How far the panel is nudged off its placement. */
      offset: number | string;
      /** The smallest space left between the panel and the viewport. */
      padding: number | string;
      to: PanelAnchorTo;
    }>;

export interface Transform<TOutput> {
  output: (val: string) => TOutput | undefined;
  input: (val: TOutput) => string;
}
