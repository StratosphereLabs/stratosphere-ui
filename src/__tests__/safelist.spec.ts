import tailwindcss from '@tailwindcss/postcss';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import postcss from 'postcss';

import {
  ALERT_COLORS,
  BADGE_COLORS,
  BADGE_SIZES,
  BUTTON_COLORS,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  CARD_SIZES,
  CHECKBOX_COLORS,
  CHECKBOX_SIZES,
  FILE_INPUT_COLORS,
  FILE_INPUT_SIZES,
  INPUT_COLORS,
  INPUT_SIZES,
  LINK_COLORS,
  LOADING_SHAPES,
  LOADING_SIZES,
  MENU_LAYOUTS,
  MENU_SIZES,
  MODAL_POSITIONS,
  PROGRESS_COLORS,
  RADIO_COLORS,
  RADIO_SIZES,
  STATS_LAYOUTS,
  STEPS_DIRECTIONS,
  STEP_COLORS,
  TABLE_SIZES,
  TAB_SIZES,
  TEXTAREA_COLORS,
  TEXTAREA_SIZES,
  TOGGLE_COLORS,
  TOGGLE_SIZES,
  TOOLTIP_COLORS,
  TOOLTIP_POSITIONS,
} from '..';
// `COLORS` is not re-exported from the package entry, unlike the `Color` type.
import { COLORS } from '../common/constants';

/**
 * Variant class names that components build from template literals, and which
 * therefore have to be listed in `@source inline(...)` for the Storybook build.
 * Keyed by the class prefix each set of values is appended to.
 */
const VARIANT_CLASS_VALUES: Array<[string, readonly string[]]> = [
  ['alert', ALERT_COLORS],
  ['badge', BADGE_COLORS],
  ['badge', BADGE_SIZES],
  ['btn', BUTTON_COLORS],
  ['btn', BUTTON_SHAPES],
  ['btn', BUTTON_SIZES],
  ['card', CARD_SIZES],
  ['checkbox', CHECKBOX_COLORS],
  ['checkbox', CHECKBOX_SIZES],
  ['file-input', FILE_INPUT_COLORS],
  ['file-input', FILE_INPUT_SIZES],
  ['input', INPUT_COLORS],
  ['input', INPUT_SIZES],
  ['link', LINK_COLORS],
  ['loading', LOADING_SHAPES],
  ['loading', LOADING_SIZES],
  // `Button` renders its own spinner sized from the button size.
  ['loading', BUTTON_SIZES],
  ['menu', MENU_LAYOUTS],
  ['menu', MENU_SIZES],
  ['modal', MODAL_POSITIONS],
  ['progress', PROGRESS_COLORS],
  ['radio', RADIO_COLORS],
  ['radio', RADIO_SIZES],
  // `Avatar` builds its ring color from the shared color list.
  ['ring', COLORS],
  ['stats', STATS_LAYOUTS],
  ['step', STEP_COLORS],
  ['steps', STEPS_DIRECTIONS],
  ['table', TABLE_SIZES],
  ['tabs', TAB_SIZES],
  ['textarea', TEXTAREA_COLORS],
  ['textarea', TEXTAREA_SIZES],
  ['toggle', TOGGLE_COLORS],
  ['toggle', TOGGLE_SIZES],
  ['tooltip', TOOLTIP_COLORS],
  ['tooltip', TOOLTIP_POSITIONS],
];

/**
 * Safelisted classes that no exported constant describes. `AvatarGroup` accepts
 * an arbitrary `space` number, so the stylesheet covers a fixed range instead.
 */
const UNCONSTRAINED_CLASS_PREFIXES = ['-space-x-'];

/**
 * Safelisted classes that daisyUI does not actually define, so no rule is
 * emitted for them. `TOOLTIP_COLORS` includes `neutral`, but daisyUI only ships
 * `tooltip-{primary,secondary,accent,info,success,warning,error}`.
 */
const KNOWN_UNSTYLED_CLASSES = ['tooltip-neutral'];

const CSS_PATH = resolve(process.cwd(), 'src/index.css');

const css = readFileSync(CSS_PATH, 'utf8');

/** Expands `{a,b}` alternatives and `{0..3}` ranges the way Tailwind does. */
export const expandPattern = (pattern: string): string[] => {
  const start = pattern.indexOf('{');
  if (start === -1) return [pattern];
  const end = pattern.indexOf('}', start);
  if (end === -1) return [pattern];
  const prefix = pattern.slice(0, start);
  const suffix = pattern.slice(end + 1);
  const values = pattern
    .slice(start + 1, end)
    .split(',')
    .flatMap(value => {
      const range = /^(\d+)\.\.(\d+)$/.exec(value);
      if (range === null) return [value];
      const from = Number(range[1]);
      const to = Number(range[2]);
      return [...Array(to - from + 1).keys()].map(index =>
        (from + index).toString(),
      );
    });
  return values.flatMap(value => expandPattern(`${prefix}${value}${suffix}`));
};

const getSafelistedClasses = (): string[] =>
  [...css.matchAll(/@source inline\(\s*'([^']+)'\s*\)/g)].flatMap(
    ([, pattern]) => expandPattern(pattern),
  );

describe('Storybook safelist', () => {
  const safelisted = getSafelistedClasses();

  it('parses the inline patterns in src/index.css', () => {
    expect(safelisted.length).toBeGreaterThan(100);
    expect(new Set(safelisted).size).toBe(safelisted.length);
  });

  it('covers every variant class the components can build', () => {
    const missing = VARIANT_CLASS_VALUES.flatMap(([prefix, values]) =>
      values
        .map(value => `${prefix}-${value}`)
        .filter(className => !safelisted.includes(className)),
    );
    expect(missing).toEqual([]);
  });

  it('does not safelist classes no component can build', () => {
    const expected = new Set(
      VARIANT_CLASS_VALUES.flatMap(([prefix, values]) =>
        values.map(value => `${prefix}-${value}`),
      ),
    );
    const unexpected = safelisted.filter(
      className =>
        !expected.has(className) &&
        !UNCONSTRAINED_CLASS_PREFIXES.some(prefix =>
          className.startsWith(prefix),
        ),
    );
    expect(unexpected).toEqual([]);
  });

  it('covers the default AvatarGroup spacing', () => {
    expect(safelisted).toContain('-space-x-8');
  });

  // Compiles the stylesheet so that an unsupported `@source inline(...)`
  // pattern, or a daisyUI class that no longer exists, cannot fail silently.
  it('emits a rule for every safelisted class', async () => {
    const { css: compiled } = await postcss([tailwindcss()]).process(css, {
      from: CSS_PATH,
    });
    const missing = safelisted.filter(className => {
      const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return !new RegExp(`\\.${escaped}(?![\\w-])`).test(compiled);
    });
    expect(missing).toEqual(KNOWN_UNSTYLED_CLASSES);
  }, 60000);
});
