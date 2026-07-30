# stratosphere-ui

React component library for all Stratosphere Labs user interfaces.

Components are styled entirely by [daisyUI](https://daisyui.com) — every color, radius and size comes from the active daisyUI theme, so the library inherits whatever theme the consuming app has enabled and ships almost no CSS of its own. Form fields are built on [react-hook-form](https://react-hook-form.com) and validate with [zod](https://zod.dev).

**Documentation and live examples: [ui.stratospherelabs.io](https://ui.stratospherelabs.io)** (Storybook, deployed from `master`).

## Installation

```sh
npm install stratosphere-ui
```

The library declares peer dependencies, so make sure the host app has them:

```sh
npm install daisyui@^5 react@^18 react-hook-form@^7 zod@^3
```

Everything else the components use (Headless UI, TanStack Table, React DayPicker, `classnames`, the range slider) is bundled into `dist`, so it does not need to be installed.

## Styling setup

The package ships JavaScript, not a compiled stylesheet — the consuming app compiles the class names with Tailwind CSS 4 and daisyUI. Two things are required in the app's entry stylesheet:

```css
@import 'tailwindcss';

/* Tailwind skips node_modules during automatic source detection, so the utility
   classes stratosphere-ui uses internally are only emitted when its bundle is
   scanned explicitly. */
@source '../node_modules/stratosphere-ui/dist/stratosphere-ui.js';

@plugin 'daisyui' {
  themes:
    light --default,
    dark --prefersdark;
}
```

Variant class names inside the bundle are built from template literals (e.g. `` `btn-${color}` ``), which the Tailwind source scanner cannot see. If the app passes `color`, `size` or `shape` props and those variants are not written literally anywhere in its own source, safelist them with `@source inline(...)`. [src/index.css](src/index.css) holds the full list the Storybook preview uses and is a good starting point to copy from.

daisyUI 5.3 and newer emit nested cascade layers that require Tailwind CSS 4, so apps still on Tailwind CSS 3 should stay on `daisyui` 5.2.

## Usage

```tsx
import { useForm } from 'react-hook-form';
import { Button, DatePicker, Form, FormControl } from 'stratosphere-ui';

interface FormValues {
  email: string;
  departureDate: string;
}

export const SearchForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: { email: '', departureDate: '' },
  });
  return (
    <Form
      methods={methods}
      onFormSubmit={values => {
        console.log(values);
      }}
    >
      <FormControl
        name="email"
        labelText="Email Address"
        type="email"
        isRequired
      />
      <DatePicker name="departureDate" labelText="Departure Date" />
      <Button type="submit" color="primary">
        Search
      </Button>
    </Form>
  );
};
```

`Form` wraps `react-hook-form`'s `FormProvider`, and every `Form*` field reads the form from context by `name` — no manual `register` or `Controller` wiring. Fields store native input-shaped values by default (`DatePicker` stores `'2013-08-12'`, `'2013-08-12T14:30'` or `'2013-08'`), so they drop into existing zod schemas.

## What's included

**Form fields** — `FormControl`, `FormCheckbox`, `FormFileInput`, `FormRadio`, `FormRadioGroup`, `FormRangeSlider`, `FormTextarea`, `FormToggleSwitch`, `Select`, `TypeaheadSelect`, `PasswordInput`, `SecurityCodeInput`, `DatePicker`, plus `Form`, `FormError` and `FormLabelText`.

**Layout and display** — `Alert`, `AlertMessages` (with `AlertMessagesProvider` / `useAlertMessages`), `Avatar`, `AvatarGroup`, `Badge`, `Breadcrumbs`, `Browser`, `Button`, `ButtonArray`, `Card`, `Calendar`, `Disclosure`, `DropdownMenu`, `FullScreenLoader`, `Link`, `Loading`, `LoadingCard`, `Menu`, `Modal`, `Pagination`, `Popover`, `Progress`, `Stat`, `Steps`, `Table` (TanStack Table), `Tabs`, `Tooltip`.

**Icons** — SVG components exported from [src/components/Icons.tsx](src/components/Icons.tsx). The library intentionally has no icon dependency; new icons are added to that file.

**Hooks** — `useDebouncedValue`, `useFieldColor`, `useFormValues`, `useMediaQuery`, `useOutsideClick`, `useTypeaheadQuery`, `useValueChangeEffect`.

**Utilities** — the `digitInputTransformer`, `integerInputTransformer` and `nullEmptyStringTransformer` input transformers, `dataItemComparator`, `getGroupedDataItems`, the `COLORS` and variant constants, and shared types such as `GenericDataType`.

Most components have a `.md` reference next to their source (for example [src/components/DatePicker/DatePicker.md](src/components/DatePicker/DatePicker.md)) that documents every prop; Storybook renders those alongside the stories.

## Development

CI builds on Node.js 20.

```sh
npm install
npm start          # Storybook dev server on http://localhost:6006
```

| Script                    | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| `npm start`               | Storybook dev server (alias of `npm run storybook`) |
| `npm test`                | Vitest run with V8 coverage                         |
| `npm run build`           | Type check and build the package into `dist`        |
| `npm run build-storybook` | Static Storybook build into `storybook-static`      |
| `npm run format`          | Prettier over `src` and `vite.config.ts`            |

Before committing, run the full check set:

```sh
npm run format && npx tsc && npx eslint .
```

### Conventions

- **Mobile first.** Layouts must stay usable and fully responsive down to 400px wide, without hiding features to save space.
- **Icons** go in `Icons.tsx` as exported SVG components. Reuse an existing icon where possible and do not add icon libraries.
- **Typeahead** search queries are debounced by 400ms (the default in `useTypeaheadQuery`).
- **Tests** are required for new code — Vitest with React Testing Library, following the [query priority](https://testing-library.com/docs/queries/about#priority). Components that interact with other components also get integration tests that mock nothing unless necessary. Specs live in `__tests__` next to the component and must be free of TypeScript and ESLint errors.
- **Variant safelists** in `src/index.css` must match the variant constants exported from `src`; [src/\_\_tests\_\_/safelist.spec.ts](src/__tests__/safelist.spec.ts) fails if the two drift apart.

### Structure

```
src/
  common/       shared constants, types and helpers
  components/   one directory per component: source, stories, .md docs, __tests__
  hooks/        reusable hooks
  utils/        input transformers
  index.css     Tailwind + daisyUI config for the Storybook preview only
.storybook/     Storybook config, theme and the daisyUI theme switcher
```

## Releasing

`npm run build` runs on `prepack`, so `npm publish` always ships a fresh `dist`. Bump the version in `package.json` and add the release notes to [CHANGELOG.md](CHANGELOG.md) in the same commit.

Pushing to `master` runs the tests, builds the package and publishes the Storybook to the `gh-pages` branch — see [.github/workflows/storybook.yml](.github/workflows/storybook.yml).

## Links

- Storybook — [ui.stratospherelabs.io](https://ui.stratospherelabs.io)
- Issues — [github.com/StratosphereLabs/stratosphere-ui/issues](https://github.com/StratosphereLabs/stratosphere-ui/issues)
- Changelog — [CHANGELOG.md](CHANGELOG.md)

## License

ISC © Ethan Shields
