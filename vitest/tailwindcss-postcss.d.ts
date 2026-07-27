/**
 * `@tailwindcss/postcss` only exposes its types through an `exports` map, which
 * this project's `moduleResolution: 'Node'` setting cannot read.
 */
declare module '@tailwindcss/postcss' {
  import { AcceptedPlugin } from 'postcss';

  const tailwindcss: () => AcceptedPlugin;

  export default tailwindcss;
}
