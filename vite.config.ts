import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    eslint(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StratosphereUI',
      formats: ['es'],
      fileName: 'stratosphere-ui',
    },
    rollupOptions: {
      external: ['react', 'react-hook-form'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest/setup.ts',
    coverage: {
      provider: 'c8',
    },
  },
});
