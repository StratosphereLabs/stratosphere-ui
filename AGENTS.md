Dev environment

- Use `npm start` to run the storybook dev server.

Codebase rules

- All new icons should go in the Icons.tsx file and should be exported SVG components. Do not install any icon libraries. Use an existing icon wherever possible.
- All typeahead search queries should be debounced by 400ms.
- Before committing, run `npm run format`, `npx tsc`, and `npx eslint .` to run all code checks.

Styling

- All layouts and styling should be mobile-first but fully responsive and compatible with screen widths of 400px or greater.
- Avoid hiding features in mobile to save space.

Testing

- Write unit tests for all new code using vitest and use React Testing Library.
- Follow the correct priority for querying elements on the page - https://testing-library.com/docs/queries/about#priority
- If a React component interacts with other frontend components, also include integration tests. For these, do not mock anything unless necessary.
- Ensure there are no TypeScript or ESLint errors in any test files.
